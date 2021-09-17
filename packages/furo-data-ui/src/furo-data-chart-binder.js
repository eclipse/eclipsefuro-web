import { LitElement, css } from 'lit';

/**
 * `furo-data-chart-binder`
 *  Connects data objects (repeaterNodes) with the charting lib.
 *
 *  Use multiple binders if you need more then one series per chart.
 *
 *  ```html
 *  <furo-chart-display chart-type="bar">
 *     <furo-data-chart-binder
 *         ƒ-bind-data="--projectDAO(*.entities)"
 *         data-field="data.cost_limit.units"
 *         category-field="data.description"
 *     ></furo-data-chart-binder>
 *  </furo-chart-display>
 *  ```
 *
 * @fires {Fieldnode} data-point-clicked -  Fired when a marker for this data source was clicked
 * @fires {data-series} data-updated -  Fired when datasource has updated data
 *
 * @summary connect data to a chart
 * @customElement
 * @demo demo-furo-data-chart-mini Small Charts
 * @demo demo-furo-data-chart Basic Usage
 * @demo demo-furo-data-chart-mixed Mixed Charts
 * @demo demo-furo-data-chart-stacked Stacked Charts
 * @demo demo-furo-data-chart-timeline Timeline Chart
 * @demo demo-furo-data-chart-treemap Treemap
 * @demo demo-furo-data-chart-bubble Bubble
 * @appliesMixin FBP
 */
