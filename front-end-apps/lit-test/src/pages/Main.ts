import {css, html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import '../components/Button'

@customElement('main-page')
export class MainPage extends LitElement {
  render() {
    return html`
      <div>
        <h1>Hello Main</h1>
        <l-button>sign in / sign up</l-button>
      </div>
    `
  }
}
