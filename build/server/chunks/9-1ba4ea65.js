import { r as redirect } from './index2-6a9b411a.js';

async function load({ locals, params }) {
  await params.slug;
  let login = false;
  const response = await fetch("http://localhost:81/notebooks/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + locals.token,
      "Content-Type": "application/json"
    }
  });
  const responseNote = await fetch("http://localhost:81/notes/all", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + locals.token,
      "Content-Type": "application/json"
    }
  });
  if (!locals.user)
    throw redirect(302, "/logout");
  if (locals.user)
    login = true;
  let responseJ = await response.json();
  let responseNoteJ = await responseNote.json();
  if (responseNoteJ["Status"] === "error" || responseJ["Status"] === "error") {
    throw redirect(302, "/logout");
  }
  return {
    token: locals.token,
    name: locals.user,
    response: responseJ,
    responseNote: responseNoteJ,
    bool: login
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
const component = async () => (await import('./_page.svelte-7a97b962.js')).default;
const file = '_app/immutable/components/pages/user/_slug_/_page.svelte-a3c7255e.js';
const imports = ["_app/immutable/components/pages/user/_slug_/_page.svelte-a3c7255e.js","_app/immutable/chunks/index-7eb94aea.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang-3dc53d3a.js","_app/immutable/chunks/index-f9fb8d43.js","_app/immutable/chunks/index-35a671a5.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/notes-b72b5684.js","_app/immutable/chunks/index-a809133b.js"];
const stylesheets = ["_app/immutable/assets/_page-fe39a8e5.css","_app/immutable/assets/SvelteToast-42b1db04.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=9-1ba4ea65.js.map
