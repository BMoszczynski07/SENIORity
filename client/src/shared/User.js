import { writable } from "svelte/store";

export const isUserLogged = writable(false);
export const user = writable({});
