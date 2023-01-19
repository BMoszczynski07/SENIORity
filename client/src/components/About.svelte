<script>
  import "../scss/about.scss";
  import aboutBg from "../assets/about-bg.jpg";
  import { onDestroy, onMount } from "svelte";

  export let tiles;
  export let handleTilesAnimate;

  onMount(() => {
    document.addEventListener("scroll", handleTilesAnimate);
  });

  onDestroy(() => {
    document.removeEventListener("scroll", handleTilesAnimate);
  });
</script>

<section class="about --main-page__section">
  <img src={aboutBg} alt="bg" class="about__img" />

  <div class="about__content">
    <h1 class="about__title">Seniority to przede wszystkim:</h1>

    <div class="about__tiles">
      <div class="about__tile" class:about__tile--on={tiles} style="--x: 0.2">
        <span class="about__i"> UI </span>
        <p class="about__desc">
          Przejrzysty i czytelny wygląd strony zapewniający wszystkim
          odwiedzającym czytelnie przemieszczanie się po niej
        </p>
      </div>

      <div class="about__tile" class:about__tile--on={tiles} style="--x: 0.4">
        <span class="about__i"> UI </span>
        <p class="about__desc">
          Przejrzysty i czytelny wygląd strony zapewniający wszystkim
          odwiedzającym czytelnie przemieszczanie się po niej
        </p>
      </div>

      <div class="about__tile" class:about__tile--on={tiles} style="--x: 0.6">
        <span class="about__i"> UI </span>
        <p class="about__desc">
          Przejrzysty i czytelny wygląd strony zapewniający wszystkim
          odwiedzającym czytelnie przemieszczanie się po niej
        </p>
      </div>
    </div>
  </div>
</section>
