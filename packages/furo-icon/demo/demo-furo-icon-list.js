import {LitElement, html, css} from 'lit-element';
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
            
            padding-right: var(--spacing);
        }

        :host([hidden]) {
            display: none;
        }

        h2 {
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
      <p>
      <pre>
        import {FuroBaseIcons} from "@furo/icon/iconsets/baseIcons";
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


      <h2>Iconset avIcons</h2>
      <p>
      <pre>
        import {AvIcons} from "@furo/icon/iconsets/avIcons";
        Iconset.registerIconset("av", AvIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="av:add-to-queue"></furo-icon-with-label>
        <furo-icon-with-label icon="av:airplay"></furo-icon-with-label>
        <furo-icon-with-label icon="av:album"></furo-icon-with-label>
        <furo-icon-with-label icon="av:art-track"></furo-icon-with-label>
        <furo-icon-with-label icon="av:av-timer"></furo-icon-with-label>
        <furo-icon-with-label icon="av:branding-watermark"></furo-icon-with-label>
        <furo-icon-with-label icon="av:call-to-action"></furo-icon-with-label>
        <furo-icon-with-label icon="av:closed-caption"></furo-icon-with-label>
        <furo-icon-with-label icon="av:equalizer"></furo-icon-with-label>
        <furo-icon-with-label icon="av:explicit"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fast-forward"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fast-rewind"></furo-icon-with-label>
        <furo-icon-with-label icon="av:featured-play-list"></furo-icon-with-label>
        <furo-icon-with-label icon="av:featured-video"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-dvr"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-manual-record"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-new"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-pin"></furo-icon-with-label>
        <furo-icon-with-label icon="av:fiber-smart-record"></furo-icon-with-label>
        <furo-icon-with-label icon="av:forward-10"></furo-icon-with-label>
        <furo-icon-with-label icon="av:forward-30"></furo-icon-with-label>
        <furo-icon-with-label icon="av:forward-5"></furo-icon-with-label>
        <furo-icon-with-label icon="av:games"></furo-icon-with-label>
        <furo-icon-with-label icon="av:hd"></furo-icon-with-label>
        <furo-icon-with-label icon="av:hearing"></furo-icon-with-label>
        <furo-icon-with-label icon="av:high-quality"></furo-icon-with-label>
        <furo-icon-with-label icon="av:library-add"></furo-icon-with-label>
        <furo-icon-with-label icon="av:library-books"></furo-icon-with-label>
        <furo-icon-with-label icon="av:library-music"></furo-icon-with-label>
        <furo-icon-with-label icon="av:loop"></furo-icon-with-label>
        <furo-icon-with-label icon="av:mic"></furo-icon-with-label>
        <furo-icon-with-label icon="av:mic-none"></furo-icon-with-label>
        <furo-icon-with-label icon="av:mic-off"></furo-icon-with-label>
        <furo-icon-with-label icon="av:movie"></furo-icon-with-label>
        <furo-icon-with-label icon="av:music-video"></furo-icon-with-label>
        <furo-icon-with-label icon="av:new-releases"></furo-icon-with-label>
        <furo-icon-with-label icon="av:not-interested"></furo-icon-with-label>
        <furo-icon-with-label icon="av:note"></furo-icon-with-label>
        <furo-icon-with-label icon="av:pause"></furo-icon-with-label>
        <furo-icon-with-label icon="av:pause-circle-filled"></furo-icon-with-label>
        <furo-icon-with-label icon="av:pause-circle-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="av:play-arrow"></furo-icon-with-label>
        <furo-icon-with-label icon="av:play-circle-filled"></furo-icon-with-label>
        <furo-icon-with-label icon="av:play-circle-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="av:playlist-add"></furo-icon-with-label>
        <furo-icon-with-label icon="av:playlist-add-check"></furo-icon-with-label>
        <furo-icon-with-label icon="av:playlist-play"></furo-icon-with-label>
        <furo-icon-with-label icon="av:queue"></furo-icon-with-label>
        <furo-icon-with-label icon="av:queue-music"></furo-icon-with-label>
        <furo-icon-with-label icon="av:queue-play-next"></furo-icon-with-label>
        <furo-icon-with-label icon="av:radio"></furo-icon-with-label>
        <furo-icon-with-label icon="av:recent-actors"></furo-icon-with-label>
        <furo-icon-with-label icon="av:remove-from-queue"></furo-icon-with-label>
        <furo-icon-with-label icon="av:repeat"></furo-icon-with-label>
        <furo-icon-with-label icon="av:repeat-one"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay-10"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay-30"></furo-icon-with-label>
        <furo-icon-with-label icon="av:replay-5"></furo-icon-with-label>
        <furo-icon-with-label icon="av:shuffle"></furo-icon-with-label>
        <furo-icon-with-label icon="av:skip-next"></furo-icon-with-label>
        <furo-icon-with-label icon="av:skip-previous"></furo-icon-with-label>
        <furo-icon-with-label icon="av:slow-motion-video"></furo-icon-with-label>
        <furo-icon-with-label icon="av:snooze"></furo-icon-with-label>
        <furo-icon-with-label icon="av:sort-by-alpha"></furo-icon-with-label>
        <furo-icon-with-label icon="av:stop"></furo-icon-with-label>
        <furo-icon-with-label icon="av:subscriptions"></furo-icon-with-label>
        <furo-icon-with-label icon="av:subtitles"></furo-icon-with-label>
        <furo-icon-with-label icon="av:surround-sound"></furo-icon-with-label>
        <furo-icon-with-label icon="av:video-call"></furo-icon-with-label>
        <furo-icon-with-label icon="av:video-label"></furo-icon-with-label>
        <furo-icon-with-label icon="av:video-library"></furo-icon-with-label>
        <furo-icon-with-label icon="av:videocam"></furo-icon-with-label>
        <furo-icon-with-label icon="av:videocam-off"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-down"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-mute"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-off"></furo-icon-with-label>
        <furo-icon-with-label icon="av:volume-up"></furo-icon-with-label>
        <furo-icon-with-label icon="av:web"></furo-icon-with-label>
        <furo-icon-with-label icon="av:web-asset"></furo-icon-with-label>
      </div>
      
      
      
      <h2>Iconset communicationIcons</h2>
      <p>
      <pre>
        import {CommunicationIcons} from "@furo/icon/iconsets/communicationIcons";
        Iconset.registerIconset("communication", CommunicationIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="communication:business"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-end"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-made"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-merge"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-missed"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-missed-outgoing"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-received"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:call-split"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:chat"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:chat-bubble"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:chat-bubble-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:clear-all"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:comment"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:contact-mail"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:contact-phone"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:contacts"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:dialer-sip"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:dialpad"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:email"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:forum"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:import-contacts"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:import-export"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:invert-colors-off"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:live-help"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:location-off"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:location-on"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:mail-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:message"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:no-sim"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phone"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-erase"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-ring"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:phonelink-setup"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:portable-wifi-off"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:present-to-all"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:ring-volume"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:rss-feed"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:screen-share"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:speaker-phone"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-current-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-current-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-primary-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stay-primary-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:stop-screen-share"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:swap-calls"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:textsms"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:voicemail"></furo-icon-with-label>
        <furo-icon-with-label icon="communication:vpn-key"></furo-icon-with-label>
      </div>
     
      <h2>Iconset deviceIcons</h2>
      <p>
      <pre>
        import {DeviceIcons} from "@furo/icon/iconsets/deviceIcons";
        Iconset.registerIconset("device", DeviceIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="device:access-alarm"></furo-icon-with-label>
        <furo-icon-with-label icon="device:access-alarms"></furo-icon-with-label>
        <furo-icon-with-label icon="device:access-time"></furo-icon-with-label>
        <furo-icon-with-label icon="device:add-alarm"></furo-icon-with-label>
        <furo-icon-with-label icon="device:airplanemode-active"></furo-icon-with-label>
        <furo-icon-with-label icon="device:airplanemode-inactive"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-20"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-30"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-50"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-60"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-80"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-90"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-alert"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-20"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-30"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-50"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-60"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-80"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-90"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-charging-full"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-full"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-std"></furo-icon-with-label>
        <furo-icon-with-label icon="device:battery-unknown"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth-connected"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth-disabled"></furo-icon-with-label>
        <furo-icon-with-label icon="device:bluetooth-searching"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-auto"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-high"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-low"></furo-icon-with-label>
        <furo-icon-with-label icon="device:brightness-medium"></furo-icon-with-label>
        <furo-icon-with-label icon="device:data-usage"></furo-icon-with-label>
        <furo-icon-with-label icon="device:developer-mode"></furo-icon-with-label>
        <furo-icon-with-label icon="device:devices"></furo-icon-with-label>
        <furo-icon-with-label icon="device:dvr"></furo-icon-with-label>
        <furo-icon-with-label icon="device:gps-fixed"></furo-icon-with-label>
        <furo-icon-with-label icon="device:gps-not-fixed"></furo-icon-with-label>
        <furo-icon-with-label icon="device:gps-off"></furo-icon-with-label>
        <furo-icon-with-label icon="device:graphic-eq"></furo-icon-with-label>
        <furo-icon-with-label icon="device:location-disabled"></furo-icon-with-label>
        <furo-icon-with-label icon="device:location-searching"></furo-icon-with-label>
        <furo-icon-with-label icon="device:network-cell"></furo-icon-with-label>
        <furo-icon-with-label icon="device:network-wifi"></furo-icon-with-label>
        <furo-icon-with-label icon="device:nfc"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-lock-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-lock-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-lock-rotation"></furo-icon-with-label>
        <furo-icon-with-label icon="device:screen-rotation"></furo-icon-with-label>
        <furo-icon-with-label icon="device:sd-storage"></furo-icon-with-label>
        <furo-icon-with-label icon="device:settings-system-daydream"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-0-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-1-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-2-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-3-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-4-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-0-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-1-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-2-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-3-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-connected-no-internet-4-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-no-sim"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-null"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-cellular-off"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-0-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-1-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-1-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-2-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-2-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-3-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-3-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-4-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-4-bar-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:signal-wifi-off"></furo-icon-with-label>
        <furo-icon-with-label icon="device:storage"></furo-icon-with-label>
        <furo-icon-with-label icon="device:usb"></furo-icon-with-label>
        <furo-icon-with-label icon="device:wallpaper"></furo-icon-with-label>
        <furo-icon-with-label icon="device:widgets"></furo-icon-with-label>
        <furo-icon-with-label icon="device:wifi-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="device:wifi-tethering"></furo-icon-with-label>
      </div>
     
      <h2>Iconset editorIcons</h2>
      <p>
      <pre>
        import {EditorIcons} from "@furo/icon/iconsets/editorIcons";
        Iconset.registerIconset("editor", EditorIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="editor:attach-file"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:attach-money"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-all"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-bottom"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-clear"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-color"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-horizontal"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-inner"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-left"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-outer"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-right"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-style"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-top"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:border-vertical"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:bubble-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:drag-handle"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-center"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-justify"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-left"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-align-right"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-bold"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-clear"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-color-fill"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-color-reset"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-color-text"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-indent-decrease"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-indent-increase"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-italic"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-line-spacing"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-list-bulleted"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-list-numbered"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-paint"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-quote"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-shapes"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-size"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-strikethrough"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-textdirection-l-to-r"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-textdirection-r-to-l"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:format-underlined"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:functions"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:highlight"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-comment"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-drive-file"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-emoticon"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-invitation"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-link"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:insert-photo"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:linear-scale"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:merge-type"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:mode-comment"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:mode-edit"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:monetization-on"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:money-off"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:multiline-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:pie-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:pie-chart-outlined"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:publish"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:short-text"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:show-chart"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:space-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:strikethrough-s"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:text-fields"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:title"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:vertical-align-bottom"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:vertical-align-center"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:vertical-align-top"></furo-icon-with-label>
        <furo-icon-with-label icon="editor:wrap-text"></furo-icon-with-label>
      </div>
     
      <h2>Iconset hardwareIcons</h2>
      <p>
      <pre>
        import {HardwareIcons} from "@furo/icon/iconsets/hardwareIcons";
        Iconset.registerIconset("hardware", HardwareIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="hardware:cast"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:cast-connected"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:computer"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:desktop-mac"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:desktop-windows"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:developer-board"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:device-hub"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:devices-other"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:dock"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:gamepad"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:headset"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:headset-mic"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-down"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-left"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-right"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-arrow-up"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-backspace"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-capslock"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-hide"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-return"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-tab"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:keyboard-voice"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop-chromebook"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop-mac"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:laptop-windows"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:memory"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:mouse"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phone-android"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phone-iphone"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phonelink"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:phonelink-off"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:power-input"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:router"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:scanner"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:security"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:sim-card"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:smartphone"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:speaker"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:speaker-group"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tablet"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tablet-android"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tablet-mac"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:toys"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:tv"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:videogame-asset"></furo-icon-with-label>
        <furo-icon-with-label icon="hardware:watch"></furo-icon-with-label>
      </div>
          
      <h2>Iconset imageIcons</h2>
      <p>
      <pre>
        import {ImageIcons} from "@furo/icon/iconsets/imageIcons";
        Iconset.registerIconset("image", ImageIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="image:add-a-photo"></furo-icon-with-label>
        <furo-icon-with-label icon="image:add-to-photos"></furo-icon-with-label>
        <furo-icon-with-label icon="image:adjust"></furo-icon-with-label>
        <furo-icon-with-label icon="image:assistant"></furo-icon-with-label>
        <furo-icon-with-label icon="image:assistant-photo"></furo-icon-with-label>
        <furo-icon-with-label icon="image:audiotrack"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-circular"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-linear"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:blur-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-6"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brightness-7"></furo-icon-with-label>
        <furo-icon-with-label icon="image:broken-image"></furo-icon-with-label>
        <furo-icon-with-label icon="image:brush"></furo-icon-with-label>
        <furo-icon-with-label icon="image:burst-mode"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-alt"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-front"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-rear"></furo-icon-with-label>
        <furo-icon-with-label icon="image:camera-roll"></furo-icon-with-label>
        <furo-icon-with-label icon="image:center-focus-strong"></furo-icon-with-label>
        <furo-icon-with-label icon="image:center-focus-weak"></furo-icon-with-label>
        <furo-icon-with-label icon="image:collections"></furo-icon-with-label>
        <furo-icon-with-label icon="image:collections-bookmark"></furo-icon-with-label>
        <furo-icon-with-label icon="image:color-lens"></furo-icon-with-label>
        <furo-icon-with-label icon="image:colorize"></furo-icon-with-label>
        <furo-icon-with-label icon="image:compare"></furo-icon-with-label>
        <furo-icon-with-label icon="image:control-point"></furo-icon-with-label>
        <furo-icon-with-label icon="image:control-point-duplicate"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-16-9"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-3-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-5-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-7-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-din"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-free"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-original"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-rotate"></furo-icon-with-label>
        <furo-icon-with-label icon="image:crop-square"></furo-icon-with-label>
        <furo-icon-with-label icon="image:dehaze"></furo-icon-with-label>
        <furo-icon-with-label icon="image:details"></furo-icon-with-label>
        <furo-icon-with-label icon="image:edit"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-neg-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-neg-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-plus-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-plus-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:exposure-zero"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-1"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-2"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-6"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-7"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-8"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-9"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-9-plus"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-b-and-w"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-center-focus"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-drama"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-frames"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-hdr"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-none"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-tilt-shift"></furo-icon-with-label>
        <furo-icon-with-label icon="image:filter-vintage"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flare"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flash-auto"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flash-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flash-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:flip"></furo-icon-with-label>
        <furo-icon-with-label icon="image:gradient"></furo-icon-with-label>
        <furo-icon-with-label icon="image:grain"></furo-icon-with-label>
        <furo-icon-with-label icon="image:grid-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:grid-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-on"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-strong"></furo-icon-with-label>
        <furo-icon-with-label icon="image:hdr-weak"></furo-icon-with-label>
        <furo-icon-with-label icon="image:healing"></furo-icon-with-label>
        <furo-icon-with-label icon="image:image"></furo-icon-with-label>
        <furo-icon-with-label icon="image:image-aspect-ratio"></furo-icon-with-label>
        <furo-icon-with-label icon="image:iso"></furo-icon-with-label>
        <furo-icon-with-label icon="image:landscape"></furo-icon-with-label>
        <furo-icon-with-label icon="image:leak-add"></furo-icon-with-label>
        <furo-icon-with-label icon="image:leak-remove"></furo-icon-with-label>
        <furo-icon-with-label icon="image:lens"></furo-icon-with-label>
        <furo-icon-with-label icon="image:linked-camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-4"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-5"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-6"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-one"></furo-icon-with-label>
        <furo-icon-with-label icon="image:looks-two"></furo-icon-with-label>
        <furo-icon-with-label icon="image:loupe"></furo-icon-with-label>
        <furo-icon-with-label icon="image:monochrome-photos"></furo-icon-with-label>
        <furo-icon-with-label icon="image:movie-creation"></furo-icon-with-label>
        <furo-icon-with-label icon="image:movie-filter"></furo-icon-with-label>
        <furo-icon-with-label icon="image:music-note"></furo-icon-with-label>
        <furo-icon-with-label icon="image:nature"></furo-icon-with-label>
        <furo-icon-with-label icon="image:nature-people"></furo-icon-with-label>
        <furo-icon-with-label icon="image:navigate-before"></furo-icon-with-label>
        <furo-icon-with-label icon="image:navigate-next"></furo-icon-with-label>
        <furo-icon-with-label icon="image:palette"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-fish-eye"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-horizontal"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-vertical"></furo-icon-with-label>
        <furo-icon-with-label icon="image:panorama-wide-angle"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-album"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-filter"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-library"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-size-select-actual"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-size-select-large"></furo-icon-with-label>
        <furo-icon-with-label icon="image:photo-size-select-small"></furo-icon-with-label>
        <furo-icon-with-label icon="image:picture-as-pdf"></furo-icon-with-label>
        <furo-icon-with-label icon="image:portrait"></furo-icon-with-label>
        <furo-icon-with-label icon="image:remove-red-eye"></furo-icon-with-label>
        <furo-icon-with-label icon="image:rotate-90-degrees-ccw"></furo-icon-with-label>
        <furo-icon-with-label icon="image:rotate-left"></furo-icon-with-label>
        <furo-icon-with-label icon="image:rotate-right"></furo-icon-with-label>
        <furo-icon-with-label icon="image:slideshow"></furo-icon-with-label>
        <furo-icon-with-label icon="image:straighten"></furo-icon-with-label>
        <furo-icon-with-label icon="image:style"></furo-icon-with-label>
        <furo-icon-with-label icon="image:switch-camera"></furo-icon-with-label>
        <furo-icon-with-label icon="image:switch-video"></furo-icon-with-label>
        <furo-icon-with-label icon="image:tag-faces"></furo-icon-with-label>
        <furo-icon-with-label icon="image:texture"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timelapse"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer-10"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer-3"></furo-icon-with-label>
        <furo-icon-with-label icon="image:timer-off"></furo-icon-with-label>
        <furo-icon-with-label icon="image:tonality"></furo-icon-with-label>
        <furo-icon-with-label icon="image:transform"></furo-icon-with-label>
        <furo-icon-with-label icon="image:tune"></furo-icon-with-label>
        <furo-icon-with-label icon="image:view-comfy"></furo-icon-with-label>
        <furo-icon-with-label icon="image:view-compact"></furo-icon-with-label>
        <furo-icon-with-label icon="image:vignette"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-auto"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-cloudy"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-incandescent"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-iridescent"></furo-icon-with-label>
        <furo-icon-with-label icon="image:wb-sunny"></furo-icon-with-label>
      </div>
           
      <h2>Iconset mapsIcons</h2>
      <p>
      <pre>
        import {MapsIcons} from "@furo/icon/iconsets/mapsIcons";
        Iconset.registerIconset("maps", MapsIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="map:add-location"></furo-icon-with-label>
        <furo-icon-with-label icon="map:beenhere"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-bike"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-boat"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-bus"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-car"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-railway"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-run"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-subway"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-transit"></furo-icon-with-label>
        <furo-icon-with-label icon="map:directions-walk"></furo-icon-with-label>
        <furo-icon-with-label icon="map:edit-location"></furo-icon-with-label>
        <furo-icon-with-label icon="map:ev-station"></furo-icon-with-label>
        <furo-icon-with-label icon="map:flight"></furo-icon-with-label>
        <furo-icon-with-label icon="map:hotel"></furo-icon-with-label>
        <furo-icon-with-label icon="map:layers"></furo-icon-with-label>
        <furo-icon-with-label icon="map:layers-clear"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-activity"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-airport"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-atm"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-bar"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-cafe"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-car-wash"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-convenience-store"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-dining"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-drink"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-florist"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-gas-station"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-grocery-store"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-hospital"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-hotel"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-laundry-service"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-library"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-mall"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-movies"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-offer"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-parking"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-pharmacy"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-phone"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-pizza"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-play"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-post-office"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-printshop"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-see"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-shipping"></furo-icon-with-label>
        <furo-icon-with-label icon="map:local-taxi"></furo-icon-with-label>
        <furo-icon-with-label icon="map:map"></furo-icon-with-label>
        <furo-icon-with-label icon="map:my-location"></furo-icon-with-label>
        <furo-icon-with-label icon="map:navigation"></furo-icon-with-label>
        <furo-icon-with-label icon="map:near-me"></furo-icon-with-label>
        <furo-icon-with-label icon="map:person-pin"></furo-icon-with-label>
        <furo-icon-with-label icon="map:person-pin-circle"></furo-icon-with-label>
        <furo-icon-with-label icon="map:pin-drop"></furo-icon-with-label>
        <furo-icon-with-label icon="map:place"></furo-icon-with-label>
        <furo-icon-with-label icon="map:rate-review"></furo-icon-with-label>
        <furo-icon-with-label icon="map:restaurant"></furo-icon-with-label>
        <furo-icon-with-label icon="map:restaurant-menu"></furo-icon-with-label>
        <furo-icon-with-label icon="map:satellite"></furo-icon-with-label>
        <furo-icon-with-label icon="map:store-mall-directory"></furo-icon-with-label>
        <furo-icon-with-label icon="map:streetview"></furo-icon-with-label>
        <furo-icon-with-label icon="map:subway"></furo-icon-with-label>
        <furo-icon-with-label icon="map:terrain"></furo-icon-with-label>
        <furo-icon-with-label icon="map:traffic"></furo-icon-with-label>
        <furo-icon-with-label icon="map:train"></furo-icon-with-label>
        <furo-icon-with-label icon="map:tram"></furo-icon-with-label>
        <furo-icon-with-label icon="map:transfer-within-a-station"></furo-icon-with-label>
        <furo-icon-with-label icon="map:zoom-out-map"></furo-icon-with-label>
      </div>
            
      <h2>Iconset notificationIcons</h2>
      <p>
      <pre>
        import {NotificationIcons} from "@furo/icon/iconsets/notificationIcons";
        Iconset.registerIconset("notification", NotificationIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="notification:adb"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-flat"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-flat-angled"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-individual-suite"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-legroom-extra"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-legroom-normal"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-legroom-reduced"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-recline-extra"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:airline-seat-recline-normal"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:bluetooth-audio"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:confirmation-number"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:disc-full"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb-alt"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb-off"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:do-not-disturb-on"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:drive-eta"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:enhanced-encryption"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:event-available"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:event-busy"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:event-note"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:folder-special"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:live-tv"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:mms"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:more"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:network-check"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:network-locked"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:no-encryption"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:ondemand-video"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:personal-video"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-bluetooth-speaker"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-forwarded"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-in-talk"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-locked"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-missed"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:phone-paused"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:power"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:priority-high"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:rv-hookup"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sd-card"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sim-card-alert"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sms"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sms-failed"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sync"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sync-disabled"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:sync-problem"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:system-update"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:tap-and-play"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:time-to-leave"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:vibration"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:voice-chat"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:vpn-lock"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:wc"></furo-icon-with-label>
        <furo-icon-with-label icon="notification:wifi"></furo-icon-with-label>
      </div>
      
      
      <h2>Iconset placesIcons</h2>
      <p>
      <pre>
        import {PlacesIcons} from "@furo/icon/iconsets/placesIcons";
        Iconset.registerIconset("places", PlacesIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="places:ac-unit"></furo-icon-with-label>
        <furo-icon-with-label icon="places:airport-shuttle"></furo-icon-with-label>
        <furo-icon-with-label icon="places:all-inclusive"></furo-icon-with-label>
        <furo-icon-with-label icon="places:beach-access"></furo-icon-with-label>
        <furo-icon-with-label icon="places:business-center"></furo-icon-with-label>
        <furo-icon-with-label icon="places:casino"></furo-icon-with-label>
        <furo-icon-with-label icon="places:child-care"></furo-icon-with-label>
        <furo-icon-with-label icon="places:child-friendly"></furo-icon-with-label>
        <furo-icon-with-label icon="places:fitness-center"></furo-icon-with-label>
        <furo-icon-with-label icon="places:free-breakfast"></furo-icon-with-label>
        <furo-icon-with-label icon="places:golf-course"></furo-icon-with-label>
        <furo-icon-with-label icon="places:hot-tub"></furo-icon-with-label>
        <furo-icon-with-label icon="places:kitchen"></furo-icon-with-label>
        <furo-icon-with-label icon="places:pool"></furo-icon-with-label>
        <furo-icon-with-label icon="places:room-service"></furo-icon-with-label>
        <furo-icon-with-label icon="places:rv-hookup"></furo-icon-with-label>
        <furo-icon-with-label icon="places:smoke-free"></furo-icon-with-label>
        <furo-icon-with-label icon="places:smoking-rooms"></furo-icon-with-label>
        <furo-icon-with-label icon="places:spa"></furo-icon-with-label>
      </div>
      
      
      <h2>Iconset socialIcons</h2>
      <p>
      <pre>
        import {SocialIcons} from "@furo/icon/iconsets/socialIcons";
        Iconset.registerIconset("social", SocialIcons);
      </pre></p>

      <div>
        <furo-icon-with-label icon="social:cake"></furo-icon-with-label>
        <furo-icon-with-label icon="social:domain"></furo-icon-with-label>
        <furo-icon-with-label icon="social:group"></furo-icon-with-label>
        <furo-icon-with-label icon="social:group-add"></furo-icon-with-label>
        <furo-icon-with-label icon="social:location-city"></furo-icon-with-label>
        <furo-icon-with-label icon="social:mood"></furo-icon-with-label>
        <furo-icon-with-label icon="social:mood-bad"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-active"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-none"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-off"></furo-icon-with-label>
        <furo-icon-with-label icon="social:notifications-paused"></furo-icon-with-label>
        <furo-icon-with-label icon="social:pages"></furo-icon-with-label>
        <furo-icon-with-label icon="social:party-mode"></furo-icon-with-label>
        <furo-icon-with-label icon="social:people"></furo-icon-with-label>
        <furo-icon-with-label icon="social:people-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="social:person"></furo-icon-with-label>
        <furo-icon-with-label icon="social:person-add"></furo-icon-with-label>
        <furo-icon-with-label icon="social:person-outline"></furo-icon-with-label>
        <furo-icon-with-label icon="social:plus-one"></furo-icon-with-label>
        <furo-icon-with-label icon="social:poll"></furo-icon-with-label>
        <furo-icon-with-label icon="social:public"></furo-icon-with-label>
        <furo-icon-with-label icon="social:school"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-dissatisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-neutral"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-satisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-very-dissatisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:sentiment-very-satisfied"></furo-icon-with-label>
        <furo-icon-with-label icon="social:share"></furo-icon-with-label>
        <furo-icon-with-label icon="social:whatshot"></furo-icon-with-label>
      </div>
     
    `;
  }
}

window.customElements.define('demo-furo-icon-list', DemoFuroIconList);
