<script>
  import "../scss/main.scss";
  import "../scss/nav.scss";
  import { handleSwitchTheme, SiteThemes } from "../shared/Options";

  let search;
</script>

<nav class="main__nav">
  <div
    class="main__nav-container"
    class:main__nav-container--dark-theme={$SiteThemes.theme === "dark"}
  >
    <div
      class="site__logo"
      class:site__logo--dark-theme={$SiteThemes.theme === "dark"}
    >
      Senior<span
        class="site__logo--light"
        class:site__logo--light--dark-theme={$SiteThemes.theme === "dark"}
        >ity</span
      >.pl
    </div>
    <div class="main__search-input">
      <div
        class="main__microphone-container"
        class:main__microphone-container--dark-theme={$SiteThemes.theme ===
          "dark"}
      >
        <i
          class="fa-solid fa-microphone main__microphone"
          class:main__microphone--dark-theme={$SiteThemes.theme === "dark"}
        />
      </div>
      <input
        class:main__search--dark-theme={$SiteThemes.theme === "dark"}
        type="search"
        bind:value={search}
        placeholder="Wyszukaj tutaj"
        class="main__search"
      />
    </div>
    <div class="main__nav-right-side">
      <div class="main__faq">
        <a
          href="/#"
          class="main__nav-text"
          class:main__nav-text--dark-theme={$SiteThemes.theme === "dark"}
          >Pytania</a
        ><a
          href="/#"
          class="main__nav-text"
          class:main__nav-text--dark-theme={$SiteThemes.theme === "dark"}
          >Pomoc</a
        >
      </div>
      <div class="main__actions">
        <a href="/#/login" class="main__sign-up-btn main__sign-up-btn--login"
          >Zaloguj się</a
        >
        <a
          href="/#/register"
          class:main__sign-up-btn--register--dark-theme={$SiteThemes.theme ===
            "dark"}
          class="main__sign-up-btn main__sign-up-btn--register"
        >
          Zarejestruj się</a
        >
        <button
          class="main__logo-moon"
          class:main__logo-moon--dark-theme={$SiteThemes.theme === "dark"}
          on:click={handleSwitchTheme}
        >
          <i class="main__i fa-regular fa-moon" />
        </button>
      </div>
    </div>
  </div>
</nav>
