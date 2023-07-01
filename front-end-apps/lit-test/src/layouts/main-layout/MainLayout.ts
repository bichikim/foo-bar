import {css, html, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('main-layout')
export class MainLayout extends LitElement {
  render() {
    return html`
      <div>
        <h1 class="layout-title">Hello Main Layout</h1>
        <slot></slot>
      </div>
    `
  }

  static styles = css`
    .layout-title {
      color: red;
    }
  `
}
