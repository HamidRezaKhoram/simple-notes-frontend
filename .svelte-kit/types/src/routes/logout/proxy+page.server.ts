// @ts-nocheck
import { redirect } from '@sveltejs/kit';


/** @param {Parameters<import('./$types').LayoutServerLoad>[0]} event */
export function load({cookies}) {
    cookies.delete('jwt');
    cookies.delete('user');

    throw redirect (303, "/login");
}