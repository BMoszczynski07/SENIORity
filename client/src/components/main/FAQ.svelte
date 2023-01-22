<script>
  import "../../scss/faq.scss";

  let questionSelected = false;

  const questions = [
    {
      id: 0,
      title: "Jak założyć konto na stronie?",
      question: `To bardzo proste. Wystarczy kliknąć przycisk "Zarejestuj się" na górnym
        pasku. Nastąpi wtedy przekierowanie do podstrony z rejestracją konta.
        Należy wprowadzić dane (Imię, nazwisko, adres poczty e-mail, hasło - 2
        razy) po czym kliknąć przycisk na dole. Następnie należy zalogować się
        do swojej poczty. Powinna przyjść wiadomość o potwierdzeniu adresu
        e-mail. Proszę kliknąć w tę wiadomość, a następnie w link, który się w
        wiadomości znajduje. Nastąpi przekierowanie do platformy seniority gdzie
        będzie można się zalogować. Po wprowadzeniu danych logowania (imię,
        nazwisko, hasło) będzie można korzystać z pełni możliwości platformy.`,
      delay: 0.1,
    },
    {
      id: 1,
      title: "Jak zmienić kolory/rozmiar czcionki na stronie?",
      question: `Platforma seniority posiada różne udogodnienia dla użytkowników. Między
        innymi jest możliwość zmiany kolorów na stronie na ciemniejsze. Aby to
        zmienić wystarczy kliknąć w ikonę księżyca na górnym pasku, po prawej
        stronie. Oprócz tego można regulować wielkość czcionki, włączyć
        podkreślenie linków albo zmienić czcionkę. Jest to możliwe po wysunięciu
        rozsuwanego menu. Aby to zrobić należy kliknąć w niebieską ikonę z
        ludzikiem na wózku po lewej stronie.`,
      delay: 0.2,
    },
    {
      id: 2,
      title: "Jakie możliwości daje seniorom platforma seniority?",
      question: `Platforma seniority umożliwia ludziom łatwiejsze oraz przyjemniejsze
        korzystanie z dóbr nowoczesnej technologii. Ułatwia załatwianie
        codziennych spraw, które coraz to częściej wymagają sprawnej obsługi
        komputera, telefonu etc. Oprócz tego pragniemy zbliżyć do siebie ludzi,
        dlatego możliwe jest tworzenie spotkań integracyjnych na stronie,
        prowadzenie wszelkich dyskusji, oraz podstawowy cel platformy, czyli
        nauka obsługi urządzeń elektronicznych przez artykuły i tutoriale.`,
      delay: 0.3,
    },
  ];

  const handleSwitchQuestion = (id) => {
    if (id !== questionSelected) {
      questionSelected = id;
      return;
    }
    questionSelected = false;
  };

  export let faq;
</script>

<section class="faq">
  <header class="faq__header">
    Często zadawane <span class="faq__header--color">pytania</span>
  </header>

  <span class="faq__underline" />

  <div class="faq__questions">
    {#each questions as question, index}
      <div
        class="faq__question"
        class:faq__question--selected={questionSelected === index}
        class:faq__question--on={faq}
        style="--i: {question.delay}s"
      >
        <div class="faq__container">
          <h1 class="faq__question-title">{question.title}</h1>
          <button
            class="faq__icon"
            class:faq__icon--reversed={questionSelected === index}
            on:click={() => {
              handleSwitchQuestion(index);
            }}><i class="fa-solid fa-chevron-up faq__i" /></button
          >
        </div>
        <p class="faq__question__paragraph">
          {question.question}
        </p>
      </div>
    {/each}
  </div>
</section>
