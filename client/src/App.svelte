<script>
  import Router from "svelte-spa-router";
  import Login from "./components/Login.svelte";
  import Main from "./components/Main.svelte";
  import NotFound from "./components/NotFound.svelte";
  import Footer from "./components/Footer.svelte";

  let routes = {
    "/": Main,
    "/login": Login,
    "*": NotFound,
  };
</script>

<main>
  <Router {routes} />
  <Footer />
</main>
