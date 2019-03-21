import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
//language=HTML
$_documentContainer.innerHTML = `
  <dom-module id="furo-input-shared-styles">
    <template>
      <style>
        :host {
          display: inline-block;
          position: relative;
          font-size: 16px;
          box-sizing: border-box;
          margin: 0;
          padding: 8px 0;
        }
        input {
          border: none;
          border-bottom: 1px solid rgba(0, 0, 0, .12);
          display: block;
          background: 0 0;
          font-size: 12px;
          margin: 0;
          padding: 4px 0;
          width: 100%;
          text-align: left;
          color: inherit;
          outline: none;
        }

        input:focus {
          border-color: var(--app-primary-color,#3f51b5);
          border-width: 1px;
        }

        label {
          bottom: 0;
          color: rgba(0, 0, 0, .26);
          font-size: 12px;
          left: 0;
          right: 0;
          pointer-events: none;
          position: absolute;
          display: block;
          top: 12px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-align: left;
        }

        label[float] {
          color: #3f51b5;
          font-size: 10px;
          top: -4px;
          visibility: visible;
        }

        * {
          transition: all 200ms ease-in;
        }
        .hint{
          position: absolute;
          bottom: -7px;
          font-size: 10px;
          color:transparent;

        }
        :host(:focus-within) .hint{
          color: var(--app-hint-color);
          transition: all 750ms ease-in;
        }
      </style>
    </template>
  </dom-module>`;

document.head.appendChild($_documentContainer.content);
