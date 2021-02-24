import { LitElement, css } from 'lit-element';


/**
 * `furo-data-chart-binder`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-data-chart
 * @appliesMixin FBP
 */
class FuroDataChartBinder extends LitElement {

  constructor() {
    super();
    this.strokeWidth = 1;
    this.markerSize = 0;
    this.strokeCurve = 'straight'; // 'smooth', 'straight', 'smooth', 'stepline'

    this.options = {
      seriesName: undefined,
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

      dataField: { type: String, attribute: 'data-field' },
      categoryField: { type: String, attribute: 'category-field' },
      legendLabel: { type: String, attribute: 'legend-label' },
      chartType: { type: String, attribute: 'chart-type' },
      chartColor: { type: String, attribute: 'chart-color' },
      axisLabelOpposite: { type: Boolean, attribute: 'axis-label-opposite' },
      axisLabel: { type: String, attribute: 'axis-label' },
      axisLabelColor: { type: String, attribute: 'axis-label-color' },
      axisBorder: { type: Boolean, attribute: 'axis-border' },
      axisBorderColor: { type: String, attribute: 'axis-border-color' },
      axisTicks: { type: Boolean, attribute: 'axis-ticks' },
      axisTooltip: { type: Boolean, attribute: 'axis-tooltip' },
      axisTicksColor: { type: String, attribute: 'axis-ticks-color' },
      strokeCurve: { type: String, attribute: 'chart-curve' },
      strokeWidth: { type: Number, attribute: 'chart-stroke-width' },
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

  set legendLabel(v) {
    this.options.seriesName = v;
  }

  bindData(data) {
    if (data._isRepeater === true) {
      this.repeater = data;
      this.repeater.addEventListener('this-repeated-field-changed', () => {
        this._convertData();
      });
    } else {
      console.warn('Please bind a repeater node', this);
    }
  }



  _dataPointSelection(e,context, config) {

    if(config.dataPointIndex!==undefined){
      /**
      * @event data-point-clicked
      * Fired when a marker for this data source was clicked
      * detail payload: Fieldnode
      */
      const customEvent = new Event('data-point-clicked', {composed:true, bubbles: true});
      customEvent.detail = this.repeater.repeats[config.dataPointIndex];
      this.dispatchEvent(customEvent)

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
    console.log();

    const graphType = this.parentElement.getAttribute('chart-type');


    switch (graphType) {
      case 'donut':
      case 'radialBar':
      case 'polarArea':
      case 'pie':
        this.repeater.repeats.forEach(row => {
          if (this.categoryField && this._pathGet(row, this.categoryField)) {
            this.categories.push(this._pathGet(row, this.categoryField)._value);
          }else{
            this.categories.push("");
          }
          if (this._pathGet(row, this.dataField)) {
            this.dataSeries.data.push(this._pathGet(row, this.dataField)._value);
          }else{
            this.dataSeries.data.push(null);
          }
        });
        break;
      case 'line':
      default:
        this.repeater.repeats.forEach(row => {
          const v = { x: '', y: null };
          if (this.categoryField && this._pathGet(row, this.categoryField)) {
            v.x = this._pathGet(row, this.categoryField)._value;
          }
          if (this._pathGet(row, this.dataField)) {
            v.y = this._pathGet(row, this.dataField)._value || null;
          }
          this.dataSeries.data.push(v);
        });
    }
    /**
     * @event data-updated
     * Fired when datasource has updated data
     * detail payload: data-series
     */
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
