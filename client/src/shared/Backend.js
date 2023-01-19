import { writable } from "svelte/store";

const backend = writable({ url: "http://localhost:8080" });

export default backend;
