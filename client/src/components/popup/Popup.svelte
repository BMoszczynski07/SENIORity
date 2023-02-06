<script>
  import "../../scss/popup.scss";
  import { fade } from "svelte/transition";

  export let res;
  export let ok;
</script>

<div
  class="popup"
  in:fade={{ duration: 200 }}
  out:fade={{ duration: 200 }}
  class:popup--ok={ok}
>
  {#if !ok}
    <i class="popup__i fa-solid fa-triangle-exclamation" />
  {:else}
    <i class="popup__i fa-sharp fa-solid fa-check" />
  {/if}
  <h5 class="popup__text">{res}</h5>
</div>
