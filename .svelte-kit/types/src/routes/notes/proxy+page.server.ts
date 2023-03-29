// @ts-nocheck
import { redirect } from '@sveltejs/kit';


/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({cookies}) {
 

    throw redirect (303, "/user/notebooks");
}