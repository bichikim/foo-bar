<script>
  import {Route, Router} from 'svelte-routing'
  import MainLayout from 'src/layouts/main-layout/MainLayout.svelte'
  export let url = ''
</script>

<Router {url}>
  <Route path="/*">
    <MainLayout>
      <Route path="/" component="{() => import('src/pages/Main.svelte')}"></Route>
      <Route path="/sign" component="{() => import('src/pages/Sign.svelte')}"></Route>
    </MainLayout>
  </Route>
</Router>
