import writable from "svelte/store";

export const language = writable({
  lang: "pol",
});

export const theme = writable({
  dark: false,
});
