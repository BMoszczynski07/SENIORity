// import { Updater, writable } from "svelte/store";

// export const Language = writable(localStorage.getItem("language") || "pl");

// export const Font = writable({
//   size: localStorage.getItem("font-size") || 1,
//   headingFamily: localStorage.getItem("font-family-heading") || "DM Sans",
//   contentFamily: localStorage.getItem("font-family-content") || "Inter",
// });

// export const SiteThemes = writable({
//   theme: localStorage.getItem("theme") || "light",
// });

// export const Preferences = writable({
//   underlineAnchors:
//     JSON.parse(localStorage.getItem("underline-anchors")) || false,
// });

// export const handleToggleAnchors = () => {
//   Preferences.update((v: { underlineAnchors: boolean }) => {
//     localStorage.setItem(
//       "underline-anchors",
//       JSON.stringify(!v.underlineAnchors)
//     );
//     return { underlineAnchors: !v.underlineAnchors, ...v };
//   });
// };

// export const handleSwitchTheme = () => {
//   SiteThemes.update((v) => {
//     v.theme = v.theme === "light" ? "dark" : "light";
//     localStorage.setItem("theme", v.theme);
//     console.log(document.querySelectorAll("section"));
//     return { ...v };
//   });
// };

// export const handleChangeFontSize = (operation) => {
//   let valid = true;

//   const unsub = Font.subscribe((v) => {
//     if (
//       (v.size >= 1.5 && operation.type === "+") ||
//       (v.size <= 0.5 && operation.type === "-")
//     ) {
//       valid = false;
//     }
//   });

//   unsub();

//   if (!valid) return;

//   if (operation.type === "+") {
//     Font.update(
//       (v: { size: any; headingFamily: string; contentFamily: string }) => {
//         v.size = parseFloat(v.size) + 0.05;
//         v.size = v.size.toFixed(2);
//         localStorage.setItem("font-size", v.size);
//         return { ...v, size: v.size };
//       }
//     );
//     return;
//   }

//   Font.update(
//     (v: { size: any; headingFamily: string; contentFamily: string }) => {
//       v.size = parseFloat(v.size) - 0.05;
//       v.size = v.size.toFixed(2);
//       localStorage.setItem("font-size", v.size);
//       return { ...v, size: v.size };
//     }
//   );
// };

// export const handleSwitchLang = (lang: string) => {
//   Language.update((v: string) => {
//     v = lang;
//     localStorage.setItem("language", v);
//     return v;
//   });
// };

// export const handleRestore = () => {};
