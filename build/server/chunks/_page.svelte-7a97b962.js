import { c as create_ssr_component, b as subscribe, k as set_store_value } from './index-f40d9d0b.js';
import { r as redirect } from './index2-6a9b411a.js';
import { w as write, b as arrS, s as state, a as storage } from './notes-fbe8e831.js';
import './index3-6393c015.js';

const css = {
  code: "body{background-color:#ECF2FF}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $arrS, $$unsubscribe_arrS;
  let $state, $$unsubscribe_state;
  let $storage, $$unsubscribe_storage;
  let $write, $$unsubscribe_write;
  $$unsubscribe_arrS = subscribe(arrS, (value) => $arrS = value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_storage = subscribe(storage, (value) => $storage = value);
  $$unsubscribe_write = subscribe(write, (value) => $write = value);
  let savestore = false;
  let { data } = $$props;
  set_store_value(write, $write = data["responseNote"], $write);
  if ($storage && savestore) {
    window.sessionStorage.setItem("store", $storage);
    window.sessionStorage.setItem("id", $state);
  }
  write.subscribe((value) => {
  });
  let content = data["response"]["Data"];
  let arr = [];
  for (const item in content) {
    arr.unshift([content[item]["ID"], content[item]["Title"], content[item]["Description"]]);
  }
  arrS.set(arr);
  const deleteNote = async (noteId) => {
    const formData = new FormData();
    formData.append("id", noteId);
    const deleteNote2 = await fetch("http://localhost:81/notebooks/", {
      method: "DELETE",
      body: formData,
      headers: { Authorization: "Bearer " + data.token }
    });
    let data1 = await deleteNote2.json();
    if (data1["Status"] == "error") {
      throw redirect(302, "/logout");
    }
    const responseNote = await fetch("http://localhost:81/notebooks/all", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + data.token,
        "Content-Type": "application/json"
      }
    });
    let content2 = await responseNote.json();
    let arr2 = [];
    for (const item in content2) {
      arr2.unshift([content2[item]["ID"], content2[item]["Title"]]);
    }
    arrS.set(arr);
    set_store_value(arrS, $arrS = arr, $arrS);
  };
  arrS.subscribe((value) => {
    arr = value;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.deleteNote === void 0 && $$bindings.deleteNote && deleteNote !== void 0)
    $$bindings.deleteNote(deleteNote);
  $$result.css.add(css);
  $$unsubscribe_arrS();
  $$unsubscribe_state();
  $$unsubscribe_storage();
  $$unsubscribe_write();
  return `
${`<div class="${"grid content-center mx-auto max-w-2xl rounded-lg mt-16 items-center justify-center"}"><div class="${"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"}" role="${"status"}"><span class="${"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"}">Loading...</span></div></div>`}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7a97b962.js.map
