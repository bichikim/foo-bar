import './index.css'
// tailwind does not work in the shadow dom
import {Route, Router} from '@vaadin/router'

function initRouter() {
  const router = new Router(document.querySelector('#app'))

  const routes: Route[] = [
    {
      action: () => import('./pages/Main') as any,
      component: 'main-page',
      path: '/',
    },
    {
      action: () => import('./pages/Sign'),
      component: 'sign-page',
      path: '/sign',
    },
  ]

  const layouts: Route[] = [
    {
      action: () => import('./layouts/main-layout/MainLayout') as any,
      children: [...routes],
      component: 'main-layout',
      path: '',
    },
  ]

  return router.setRoutes([
    {
      action: () => import('./App') as any,
      children: [...layouts],
      component: 'l-app',
      path: '',
    },
  ])
}

window.addEventListener('load', () => initRouter())
