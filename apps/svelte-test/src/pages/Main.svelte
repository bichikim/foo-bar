<script>
  import {Link} from 'svelte-routing'
  import Button from 'src/components/Button.svelte'
</script>
<main>
  <div>
    hello
    <Link to="/sign">
      <Button>Sign In / Sign Up</Button>
    </Link>
  </div>
</main>
