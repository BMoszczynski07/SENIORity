<script>
  import { push } from "svelte-spa-router";
  import "../scss/main.scss";
  import "../scss/nav.scss";
  import { handleSwitchTheme, DarkTheme } from "../shared/Options";

  let search;

  const handleRedirectToLogin = () => {
    push("/login");
  };

  const handleRedirectToRegister = () => {
    push("/register");
  };
</script>

<nav class="main__nav">
  <div
    class="main__nav-container"
    class:main__nav-container--dark-theme={$DarkTheme === true}
  >
    <div class="site__logo" class:site__logo--dark-theme={$DarkTheme === true}>
      Senior<span
        class="site__logo--light"
        class:site__logo--light--dark-theme={$DarkTheme === true}>ity</span
      >.pl
    </div>
    <div class="main__search-input">
      <div
        class="main__microphone-container"
        class:main__microphone-container--dark-theme={$DarkTheme === true}
      >
        <i
          class="fa-solid fa-microphone main__microphone"
          class:main__microphone--dark-theme={$DarkTheme === true}
        />
      </div>
      <input
        class:main__search--dark-theme={$DarkTheme === true}
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
          class:main__nav-text--dark-theme={$DarkTheme === true}>Pytania</a
        ><a
          href="/#"
          class="main__nav-text"
          class:main__nav-text--dark-theme={$DarkTheme === true}>Pomoc</a
        >
      </div>
      <div class="main__actions">
        <button
          class="main__sign-up-btn main__sign-up-btn--login"
          on:click={handleRedirectToLogin}>Zaloguj się</button
        >
        <button
          class:main__sign-up-btn--register--dark-theme={$DarkTheme === true}
          class="main__sign-up-btn main__sign-up-btn--register"
          on:click={handleRedirectToRegister}
        >
          Zarejestruj się</button
        >
        <button
          class="main__logo-moon"
          class:main__logo-moon--dark-theme={$DarkTheme === true}
          on:click={handleSwitchTheme}
        >
          <i class="main__i fa-regular fa-moon" />
        </button>
      </div>
    </div>
  </div>
</nav>
