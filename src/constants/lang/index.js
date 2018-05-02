import Lang from "./translate";

const LANG = "ru";

let moduleLang;

const lang = new Lang();

moduleLang = lang[LANG];

export default moduleLang;

// Динамический импорт и экспорт
// langParams.every(lp => {
//   if (LANG === lp.name) {
//     promiseModule = new Promise(async $export => {
//       const module = await (await import(`${lp.path}`)).default;
//       $export(module);
//     });
//     return false;
//   } else return true;
// });
