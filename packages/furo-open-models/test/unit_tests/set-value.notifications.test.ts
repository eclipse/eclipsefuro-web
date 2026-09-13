import { expect } from "vitest";

import { BOOLEAN, BYTES, DOUBLE, FLOAT, type FieldNode, INT64, STRING, StringValue, ValueState, type ValueStateSummary } from "@furo/open-models";
import { OPEN_MODELS_OPTIONS } from "@furo/open-models/dist/OPEN_MODELS_OPTIONS";

import { Identifier } from "../protoc-gen-open-models/furo/type/Identifier";
import { Defaults } from "../protoc-gen-open-models/furo/type/Defaults";
import { CubeDefinition } from "../protoc-gen-open-models/furo/cube/CubeDefinition";

OPEN_MODELS_OPTIONS.EmitUnpopulated = false;
OPEN_MODELS_OPTIONS.EmitDefaultValues = false;

// The `set value(...)` of a primitive is the path a UI binding uses (`fieldNode.value = input.value`),
// as opposed to the generated model property (`model.field = x`) which goes through __PrimitivesSetter.
// Only the latter used to de-duplicate, so a write-back of the value a node already holds emitted
// `field-value-changed` / `update` and dirtied the whole model. These tests pin the guard on both paths.

/**
 * Counts the three notifications a value write emits. `this-field-value-changed` is local to the node,
 * `field-value-changed` and `update` bubble, so they are counted on the root.
 */
function countNotifications(node: FieldNode) {
  const counts = { self: 0, bubbled: 0, update: 0 };
  node.__addEventListener("this-field-value-changed", () => {
    counts.self += 1;
  });
  node.__rootNode.__addEventListener("field-value-changed", () => {
    counts.bubbled += 1;
  });
  node.__rootNode.__addEventListener("update", () => {
    counts.update += 1;
  });
  return counts;
}

