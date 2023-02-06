import App from "./App.svelte";
import "./global.scss";

const app = new App({
  target: document.body, // entry point in ../public/index.html
});

export default app;
