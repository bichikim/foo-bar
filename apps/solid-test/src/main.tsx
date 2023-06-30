import {render} from 'solid-js/web'
import {Router} from '@solidjs/router'
import {Root} from './Root'
import './index.css'

render(
  () => (
    <Router>
      <Root />
    </Router>
  ),
  document.querySelector('#app'),
)
