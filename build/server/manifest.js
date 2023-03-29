const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-5e8c7ad0.js","imports":["_app/immutable/start-5e8c7ad0.js","_app/immutable/chunks/index-7eb94aea.js","_app/immutable/chunks/singletons-a51b9c21.js","_app/immutable/chunks/index-f9fb8d43.js","_app/immutable/chunks/control-f5b05b5f.js","_app/immutable/chunks/utils-d2eec17c.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-19f9454c.js'),
			() => import('./chunks/1-d8b527ba.js'),
			() => import('./chunks/2-18602433.js'),
			() => import('./chunks/3-4aaa8a8b.js'),
			() => import('./chunks/4-83e1ff15.js'),
			() => import('./chunks/5-ebd5599f.js'),
			() => import('./chunks/6-96fceefd.js'),
			() => import('./chunks/7-ce402bc0.js'),
			() => import('./chunks/8-4f22fa41.js'),
			() => import('./chunks/9-1ba4ea65.js'),
			() => import('./chunks/10-93475d16.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/notes",
				pattern: /^\/notes\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/playground",
				pattern: /^\/playground\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "/sign",
				pattern: /^\/sign\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/user/[slug]",
				pattern: /^\/user\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/user/[slug]/note/[note]",
				pattern: /^\/user\/([^/]+?)\/note\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false},{"name":"note","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
