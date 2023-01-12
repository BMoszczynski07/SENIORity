<script>
  import "../scss/main.scss";
  import { push } from "svelte-spa-router";
  import { handleSwitchTheme, DarkTheme } from "../shared/Options";
  import bgShape1 from "../assets/bg-shape-1.png";
  import bgShape2 from "../assets/bg-shape-2.png";
  import bgShape3 from "../assets/bg-shape-3.png";
  import bgShape4 from "../assets/bg-shape-4.png";
  import bgShape5 from "../assets/bg-shape-5.png";
  import bgShape6 from "../assets/bg-shape-6.png";
  import bgShape7 from "../assets/bg-shape-7.png";
  import bgShape8 from "../assets/bg-shape-8.png";

  let search = "";

  let moonRef;

  const MoonRef = (node) => {
    moonRef = node;
    moonRef.addEventListener("click", () => {
      handleSwitchTheme();
    });
  };

  const handleRedirectToLogin = () => {
    push("/login");
  };

  const handleRedirectToRegister = () => {
    push("/register");
  };
</script>

<div class="main" class:main--dark-theme={$DarkTheme}>
  <nav class="main__nav">
    <div
      class="main__nav-container"
      class:main__nav-container--dark-theme={$DarkTheme}
    >
      <div class="site__logo" class:site__logo--dark-theme={$DarkTheme}>
        Senior<span
          class="site__logo--light"
          class:site__logo--light--dark-theme={$DarkTheme}>ity</span
        >.pl
      </div>
      <div class="main__search-input">
        <div
          class="main__microphone-container"
          class:main__microphone-container--dark-theme={$DarkTheme}
        >
          <i
            class="fa-solid fa-microphone main__microphone"
            class:main__microphone--dark-theme={$DarkTheme}
          />
        </div>
        <input
          class:main__search--dark-theme={$DarkTheme}
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
            class:main__nav-text--dark-theme={$DarkTheme}>Pytania</a
          ><a
            href="/#"
            class="main__nav-text"
            class:main__nav-text--dark-theme={$DarkTheme}>Pomoc</a
          >
        </div>
        <div class="main__actions">
          <button
            class="main__sign-up-btn main__sign-up-btn--login"
            on:click={handleRedirectToLogin}>Zaloguj się</button
          >
          <button
            class:main__sign-up-btn--register--dark-theme={$DarkTheme}
            class="main__sign-up-btn main__sign-up-btn--register"
            on:click={handleRedirectToRegister}
          >
            Zarejestruj się</button
          >
          <i
            class="main__logo-moon fa-regular fa-moon"
            class:main__logo-moon--dark-theme={$DarkTheme}
            use:MoonRef
          />
        </div>
      </div>
    </div>
  </nav>

  <article class="main__article">
    <!-- <section class="main__start-page">
      <img src={bgShape1} alt="bg-img-1" class="bg-img-1" /><img
        src={bgShape2}
        alt="bg-img-2"
        class="bg-img-2"
      /><img src={bgShape3} alt="bg-img-3" class="bg-img-3" /><img
        src={bgShape4}
        alt="bg-img-4"
        class="bg-img-4"
      /><img src={bgShape5} alt="bg-img-5" class="bg-img-5" /><img
        src={bgShape6}
        alt="bg-img-6"
        class="bg-img-6"
      /><img src={bgShape7} alt="bg-img-7" class="bg-img-7" /><img
        src={bgShape7}
        alt="bg-img-8"
        class="bg-img-8"
      /><img src={bgShape8} alt="bg-img-9" class="bg-img-9" /><img
        src={bgShape8}
        alt="bg-img-10"
        class="bg-img-10"
      />

      <h1 class="main__title">
        Witaj w senior<span class="main__title--light">ity</span>
      </h1>
      <h2 class="main__subtitle">Cieszymy się, że z nami jesteś</h2>
    </section> -->
    <section class="main__start-page" />
    <section class="main__start-page" />
    <section class="main__start-page" />
    <section class="main__start-page" />
    <section class="main__start-page" />
  </article>
</div>
