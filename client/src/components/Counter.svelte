<script>
  import "../scss/counter.scss";
  import person from "../assets/person.svg";
  import CounterTool from "./CounterTool.svelte";
  import layout from "../assets/layout-bg.png";

  export let counter;
</script>

<section class="counter --main-page__section">
  <div class="counter__container" style="background-image: url({layout})">
    <CounterTool {counter} />
    <img
      src={person}
      alt="person"
      class="counter__person"
      class:counter__person--on={counter}
    />
    <header class="counter__title" class:counter__title--on={counter}>
      Seniority to platforma powstała w ramach projektu, której celem jest
      szerzenie wiedzy technologicznej wśród osób starszych i ludzi borykających
      się z trudnościami podczas korzystania z nowoczesnych technologii, aby
      pomóc im żyć w nowoczesnym społeczeństwie
    </header>
  </div>
</section>
