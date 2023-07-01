import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('sign-page')
export class SignPage extends LitElement {
  render() {
    return html` <h1>Hello Sign</h1> `
  }
}
