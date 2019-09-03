export class CheckMetaAndOverrides {


  static UpdateMetaAndConstraints(element) {
    // options are available for text inputs at the moment

    // check if metas ara available
    if (element.field._meta) {
      if (element.field._meta.readonly) {
        element._readonly = element.field._meta.readonly;
      }
      if (element.field._meta.label) {
        element._label = element.field._meta.label;
      }
      if (element.field._meta.hint) {
        element._hint = element.field._meta.hint;
      }
      if (element.field._meta.step) {
        element._step = element.field._meta.step;
      }

    }
    // check if constraints ara available
    if (element.field._constraints) {
      if (element.field._constraints.max) {
        element._max = element.field._constraints.max.value;
        element._maxErrorMessage = element.field._constraints.max.message;
      }
      if (element.field._constraints.min) {
        element._min = element.field._constraints.min.value;
        element._minErrorMessage = element.field._constraints.min.message;
      }

      if (element.field._constraints.pattern) {
        element._pattern = element.field._constraints.pattern.value;
        element._patternErrorMessage = element.field._constraints.pattern.message;
      }
    }

    this.CheckAttributeOverrides(element);
  }

  static CheckAttributeOverrides(element) {
    /**
     * Attribute overrides
     * hint, min, max, readonly or disabled on the element are higher ranked then field metas from spec or server
     */

    if (element.min) {

      element._min = element.min;
    }

    if (element.max) {
      element._max = element.max;
    }

    if (element.readonly) {
      element._readonly = element.readonly;
    }

    if (element.label) {
      element._label = element.label;
    }
    if (element.hint) {
      element._hint = element.hint;
    }

    if (element.step) {
      element._step = element.step;
    }
  }
}
