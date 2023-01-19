<script>
  import { DarkTheme } from "../shared/Options";
  import "../scss/main.scss";
  import NavComponent from "./Nav.svelte";
  import StartPage from "./StartPage.svelte";
  import Counter from "./Counter.svelte";
  import Faq from "./FAQ.svelte";
  import Settings from "./Settings.svelte";
  import About from "./About.svelte";

  let tiles = false;
  const sections = document.querySelectorAll(".main__articles");

  let handleTilesAnimate = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    console.log(sections);
  };
</script>

<div class="main" class:main--dark-theme={$DarkTheme === true}>
  <NavComponent />
  <article class="main__articles">
    <StartPage />
    <Counter />
    <Faq />
    <About {handleTilesAnimate} {tiles} />
  </article>
  <Settings />
</div>
