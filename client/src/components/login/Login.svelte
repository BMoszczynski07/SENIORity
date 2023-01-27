<script>
  import "../../scss/login.scss";
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import { isUserLoggedIn } from "../../shared/User";
  import Background from "./Background.svelte";
  import Container from "./Container.svelte";
  import loginPhoto1 from "../../assets/login-photo-1.jpg";

  onMount(() => {
    if ($isUserLoggedIn === true) push("/");
  });
</script>

<main
  class="login"
  style="background-image: url('{loginPhoto1}'); background-size: 100%;"
>
  <Background />
  <Container />
</main>
