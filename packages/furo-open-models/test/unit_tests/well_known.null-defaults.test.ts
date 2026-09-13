import { expect } from "vitest";

import { BoolValue, BytesValue, Duration, FieldMask, Int32Value, Int64Value, StringValue, Timestamp } from "@furo/open-models";
import { OPEN_MODELS_OPTIONS } from "@furo/open-models/dist/OPEN_MODELS_OPTIONS";

import { Wrappers } from "../protoc-gen-open-models/furo/type/Wrappers";
import { ConstraintWrappers } from "../protoc-gen-open-models/furo/type/ConstraintWrappers";

OPEN_MODELS_OPTIONS.EmitUnpopulated = false;
OPEN_MODELS_OPTIONS.EmitDefaultValues = false;

// The well known wrappers exist to tell a missing value from an intentional zero, so `null` is their
// unset value. `__clear()` is what `__updateWithLiteral()`, `__reset()` and `__TypeSetter(null)` run,
// so it has to restore exactly that null and not the scalar zero of the wrapped type.
describe("well known wrappers default to null", () => {
  describe("construction", () => {
    it("should leave every scalar wrapper unset", () => {
      expect(new StringValue().value).to.equal(null);
      expect(new BoolValue().value).to.equal(null);
      expect(new BytesValue().value).to.equal(null);
      expect(new Int32Value().value).to.equal(null);
      expect(new Int64Value().value).to.equal(null);
      expect(new Timestamp().value).to.equal(null);
      expect(new Duration().value).to.equal(null);
      expect(new FieldMask().value).to.equal(null);
    });

    it("should leave the fields of a model unset", () => {
      const wr = new Wrappers({});
      expect(wr.int32Value.value).to.equal(null);
      expect(wr.stringValue.value).to.equal(null);
      expect(wr.boolValue.value).to.equal(null);
      expect(wr.__toJson()).to.eql({});
    });
  });

  describe("setting a field to null", () => {
    it("should keep the null instead of falling back to the zero value", () => {
      const wr = new Wrappers({ int32Value: 5, stringValue: "five", boolValue: true });
      expect(wr.int32Value.value).to.equal(5);

      wr.int32Value = null;
      wr.stringValue = null;
      wr.boolValue = null;

      expect(wr.int32Value.value).to.equal(null);
      expect(wr.stringValue.value).to.equal(null);
      expect(wr.boolValue.value).to.equal(null);
      expect(wr.__toJson()).to.eql({});
    });

    it("should emit null for an unset wrapper when EmitUnpopulated is on", () => {
      const wr = new Wrappers({ int32Value: 5 });
      wr.int32Value = null;

      OPEN_MODELS_OPTIONS.EmitUnpopulated = true;
      expect(wr.__toJson().int32_value).to.equal(null);
      OPEN_MODELS_OPTIONS.EmitUnpopulated = false;
    });
  });

  describe("__clear", () => {
    it("should restore null and notify once", () => {
      const wr = new Wrappers({ int32Value: 5 });

      let notified = 0;
      wr.int32Value.__addEventListener("this-field-value-changed", () => {
        notified += 1;
      });

      wr.int32Value.__clear();
      expect(wr.int32Value.value).to.equal(null);
      expect(wr.int32Value.__isEmpty).to.be.true;
      expect(notified).to.equal(1);

      wr.int32Value.__clear();
      expect(notified).to.equal(1);
    });

    it("should not notify when an untouched wrapper is cleared", () => {
      const wr = new Wrappers({});

      let notified = 0;
      wr.int32Value.__addEventListener("this-field-value-changed", () => {
        notified += 1;
      });

      wr.int32Value.__clear();
      expect(notified).to.equal(0);
    });

    it("should serialize an int64 wrapper that holds null", () => {
      const wr = new Wrappers({ int64Value: "42" });
      wr.int64Value.__clear();

      expect(wr.int64Value.__toLiteral()).to.equal(null);
      expect(wr.int64Value.toString()).to.equal("");
    });
  });

  describe("__reset", () => {
    it("should restore the generated defaults, not null", () => {
      const wr = new ConstraintWrappers();
      expect(wr.int32Value.value).to.equal(3);

      wr.__clear();
      expect(wr.int32Value.value).to.equal(null);

      wr.__reset();
      expect(wr.int32Value.value).to.equal(3);
      expect(wr.stringValue.value).to.equal("default");
    });
  });

  describe("validation of an unset wrapper", () => {
    it("should report required and not a range violation", () => {
      const wr = new ConstraintWrappers();
      wr.__clear();
      wr.__validate();

      expect(wr.int32Value.__isValid).to.be.false;
      expect(wr.int32Value.__meta.stateMessage).to.equal("constraint.violation.required");
      expect(wr.stringValue.__meta.stateMessage).to.equal("constraint.violation.required");
    });

    it("should keep an unset wrapper without a required constraint valid", () => {
      const wr = new ConstraintWrappers();
      wr.__clear();
      wr.__validate();

      // exclInt32Value carries minimum/maximum/multiple_of, but no required
      expect(wr.exclInt32Value.value).to.equal(null);
      expect(wr.exclInt32Value.__isValid).to.be.true;
    });
  });
});
