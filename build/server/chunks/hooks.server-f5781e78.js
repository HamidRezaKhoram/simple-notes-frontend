function handle({ event, resolve }) {
  event.locals.user = event.cookies.get("user");
  event.locals.token = event.cookies.get("jwt");
  if (event.locals.user != event.cookies.get("user") || event.locals.token != event.cookies.get("jwt")) {
    return new Response("Redirect", { status: 303, headers: { Location: "/login" } });
  }
  return resolve(event);
}

export { handle };
//# sourceMappingURL=hooks.server-f5781e78.js.map
