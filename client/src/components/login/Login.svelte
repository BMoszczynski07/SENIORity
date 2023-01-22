<script>
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import { isUserLoggedIn } from "../../shared/User";

  onMount(() => {
    if ($isUserLoggedIn === true) push("/");
  });
</script>

<h1>This is login page</h1>