class FuroDataChartBinder extends LitElement {
  constructor() {
    super();
    this.strokeWidth = 1;
    this.markerSize = 0;
    this.strokeCurve = 'straight'; // 'smooth', 'straight',  'stepline'

    this.options = {
      seriesName: undefined,
      legendLabel: undefined, // custom field
      opposite: false,
      axisTicks: {
        show: false,
        borderType: 'solid',
        color: '#666666',
        width: 6,
        offsetX: 0,
        offsetY: 0,
      },
      axisBorder: {
        show: false,
        color: '#666666',
        stroke: 1,
      },
      labels: {
        show: false,
        style: {
          colors: '#666666',
        },
      },
      title: {
        style: {
          color: '#666666',
        },
      },
      tooltip: {
        enabled: false,
        offsetX: 0,
      },
    };

    this._initEmptySeries();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Define the data field or fields here. For most charts this is **the y axis**.
       *
       * Some charts requires more then one data field (i.e. bubbles want at least 3 fields `data-field="data.start.day, data.end.day, data.start.day"` ).
       */
      dataField: { type: String, attribute: 'data-field' },
      /**
       * Define the category field here (only 1 field). You can think of this as it is the x axis for your chart.
       */
      categoryField: { type: String, attribute: 'category-field' },
      /**
       * Label the Series for the legend. This text is also shown on the tooltips. This is useful when you have more then one data series.
       */
      legendLabel: { type: String, attribute: 'legend-label' },
      /**
       * Series with same name will get the same y-axis
       */
      seriesName: { type: String, attribute: 'series-name' },
      /**
       * **Use this for mixed charts scenarios only**, prefer to define the chart-type on the chart-display.
       * Specify the default type on the display and set the custom type on this binder.
       *
       */
      chartType: { type: String, attribute: 'chart-type' },
      /**
       * If you need to give an explicit color for the series you can use this attribute.
       */
      chartColor: { type: String, attribute: 'chart-color' },
      /**
       * Put the axis label on the opposite site (usually right)
       */
      axisLabelOpposite: { type: Boolean, attribute: 'axis-label-opposite' },
      /**
       * Text for the y axis
       */
      axisLabel: { type: String, attribute: 'axis-label' },
      /**
       * Custom color for the y axis description text
       */
      axisLabelColor: { type: String, attribute: 'axis-label-color' },
      /**
       * Show a border on the right side of the y axis descriptions and labels.
       */
      axisBorder: { type: Boolean, attribute: 'axis-border' },
      /**
       * Custom color for the border.
       */
      axisBorderColor: { type: String, attribute: 'axis-border-color' },
      /**
       * Show tick marks on the y axis.
       */
      axisTicks: { type: Boolean, attribute: 'axis-ticks' },
      /**
       * Show a tooltip with the current value while hovering.
       */
      axisTooltip: { type: Boolean, attribute: 'axis-tooltip' },
      /**
       * Custom color for the ticks
       */
      axisTicksColor: { type: String, attribute: 'axis-ticks-color' },
      /**
       * Define the curve style for line and area charts.
       *
       *  Possible values: 'smooth', 'straight',  'stepline'
       */
      strokeCurve: { type: String, attribute: 'chart-curve' },
      /**
       * Define the thickness of the lines in px.
       */
      strokeWidth: { type: Number, attribute: 'chart-stroke-width' },
      /**
       * Set the size of the markers (hover state) in px.
       */
      markerSize: { type: Number, attribute: 'chart-marker-size' },

      xaxis: { type: String },
    };
  }

  set axisLabelOpposite(v) {
    this.options.opposite = v;
  }

  set axisLabel(v) {
    this.options.title.text = v;
    this.options.labels.show = true;
  }

  set axisLabelColor(v) {
    this.options.labels.style.colors = v;
    this.options.title.style.color = v;
  }

  set axisBorder(v) {
    this.options.axisBorder.show = v;
  }

  set axisBorderColor(v) {
    this.options.axisBorder.color = v;
  }

  set axisTicks(v) {
    this.options.axisTicks.show = v;
  }

  set axisTooltip(v) {
    this.options.tooltip.enabled = v;
  }

  set axisTicksColor(v) {
    this.options.axisTicks.color = v;
  }

  set seriesName(v) {
    this.options.seriesName = v;
  }

  set legendLabel(v) {
    this.options.legendLabel = v;
  }

  bindData(data) {
    if (data._isRepeater === true) {
      this.repeater = data;
      this.repeater.addEventListener('this-repeated-field-changed', () => {
        this._convertData();
      });
    } else {
      // eslint-disable-next-line no-console
      console.warn('Please bind a repeater node', this);
    }
  }

  _dataPointSelection(e, context, config) {
    if (config.dataPointIndex !== undefined) {
      const customEvent = new Event('data-point-clicked', { composed: true, bubbles: true });
      customEvent.detail = this.repeater.repeats[config.dataPointIndex];
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * Prepares the data for the according chart display
   *
   * some charts want 1 dimensional data (pie, donut) and others expect more dimensions (boxplot,...)
   *
   * @private
   */
  _convertData() {
    this._initEmptySeries();

    const graphType = this.parentElement.getAttribute('chart-type');
    const dataFields = this.dataField.replace(/ /g, '').split(',');

    switch (graphType) {
      case 'donut':
      case 'radialBar':
      case 'polarArea':
      case 'pie':
        this.repeater.repeats.forEach(row => {
          if (this.categoryField && this._pathGet(row, this.categoryField)) {
            this.categories.push(this._pathGet(row, this.categoryField)._value);
          } else {
            this.categories.push('');
          }
          if (this._pathGet(row, dataFields[0])) {
            this.dataSeries.data.push(this._pathGet(row, dataFields[0])._value);
          } else {
            this.dataSeries.data.push(null);
          }
        });
        break;
      case 'bubble':
        /**
         * bubble series expects following format:
         * series = [{
         *   data: [
         *     [3, 3, 3],
         *     [4, 4, 4],
         *     [1, 1, 1],
         *   ],
         * }];
         *
         */

        this.repeater.repeats.forEach(row => {
          const v = [];

          // build multidimensional data
          if (dataFields.length === 3) {
            v.y = [];
            dataFields.forEach(field => {
              if (this._pathGet(row, field)) {
                v.push(this._pathGet(row, field)._value);
              } else {
                v.push(null);
              }
            });
          } else {
            // eslint-disable-next-line no-console
            console.warn('You must give exact 3 fields for bubble charts');
          }

          this.dataSeries.data.push(v);
        });

        break;
      case 'line':
      default:
        this.repeater.repeats.forEach(row => {
          const v = { x: '', y: null };
          if (this.categoryField && this._pathGet(row, this.categoryField)) {
            const fieldNode = this._pathGet(row, this.categoryField);
            if (fieldNode._spec.type === 'google.type.Date') {
              const date = new Date(
                Date.UTC(
                  fieldNode.year._value,
                  fieldNode.month._value - 1,
                  fieldNode.day._value,
                  0,
                  0,
                  0,
                  0,
                ),
              );
              v.x = date.getTime();
            } else {
              v.x = fieldNode._value;
            }
          }
          if (dataFields.length === 1) {
            if (this._pathGet(row, dataFields[0])) {
              const fieldNode = this._pathGet(row, this.dataField);
              if (fieldNode._spec.type === 'google.type.Date') {
                const date = new Date(
                  Date.UTC(
                    fieldNode.year._value,
                    fieldNode.month._value - 1,
                    fieldNode.day._value,
                    0,
                    0,
                    0,
                    0,
                  ),
                );
                v.y = date.getTime();
              } else {
                v.y = fieldNode._value;
              }
            } else {
              v.y = null;
            }
          }
          // build multidimensional data
          if (dataFields.length > 1) {
            v.y = [];
            dataFields.forEach(field => {
              if (this._pathGet(row, field)) {
                const fieldNode = this._pathGet(row, field);

                if (fieldNode._spec.type === 'google.type.Date') {
                  const date = new Date(
                    Date.UTC(
                      fieldNode.year._value,
                      fieldNode.month._value - 1,
                      fieldNode.day._value,
                      0,
                      0,
                      0,
                      0,
                    ),
                  );
                  v.y.push(date.getTime());
                } else {
                  v.y.push(fieldNode._value);
                }
              } else {
                v.y.push(null);
              }
            });
          }

          this.dataSeries.data.push(v);
        });
    }

    const customEvent = new Event('data-updated', { composed: true, bubbles: true });
    customEvent.detail = this;
    this.dispatchEvent(customEvent);
  }

  _initEmptySeries() {
    // data series
    this.dataSeries = { name: this.options.seriesName, data: [] };
    this.categories = [];
    // set type if given

    if (this.chartType) {
      this.dataSeries.type = this.chartType;
    }
    // set color if given
    if (this.chartColor) {
      this.dataSeries.color = this.chartColor;
    }
  }

  /**
   * Reads a value from a path.  If any sub-property in the path is `undefined`,
   * this method returns `undefined` (will never throw.
   *
   * @param {Object} root Object from which to dereference path from
   * @param {string | !Array<string|number>} path Path to read
   * @return {*} Value at path, or `undefined` if the path could not be
   *  fully dereferenced.
   */
  _pathGet(root, path) {
    let prop = root;
    const parts = this._split(path);
    // Loop over path parts[0..n-1] and dereference
    for (let i = 0; i < parts.length; i += 1) {
      if (!prop) {
        return false;
      }
      const part = parts[i];
      prop = prop[part];
    }

    return prop;
  }

  // eslint-disable-next-line class-methods-use-this
  _split(path) {
    return path.toString().split('.');
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-data-chart-binder', FuroDataChartBinder);
