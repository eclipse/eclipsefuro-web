export class CheckMetaAndOverrides {


  static UpdateMetaAndConstraints(element) {
    if (element.field) {
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
        if (element.field._meta.cols) {
          element._cols = element.field._meta.cols;
        }
        if (element.field._meta.rows) {
          element._rows = element.field._meta.rows;
        }
        if (element.field._meta.min_term_length) {
          element._minTermLength = element.field._meta.min_term_length;
        }
        if (element.field._meta.label_amount) {
          element._labelAmount = element.field._meta.label_amount;
        }
        if (element.field._meta.label_currency) {
          element._labelCurrency = element.field._meta.label_currency;
        }
        if (element.field._meta.options) {
          element._options = element.field._meta.options;
        }
      }
      // check if constraints ara available
      if (element.field._constraints) {
        if (element.field._constraints.max) {
          element._max = (element.field._constraints.max.is);
          element._maxErrorMessage = element.field._constraints.max.message;
        }
        if (element.field._constraints.min) {
          element._min = (element.field._constraints.min.is);
          element._minErrorMessage = element.field._constraints.min.message;
        }
        if (element.field._constraints.step) {
          element._step = (element.field._constraints.step.is);
          element._stepErrorMessage = element.field._constraints.step.message;
        }
        if (element.field._constraints.pattern) {
          element._pattern = element.field._constraints.pattern.is;
          element._patternErrorMessage = element.field._constraints.pattern.message;
        }
        if (element.field._constraints.required) {
          element._required = element.field._constraints.required.is == "true" || element.field._constraints.required.is === true;
        }
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

    if (element.pattern) {
      element._pattern = element.pattern;
    }

    if (element.required) {
      element._required = element.required;
    }

    if (element.cols) {
      element._cols = element.cols;
    }

    if (element.rows) {
      element._rows = element.rows;
    }

    if (element.minTermLength) {
      element._minTermLength = element.minTermLength;
    }

    if (element.labelAmount) {
      element._labelAmount = element.labelAmount;
    }

    if (element.labelCurrency) {
      element._labelCurrency = element.labelCurrency;
    }

    if (element.options) {
      element._options = element.options;
    }
  }
}



