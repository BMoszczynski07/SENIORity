<script>
  import Popup from "./components/popup/Popup.svelte";
  import { onMount } from "svelte";
  import Router from "svelte-spa-router";
  import Login from "./components/login/Login.svelte";
  import Main from "./components/main/Main.svelte";
  import Settings from "./components/main/Settings.svelte";
  import NotFound from "./components/not-found/NotFound.svelte";
  import Register from "./components/register/Register.svelte";
  import backend from "./shared/Backend";

  let showPopup = false;
  let popupOk;
  let popupMessage = "";

  let routes = {
    "/": Main,
    "/login": Login,
    "/register": Register,
    "*": NotFound,
  };

  const findParam = ({ param }) => {
    const url = window.location.href;
    const paramName = param;
    const searchString = `${paramName}=`;
    const startIndex = url.indexOf(searchString);
    let value = "";

    if (startIndex !== -1) {
      const endIndex = url.indexOf("&", startIndex + searchString.length);
      value =
        endIndex === -1
          ? url.slice(startIndex + searchString.length)
          : url.slice(startIndex + searchString.length, endIndex);
    } else {
      value = "";
    }

    return value;
  };

  onMount(async () => {
    if (findParam({ param: "token" })) {
      const token = findParam({ param: "token" });

      try {
        const res = await fetch(`${$backend.url}/user/verify/${token}`, {
          method: "PATCH",
        });

        const result = await res.json();

        showPopup = true;
        popupMessage = result.res;
        popupOk = result.ok;

        setTimeout(() => {
          showPopup = false;
        }, 3000);
      } catch (e) {
        console.error(e);
      }
    }
  });
</script>

<div>
  <Router {routes} />
  <Settings />
  {#if showPopup}
    <Popup res={popupMessage} ok={popupOk} />
  {/if}
</div>
