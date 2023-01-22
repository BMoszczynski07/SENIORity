<script>
  import "../../scss/footer.scss";
  import github from "../../assets/github.png";
</script>

<footer class="footer">
  <div class="footer__main-content">
    <div class="footer__left-side">
      <header class="footer__logo site__logo">
        Senior<span class="footer__logo-light site__logo--light">ity</span>
      </header>
      <h5 class="footer__sources">
        zdjęcia: pixabay.com, pngimg.com ikony: fontawesome.com czcionki:
        fonts.google.com
      </h5>
    </div>

    <div class="footer__center-side">
      <nav class="footer__menu">
        <div class="footer__menu-group">
          <a href="/#" class="footer__menu-link">Strona startowa</a>
          <a href="/#" class="footer__menu-link">Artykuły</a>
          <a href="/#" class="footer__menu-link">Tutoriale</a>
        </div>

        <div class="footer__menu-group">
          <a href="/#" class="footer__menu-link">Spotkania</a>
          <a href="/#" class="footer__menu-link">FAQ</a>
          <a href="/#" class="footer__menu-link">O Autorach</a>
        </div>

        <div class="footer__menu-group">
          <a href="/#" class="footer__menu-link">Zgłoś problem</a>
        </div>
      </nav>
    </div>

    <div class="footer__right-side">
      <img src={github} class="footer__github-img" alt="github" />

      <a
        href="https://github.com/BMoszczynski07"
        target="_self _blank"
        class="footer__github-link">@BMoszczynski</a
      >
      <a
        href="https://github.com/NataliaPrzemylska"
        target="_self _blank"
        class="footer__github-link">@NPrzemylska</a
      >
      <a
        href="https://github.com/lunaru100"
        target="_self _blank"
        class="footer__github-link">@lunaru100</a
      >
    </div>
  </div>

  <h5 class="footer__school">Technikum Mechatroniczne nr 1 w Warszawie</h5>
</footer>
