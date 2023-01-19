<script>
  import { DarkTheme } from "../shared/Options";
  import "../scss/main.scss";
  import NavComponent from "./Nav.svelte";
  import StartPage from "./StartPage.svelte";
  import Counter from "./Counter.svelte";
  import Faq from "./FAQ.svelte";
  import Settings from "./Settings.svelte";
  import About from "./About.svelte";
  import Footer from "./Footer.svelte";
  import { onMount } from "svelte";

  let startPageOnFirst = 0;
  let startPageOnSecond = window.innerHeight / 2 - 70;
  let startPageOff = window.innerHeight;

  let startPage = true;

  let tilesOn = 1700;
  let tilesOff = 1500;

  let tiles = false;

  const handleTilesAnimate = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    if (
      (scrollTop === startPageOnFirst && !startPage) ||
      (scrollTop > startPageOff && startPage)
    )
      startPage = !startPage;

    if ((scrollTop > tilesOn && !tiles) || (scrollTop < tilesOff && tiles))
      tiles = !tiles;
  };

  onMount(() => {
    document.addEventListener("scroll", handleTilesAnimate);

    return () => {
      document.removeEventListener("scroll", handleTilesAnimate);
    };
  });
</script>

<div class="main" class:main--dark-theme={$DarkTheme === true}>
  <NavComponent />
  <article class="main__articles">
    <StartPage {startPage} />
    <Counter />
    <Faq />
    <About {tiles} />
  </article>
  <Settings />
  <Footer />
</div>
