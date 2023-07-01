<script>
  import {Route, Router} from 'svelte-routing'
  import MainLayout from 'layouts/main-layout/MainLayout.svelte'
  export let url = ''
</script>

<Router {url}>
  <Route path="/*">
    <MainLayout>
      <Route path="/" component="{() => import('pages/Main.svelte')}"></Route>
      <Route path="/sign" component="{() => import('pages/Sign.svelte')}"></Route>
    </MainLayout>
  </Route>
</Router>
