import { LitElement, html, css } from 'lit-element';
import {Theme} from "@furo/framework/theme"
import {FBP} from "@furo/fbp";
import "@furo/doc-helper"
import "../furo-catalog"
import "./furo-icon-with-label"
/**
 * `demo-furo-icon-list`
 *
 * @customElement
 * @appliesMixin FBP
 */
class DemoFuroIconList extends FBP(LitElement) {

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.name) || css`
        :host {
            display: block;
            height: 100%;
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }
        h2{
            margin-top: 0;
        }
       
    `
  }


  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <h2>Iconset baseIcons</h2>
      <p><pre>
        import {FuroBaseIcons} from "@furo/layout/iconsets/baseIcons";
        Iconset.registerIconset("default", FuroBaseIcons);
      </pre></p>
     <div>
          <furo-icon-with-label icon="3d-rotation"></furo-icon-with-label>
          <furo-icon-with-label icon="accessibility"></furo-icon-with-label>
          <furo-icon-with-label icon="accessible"></furo-icon-with-label>
          <furo-icon-with-label icon="account-balance"></furo-icon-with-label>
          <furo-icon-with-label icon="account-balance-wallet"></furo-icon-with-label>
          <furo-icon-with-label icon="account-box"></furo-icon-with-label>
          <furo-icon-with-label icon="account-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="add"></furo-icon-with-label>
          <furo-icon-with-label icon="add-alert"></furo-icon-with-label>
          <furo-icon-with-label icon="add-box"></furo-icon-with-label>
          <furo-icon-with-label icon="add-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="add-circle-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="add-shopping-cart"></furo-icon-with-label>
          <furo-icon-with-label icon="alarm"></furo-icon-with-label>
          <furo-icon-with-label icon="alarm-add"></furo-icon-with-label>
          <furo-icon-with-label icon="alarm-off"></furo-icon-with-label>
          <furo-icon-with-label icon="alarm-on"></furo-icon-with-label>
          <furo-icon-with-label icon="all-out"></furo-icon-with-label>
          <furo-icon-with-label icon="android"></furo-icon-with-label>
          <furo-icon-with-label icon="announcement"></furo-icon-with-label>
          <furo-icon-with-label icon="apps"></furo-icon-with-label>
          <furo-icon-with-label icon="archive"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-back"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-downward"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-drop-down"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-drop-down-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-drop-up"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-forward"></furo-icon-with-label>
          <furo-icon-with-label icon="arrow-upward"></furo-icon-with-label>
          <furo-icon-with-label icon="aspect-ratio"></furo-icon-with-label>
          <furo-icon-with-label icon="assessment"></furo-icon-with-label>
          <furo-icon-with-label icon="assignment"></furo-icon-with-label>
          <furo-icon-with-label icon="assignment-ind"></furo-icon-with-label>
          <furo-icon-with-label icon="assignment-late"></furo-icon-with-label>
          <furo-icon-with-label icon="assignment-return"></furo-icon-with-label>
          <furo-icon-with-label icon="assignment-returned"></furo-icon-with-label>
          <furo-icon-with-label icon="assignment-turned-in"></furo-icon-with-label>
          <furo-icon-with-label icon="attachment"></furo-icon-with-label>
          <furo-icon-with-label icon="autorenew"></furo-icon-with-label>
          <furo-icon-with-label icon="backspace"></furo-icon-with-label>
          <furo-icon-with-label icon="backup"></furo-icon-with-label>
          <furo-icon-with-label icon="block"></furo-icon-with-label>
          <furo-icon-with-label icon="book"></furo-icon-with-label>
          <furo-icon-with-label icon="bookmark"></furo-icon-with-label>
          <furo-icon-with-label icon="bookmark-border"></furo-icon-with-label>
          <furo-icon-with-label icon="bug-report"></furo-icon-with-label>
          <furo-icon-with-label icon="build"></furo-icon-with-label>
          <furo-icon-with-label icon="cached"></furo-icon-with-label>
          <furo-icon-with-label icon="camera-enhance"></furo-icon-with-label>
          <furo-icon-with-label icon="cancel"></furo-icon-with-label>
          <furo-icon-with-label icon="card-giftcard"></furo-icon-with-label>
          <furo-icon-with-label icon="card-membership"></furo-icon-with-label>
          <furo-icon-with-label icon="card-travel"></furo-icon-with-label>
          <furo-icon-with-label icon="change-history"></furo-icon-with-label>
          <furo-icon-with-label icon="check"></furo-icon-with-label>
          <furo-icon-with-label icon="check-box"></furo-icon-with-label>
          <furo-icon-with-label icon="check-box-outline-blank"></furo-icon-with-label>
          <furo-icon-with-label icon="check-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="chevron-left"></furo-icon-with-label>
          <furo-icon-with-label icon="chevron-right"></furo-icon-with-label>
          <furo-icon-with-label icon="chrome-reader-mode"></furo-icon-with-label>
          <furo-icon-with-label icon="class"></furo-icon-with-label>
          <furo-icon-with-label icon="clear"></furo-icon-with-label>
          <furo-icon-with-label icon="close"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud-done"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud-download"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud-off"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud-queue"></furo-icon-with-label>
          <furo-icon-with-label icon="cloud-upload"></furo-icon-with-label>
          <furo-icon-with-label icon="code"></furo-icon-with-label>
          <furo-icon-with-label icon="compare-arrows"></furo-icon-with-label>
          <furo-icon-with-label icon="content-copy"></furo-icon-with-label>
          <furo-icon-with-label icon="content-cut"></furo-icon-with-label>
          <furo-icon-with-label icon="content-paste"></furo-icon-with-label>
          <furo-icon-with-label icon="copyright"></furo-icon-with-label>
          <furo-icon-with-label icon="create"></furo-icon-with-label>
          <furo-icon-with-label icon="create-new-folder"></furo-icon-with-label>
          <furo-icon-with-label icon="credit-card"></furo-icon-with-label>
          <furo-icon-with-label icon="dashboard"></furo-icon-with-label>
          <furo-icon-with-label icon="date-range"></furo-icon-with-label>
          <furo-icon-with-label icon="delete"></furo-icon-with-label>
          <furo-icon-with-label icon="delete-forever"></furo-icon-with-label>
          <furo-icon-with-label icon="delete-sweep"></furo-icon-with-label>
          <furo-icon-with-label icon="description"></furo-icon-with-label>
          <furo-icon-with-label icon="dns"></furo-icon-with-label>
          <furo-icon-with-label icon="done"></furo-icon-with-label>
          <furo-icon-with-label icon="done-all"></furo-icon-with-label>
          <furo-icon-with-label icon="donut-large"></furo-icon-with-label>
          <furo-icon-with-label icon="donut-small"></furo-icon-with-label>
          <furo-icon-with-label icon="drafts"></furo-icon-with-label>
          <furo-icon-with-label icon="eject"></furo-icon-with-label>
          <furo-icon-with-label icon="error"></furo-icon-with-label>
          <furo-icon-with-label icon="error-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="euro-symbol"></furo-icon-with-label>
          <furo-icon-with-label icon="event"></furo-icon-with-label>
          <furo-icon-with-label icon="event-seat"></furo-icon-with-label>
          <furo-icon-with-label icon="exit-to-app"></furo-icon-with-label>
          <furo-icon-with-label icon="expand-less"></furo-icon-with-label>
          <furo-icon-with-label icon="expand-more"></furo-icon-with-label>
          <furo-icon-with-label icon="explore"></furo-icon-with-label>
          <furo-icon-with-label icon="extension"></furo-icon-with-label>
          <furo-icon-with-label icon="face"></furo-icon-with-label>
          <furo-icon-with-label icon="favorite"></furo-icon-with-label>
          <furo-icon-with-label icon="favorite-border"></furo-icon-with-label>
          <furo-icon-with-label icon="feedback"></furo-icon-with-label>
          <furo-icon-with-label icon="file-download"></furo-icon-with-label>
          <furo-icon-with-label icon="file-upload"></furo-icon-with-label>
          <furo-icon-with-label icon="filter-list"></furo-icon-with-label>
          <furo-icon-with-label icon="find-in-page"></furo-icon-with-label>
          <furo-icon-with-label icon="find-replace"></furo-icon-with-label>
          <furo-icon-with-label icon="fingerprint"></furo-icon-with-label>
          <furo-icon-with-label icon="first-page"></furo-icon-with-label>
          <furo-icon-with-label icon="flag"></furo-icon-with-label>
          <furo-icon-with-label icon="flight-land"></furo-icon-with-label>
          <furo-icon-with-label icon="flight-takeoff"></furo-icon-with-label>
          <furo-icon-with-label icon="flip-to-back"></furo-icon-with-label>
          <furo-icon-with-label icon="flip-to-front"></furo-icon-with-label>
          <furo-icon-with-label icon="folder"></furo-icon-with-label>
          <furo-icon-with-label icon="folder-open"></furo-icon-with-label>
          <furo-icon-with-label icon="folder-shared"></furo-icon-with-label>
          <furo-icon-with-label icon="font-download"></furo-icon-with-label>
          <furo-icon-with-label icon="forward"></furo-icon-with-label>
          <furo-icon-with-label icon="fullscreen"></furo-icon-with-label>
          <furo-icon-with-label icon="fullscreen-exit"></furo-icon-with-label>
          <furo-icon-with-label icon="g-translate"></furo-icon-with-label>
          <furo-icon-with-label icon="gavel"></furo-icon-with-label>
          <furo-icon-with-label icon="gesture"></furo-icon-with-label>
          <furo-icon-with-label icon="get-app"></furo-icon-with-label>
          <furo-icon-with-label icon="gif"></furo-icon-with-label>
          <furo-icon-with-label icon="grade"></furo-icon-with-label>
          <furo-icon-with-label icon="group-work"></furo-icon-with-label>
          <furo-icon-with-label icon="help"></furo-icon-with-label>
          <furo-icon-with-label icon="help-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="highlight-off"></furo-icon-with-label>
          <furo-icon-with-label icon="history"></furo-icon-with-label>
          <furo-icon-with-label icon="home"></furo-icon-with-label>
          <furo-icon-with-label icon="hourglass-empty"></furo-icon-with-label>
          <furo-icon-with-label icon="hourglass-full"></furo-icon-with-label>
          <furo-icon-with-label icon="http"></furo-icon-with-label>
          <furo-icon-with-label icon="https"></furo-icon-with-label>
          <furo-icon-with-label icon="important-devices"></furo-icon-with-label>
          <furo-icon-with-label icon="inbox"></furo-icon-with-label>
          <furo-icon-with-label icon="indeterminate-check-box"></furo-icon-with-label>
          <furo-icon-with-label icon="info"></furo-icon-with-label>
          <furo-icon-with-label icon="info-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="input"></furo-icon-with-label>
          <furo-icon-with-label icon="invert-colors"></furo-icon-with-label>
          <furo-icon-with-label icon="label"></furo-icon-with-label>
          <furo-icon-with-label icon="label-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="language"></furo-icon-with-label>
          <furo-icon-with-label icon="last-page"></furo-icon-with-label>
          <furo-icon-with-label icon="launch"></furo-icon-with-label>
          <furo-icon-with-label icon="lightbulb-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="line-style"></furo-icon-with-label>
          <furo-icon-with-label icon="line-weight"></furo-icon-with-label>
          <furo-icon-with-label icon="link"></furo-icon-with-label>
          <furo-icon-with-label icon="list"></furo-icon-with-label>
          <furo-icon-with-label icon="lock"></furo-icon-with-label>
          <furo-icon-with-label icon="lock-open"></furo-icon-with-label>
          <furo-icon-with-label icon="lock-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="low-priority"></furo-icon-with-label>
          <furo-icon-with-label icon="loyalty"></furo-icon-with-label>
          <furo-icon-with-label icon="mail"></furo-icon-with-label>
          <furo-icon-with-label icon="markunread"></furo-icon-with-label>
          <furo-icon-with-label icon="markunread-mailbox"></furo-icon-with-label>
          <furo-icon-with-label icon="menu"></furo-icon-with-label>
          <furo-icon-with-label icon="more-horiz"></furo-icon-with-label>
          <furo-icon-with-label icon="more-vert"></furo-icon-with-label>
          <furo-icon-with-label icon="motorcycle"></furo-icon-with-label>
          <furo-icon-with-label icon="move-to-inbox"></furo-icon-with-label>
          <furo-icon-with-label icon="next-week"></furo-icon-with-label>
          <furo-icon-with-label icon="note-add"></furo-icon-with-label>
          <furo-icon-with-label icon="offline-pin"></furo-icon-with-label>
          <furo-icon-with-label icon="opacity"></furo-icon-with-label>
          <furo-icon-with-label icon="open-in-browser"></furo-icon-with-label>
          <furo-icon-with-label icon="open-in-new"></furo-icon-with-label>
          <furo-icon-with-label icon="open-with"></furo-icon-with-label>
          <furo-icon-with-label icon="pageview"></furo-icon-with-label>
          <furo-icon-with-label icon="pan-tool"></furo-icon-with-label>
          <furo-icon-with-label icon="payment"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-camera-mic"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-contact-calendar"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-data-setting"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-device-information"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-identity"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-media"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-phone-msg"></furo-icon-with-label>
          <furo-icon-with-label icon="perm-scan-wifi"></furo-icon-with-label>
          <furo-icon-with-label icon="pets"></furo-icon-with-label>
          <furo-icon-with-label icon="picture-in-picture"></furo-icon-with-label>
          <furo-icon-with-label icon="picture-in-picture-alt"></furo-icon-with-label>
          <furo-icon-with-label icon="play-for-work"></furo-icon-with-label>
          <furo-icon-with-label icon="polymer"></furo-icon-with-label>
          <furo-icon-with-label icon="power-settings-new"></furo-icon-with-label>
          <furo-icon-with-label icon="pregnant-woman"></furo-icon-with-label>
          <furo-icon-with-label icon="print"></furo-icon-with-label>
          <furo-icon-with-label icon="query-builder"></furo-icon-with-label>
          <furo-icon-with-label icon="question-answer"></furo-icon-with-label>
          <furo-icon-with-label icon="radio-button-checked"></furo-icon-with-label>
          <furo-icon-with-label icon="radio-button-unchecked"></furo-icon-with-label>
          <furo-icon-with-label icon="receipt"></furo-icon-with-label>
          <furo-icon-with-label icon="record-voice-over"></furo-icon-with-label>
          <furo-icon-with-label icon="redeem"></furo-icon-with-label>
          <furo-icon-with-label icon="redo"></furo-icon-with-label>
          <furo-icon-with-label icon="refresh"></furo-icon-with-label>
          <furo-icon-with-label icon="remove"></furo-icon-with-label>
          <furo-icon-with-label icon="remove-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="remove-circle-outline"></furo-icon-with-label>
          <furo-icon-with-label icon="remove-shopping-cart"></furo-icon-with-label>
          <furo-icon-with-label icon="reorder"></furo-icon-with-label>
          <furo-icon-with-label icon="reply"></furo-icon-with-label>
          <furo-icon-with-label icon="reply-all"></furo-icon-with-label>
          <furo-icon-with-label icon="report"></furo-icon-with-label>
          <furo-icon-with-label icon="report-problem"></furo-icon-with-label>
          <furo-icon-with-label icon="restore"></furo-icon-with-label>
          <furo-icon-with-label icon="restore-page"></furo-icon-with-label>
          <furo-icon-with-label icon="room"></furo-icon-with-label>
          <furo-icon-with-label icon="rounded-corner"></furo-icon-with-label>
          <furo-icon-with-label icon="rowing"></furo-icon-with-label>
          <furo-icon-with-label icon="save"></furo-icon-with-label>
          <furo-icon-with-label icon="schedule"></furo-icon-with-label>
          <furo-icon-with-label icon="search"></furo-icon-with-label>
          <furo-icon-with-label icon="select-all"></furo-icon-with-label>
          <furo-icon-with-label icon="send"></furo-icon-with-label>
          <furo-icon-with-label icon="settings"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-applications"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-backup-restore"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-bluetooth"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-brightness"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-cell"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-ethernet"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-input-antenna"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-input-component"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-input-composite"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-input-hdmi"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-input-svideo"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-overscan"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-phone"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-power"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-remote"></furo-icon-with-label>
          <furo-icon-with-label icon="settings-voice"></furo-icon-with-label>
          <furo-icon-with-label icon="shop"></furo-icon-with-label>
          <furo-icon-with-label icon="shop-two"></furo-icon-with-label>
          <furo-icon-with-label icon="shopping-basket"></furo-icon-with-label>
          <furo-icon-with-label icon="shopping-cart"></furo-icon-with-label>
          <furo-icon-with-label icon="sort"></furo-icon-with-label>
          <furo-icon-with-label icon="speaker-notes"></furo-icon-with-label>
          <furo-icon-with-label icon="speaker-notes-off"></furo-icon-with-label>
          <furo-icon-with-label icon="spellcheck"></furo-icon-with-label>
          <furo-icon-with-label icon="star"></furo-icon-with-label>
          <furo-icon-with-label icon="star-border"></furo-icon-with-label>
          <furo-icon-with-label icon="star-half"></furo-icon-with-label>
          <furo-icon-with-label icon="stars"></furo-icon-with-label>
          <furo-icon-with-label icon="store"></furo-icon-with-label>
          <furo-icon-with-label icon="subdirectory-arrow-left"></furo-icon-with-label>
          <furo-icon-with-label icon="subdirectory-arrow-right"></furo-icon-with-label>
          <furo-icon-with-label icon="subject"></furo-icon-with-label>
          <furo-icon-with-label icon="supervisor-account"></furo-icon-with-label>
          <furo-icon-with-label icon="swap-horiz"></furo-icon-with-label>
          <furo-icon-with-label icon="swap-vert"></furo-icon-with-label>
          <furo-icon-with-label icon="swap-vertical-circle"></furo-icon-with-label>
          <furo-icon-with-label icon="system-update-alt"></furo-icon-with-label>
          <furo-icon-with-label icon="tab"></furo-icon-with-label>
          <furo-icon-with-label icon="tab-unselected"></furo-icon-with-label>
          <furo-icon-with-label icon="text-format"></furo-icon-with-label>
          <furo-icon-with-label icon="theaters"></furo-icon-with-label>
          <furo-icon-with-label icon="thumb-down"></furo-icon-with-label>
          <furo-icon-with-label icon="thumb-up"></furo-icon-with-label>
          <furo-icon-with-label icon="thumbs-up-down"></furo-icon-with-label>
          <furo-icon-with-label icon="timeline"></furo-icon-with-label>
          <furo-icon-with-label icon="toc"></furo-icon-with-label>
          <furo-icon-with-label icon="today"></furo-icon-with-label>
          <furo-icon-with-label icon="toll"></furo-icon-with-label>
          <furo-icon-with-label icon="touch-app"></furo-icon-with-label>
          <furo-icon-with-label icon="track-changes"></furo-icon-with-label>
          <furo-icon-with-label icon="translate"></furo-icon-with-label>
          <furo-icon-with-label icon="trending-down"></furo-icon-with-label>
          <furo-icon-with-label icon="trending-flat"></furo-icon-with-label>
          <furo-icon-with-label icon="trending-up"></furo-icon-with-label>
          <furo-icon-with-label icon="turned-in"></furo-icon-with-label>
          <furo-icon-with-label icon="turned-in-not"></furo-icon-with-label>
          <furo-icon-with-label icon="unarchive"></furo-icon-with-label>
          <furo-icon-with-label icon="undo"></furo-icon-with-label>
          <furo-icon-with-label icon="unfold-less"></furo-icon-with-label>
          <furo-icon-with-label icon="unfold-more"></furo-icon-with-label>
          <furo-icon-with-label icon="update"></furo-icon-with-label>
          <furo-icon-with-label icon="verified-user"></furo-icon-with-label>
          <furo-icon-with-label icon="view-agenda"></furo-icon-with-label>
          <furo-icon-with-label icon="view-array"></furo-icon-with-label>
          <furo-icon-with-label icon="view-carousel"></furo-icon-with-label>
          <furo-icon-with-label icon="view-column"></furo-icon-with-label>
          <furo-icon-with-label icon="view-day"></furo-icon-with-label>
          <furo-icon-with-label icon="view-headline"></furo-icon-with-label>
          <furo-icon-with-label icon="view-list"></furo-icon-with-label>
          <furo-icon-with-label icon="view-module"></furo-icon-with-label>
          <furo-icon-with-label icon="view-quilt"></furo-icon-with-label>
          <furo-icon-with-label icon="view-stream"></furo-icon-with-label>
          <furo-icon-with-label icon="view-week"></furo-icon-with-label>
          <furo-icon-with-label icon="visibility"></furo-icon-with-label>
          <furo-icon-with-label icon="visibility-off"></furo-icon-with-label>
          <furo-icon-with-label icon="warning"></furo-icon-with-label>
          <furo-icon-with-label icon="watch-later"></furo-icon-with-label>
          <furo-icon-with-label icon="weekend"></furo-icon-with-label>
          <furo-icon-with-label icon="work"></furo-icon-with-label>
          <furo-icon-with-label icon="youtube-searched-for"></furo-icon-with-label>
          <furo-icon-with-label icon="zoom-in"></furo-icon-with-label>
          <furo-icon-with-label icon="zoom-out"></furo-icon-with-label>
     </div>
      
      
      
      <h2>Iconset baseIcons</h2>
      <p><pre>
        import {AvIcons} from "@furo/layout/iconsets/avIcons";
        Iconset.registerIconset("av", AvIcons);
      </pre></p>
      <furo-demo-snippet style="height: 500px">
        <template>
          <furo-vertical-scroller>
          <furo-icon-with-label icon="av:airplay"></furo-icon-with-label>
          <furo-icon-with-label icon="av:album"></furo-icon-with-label>
          </furo-vertical-scroller>
        </template>
      </furo-demo-snippet>
    `;
  }
}

window.customElements.define('demo-furo-icon-list', DemoFuroIconList );
