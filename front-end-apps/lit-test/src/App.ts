import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('l-app')
export class LApp extends LitElement {
  render() {
    return html`<div><slot></slot></div> `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'l-app': LApp
  }
}