describe("set value notifications", () => {
  describe("notify only on a real change", () => {
    it("should not notify when a populated primitive is set to the value it already holds", () => {
      const id = new Identifier({ id: "init" });
      const counts = countNotifications(id.id);

      id.id.value = "init";

      expect(counts).to.eql({ self: 0, bubbled: 0, update: 0 });
    });

    it("should keep the model pristine when the value does not change", () => {
      const id = new Identifier({ id: "init" });
      expect(id.__isPristine).to.be.true;

      id.id.value = "init";

      // __isPristine is meaningful on the root node; __fromLiteral flags every populated child as
      // not pristine while constructing, so only the root says anything about user edits here
      expect(id.__isPristine).to.be.true;
    });

    it("should notify and dirty the model on a real change", () => {
      const id = new Identifier({ id: "init" });
      const counts = countNotifications(id.id);

      id.id.value = "changed";

      expect(counts).to.eql({ self: 1, bubbled: 1, update: 1 });
      expect(id.__isPristine).to.be.false;
    });

    it("should notify twice, not three times, on A -> B -> A", () => {
      const id = new Identifier({ id: "A" });
      const counts = countNotifications(id.id);

      id.id.value = "B";
      id.id.value = "A";
      id.id.value = "A";

      expect(counts).to.eql({ self: 2, bubbled: 2, update: 2 });
    });

    it("should not notify when a null is coerced to the value the node already holds", () => {
      const node = new STRING();
      const counts = countNotifications(node);

      // the guard sits after the coercion, so the null still lands as ""
      node.value = null as never;

      expect(node.value).to.equal("");
      expect(counts.self).to.equal(0);
    });
  });

  describe("empty state and serialization", () => {
    it("should not change the serialized output on a no-op write", () => {
      const id = new Identifier({ id: "init" });
      const before = id.__toLiteral();

      id.id.value = "init";

      expect(id.__toLiteral()).to.eql(before);
    });

    it("should keep an empty field out of the output when it is set to its empty value again", () => {
      const id = new Identifier();
      const counts = countNotifications(id.id);

      id.id.value = "";

      expect(id.id.__isEmpty).to.be.true;
      expect(id.__toLiteral()).to.not.have.property("id");
      expect(counts.self).to.equal(0);
    });

    it("should repair a stale empty flag and notify, because that changes the output", () => {
      // the primitive constructors set __isEmpty without looking at initData, so a node built with a
      // value is flagged empty until something writes to it. Writing the same value must repair it.
      const node = new STRING("works");
      expect(node.__isEmpty).to.be.true;

      const counts = countNotifications(node);
      node.value = "works";

      expect(node.__isEmpty).to.be.false;
      expect(counts.self).to.equal(1);

      // and now it is settled, so a second write is silent
      node.value = "works";
      expect(counts.self).to.equal(1);
    });
  });

  describe("numeric edge cases", () => {
    it("should de-duplicate NaN on a DOUBLE", () => {
      const node = new DOUBLE();
      const counts = countNotifications(node);

      node.value = NaN;
      expect(counts.self).to.equal(1);

      // `NaN !== NaN`, so a strict comparison would notify forever here
      node.value = NaN;
      expect(counts.self).to.equal(1);
    });

    it("should treat -0 and 0 as the same value on a FLOAT", () => {
      const node = new FLOAT();
      const counts = countNotifications(node);

      node.value = 0;
      node.value = -0;

      expect(counts.self).to.equal(0);
    });

    it("should de-duplicate bigint values on an INT64", () => {
      const node = new INT64();
      const counts = countNotifications(node);

      node.value = 0n;
      expect(counts.self).to.equal(0);

      node.value = 5n;
      node.value = 5n;
      expect(counts.self).to.equal(1);
    });

    it("should notify on every toggle of a BOOLEAN", () => {
      const node = new BOOLEAN();
      const counts = countNotifications(node);

      node.toggle();
      node.toggle();

      expect(counts.self).to.equal(2);
    });
  });

  describe("BYTES keeps mutable buffer semantics", () => {
    it("should not notify when an empty buffer replaces an empty buffer", () => {
      const node = new BYTES();
      const counts = countNotifications(node);

      node.value = new Uint8Array();

      expect(counts.self).to.equal(0);
    });

    it("should notify when the same reference is re-assigned after an in place mutation", () => {
      const node = new BYTES();
      const buffer = new Uint8Array([1, 2, 3]);
      node.value = buffer;

      const counts = countNotifications(node);
      buffer[0] = 9;
      node.value = buffer;

      expect(counts.self).to.equal(1);
    });
  });

  describe("well known wrappers", () => {
    it("should distinguish an absent wrapper from one holding an empty string", () => {
      const node = new StringValue();
      // the constructor leaves _value at null and flags the node empty
      expect(node.__isEmpty).to.be.true;

      const counts = countNotifications(node);

      node.value = "";
      expect(node.__isEmpty).to.be.false;
      expect(counts.self).to.equal(1);

      node.value = "";
      expect(counts.self).to.equal(1);

      node.value = null;
      expect(node.__isEmpty).to.be.true;
      expect(counts.self).to.equal(2);

      node.value = null;
      expect(counts.self).to.equal(2);
    });
  });

  describe("oneof", () => {
    it("should not notify when the active oneof member is set to its current value", () => {
      const cube = new CubeDefinition();
      cube.name = "hello";

      const counts = countNotifications(cube.name);
      cube.name.value = "hello";

      expect(counts.self).to.equal(0);
      expect(cube.name.value).to.equal("hello");
    });
  });

  describe("server value states", () => {
    it("should keep a backend error until the value really changes", () => {
      const defaults = new Defaults();
      expect(defaults.id.value).to.equal("default");

      const states: ValueStateSummary[] = [{ field: "id", state: ValueState.Negative, message: "server says no" }];
      defaults.__applyValueStates(...states);
      expect(defaults.id.__meta.valueState).to.equal("Negative");

      // the field still holds the value the backend rejected, so the error stays
      defaults.id.value = "default";
      expect(defaults.id.__meta.valueState).to.equal("Negative");
      expect(defaults.id.__meta.stateMessage).to.equal("server says no");

      // a real change revalidates against the field constraints (pattern ^-*$, min_length 3)
      defaults.id.value = "---";
      expect(defaults.id.__meta.valueState).to.equal("None");
      expect(defaults.id.__isValid).to.be.true;
    });
  });
});
