import {render} from 'solid-js/web'
import {Router} from '@solidjs/router'
import {Root} from 'src/Root'
import 'src/index.css'

render(
  () => (
    <Router>
      <Root />
    </Router>
  ),
  document.querySelector('#app'),
)
