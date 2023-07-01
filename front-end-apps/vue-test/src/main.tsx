import {createApp} from 'vue'
import {Root} from 'src/Root'
import {createRouter} from 'src/routes'
import 'src/index.css'

const bootstrap = async () => {
  const app = createApp(Root)

  const router = createRouter()

  app.use(router)

  await router.isReady()

  app.mount('#app')
}

bootstrap()
