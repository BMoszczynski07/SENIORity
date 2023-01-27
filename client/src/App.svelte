<script>
  import Router from "svelte-spa-router";
  import Login from "./components/login/Login.svelte";
  import Main from "./components/main/Main.svelte";
  import Settings from "./components/main/Settings.svelte";
  import NotFound from "./components/not-found/NotFound.svelte";
  import Register from "./components/register/Register.svelte";

  let routes = {
    "/": Main,
    "/login": Login,
    "/register": Register,
    "*": NotFound,
  };
</script>

<div>
  <Router {routes} />
  <Settings />
</div>
