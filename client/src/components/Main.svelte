<script>
  import { SiteThemes } from "../shared/Options";
  import "../scss/main.scss";
  import NavComponent from "./Nav.svelte";
  import StartPage from "./StartPage.svelte";
  import Counter from "./Counter.svelte";
  import Faq from "./FAQ.svelte";
  import Settings from "./Settings.svelte";
  import About from "./About.svelte";
  import Footer from "./Footer.svelte";
  import { onMount } from "svelte";
  import { isUserLoggedIn } from "../shared/User";

  const sections = document.querySelectorAll("section");

  let counter = false;
  let counterOnFirst = 0;
  let counterOff = window.innerHeight * 2;

  let faq = false;
  let faqOffSecond = window.innerHeight;
  let faqOnFirst = (window.innerHeight * 2) / 1.35;
  let faqOff = (window.innerHeight * 3) / 1.25;

  let startPageOnFirst = 0;
  let startPageOnSecond = window.innerHeight / 2 - 70;
  let startPageOff = window.innerHeight;

  let startPage = true;

  let tilesOn = 1700;
  let tilesOff = 1500;

  let tiles = false;

  const handleElemsAnimate = () => {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    // startPage animate
    if (
      (scrollTop === startPageOnFirst && !startPage) ||
      (scrollTop > startPageOff && startPage) ||
      (scrollTop < startPageOnSecond && !startPage)
    )
      startPage = !startPage;

    // counter animate
    if (
      (scrollTop === counterOnFirst && counter) ||
      (scrollTop > counterOnFirst && scrollTop <= counterOff && !counter) ||
      (scrollTop > counterOff && counter)
    )
      counter = !counter;

    // faq animate
    if (
      (scrollTop < faqOffSecond && faq) ||
      (scrollTop > faqOnFirst && scrollTop <= faqOff && !faq) ||
      (scrollTop > faqOff && faq)
    )
      faq = !faq;

    // about animate
    if ((scrollTop > tilesOn && !tiles) || (scrollTop < tilesOff && tiles))
      tiles = !tiles;
  };

  onMount(() => {
    if ($isUserLoggedIn === false) {
      document.addEventListener("scroll", handleElemsAnimate);
    } else {
      // do something
    }

    return () => {
      document.removeEventListener("scroll", handleElemsAnimate);
    };
  });
</script>

<div class="main" class:main--dark-theme={$SiteThemes.theme === "dark"}>
  <NavComponent />
  <article class="main__articles">
    <StartPage {startPage} />
    <Counter {counter} />
    <Faq {faq} />
    <About {tiles} />
  </article>
  <Settings />
  <Footer />
</div>
