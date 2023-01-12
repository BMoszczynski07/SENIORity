import { writable } from "svelte/store";

export const Language = writable(localStorage.getItem("language") || "pol");

export const FontSize = writable(localStorage.getItem("font-size") || 1);

export const DarkTheme = writable(localStorage.getItem("darkTheme") || false);

export const handleSwitchTheme = () => {
  DarkTheme.update((currentTheme) => {
    localStorage.setItem("darkTheme", !currentTheme);
    return !currentTheme;
  });
};

export const handleChangeFontSize = (operation) => {
  if (
    (v > 1.5 && operation.type === "+") ||
    (v < 0.25 && operation.type === "-")
  )
    return;

  if (operation.type === "+") {
    FontSize.update((v) => {
      v += 0.1;
      localStorage.setItem("font-size", v);
      return v;
    });
    return;
  }

  FontSize.update((v) => {
    v -= 0.1;
    localStorage.setItem("font-size", v);
    return v;
  });
};

export const handleSwitchLang = (lang) => {
  Language.update((v) => {
    v = lang;
    localStorage.setItem("language", v);
    return v;
  });
};
