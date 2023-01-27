<script>
  import "../../scss/settings.scss";
  import {
    Font,
    handleChangeFontSize,
    SiteThemes,
    handleSwitchTheme,
    handleRestore,
    handleToggleAnchors,
    Preferences,
  } from "../../shared/Options";

  import FontsList from "../../shared/FontsList";

  let settings = false;

  let themeSelected = $SiteThemes.theme === "light" ? 0 : 1;

  $: {
    themeSelected = $SiteThemes.theme === "light" ? 0 : 1;
  }

  const handleSwitchThemeSelect = (id) => {
    if (id === themeSelected) return;
    themeSelected = id;
    handleSwitchTheme();
  };
</script>

<div class="settings" class:settings--on={settings}>
  <aside class="settings__list">
    <div class="settings__list-scrollable">
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
            min="0.50"
            max="1.5"
            step="0.05"
            on:input={(e) => {
              if (e.target.value > 1.5) {
                e.target.value = 1.5;
              } else if (e.target.value < 0.5) {
                e.target.value = 0.5;
              }
            }}
            type="number"
            placeholder="Rozmiar"
            bind:value={$Font.size}
            class="settings__input settings__input--font-size"
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
            {#each $FontsList as font}
              <option
                value={font}
                style="font-family: {font}, sans-serif; font-weight: 500;"
                class="settings__option">{font}</option
              >
            {/each}
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
            {#each $FontsList as font}
              <option
                value={font}
                style="font-family: {font}, sans-serif; font-weight: 500;"
                class="settings__option">{font}</option
              >
            {/each}
          </select>
        </div>
      </div>

      <div
        class="settings__input-group settings__input-group--type-checkbox settings__input-group--type-checkbox--first"
      >
        <label class="global__checkbox-container">
          <input
            type="checkbox"
            on:click={handleToggleAnchors}
            checked={$Preferences.underlineAnchors}
            class="global__checkbox"
          />

          <span class="global__checkmark" />
          <h5 class="settings__checkbox-label">Podkreślone linki</h5>
        </label>
      </div>

      <div class="settings__input-group">
        <div class="settings__themes">
          <h1 class="settings__themes-title">Motywy</h1>
          <button
            class="settings__theme settings__theme--light"
            class:settings__theme--selected={themeSelected === 0}
            on:click={() => {
              handleSwitchThemeSelect(0);
            }}
          /><button
            class="settings__theme settings__theme--dark"
            class:settings__theme--selected={themeSelected === 1}
            on:click={() => {
              handleSwitchThemeSelect(1);
            }}
          />
        </div>
      </div>

      <button class="settings__restore-btn" on:click={handleRestore}
        >Reset ustawień</button
      >
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
