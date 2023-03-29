import { c as create_ssr_component, b as subscribe, k as set_store_value } from './index-f40d9d0b.js';
import 'svelte-quill';
import { c as currentNote, a as storage } from './notes-fbe8e831.js';
import './index3-6393c015.js';

/* empty css                                                                  */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $storage, $$unsubscribe_storage;
  $$unsubscribe_storage = subscribe(storage, (value) => $storage = value);
  let { toolbarOptions = [
    [{ header: 1 }, { header: 2 }, "blockquote", "link", "image", "video"],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "ordered" }],
    [{ align: [] }],
    ["clean"]
  ] } = $$props;
  currentNote.subscribe((value) => {
  });
  set_store_value(storage, $storage = "notes", $storage);
  let { data } = $$props;
  data.notes;
  if ($$props.toolbarOptions === void 0 && $$bindings.toolbarOptions && toolbarOptions !== void 0)
    $$bindings.toolbarOptions(toolbarOptions);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${`<div class="${"grid content-center mx-auto max-w-2xl rounded-lg mt-16 items-center justify-center"}"><div class="${"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"}" role="${"status"}"><span class="${"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"}">Loading...</span></div></div>`}

`;
  } while (!$$settled);
  $$unsubscribe_storage();
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-383fc384.js.map
