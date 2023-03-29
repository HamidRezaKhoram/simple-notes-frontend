async function load({ locals }) {
  let login = false;
  if (await locals.user && await locals.token) {
    login = true;
  }
  return { user: {
    bool: login
  } };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-805b8d94.js')).default;
const file = '_app/immutable/components/pages/_page.svelte-bd5f02b3.js';
const imports = ["_app/immutable/components/pages/_page.svelte-bd5f02b3.js","_app/immutable/chunks/index-7eb94aea.js","_app/immutable/chunks/navigation-81542171.js","_app/immutable/chunks/singletons-a51b9c21.js","_app/immutable/chunks/index-f9fb8d43.js","_app/immutable/chunks/NavBar-b98c541f.js","_app/immutable/chunks/notes-b72b5684.js"];
const stylesheets = ["_app/immutable/assets/_page-fe39a8e5.css","_app/immutable/assets/NavBar-5ed513d9.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=2-18602433.js.map
