import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('main-page')
export class MainPage extends LitElement {
  render() {
    return html` <h1>Hello Main</h1> `
  }
}
