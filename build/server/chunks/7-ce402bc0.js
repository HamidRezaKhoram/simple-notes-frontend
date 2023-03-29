import { r as redirect } from './index2-6a9b411a.js';

function load({ locals }) {
  if (locals.user)
    throw redirect(302, "/user/" + locals.user);
}
const actions = {
  default: async ({ cookies, request, locals }) => {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    const response = await fetch("http://localhost:81/auth/signup", {
      method: "POST",
      body: JSON.stringify({ Name: name, Email: email, Password: password }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    if (!response) {
      return {
        success: false
      };
    }
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
    cookies.set("jwt", dataPost["Data"]["WebToken"], {
      path: "/",
      expires: expirationTime
    });
    cookies.set("user", dataPost["Data"]["Username"], {
      path: "/",
      expires: expirationTime
    });
    throw redirect(302, "/user/" + dataPost["Data"]["Username"]);
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 7;
const component = async () => (await import('./_page.svelte-9ab70b13.js')).default;
const file = '_app/immutable/components/pages/sign/_page.svelte-8557a0fb.js';
const imports = ["_app/immutable/components/pages/sign/_page.svelte-8557a0fb.js","_app/immutable/chunks/index-7eb94aea.js","_app/immutable/chunks/NavBar-b98c541f.js"];
const stylesheets = ["_app/immutable/assets/NavBar-5ed513d9.css"];
const fonts = [];

export { component, file, fonts, imports, index, _page_server as server, stylesheets };
//# sourceMappingURL=7-ce402bc0.js.map
