// @ts-nocheck


/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */

export async function load ({ locals}) {
	let login = false;

	if (await locals.user && await locals.token){
		login=true}
    
	return{ user:{
		bool: login
	}}
}