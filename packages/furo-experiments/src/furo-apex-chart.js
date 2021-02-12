import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/src/theme.js';
import { FBP } from '@furo/fbp';
import ApexCharts from 'apexcharts/dist/apexcharts.esm.js';

/**
 * `furo-apex-chart`
 *  Generic Component to use apex charts (https://github.com/apexcharts/apexcharts.js)
 *
 * @summary todo shortdescription
 * @customElement
 * @demo demo-furo-apex-chart
 * @appliesMixin FBP
 */
class FuroApexChart extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * APEX options and data
       */
      options: { type: Object },
    };
  }

  initData(apexOptions) {
    this.options = apexOptions;
    this.chart = new ApexCharts(this.shadowRoot.getElementById('c'), this.options);

    this.chart.render();
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    setTimeout(() => {
      this.initData({
        chart: {
          type: 'bar',
        },
        series: [
          {
            name: 'sales',
            data: [30, 40, 45, 50, 49, 60, 70, 91, 125],
          },
        ],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
        theme: {
          palette: 'palette2', // upto palette10
        },
      });
    }, 400);
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('FuroApexChart') ||
      css`
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
      `
    );
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
}

window.customElements.define('furo-apex-chart', FuroApexChart);