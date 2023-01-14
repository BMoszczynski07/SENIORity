<script>
  import { DarkTheme } from "../shared/Options";
  import "../scss/main.scss";
  import NavComponent from "./Nav.svelte";
  import StartPage from "./StartPage.svelte";
  import Counter from "./Counter.svelte";
  import Faq from "./FAQ.svelte";
  import Settings from "./Settings.svelte";
</script>

<div class="main" class:main--dark-theme={$DarkTheme === true}>
  <NavComponent />
  <article class="main__articles">
    <StartPage />
    <Counter />
    <Faq />
  </article>
  <Settings />
</div>
