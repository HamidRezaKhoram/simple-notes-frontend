import { r as redirect } from './index2-6a9b411a.js';
import './index-f40d9d0b.js';

async function load({ locals, params }) {
  let login = false;
  console.log("sss" + locals.user);
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
  if (!locals.user) {
    if (locals.user)
      login = true;
  }
  let responseJ = await response.json();
  let responseNoteJ = await responseNote.json();
  if (responseNoteJ["Status"] === "error" || responseJ["Status"] === "error") {
    throw redirect(302, "/logout");
  }
  const formData = new FormData();
  formData.append("id", params.note);
  const responseNotes = await fetch("http://localhost:81/notes", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + locals.token
    }
  });
  const datanote = await responseNotes.json();
  if (datanote["Status"] == "error") {
    throw redirect(302, "/logout");
  }
  return {
    token: locals.token,
    name: locals.user,
    response: responseJ,
    responseNote: responseNoteJ,
    bool: login,
    notes: datanote
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
const component = async () => (await import('./_page.svelte-383fc384.js')).default;
const file = '_app/immutable/components/pages/user/_slug_/note/_note_/_page.svelte-4118645c.js';
const imports = ["_app/immutable/components/pages/user/_slug_/note/_note_/_page.svelte-4118645c.js","_app/immutable/chunks/index-7eb94aea.js","_app/immutable/chunks/notes-b72b5684.js","_app/immutable/chunks/index-f9fb8d43.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang-3dc53d3a.js"];
const stylesheets = ["_app/immutable/assets/SvelteToast-42b1db04.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=10-93475d16.js.map
