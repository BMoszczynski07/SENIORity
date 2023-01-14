<script>
  import "../scss/settings.scss";
  import { Font, Preferences, handleChangeFontSize } from "../shared/Options";
  let settings = false;
</script>

<div class="settings" class:settings--on={settings}>
  <aside class="settings__list">
    <header class="settings__header">
      <span class="settings__icon"
        ><i class="fa-solid fa-gears settings_i" /></span
      >
      <h1 class="settings__title">Ustawienia</h1>
    </header>

    <div class="settings__input-group">
      <h1 class="settings__input-title">Rozmiar czcionki</h1>
      <div class="settings__input-container">
        <button
          class="settings__input-btn"
          on:click={() => {
            handleChangeFontSize({ type: "-" });
          }}>-</button
        ><input
          type="number"
          placeholder="Rozmiar"
          bind:value={$Font.size}
          class="settings__input"
        /><button
          class="settings__input-btn"
          on:click={() => {
            handleChangeFontSize({ type: "+" });
          }}>+</button
        >
      </div>
    </div>

    <div class="settings__input-group">
      <h1 class="settings__input-title">Czcionka nagłówka</h1>
      <div class="settings__input-container">
        <select
          class="settings__input-selection settings__input"
          bind:value={$Font.headingFamily}
          style="font-family: {$Font.headingFamily}, sans-serif"
        >
          <option
            value="DM Sans"
            style="font-family: 'DM Sans', sans-serif;"
            class="settings__option">DM Sans</option
          >
          <option
            value="Roboto"
            class="settings__option"
            style="font-family: 'Roboto', sans-serif; font-weight: 500;"
            >Roboto</option
          >
          <option
            value="Inter"
            class="settings__option"
            style="font-family: 'Inter', sans-serif;">Inter</option
          >
          <option
            value="Be Vietnam Pro"
            class="settings__option"
            style="font-family: 'Be Vietnam Pro', sans-serif;"
            >Be Vietnam Pro</option
          >
          <option
            value="Lato"
            class="settings__option"
            style="font-family: 'Lato', sans-serif;">Lato</option
          >
          <option
            value="Raleway"
            class="settings__option"
            style="font-family: 'Raleway', sans-serif;">Raleway</option
          >
          <option
            value="Arial"
            class="settings__option"
            style="font-family: 'Arial';">Arial</option
          >
          <option
            value="Helvetica"
            class="settings__option"
            style="font-family: 'Helvetica';">Helvetica</option
          >
        </select>
      </div>
    </div>

    <div class="settings__input-group">
      <h1 class="settings__input-title">Czcionka tekstu</h1>
      <div class="settings__input-container">
        <select
          class="settings__input-selection settings__input"
          bind:value={$Font.contentFamily}
          style="font-family: {$Font.contentFamily}, sans-serif"
        >
          <option
            value="DM Sans"
            style="font-family: 'DM Sans', sans-serif;"
            class="settings__option">DM Sans</option
          >
          <option
            value="Roboto"
            class="settings__option"
            style="font-family: 'Roboto', sans-serif; font-weight: 500;"
            >Roboto</option
          >
          <option
            value="Inter"
            class="settings__option"
            style="font-family: 'Inter', sans-serif;">Inter</option
          >
          <option
            value="Be Vietnam Pro"
            class="settings__option"
            style="font-family: 'Be Vietnam Pro', sans-serif;"
            >Be Vietnam Pro</option
          >
          <option
            value="Lato"
            class="settings__option"
            style="font-family: 'Lato', sans-serif;">Lato</option
          >
          <option
            value="Raleway"
            class="settings__option"
            style="font-family: 'Raleway', sans-serif;">Raleway</option
          >
          <option
            value="Arial"
            class="settings__option"
            style="font-family: 'Arial';">Arial</option
          >
          <option
            value="Helvetica"
            class="settings__option"
            style="font-family: 'Helvetica';">Helvetica</option
          >
        </select>
      </div>
    </div>

    <div class="settings__input-group settings__input-group--type-checkbox">
      <label class="settings__checkbox-container">
        <input
          type="checkbox"
          bind:value={$Preferences.underlineAnchors}
          class="settings__checkbox"
        />

        <span class="settings__checkmark" />
        <h5 class="settings__checkbox-label">Podkreślone linki</h5>
      </label>
    </div>
  </aside>
  <button
    class="settings__btn"
    on:click={() => {
      settings = !settings;
    }}
  >
    <i class="fa-solid fa-wheelchair settings__wheelchair" />
  </button>
</div>
