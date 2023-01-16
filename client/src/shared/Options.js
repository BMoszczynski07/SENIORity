import { writable } from "svelte/store";

export const Language = writable(localStorage.getItem("language") || "pol");

export const Font = writable({
  size: localStorage.getItem("font-size") || 1,
  headingFamily: localStorage.getItem("font-family-heading") || "DM Sans",
  contentFamily: localStorage.getItem("font-family-content") || "Inter",
});

export const DarkTheme = writable(
  localStorage.getItem("darkTheme") ? localStorage.getItem("darkTheme") : false
);

export const Preferences = writable({
  underlineAnchors: localStorage.getItem("underline-anchors") || false,
});

export const handleToggleAnchors = () => {
  Preferences.update((v) => {
    localStorage.setItem("underline-anchors", !v.underlineAnchors);
    return { underlineAnchors: !v.underlineAnchors, ...v };
  });
};

export const handleSwitchTheme = () => {
  DarkTheme.update((currentTheme) => {
    localStorage.setItem("darkTheme", !currentTheme);
    return !currentTheme;
  });
};

export const handleChangeFontSize = (operation) => {
  let valid = true;

  const unsub = Font.subscribe((v) => {
    if (
      (v.size >= 1.5 && operation.type === "+") ||
      (v.size <= 0.5 && operation.type === "-")
    ) {
      valid = false;
    }
  });

  unsub();

  if (!valid) return;

  if (operation.type === "+") {
    Font.update((v) => {
      v.size = parseFloat(v.size) + 0.05;
      v.size = v.size.toFixed(2);
      localStorage.setItem("font-size", v.size);
      return { ...v, size: v.size };
    });
    return;
  }

  Font.update((v) => {
    v.size = parseFloat(v.size) - 0.05;
    v.size = v.size.toFixed(2);
    localStorage.setItem("font-size", v.size);
    return { ...v, size: v.size };
  });
};

export const handleSwitchLang = (lang) => {
  Language.update((v) => {
    v = lang;
    localStorage.setItem("language", v);
    return v;
  });
};

export const handleRestore = () => {};
