<script>
  import "../../scss/counter.scss";
  import { SiteThemes } from "../../shared/Options";

  export let counter;
</script>

<div
  class="tool"
  class:tool--dark-mode={$SiteThemes.theme === "dark"}
  class:tool--on={counter}
>
  <div class="tool__counter">
    <div class="tool__digit">2</div>
    <div class="tool__digit">1</div>
    <div class="tool__digit">3</div>
    <div class="tool__digit">7</div>
  </div>
  <span class="tool__underline" />
  <h5 class="tool__label">Tyle już osób skorzystało z naszej platformy!</h5>
</div>
