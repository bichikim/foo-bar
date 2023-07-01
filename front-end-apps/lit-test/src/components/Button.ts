import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('l-button')
export class LButton extends LitElement {
  render() {
    return html` <button class="btn">OMG<slot></slot></button> `
  }
}
