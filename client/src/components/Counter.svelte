<script>
  import "../scss/counter.scss";
  import person from "../assets/person.svg";
  import CounterTool from "./CounterTool.svelte";
</script>

<section class="counter">
  <div
    class="counter__container"
    style="background-image: url('../assets/layout-bg.png')"
  >
    <CounterTool />
    <img src={person} alt="person" class="counter__person" />
    <header class="counter__title">
      Seniority to platforma powstała w ramach projektu, której celem jest
      szerzenie wiedzy technologicznej wśród osób starszych i ludzi borykających
      się z trudnościami podczas korzystania z nowoczesnych technologii, aby
      pomóc im żyć w nowoczesnym społeczeństwie
    </header>
  </div>
</section>
