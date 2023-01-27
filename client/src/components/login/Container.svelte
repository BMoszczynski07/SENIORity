<script></script>

<div class="login__container">
  <div class="login__logo-container">
    <a href="/#" class="login__logo global__logo global__logo--dark-theme">
      Senior<span class="global__logo--light global__logo--light--dark-theme"
        >ity</span
      >
    </a>
    <h5 class="login__subtitle">
      <i class="fa-solid fa-key login__key-icon" />
      <span class="login__subtitle-text">Logowanie</span>
    </h5>
  </div>

  <form class="login__form">
    <div class="login__input-container">
      <label for="login" class="login__label">Nazwa użytkownika lub email</label
      >
      <input type="text" id="login" class="login__input" />
    </div>

    <div class="login__input-container">
      <label for="pass" class="login__label">Hasło</label>
      <input type="password" id="pass" class="login__input" />
    </div>

    <button type="submit" class="login__btn login__btn--login"
      >Zaloguj się</button
    >
    <h5 class="login__site-subtext">
      Nie pamiętasz hasła? <a href="/#/restore-pass" class="login__site-link"
        >Kliknij tutaj</a
      > aby je odzyskać
    </h5>
  </form>

  <div class="login__or">
    <h5 class="login__or-label">Inne działania</h5>
  </div>

  <button class="login__btn login__btn-platform--google">
    <i class="fa-brands fa-google login__btn-icon" />
    <span class="login__btn-label">Kontynuuj przy użyciu konta Google</span>
  </button>

  <button class="login__btn login__btn-platform--facebook">
    <i class="fa-brands fa-facebook login__btn-icon" />
    <span class="login__btn-label">Zaloguj się przez aplikację facebook</span>
  </button>

  <button class="login__btn login__btn-platform--apple">
    <i class="fa-brands fa-apple login__btn-icon" />
    <span class="login__btn-label">Zaloguj się przy użyciu konta Apple</span>
  </button>

  <h5 class="login__site-subtext login__site-subtext-register">
    Nie posiadasz konta? <a href="/#/register" class="login__site-link"
      >Zarejestruj się</a
    >
  </h5>
</div>
