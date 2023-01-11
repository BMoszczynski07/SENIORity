import { writable } from "svelte/store";

export const DarkTheme = writable(localStorage.getItem("darkTheme") || "false");

export const handleSwitchTheme = () => {
  DarkTheme.update((currentTheme) => {
    localStorage.setItem("darkTheme", !currentTheme);
    return !currentTheme;
  });
};
