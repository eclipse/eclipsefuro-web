import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import ApexCharts from 'apexcharts/dist/apexcharts.esm.js';

/**
 * `furo-chart-display`
 *  Component to display charts with apex the apex charts lib (https://github.com/apexcharts/apexcharts.js).
 *
 *  Use `furo-data-chart-binder` to connect your data.
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
 * @fires {Fieldnode} data-point-clicked -  Fired when a marker for this data source was clicked. Note: the event is fired from the furo-data-chart-binder
 *
 * @summary Display charts with data objects
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
class FuroChartDisplay extends FBP(LitElement) {
  constructor() {
    super();
    // set the defaults
    this.apexOptions = {
      series: [],
      yaxis: [],
      // belize qualitative color palete
      colors: [
        '#5899DA',
        '#E8743B',
        '#19A979',
        '#ED4A7B',
        '#945ECF',
        '#13A4B4',
        '#525DF4',
        '#BF399E',
        '#6C8893',
        '#EE6868',
        '#2F6497',
      ],
      noData: {
        text: 'No data.',
        align: 'center',
        verticalAlign: 'middle',
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: '14px',
          fontFamily: undefined,
        },
      },
      chart: {
        // height: 550,
        type: 'line',
        stacked: false,
        events: {},
        toolbar: {
          show: false, // disable by default
          tools: {
            download: false,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true,
          },
        },
        sparkline: {
          enabled: false,
        },
      },
      grid: {
        show: false, // https://apexcharts.com/docs/options/grid/
        // zebra
        // row: {
        //  colors: ["#f3f4f5", "#fff"],
        // }
      },
      dataLabels: {
        enabled: false,
      },

      title: {
        // text: 'XYZ - Analysis',
        align: 'left',
        // offsetX: 70,
      },
      stroke: {},

      tooltip: {
        enabled: false,
        fixed: {
          enabled: false,
          position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
          offsetY: 30,
          offsetX: 160,
        },
      },
      legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 0,
        offsetY: 0,
        formatter: (seriesName, opts) => {
          if (
            opts.w.config.yaxis[opts.seriesIndex] &&
            opts.w.config.yaxis[opts.seriesIndex].legendLabel
          ) {
            return [opts.w.config.yaxis[opts.seriesIndex].legendLabel];
          }
          return [seriesName];
        },
      },
      plotOptions: {},
      xaxis: {
        // type: "datetime",

        // tickAmount: 6,
        title: {
          text: undefined,
        },
      },
    };
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       *
       * line, area, bar are mixable
       *
       * radar, scatter, heatmap
       *
       * pie donut polarArea radialBar can only consume 1 data series
       */
      chartType: { type: String, attribute: 'chart-type' },
      /**
       * Set the title.
       */
      titleText: { type: String, attribute: 'title-text' },
      /**
       * Aligns the title. Possible values are 'left', 'center', 'right'
       *
       * Default is **left**
       *
       */
      titleAlign: { type: String, attribute: 'title-align' },
      /**
       * Moves the title for n pixels on the x-axis from the alignment direction
       */
      titleOffsetX: { type: Number, attribute: 'title-offset-x' },
      /**
       * Moves the title for n pixels on the y-axis from the alignment direction
       */
      titleOffsetY: { type: Number, attribute: 'title-offset-y' },
      /**
       * Set the text to display, if no data is given.
       *
       * If this option is not set, the default is **No data.**
       */
      noDataText: { type: String, attribute: 'no-data-text' },
      /**
       * WORK IN PROGRESS
       * Stacked bar charts are not mixable
       */
      stacked: { type: Boolean },
      /**
       * Enable labels with data on every item.
       */
      dataLabels: { type: Boolean, attribute: 'data-labels' },
      /**
       * Set a fixed height for the plot. Default is auto, this can be useful if you need to control the heights
       */
      fixedHeight: { type: Number, attribute: 'fixed-height' },
      /**
       * show a tooltip on mouseover
       */
      tooltip: { type: Boolean },
      /**
       * Enables the legend on bottom left with offset 0:0
       */
      legend: { type: Boolean },
      /**
       * Draw the horizontal grid lines
       */
      grid: { type: Boolean },
      /**
       * Aligns the legend to `left` `center` `right`
       *
       * default is **left**
       */
      legendAlign: { type: String, attribute: 'legend-align' },
      /**
       * Set the position of the legend to `top`, `right`, `bottom`, `left`
       *
       * Default is **bottom**
       */
      legendPosition: { type: String, attribute: 'legend-position' },
      /**
       * Moves the legend in the **x** direction for n pixels from `legend-position`
       */
      legendOffsetX: { type: Number, attribute: 'legend-offset-x' },
      /**
       * Moves the legend in the **y** direction for n pixels from `legend-position`
       */
      legendOffsetY: { type: Number, attribute: 'legend-offset-y' },
      /**
       * Enables the toolbar
       */
      toolbar: { type: Boolean },
      /**
       * Enables the download option in the toolbar (svg,csv,png)
       */
      toolbarDownload: { type: Boolean, attribute: 'toolbar-download' },
      /**
       * Enable this to draw the bars horizontally
       */
      plotHorizontal: { type: Boolean, attribute: 'plot-horizontal' },
      /**
       * Hides all elements of the chart other than the primary graphic.
       * Use this to visualize data in very small areas.
       */
      sparkline: { type: Boolean },
      /**
       * set zebra color like zebra="#f3f4f5, #fff" to get stripes
       */
      zebra: { type: String },
      /**
       * Give the x-axis a title which will be displayed below the axis labels by default.
       */
      xaxisTitle: { type: String, attribute: 'xaxis-title' },
      /**
       * Set this to true if you have datetime, google.type.date or timestamp data on the x-axis
       */
      xaxisDatetime: { type: Boolean, attribute: 'xaxis-datetime' },
    };
  }

  // https://apexcharts.com/docs/options/chart/sparkline/
  set sparkline(v) {
    this.apexOptions.chart.sparkline.enabled = v;
  }

  set xaxisTitle(v) {
    this.apexOptions.xaxis.title.text = v;
  }

  set xaxisDatetime(v) {
    // type: "datetime",
    this.apexOptions.xaxis.type = 'datetime';
    // todo this can be done better?
    if (this.apexOptions.chart.type === 'rangeBar') {
      this.apexOptions.dataLabels.formatter = (val, opts) => {
        const label = opts.w.globals.labels[opts.dataPointIndex];
        const diff = Math.abs(val[0] - val[1]) / 86400000;
        return `${label}: ${diff}d`;
      };
    }
  }

  set zebra(v) {
    const colors = v.replace(/ /g, '').split(',');
    this.apexOptions.grid.show = true;
    this.apexOptions.grid.row = {
      colors,
    };
  }

  set noDataText(v) {
    this.apexOptions.noData.text = v;
  }

  set legend(v) {
    this.apexOptions.legend.show = v;
  }

  set dataLabels(v) {
    this.apexOptions.dataLabels.enabled = v;
  }

  set tooltip(v) {
    this.apexOptions.tooltip.enabled = v;
  }

  set legendAlign(v) {
    this.apexOptions.legend.horizontalAlign = v;
  }

  set legendPosition(v) {
    this.apexOptions.legend.position = v;
  }

  set legendOffsetX(v) {
    this.apexOptions.legend.offsetX = v;
  }

  set legendOffsetY(v) {
    this.apexOptions.legend.offsetY = v;
  }

  set toolbar(v) {
    this.apexOptions.chart.toolbar.show = v;
  }

  set toolbarDownload(v) {
    this.apexOptions.chart.toolbar.tools.download = v;
  }

  set plotHorizontal(v) {
    this.apexOptions.plotOptions.bar = { horizontal: true };
  }

  set grid(v) {
    this.apexOptions.grid.show = v;
  }

  set chartType(v) {
    this.apexOptions.chart.type = v;
  }

  set stacked(v) {
    this.apexOptions.chart.stacked = v;
  }

  set titleText(v) {
    this.apexOptions.title.text = v;
  }

  set titleAlign(v) {
    this.apexOptions.title.align = v;
  }

  set titleOffsetX(v) {
    this.apexOptions.title.offsetX = v;
  }

  set titleOffsetY(v) {
    this.apexOptions.title.offsetY = v;
  }

  set fixedHeight(v) {
    this.apexOptions.chart.height = v;
  }

  _initChart(apexOptions) {
    this.options = apexOptions;

    // fill initial data (workaround, because we update the data later)
    this._fillInitialData();

    this.chart = new ApexCharts(this.shadowRoot.getElementById('c'), this.options);

    this.chart.render();
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    // data sources
    this.dataSourceComponents = this.querySelectorAll('*');
    this.dataSeries = [];

    this.apexOptions.chart.events.dataPointSelection = (e, context, config) => {
      // notify click
      // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
      this.dataSourceComponents[config.seriesIndex]._dataPointSelection(e, context, config);
    };

    this.apexOptions.chart.events.markerClick = (e, context, config) => {
      // notify click
      // The last parameter config contains additional information like `seriesIndex` and `dataPointIndex` for cartesian charts
      this.dataSourceComponents[config.seriesIndex]._dataPointSelection(e, context, config);
    };

    this._registerDataSourceComponents(this.dataSourceComponents);
  }

  async _registerDataSourceComponents(dataSources) {
    const it = [];
    dataSources.forEach(e => {
      it.push(e.updateComplete);
    });
    await Promise.all(it);

    this.dataSourceComponents.forEach((s, idx) => {
      // build the chart from underlying data sources
      this.apexOptions.yaxis[idx] = s.options;
      // apexcharts stroke.width option accepts array only for line and area charts. Reverted back to last given Number
      if (
        this.apexOptions.chart.type === 'line' ||
        this.apexOptions.chart.type === 'area' ||
        this.apexOptions.chart.type === 'bar'
      ) {
        if (!this.apexOptions.stroke.width) {
          this.apexOptions.stroke.width = [];
        }
        this.apexOptions.stroke.width.push(s.strokeWidth);

        if (!this.apexOptions.markers) {
          this.apexOptions.markers = { size: [] };
        }
        this.apexOptions.markers.size.push(s.markerSize);
      } else {
        this.apexOptions.stroke.width = s.strokeWidth;
      }

      if (!this.apexOptions.stroke.curve) {
        this.apexOptions.stroke.curve = [];
      }
      this.apexOptions.stroke.curve.push(s.strokeCurve);

      // init empty chart
      this.dataSeries[idx] = s.dataSeries;

      s.addEventListener('data-updated', event => {
        switch (this.apexOptions.chart.type) {
          case 'radialBar':
          case 'polarArea':
          case 'donut':
          case 'pie':
            this.chart.updateOptions({ labels: event.detail.categories });
            this.chart.updateSeries(event.detail.dataSeries.data);
            break;
          default:
            this.dataSeries[idx] = event.detail.dataSeries;
            this.chart.updateSeries(this.dataSeries);
        }
      });
    });

    this._initChart(this.apexOptions);
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
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      .apexcharts-canvas {
        position: relative;
        user-select: none;
        /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */
      }

      /* scrollbar is not visible by default for legend, hence forcing the visibility */
      .apexcharts-canvas ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 6px;
      }

      .apexcharts-canvas ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
        -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
      }

      .apexcharts-canvas.apexcharts-theme-dark {
        background: #343f57;
      }

      .apexcharts-inner {
        position: relative;
      }

      .apexcharts-text tspan {
        font-family: inherit;
      }

      .legend-mouseover-inactive {
        transition: 0.15s ease all;
        opacity: 0.2;
      }

      .apexcharts-series-collapsed {
        opacity: 0;
      }

      .apexcharts-gridline,
      .apexcharts-annotation-rect {
        pointer-events: none;
      }

      .apexcharts-tooltip {
        border-radius: 5px;
        box-shadow: 2px 2px 6px -4px #999;
        cursor: default;
        font-size: 14px;
        left: 62px;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        top: 20px;
        overflow: hidden;
        white-space: nowrap;
        z-index: 12;
        transition: 0.15s ease all;
      }

      .apexcharts-tooltip.apexcharts-theme-light {
        border: 1px solid #e3e3e3;
        background: rgba(255, 255, 255, 0.96);
      }

      .apexcharts-tooltip.apexcharts-theme-dark {
        color: #fff;
        background: rgba(30, 30, 30, 0.8);
      }

      .apexcharts-tooltip * {
        font-family: inherit;
      }

      .apexcharts-tooltip .apexcharts-marker,
      .apexcharts-area-series .apexcharts-area,
      .apexcharts-line {
        pointer-events: none;
      }

      .apexcharts-tooltip.apexcharts-active {
        opacity: 1;
        transition: 0.15s ease all;
      }

      .apexcharts-tooltip-title {
        padding: 6px;
        font-size: 15px;
        margin-bottom: 4px;
      }

      .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
        background: #eceff1;
        border-bottom: 1px solid #ddd;
      }

      .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
        background: rgba(0, 0, 0, 0.7);
        border-bottom: 1px solid #333;
      }

      .apexcharts-tooltip-text-value,
      .apexcharts-tooltip-text-z-value {
        display: inline-block;
        font-weight: 600;
        margin-left: 5px;
      }

      .apexcharts-tooltip-text-z-label:empty,
      .apexcharts-tooltip-text-z-value:empty {
        display: none;
      }

      .apexcharts-tooltip-text-value,
      .apexcharts-tooltip-text-z-value {
        font-weight: 600;
      }

      .apexcharts-tooltip-marker {
        width: 12px;
        height: 12px;
        position: relative;
        top: 0px;
        margin-right: 10px;
        border-radius: 50%;
      }

      .apexcharts-tooltip-series-group {
        padding: 0 10px;
        display: none;
        text-align: left;
        justify-content: left;
        align-items: center;
      }

      .apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
        opacity: 1;
      }

      .apexcharts-tooltip-series-group.apexcharts-active,
      .apexcharts-tooltip-series-group:last-child {
        padding-bottom: 4px;
      }

      .apexcharts-tooltip-series-group-hidden {
        opacity: 0;
        height: 0;
        line-height: 0;
        padding: 0 !important;
      }

      .apexcharts-tooltip-y-group {
        padding: 6px 0 5px;
      }

      .apexcharts-tooltip-candlestick {
        padding: 4px 8px;
      }

      .apexcharts-tooltip-candlestick > div {
        margin: 4px 0;
      }

      .apexcharts-tooltip-candlestick span.value {
        font-weight: bold;
      }

      .apexcharts-tooltip-rangebar {
        padding: 5px 8px;
      }

      .apexcharts-tooltip-rangebar .category {
        font-weight: 600;
        color: #777;
      }

      .apexcharts-tooltip-rangebar .series-name {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
      }

      .apexcharts-xaxistooltip {
        opacity: 0;
        padding: 9px 10px;
        pointer-events: none;
        color: #373d3f;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: absolute;
        z-index: 10;
        background: #eceff1;
        border: 1px solid #90a4ae;
        transition: 0.15s ease all;
      }

      .apexcharts-xaxistooltip.apexcharts-theme-dark {
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: #fff;
      }

      .apexcharts-xaxistooltip:after,
      .apexcharts-xaxistooltip:before {
        left: 50%;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      .apexcharts-xaxistooltip:after {
        border-color: rgba(236, 239, 241, 0);
        border-width: 6px;
        margin-left: -6px;
      }

      .apexcharts-xaxistooltip:before {
        border-color: rgba(144, 164, 174, 0);
        border-width: 7px;
        margin-left: -7px;
      }

      .apexcharts-xaxistooltip-bottom:after,
      .apexcharts-xaxistooltip-bottom:before {
        bottom: 100%;
      }

      .apexcharts-xaxistooltip-top:after,
      .apexcharts-xaxistooltip-top:before {
        top: 100%;
      }

      .apexcharts-xaxistooltip-bottom:after {
        border-bottom-color: #eceff1;
      }

      .apexcharts-xaxistooltip-bottom:before {
        border-bottom-color: #90a4ae;
      }

      .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {
        border-bottom-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
        border-bottom-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-xaxistooltip-top:after {
        border-top-color: #eceff1;
      }

      .apexcharts-xaxistooltip-top:before {
        border-top-color: #90a4ae;
      }

      .apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {
        border-top-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
        border-top-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-xaxistooltip.apexcharts-active {
        opacity: 1;
        transition: 0.15s ease all;
      }

      .apexcharts-yaxistooltip {
        opacity: 0;
        padding: 4px 10px;
        pointer-events: none;
        color: #373d3f;
        font-size: 13px;
        text-align: center;
        border-radius: 2px;
        position: absolute;
        z-index: 10;
        background: #eceff1;
        border: 1px solid #90a4ae;
      }

      .apexcharts-yaxistooltip.apexcharts-theme-dark {
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: #fff;
      }

      .apexcharts-yaxistooltip:after,
      .apexcharts-yaxistooltip:before {
        top: 50%;
        border: solid transparent;
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
      }

      .apexcharts-yaxistooltip:after {
        border-color: rgba(236, 239, 241, 0);
        border-width: 6px;
        margin-top: -6px;
      }

      .apexcharts-yaxistooltip:before {
        border-color: rgba(144, 164, 174, 0);
        border-width: 7px;
        margin-top: -7px;
      }

      .apexcharts-yaxistooltip-left:after,
      .apexcharts-yaxistooltip-left:before {
        left: 100%;
      }

      .apexcharts-yaxistooltip-right:after,
      .apexcharts-yaxistooltip-right:before {
        right: 100%;
      }

      .apexcharts-yaxistooltip-left:after {
        border-left-color: #eceff1;
      }

      .apexcharts-yaxistooltip-left:before {
        border-left-color: #90a4ae;
      }

      .apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {
        border-left-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
        border-left-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-yaxistooltip-right:after {
        border-right-color: #eceff1;
      }

      .apexcharts-yaxistooltip-right:before {
        border-right-color: #90a4ae;
      }

      .apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {
        border-right-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
        border-right-color: rgba(0, 0, 0, 0.5);
      }

      .apexcharts-yaxistooltip.apexcharts-active {
        opacity: 1;
      }

      .apexcharts-yaxistooltip-hidden {
        display: none;
      }

      .apexcharts-xcrosshairs,
      .apexcharts-ycrosshairs {
        pointer-events: none;
        opacity: 0;
        transition: 0.15s ease all;
      }

      .apexcharts-xcrosshairs.apexcharts-active,
      .apexcharts-ycrosshairs.apexcharts-active {
        opacity: 1;
        transition: 0.15s ease all;
      }

      .apexcharts-ycrosshairs-hidden {
        opacity: 0;
      }

      .apexcharts-zoom-rect {
        pointer-events: none;
      }

      .apexcharts-selection-rect {
        cursor: move;
      }

      .svg_select_points,
      .svg_select_points_rot {
        opacity: 0;
        visibility: hidden;
      }

      .svg_select_points_l,
      .svg_select_points_r {
        cursor: ew-resize;
        opacity: 1;
        visibility: visible;
        fill: #888;
      }

      .apexcharts-canvas.apexcharts-zoomable .hovering-zoom {
        cursor: crosshair;
      }

      .apexcharts-canvas.apexcharts-zoomable .hovering-pan {
        cursor: move;
      }

      .apexcharts-zoom-icon,
      .apexcharts-zoomin-icon,
      .apexcharts-zoomout-icon,
      .apexcharts-reset-icon,
      .apexcharts-pan-icon,
      .apexcharts-selection-icon,
      .apexcharts-menu-icon,
      .apexcharts-toolbar-custom-icon {
        cursor: pointer;
        width: 20px;
        height: 20px;
        line-height: 24px;
        color: #6e8192;
        text-align: center;
      }

      .apexcharts-zoom-icon svg,
      .apexcharts-zoomin-icon svg,
      .apexcharts-zoomout-icon svg,
      .apexcharts-reset-icon svg,
      .apexcharts-menu-icon svg {
        fill: #6e8192;
      }

      .apexcharts-selection-icon svg {
        fill: #444;
        transform: scale(0.76);
      }

      .apexcharts-theme-dark .apexcharts-zoom-icon svg,
      .apexcharts-theme-dark .apexcharts-zoomin-icon svg,
      .apexcharts-theme-dark .apexcharts-zoomout-icon svg,
      .apexcharts-theme-dark .apexcharts-reset-icon svg,
      .apexcharts-theme-dark .apexcharts-pan-icon svg,
      .apexcharts-theme-dark .apexcharts-selection-icon svg,
      .apexcharts-theme-dark .apexcharts-menu-icon svg,
      .apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {
        fill: #f3f4f5;
      }

      .apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,
      .apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,
      .apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {
        fill: #008ffb;
      }

      .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,
      .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,
      .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,
      .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,
      .apexcharts-theme-light .apexcharts-reset-icon:hover svg,
      .apexcharts-theme-light .apexcharts-menu-icon:hover svg {
        fill: #333;
      }

      .apexcharts-selection-icon,
      .apexcharts-menu-icon {
        position: relative;
      }

      .apexcharts-reset-icon {
        margin-left: 5px;
      }

      .apexcharts-zoom-icon,
      .apexcharts-reset-icon,
      .apexcharts-menu-icon {
        transform: scale(0.85);
      }

      .apexcharts-zoomin-icon,
      .apexcharts-zoomout-icon {
        transform: scale(0.7);
      }

      .apexcharts-zoomout-icon {
        margin-right: 3px;
      }

      .apexcharts-pan-icon {
        transform: scale(0.62);
        position: relative;
        left: 1px;
        top: 0px;
      }

      .apexcharts-pan-icon svg {
        fill: #fff;
        stroke: #6e8192;
        stroke-width: 2;
      }

      .apexcharts-pan-icon.apexcharts-selected svg {
        stroke: #008ffb;
      }

      .apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
        stroke: #333;
      }

      .apexcharts-toolbar {
        position: absolute;
        z-index: 11;
        top: 0px;
        right: 3px;
        max-width: 176px;
        text-align: right;
        border-radius: 3px;
        padding: 0px 6px 2px 6px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .apexcharts-toolbar svg {
        pointer-events: none;
      }

      .apexcharts-menu {
        background: #fff;
        position: absolute;
        top: 100%;
        border: 1px solid #ddd;
        border-radius: 3px;
        padding: 3px;
        right: 10px;
        opacity: 0;
        min-width: 110px;
        transition: 0.15s ease all;
        pointer-events: none;
      }

      .apexcharts-menu.apexcharts-menu-open {
        opacity: 1;
        pointer-events: all;
        transition: 0.15s ease all;
      }

      .apexcharts-menu-item {
        padding: 6px 7px;
        font-size: 12px;
        cursor: pointer;
      }

      .apexcharts-theme-light .apexcharts-menu-item:hover {
        background: #eee;
      }

      .apexcharts-theme-dark .apexcharts-menu {
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
      }

      @media screen and (min-width: 768px) {
        .apexcharts-canvas:hover .apexcharts-toolbar {
          opacity: 1;
        }
      }

      .apexcharts-datalabel.apexcharts-element-hidden {
        opacity: 0;
      }

      .apexcharts-pie-label,
      .apexcharts-datalabels,
      .apexcharts-datalabel,
      .apexcharts-datalabel-label,
      .apexcharts-datalabel-value {
        cursor: default;
        pointer-events: none;
      }

      .apexcharts-pie-label-delay {
        opacity: 0;
        animation-name: opaque;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
      }

      .apexcharts-canvas .apexcharts-element-hidden {
        opacity: 0;
      }

      .apexcharts-hide .apexcharts-series-points {
        opacity: 0;
      }

      .apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
      .apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,
      .apexcharts-radar-series path,
      .apexcharts-radar-series polygon {
        pointer-events: none;
      }

      /* markers */

      .apexcharts-marker {
        transition: 0.15s ease all;
      }

      @keyframes opaque {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      /* Resize generated styles */
      @keyframes resizeanim {
        from {
          opacity: 0;
        }
        to {
          opacity: 0;
        }
      }

      .resize-triggers {
        animation: 1ms resizeanim;
        visibility: hidden;
        opacity: 0;
      }

      .resize-triggers,
      .resize-triggers > div,
      .contract-trigger:before {
        content: ' ';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }

      .resize-triggers > div {
        background: #eee;
        overflow: auto;
      }

      .contract-trigger:before {
        width: 200%;
        height: 200%;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div>
        <div id="c"></div>
      </div>
    `;
  }

  _fillInitialData() {
    // eslint-disable-next-line default-case
    switch (this.apexOptions.chart.type) {
      case 'treemap':
        this.apexOptions.series = [
          {
            data: [
              {
                x: '',
                y: 0,
              },
            ],
          },
        ];
        break;
    }
  }
}

window.customElements.define('furo-chart-display', FuroChartDisplay);
