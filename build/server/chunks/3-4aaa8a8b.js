import { r as redirect } from './index2-6a9b411a.js';
import './index-f40d9d0b.js';

const prerender = false;
function load({ locals }) {
  if (locals.user)
    throw redirect(302, "/notes");
}
const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const password = data.get("password");
    const response = await fetch("http://localhost:81/auth/login", {
      method: "POST",
      body: JSON.stringify({ Email: email, Password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    let dataPost;
    try {
      dataPost = await response.json();
    } catch (error) {
      return {
        success: false,
        message: dataPost["Data"]
      };
    }
    if (dataPost["Status"] == "error") {
      return {
        success: false,
        message: dataPost["Data"]
      };
    }
    const expirationTime = new Date(Date.now() + 18e5);
    cookies.set("jwt", dataPost["Data"]["WebToken"], { path: "/", expires: expirationTime });
    cookies.set("user", dataPost["Data"]["Username"], { path: "/", expires: expirationTime });
    throw redirect(301, "/user/" + dataPost["Data"]["Username"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load,
  prerender: prerender
});

const index = 3;
const component = async () => (await import('./_page.svelte-4eaa9b1e.js')).default;
const file = '_app/immutable/components/pages/login/_page.svelte-96fbc5a6.js';
const imports = ["_app/immutable/components/pages/login/_page.svelte-96fbc5a6.js","_app/immutable/chunks/index-7eb94aea.js","_app/immutable/chunks/utils-d2eec17c.js","_app/immutable/chunks/singletons-a51b9c21.js","_app/immutable/chunks/index-f9fb8d43.js","_app/immutable/chunks/navigation-81542171.js","_app/immutable/chunks/NavBar-b98c541f.js"];
const stylesheets = ["_app/immutable/assets/NavBar-5ed513d9.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=3-4aaa8a8b.js.map
