export class CheckMetaAndOverrides {
  static UpdateMetaAndConstraints(element) {
    if (element.field) {
      // options are available for text inputs at the moment
      // check if metas ara available
      if (element.field._meta) {
        if (element.field._meta.readonly) {
          // eslint-disable-next-line no-param-reassign
          // eslint-disable-next-line no-param-reassign
          element._readonly = element.field._meta.readonly;
        }
        if (element.field._meta.label) {
          // eslint-disable-next-line no-param-reassign
          element._label = element.field._meta.label;
        }
        if (element.field._meta.hint) {
          // eslint-disable-next-line no-param-reassign
          element._hint = element.field._meta.hint;
        }
        if (element.field._meta.no_result_hint) {
          // eslint-disable-next-line no-param-reassign
          element._noResultHint = element.field._meta.no_result_hint;
        }
        if (element.field._meta.cols) {
          // eslint-disable-next-line no-param-reassign
          element._cols = element.field._meta.cols;
        }
        if (element.field._meta.rows) {
          // eslint-disable-next-line no-param-reassign
          element._rows = element.field._meta.rows;
        }
        if (element.field._meta.min_term_length) {
          // eslint-disable-next-line no-param-reassign
          element._minTermLength = element.field._meta.min_term_length;
        }
        if (element.field._meta.options) {
          // eslint-disable-next-line no-param-reassign
          element._options = element.field._meta.options;
        }
      }
      // check if constraints ara available
      if (element.field._constraints) {
        if (element.field._constraints.max) {
          // eslint-disable-next-line no-param-reassign
          element._max = element.field._constraints.max.is;
          // eslint-disable-next-line no-param-reassign
          element._maxErrorMessage = element.field._constraints.max.message;
        }
        if (element.field._constraints.min) {
          // eslint-disable-next-line no-param-reassign
          element._min = element.field._constraints.min.is;
          // eslint-disable-next-line no-param-reassign
          element._minErrorMessage = element.field._constraints.min.message;
        }
        if (element.field._constraints.step) {
          // eslint-disable-next-line no-param-reassign
          element._step = element.field._constraints.step.is;
          // eslint-disable-next-line no-param-reassign
          element._stepErrorMessage = element.field._constraints.step.message;
        }
        if (element.field._constraints.pattern) {
          // eslint-disable-next-line no-param-reassign
          element._pattern = element.field._constraints.pattern.is;
          // eslint-disable-next-line no-param-reassign
          element._patternErrorMessage = element.field._constraints.pattern.message;
        }
        if (element.field._constraints.required) {
          // eslint-disable-next-line no-param-reassign
          element._required =
            element.field._constraints.required.is === 'true' ||
            element.field._constraints.required.is === true;
          // eslint-disable-next-line no-param-reassign
          element._requiredErrorMessage = element.field._constraints.required.message;
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
      // eslint-disable-next-line no-param-reassign
      element._min = element.min;
    }

    if (element.max) {
      // eslint-disable-next-line no-param-reassign
      element._max = element.max;
    }

    if (element.readonly) {
      // eslint-disable-next-line no-param-reassign
      element._readonly = element.readonly;
    }

    if (element.label) {
      // eslint-disable-next-line no-param-reassign
      element._label = element.label;
    }
    if (element.hint) {
      // eslint-disable-next-line no-param-reassign
      element._hint = element.hint;
    }

    if (element.step) {
      // eslint-disable-next-line no-param-reassign
      element._step = element.step;
    }

    if (element.pattern) {
      // eslint-disable-next-line no-param-reassign
      element._pattern = element.pattern;
    }

    if (element.required) {
      // eslint-disable-next-line no-param-reassign
      element._required = element.required;
    }

    if (element.cols) {
      // eslint-disable-next-line no-param-reassign
      element._cols = element.cols;
    }

    if (element.rows) {
      // eslint-disable-next-line no-param-reassign
      element._rows = element.rows;
    }

    if (element.minTermLength) {
      // eslint-disable-next-line no-param-reassign
      element._minTermLength = element.minTermLength;
    }

    if (element.noResultHint) {
      // eslint-disable-next-line no-param-reassign
      element._noResultHint = element.noResultHint;
    }

    if (element.options) {
      // eslint-disable-next-line no-param-reassign
      element._options = element.options;
    }
  }
}
