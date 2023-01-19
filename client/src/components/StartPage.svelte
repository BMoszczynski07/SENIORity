<script>
  import "../scss/main.scss";
  import "../scss/startpage.scss";
  import startPage1 from "../assets/start-page-1.svg";
  import startPage2 from "../assets/start-page-2.svg";
  import startPage3 from "../assets/start-page-3.svg";

  export let startPage;
</script>

<section class="main__start-page --main-page__section">
  <img src={startPage1} alt="net-1" class="start__img-1" />
  <img src={startPage1} alt="net-2" class="start__img-2" />
  <img src={startPage2} alt="img-3" class="start__img-3" />
  <img src={startPage3} alt="img-4" class="start__img-4" />

  <header class="start__header">
    <h1
      class="start__title start__title--on"
      class:start__title--on={startPage}
    >
      Witaj w seniority
    </h1>
    <h2
      class="start__subtitle start__subtitle--on"
      class:start__subtitle--on={startPage}
    >
      Cieszymy się, że z nami jesteś
    </h2>
  </header>
</section>
