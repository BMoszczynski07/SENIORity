export const emailLayout = ({ lang, FRONTEND_URL, token }) => {
  switch (lang) {
    case "pl":
      return `
            Aby zweryfikować konto do którego został przypisany ten adres e-mail, <a href="${FRONTEND_URL}/login?token=${token}">Kliknij tutaj</a>
          `;
      break;
    case "eng":
      return `
            In order to verify your seniority account, please <a href="${FRONTEND_URL}/login?token=${token}">click here</a>
          `;
      break;
    default:
      return "";
      break;
  }
};

export const handleEmailTitleLang = ({ lang }) => {
  switch (lang) {
    case "pl":
      return "Weryfikacja konta";
      break;
    case "eng":
      return "Account verification";
      break;
    default:
      return "Undefined lang";
      break;
  }
};
