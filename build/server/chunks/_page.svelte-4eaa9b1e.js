import { c as create_ssr_component, v as validate_component, d as escape } from './index-f40d9d0b.js';
import './utils-9b0de2f4.js';
import { N as NavBar } from './NavBar-5aaecaee.js';

let login = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div>${validate_component(NavBar, "NavBar").$$render($$result, { login }, {}, {})}</div>



<div class="${"flex min-h-full border-slate-500 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 "}"><div class="${"w-full max-w-md space-y-8 p-4 border-slate-500 border-2 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"}"><div class="${"mt-6 text-center text-3xl font-bold tracking-tight text-gray-700"}">Login to your account!
			<h2 class="${"mt-6 text-center text-3xl font-bold tracking-tight text-gray-700"}"></h2>
			</div>
		<form class="${"mt-8 space-y-6"}" method="${"POST"}"><input type="${"hidden"}" name="${"remember"}" value="${"true"}">
			<div class="${"-space-y-px rounded-md shadow-sm"}"><div><label for="${"email-address"}" class="${"sr-only"}">Email address</label>
					<input id="${"email-address"}" name="${"email"}" type="${"email"}" autocomplete="${"email"}" required class="${"relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-500 sm:text-sm"}" placeholder="${"Email address"}"></div>
				<div><label for="${"password"}" class="${"sr-only"}">Password</label>
					<input id="${"password"}" name="${"password"}" type="${"password"}" autocomplete="${"current-password"}" required class="${"relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-400 focus:outline-none focus:ring-gray-500 sm:text-sm"}" placeholder="${"Password"}"></div></div>

			
					
				


			<div><button type="${"submit"}" class="${"group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"}"><span class="${"absolute inset-y-0 left-0 flex items-center pl-3"}">
						<svg class="${"h-5 w-5 text-white group-hover:text-slate-200"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 20 20"}" fill="${"currentColor"}" aria-hidden="${"true"}"><path fill-rule="${"evenodd"}" d="${"M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"}" clip-rule="${"evenodd"}"></path></svg></span>
					Login
				</button>
				${form ? `${form.success == false ? `<p class="${"mt-2 text-sm text-red-600 dark:text-red-500"}"><span class="${"font-medium"}">Oh, snapp!</span> ${escape(form.message)}</p>` : ``}` : ``}</div></form></div>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-4eaa9b1e.js.map
