globalThis.__nitro_main__ = import.meta.url;
import { NodeResponse, serve } from "./_libs/srvx.mjs";
import { H3Core, HTTPError, composeMiddleware, createMatcherFromFind, defineHandler, defineLazyEventHandler, headers, memoizeRouteRulesMatcher, toEventHandler } from "./_libs/h3+rou3+srvx.mjs";
import { HookableCore } from "./_libs/hookable.mjs";
import { decodePath, joinURL, withLeadingSlash, withoutTrailingSlash } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/arrow-left-DhwyMvfX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-OW8ENKsOFbZYsHt6cvW73ZgO+tE\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 164,
		"path": "../public/assets/arrow-left-DhwyMvfX.js"
	},
	"/assets/admin-vJULG2aa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5407-c7O6GlzvvqSoGVd3nM2svljb658\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 21511,
		"path": "../public/assets/admin-vJULG2aa.js"
	},
	"/assets/confetti.module-BYDB1iN2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"294f-R/sSJpU7IPhM8AvSvcbHPT0P9pM\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 10575,
		"path": "../public/assets/confetti.module-BYDB1iN2.js"
	},
	"/assets/forgot-password-B2U-zac7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6ae-9f6RW3O7aIG7hHwY2ldAKeyjLGg\"",
		"mtime": "2026-10-12T16:22:33.083Z",
		"size": 1710,
		"path": "../public/assets/forgot-password-B2U-zac7.js"
	},
	"/assets/credit-card-BdNNCZsr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a-1X71hyJrytFxs2K1CFVKxI7AbVw\"",
		"mtime": "2026-10-12T16:22:33.083Z",
		"size": 330,
		"path": "../public/assets/credit-card-BdNNCZsr.js"
	},
	"/assets/edit-registration-9qvpZSPH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f11-PF8FFoLcoGPxL6om1pPrviLAy4s\"",
		"mtime": "2026-10-12T16:22:33.083Z",
		"size": 24337,
		"path": "../public/assets/edit-registration-9qvpZSPH.js"
	},
	"/assets/image-CVtO9O-L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"147a-RYUgCDF0FolUfq1uIkxK1d/HJ8Y\"",
		"mtime": "2026-10-12T16:22:33.083Z",
		"size": 5242,
		"path": "../public/assets/image-CVtO9O-L.js"
	},
	"/assets/invariant-CgFvOqN2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c2-OtvVxjJzKVqOT1XQL6Tnz3B8fGk\"",
		"mtime": "2026-10-12T16:22:33.083Z",
		"size": 450,
		"path": "../public/assets/invariant-CgFvOqN2.js"
	},
	"/assets/join-DKviMNg9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c-pjlXzT1kMrWVUPBhAxCZyb+qagI\"",
		"mtime": "2026-10-12T16:22:33.083Z",
		"size": 76,
		"path": "../public/assets/join-DKviMNg9.js"
	},
	"/assets/index-x9uw6uRu.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1aa60-yvL3X1Y6ayGEnKD4nUErtDDRpF0\"",
		"mtime": "2026-10-12T16:22:33.088Z",
		"size": 109152,
		"path": "../public/assets/index-x9uw6uRu.css"
	},
	"/assets/label-CAb88jds.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"696-ZyVWtFC1fTw0ABuVToovNT5N6BM\"",
		"mtime": "2026-10-12T16:22:33.084Z",
		"size": 1686,
		"path": "../public/assets/label-CAb88jds.js"
	},
	"/assets/lock-DV_UsZ5T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce-MNGhJwqBENkyl/HRLEQfq4uqFsI\"",
		"mtime": "2026-10-12T16:22:33.084Z",
		"size": 206,
		"path": "../public/assets/lock-DV_UsZ5T.js"
	},
	"/assets/log-in-CQz9QQJy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"103-KO2DtiLFuIWuvUoCQiRvGzyvN44\"",
		"mtime": "2026-10-12T16:22:33.084Z",
		"size": 259,
		"path": "../public/assets/log-in-CQz9QQJy.js"
	},
	"/assets/join-EGMiMb8x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2813b-s8VX8f/ISuYVjx9g1fSPsgH2EsI\"",
		"mtime": "2026-10-12T16:22:33.084Z",
		"size": 164155,
		"path": "../public/assets/join-EGMiMb8x.js"
	},
	"/assets/login-r2-cG545.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9af-+blaNZchBPeCy6VCBY1DXfCvXRM\"",
		"mtime": "2026-10-12T16:22:33.084Z",
		"size": 2479,
		"path": "../public/assets/login-r2-cG545.js"
	},
	"/assets/mail-C9NWMxet.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d7-4Utslc411wp0J4sIs7wnITABh94\"",
		"mtime": "2026-10-12T16:22:33.085Z",
		"size": 215,
		"path": "../public/assets/mail-C9NWMxet.js"
	},
	"/assets/createLucideIcon-Ph69G0YB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41d5f-BLX1Ll7CvgR6C2OYuANlbJIzmg0\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 269663,
		"path": "../public/assets/createLucideIcon-Ph69G0YB.js"
	},
	"/assets/matchContext-BTcH4e1d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-sjpu00mWZh4xfpgcS+zfFvn5g+Y\"",
		"mtime": "2026-10-12T16:22:33.085Z",
		"size": 167,
		"path": "../public/assets/matchContext-BTcH4e1d.js"
	},
	"/assets/not-found-DIgawKw1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-RTB6YH5iXRKeXz1Sn6ZQ+vS0lnc\"",
		"mtime": "2026-10-12T16:22:33.085Z",
		"size": 55,
		"path": "../public/assets/not-found-DIgawKw1.js"
	},
	"/assets/my-registration-Csiw0h9w.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38f6-44dlPjXQqk2wqpyV8vVlUSNGC3w\"",
		"mtime": "2026-10-12T16:22:33.085Z",
		"size": 14582,
		"path": "../public/assets/my-registration-Csiw0h9w.js"
	},
	"/assets/parts-DKZc_Fbl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"979-enZeCUEtmAjYZ0Lk/lAshj3K4WM\"",
		"mtime": "2026-10-12T16:22:33.085Z",
		"size": 2425,
		"path": "../public/assets/parts-DKZc_Fbl.js"
	},
	"/assets/reset-password-BAujzprb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c7c-mF1tMZSdArzbWxq7TgQPrjNW4zU\"",
		"mtime": "2026-10-12T16:22:33.086Z",
		"size": 3196,
		"path": "../public/assets/reset-password-BAujzprb.js"
	},
	"/assets/register-DjjG1xDw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3aa6-w0OnJxQTrL/oCpiQXczvHp51etk\"",
		"mtime": "2026-10-12T16:22:33.085Z",
		"size": 15014,
		"path": "../public/assets/register-DjjG1xDw.js"
	},
	"/assets/shield-check-BhllzEKE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d9-CEcX5sFKUboW3BMeqzhroXq23p8\"",
		"mtime": "2026-10-12T16:22:33.086Z",
		"size": 2265,
		"path": "../public/assets/shield-check-BhllzEKE.js"
	},
	"/assets/index-BpGuMC8X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63afc-IBKUGWsJF/3/b2ABy2a6mhOdSWk\"",
		"mtime": "2026-10-12T16:22:33.081Z",
		"size": 408316,
		"path": "../public/assets/index-BpGuMC8X.js"
	},
	"/assets/upload-BcwrI94Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"236-CbLzqeRdtNNDc3uLGn5ik4x6aqE\"",
		"mtime": "2026-10-12T16:22:33.086Z",
		"size": 566,
		"path": "../public/assets/upload-BcwrI94Y.js"
	},
	"/assets/users-ujePMgsC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fd-Lo5yh6ZJifHTUNcgxwN6p2tKAjU\"",
		"mtime": "2026-10-12T16:22:33.087Z",
		"size": 509,
		"path": "../public/assets/users-ujePMgsC.js"
	},
	"/assets/user-round-CYiyXAKV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b5-CqY3iKonNKtjsRL85Mrj3NzIPUQ\"",
		"mtime": "2026-10-12T16:22:33.086Z",
		"size": 181,
		"path": "../public/assets/user-round-CYiyXAKV.js"
	},
	"/assets/useServerFn-waXd7W41.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"179-iVrRDS26d1j8HrAhta9lhcHUIsU\"",
		"mtime": "2026-10-12T16:22:33.086Z",
		"size": 377,
		"path": "../public/assets/useServerFn-waXd7W41.js"
	},
	"/assets/x-CZ5St5_B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"167-QmnbBgtT7ClReaz1u/mpikBCSKM\"",
		"mtime": "2026-10-12T16:22:33.087Z",
		"size": 359,
		"path": "../public/assets/x-CZ5St5_B.js"
	},
	"/assets/_authed-DKviMNg9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c-pjlXzT1kMrWVUPBhAxCZyb+qagI\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 76,
		"path": "../public/assets/_authed-DKviMNg9.js"
	},
	"/assets/_site-DKu06zyl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"306c-lAqPVd+NwMAAXh8++Nqe/z4SUGg\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 12396,
		"path": "../public/assets/_site-DKu06zyl.js"
	},
	"/assets/_site-cspHRLS1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10bcf-pr7pvbDoUpBTxkOUIh42FKK4aAI\"",
		"mtime": "2026-10-12T16:22:33.082Z",
		"size": 68559,
		"path": "../public/assets/_site-cspHRLS1.js"
	},
	"/images/games/mlbb-logo.png": {
		"type": "image/png",
		"etag": "\"7fca-saYHw66ujh6DLifkefQYSp+xuMY\"",
		"mtime": "2026-10-08T06:48:30.776Z",
		"size": 32714,
		"path": "../public/images/games/mlbb-logo.png"
	},
	"/images/site/arena.png": {
		"type": "image/png",
		"etag": "\"7fca-saYHw66ujh6DLifkefQYSp+xuMY\"",
		"mtime": "2026-10-08T06:48:30.776Z",
		"size": 32714,
		"path": "../public/images/site/arena.png"
	},
	"/images/payments/bank-qr.png": {
		"type": "image/png",
		"etag": "\"11c90-ws21kTyczcR5z4g290lkl3MOVFo\"",
		"mtime": "2026-10-07T10:32:21.737Z",
		"size": 72848,
		"path": "../public/images/payments/bank-qr.png"
	},
	"/images/payments/gcash-qr.png": {
		"type": "image/png",
		"etag": "\"1a8d5-u5b1X0UOuPag55BmCyoNxoHKPro\"",
		"mtime": "2026-10-07T10:32:06.885Z",
		"size": 108757,
		"path": "../public/images/payments/gcash-qr.png"
	},
	"/images/games/tekken8-logo.png": {
		"type": "image/png",
		"etag": "\"25b71-VodEQaPuDQi4TszyMW7Ju/g85hc\"",
		"mtime": "2026-10-02T15:53:02.539Z",
		"size": 154481,
		"path": "../public/images/games/tekken8-logo.png"
	},
	"/images/branding/project-s-logo.png": {
		"type": "image/png",
		"etag": "\"28360-wqm6ArU4jCqbaYBeYbT1KXAWYGA\"",
		"mtime": "2026-10-06T10:02:23.367Z",
		"size": 164704,
		"path": "../public/images/branding/project-s-logo.png"
	},
	"/images/roles/exp.png": {
		"type": "image/png",
		"etag": "\"4221-LEjpWmyclDDUPIaGbcspT8W2jnY\"",
		"mtime": "2026-01-14T08:24:36.000Z",
		"size": 16929,
		"path": "../public/images/roles/exp.png"
	},
	"/images/roles/gold.png": {
		"type": "image/png",
		"etag": "\"5637-dyatL05Do2WvKheM05uOj9z2avs\"",
		"mtime": "2026-01-14T08:24:36.000Z",
		"size": 22071,
		"path": "../public/images/roles/gold.png"
	},
	"/images/site/fist.png": {
		"type": "image/png",
		"etag": "\"2f062-citQDq6GaQzC2ooIgJEibtHGz0g\"",
		"mtime": "2026-10-07T12:30:54.409Z",
		"size": 192610,
		"path": "../public/images/site/fist.png"
	},
	"/images/roles/mid.png": {
		"type": "image/png",
		"etag": "\"3e4e-Qh0rUabiFQ0y9ojWYtTINkoWaLc\"",
		"mtime": "2026-01-14T08:24:36.000Z",
		"size": 15950,
		"path": "../public/images/roles/mid.png"
	},
	"/images/roles/junggle.png": {
		"type": "image/png",
		"etag": "\"5bae-aoWpymgfhwZfigd7Pj7WZeJEpew\"",
		"mtime": "2026-01-14T08:24:36.000Z",
		"size": 23470,
		"path": "../public/images/roles/junggle.png"
	},
	"/images/roles/roam.png": {
		"type": "image/png",
		"etag": "\"4f3f-GHuWbeQHoqtLdIzpOu4iEZjgfMQ\"",
		"mtime": "2026-01-14T08:24:36.000Z",
		"size": 20287,
		"path": "../public/images/roles/roam.png"
	},
	"/images/site/hero.png": {
		"type": "image/png",
		"etag": "\"64255-5BpBZsTlIiwStHgLX0YPC5G9UOc\"",
		"mtime": "2026-10-07T19:27:44.354Z",
		"size": 410197,
		"path": "../public/images/site/hero.png"
	},
	"/images/site/squad.png": {
		"type": "image/png",
		"etag": "\"41ccf8-+dCDsp23+a/868NC+IE7BcB9QUk\"",
		"mtime": "2026-10-07T09:34:58.826Z",
		"size": 4312312,
		"path": "../public/images/site/squad.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = {
		route: "/assets/**",
		rank: 0,
		rules: [{
			name: "headers",
			route: "/assets/**",
			handler: headers,
			options: { "cache-control": "public, max-age=31536000, immutable" }
		}]
	};
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1);
		let s = p.split("/");
		let l = s.length;
		let _w;
		if (l > 1) {
			if (s[1] === "assets") r.push(l > 2 ? {
				data: $0,
				params: {
					"0": _w = p.slice(8),
					_: _w
				}
			} : {
				data: $0,
				params: {}
			});
		}
		return r.reverse();
	};
})();
var _lazy_1e14ec2376d2b6f7 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_1e14ec2376d2b6f7
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => {
		event.context.routeRules = getRouteRules(event.req.method, event.url.pathname).routeRules;
		return findRoute(event.req.method, event.url.pathname);
	};
	h3App["~middleware"].push(createRouteRulesMiddleware());
	h3App["~middleware"].push(...globalMiddleware);
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
var _matchRouteRules;
function getRouteRules(method, pathname) {
	return (_matchRouteRules ??= memoizeRouteRulesMatcher(createMatcherFromFind(findRouteRules)))(method, pathname);
}
function createRouteRulesMiddleware() {
	const composed = /* @__PURE__ */ new WeakMap();
	const middleware = (event, next) => {
		const ruleMiddleware = getRouteRules(event.req.method, event.url.pathname).routeRuleMiddleware;
		if (ruleMiddleware.length === 0) return next();
		let chain = composed.get(ruleMiddleware);
		if (!chain) {
			chain = composeMiddleware(ruleMiddleware);
			composed.set(ruleMiddleware, chain);
		}
		return chain(event, next);
	};
	return markUntraced(middleware);
}
function markUntraced(middleware) {
	middleware.__traced__ = true;
	return middleware;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/runtime/internal/shutdown.mjs
function setupCloseHooks(server) {
	const closeServer = server.close.bind(server);
	let closeHooks;
	server.close = (closeActiveConnections) => closeServer(closeActiveConnections).finally(() => closeHooks ??= callCloseHooks());
}
async function callCloseHooks() {
	try {
		await useNitroHooks().callHook("close");
	} catch (error) {
		console.error("[nitro] Error while calling `close` hooks:", error);
	}
}
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
setupCloseHooks(serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
}));
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
