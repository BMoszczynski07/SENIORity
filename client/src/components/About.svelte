<script>
  import "../scss/about.scss";
  import aboutBg from "../assets/about-bg.jpg";

  export let tiles;
</script>

<section class="about --main-page__section">
  <img src={aboutBg} alt="bg" class="about__img" />

  <div class="about__content">
    <h1 class="about__title">Seniority to przede wszystkim:</h1>

    <div class="about__tiles">
      <div class="about__tile" class:about__tile--on={tiles} style="--x: 0s">
        <span class="about__i"> UI </span>
        <p class="about__desc">
          Przejrzysty i czytelny wygląd strony zapewniający wszystkim
          odwiedzającym czytelnie przemieszczanie się po niej
        </p>
      </div>

      <div class="about__tile" class:about__tile--on={tiles} style="--x: 0.2s">
        <span class="about__i"><i class="fa-solid fa-people-group" /></span>
        <p class="about__desc">
          Uprzejma społeczność osób gotowych pomóc Ci z każdym Twoim problemem,
          z którym się napotkasz
        </p>
      </div>

      <div class="about__tile" class:about__tile--on={tiles} style="--x: 0.4s">
        <span class="about__i"><i class="fa-solid fa-gears" /></span>
        <p class="about__desc">
          Sprawna moderacja nadzorująca kontent na platformie i usuwająca
          niepożądane materiały
        </p>
      </div>
    </div>
  </div>
</section>
