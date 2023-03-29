import { c as create_ssr_component, b as subscribe } from './index-f40d9d0b.js';
import { s as state, a as storage } from './notes-fbe8e831.js';
import './index3-6393c015.js';

const css = {
  code: "body{background-color:#ECF2FF}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_state;
  let $$unsubscribe_storage;
  $$unsubscribe_state = subscribe(state, (value) => value);
  $$unsubscribe_storage = subscribe(storage, (value) => value);
  let { data } = $$props;
  data.user.bool;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_state();
  $$unsubscribe_storage();
  return `${`<div class="${"absolute min-h-screen top-10 py-10 items-center justify-center"}"><div class="${"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"}" role="${"status"}"><span class="${"!absolute py-10 !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"}">Loading...</span></div></div>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-805b8d94.js.map
