import { writable } from "svelte/store";

export const Language = writable({
  lang: "pol",
});

export const DarkTheme = writable(false);

export const handleSwitchTheme = () => {
  DarkTheme.update((currentTheme) => {
    return !currentTheme;
  });
};
