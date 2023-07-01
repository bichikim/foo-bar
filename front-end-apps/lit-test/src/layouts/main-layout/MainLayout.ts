import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('main-layout')
export class MainLayout extends LitElement {
  render() {
    return html`
      <div>
        <h1>Hello Main Layout</h1>
        <slot></slot>
      </div>
    `
  }
}
