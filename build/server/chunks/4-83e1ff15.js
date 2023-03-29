import { r as redirect } from './index2-6a9b411a.js';

function load({ cookies }) {
  cookies.delete("jwt");
  cookies.delete("user");
  throw redirect(303, "/login");
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const imports = [];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, _page_server_ts as server, stylesheets };
//# sourceMappingURL=4-83e1ff15.js.map
