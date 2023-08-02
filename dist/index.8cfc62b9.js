// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gAoaA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var _formViewJs = require("./views/formView.js");
var _checkedViewJs = require("./views/checkedView.js");
var _importantViewJs = require("./views/importantView.js");
var _sortViewJs = require("./views/sortView.js");
const formContainer = document.querySelector(".form-container");
const listContainer = document.querySelector(".list-container");
const exitBtn = document.querySelector(".btn-exit");
const openFormBtn = document.querySelector(".btn-open-form");
const importantBtn = document.querySelector(".btn-important");
const sortBtn = document.querySelector(".btn-sort-tasks");
//Function to handle adding and removing hidden class to elements
const toggleHidden = function(e) {
    //toggle hidden class after the animation
    setTimeout(()=>listContainer.classList.toggle("hidden"), 300);
    setTimeout(()=>formContainer.classList.toggle("hidden"), 300);
    //toggle animation based on which button was pressed
    if (e.target === exitBtn) {
        formContainer.classList.toggle("hidden-transition");
        setTimeout(()=>formContainer.classList.toggle("hidden-transition"), 400);
    }
    if (e.target === openFormBtn) {
        listContainer.classList.toggle("hidden-transition");
        setTimeout(()=>listContainer.classList.toggle("hidden-transition"), 400);
    }
};
const init = function() {
    let importantBtnToggled = false;
    openFormBtn.addEventListener("click", (e)=>{
        toggleHidden(e);
        if (!(importantBtn.classList[1] === "hidden")) {
            importantBtnToggled = true;
            importantBtn.classList.add("hidden");
        }
    });
    exitBtn.addEventListener("click", (e)=>{
        toggleHidden(e);
        if (importantBtnToggled) importantBtn.classList.remove("hidden");
        importantBtnToggled = false;
    });
    //event handler listening for form submission
    (0, _formViewJs.addItemForm).addEventListener("submit", (0, _formViewJs.submitHandler));
    //event handler for the important button
    importantBtn.addEventListener("click", (0, _importantViewJs.importantBtnHandler));
    //event handler for the sort button
    sortBtn.addEventListener("click", (0, _sortViewJs.sortHandler));
};
init();

},{"./views/formView.js":"ckTVq","./views/importantView.js":"fqU95","./views/checkedView.js":"fc2We","./views/sortView.js":"aSWOM"}],"ckTVq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItemForm", ()=>addItemForm);
parcelHelpers.export(exports, "submitHandler", ()=>submitHandler);
parcelHelpers.export(exports, "renderList", ()=>renderList);
var _tasksViewJs = require("./tasksView.js");
var _checkedViewJs = require("./checkedView.js");
var _removeViewJs = require("./removeView.js");
var _taskArrViewJs = require("./taskArrView.js");
const addItemForm = document.querySelector(".form-add-item");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const requiredQuestion = document.querySelector(".required-question");
const resetForm = function() {
    //reset form values
    question1.value = "";
    question2.value = "";
    question1.blur();
    question2.blur();
};
const renderList = function() {
    //refreshing and rendering the list
    (0, _tasksViewJs.refreshTasks)();
    (0, _tasksViewJs.renderTasks)();
    //getting the checkboxes and remove buttons currently on the page
    (0, _checkedViewJs.getCheckBoxes)();
    (0, _removeViewJs.getRemoveBtns)();
    //add event listener for each new list item and their checkboxes
    (0, _checkedViewJs.checkboxes).forEach((box)=>box.addEventListener("change", (0, _checkedViewJs.checkedHandler)));
    //add event listener for each remove button
    (0, _removeViewJs.removeBtns).forEach((btn)=>btn.addEventListener("click", (0, _removeViewJs.removedHandler)));
};
//function to handle submission of the form
const submitHandler = function(e) {
    e.preventDefault();
    //getting the inputted values
    const task = question1.value;
    const time = question2.value;
    //gaurd clause: if first field is empty, show the field is required
    if (task === "") {
        requiredQuestion.classList.add("required");
        return;
    }
    //creating the task object
    //each task is an object containing the task, time, important and checked status, and item number
    (0, _taskArrViewJs.createNewTask)(task, time);
    //remove the required class after valid form submission
    requiredQuestion.classList.remove("required");
    //reset form
    resetForm();
    //render the new list
    renderList();
};

},{"./tasksView.js":"1P8Pa","./checkedView.js":"fc2We","./removeView.js":"jsNEI","./taskArrView.js":"elewV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1P8Pa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderTasks", ()=>renderTasks);
parcelHelpers.export(exports, "refreshTasks", ()=>refreshTasks);
var _taskArrViewJs = require("./taskArrView.js");
const listElementsContainer = document.querySelector(".list-elements");
const renderTasks = function() {
    //generate the HTML markup
    let markup = "";
    (0, _taskArrViewJs.taskArr).forEach((listEl)=>markup += generateMarkup(listEl));
    //rerender the starting message if there are no tasks
    if ((0, _taskArrViewJs.taskArr).length === 0) markup = '<li class="start-msg list-item">Click + to add first task to list</li>';
    //insert markup to the parent class
    listElementsContainer.insertAdjacentHTML("afterbegin", markup);
};
const refreshTasks = function() {
    //select all list items
    let allListitems = document.querySelectorAll(".list-item");
    //remove all list items
    [
        ...allListitems
    ].forEach((item)=>item.remove());
};
const generateFormattedTime = function(listEl) {
    return `${parseInt(listEl.time.slice(0, 2)) === 12 ? 12 : parseInt(listEl.time.slice(0, 2)) === 0 ? 12 : parseInt(listEl.time.slice(0, 2)) % 12}${listEl.time.slice(2)} ${parseInt(listEl.time.slice(0, 2)) >= 12 ? "PM" : "AM"}`;
};
const generateMarkup = function(listEl) {
    return `
    <li class="list-item item${listEl.itemNum}">
        <div class="task-info">
        <input class="checkbox" type="checkbox" ${listEl.checked ? "checked" : ""}/>
            <p class="task">${listEl.task}</p>
            <p class="task-time">${listEl.time === "" ? "" : generateFormattedTime(listEl)}
            </p>
        </div>
        <div class="task-actions">
            <img class="star-icon ${!listEl.important ? "hidden" : ""}" src="https://www.svgrepo.com/show/13695/star.svg" alt="Favorited Icon" />
            <button class="btn-remove-task ${!listEl.checked ? "hidden" : ""}">Remove</button>
        </div>
    </li>
  `;
};

},{"./taskArrView.js":"elewV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"elewV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "taskArr", ()=>taskArr);
parcelHelpers.export(exports, "removeFromTaskArr", ()=>removeFromTaskArr);
parcelHelpers.export(exports, "createNewTask", ()=>createNewTask);
parcelHelpers.export(exports, "sortTaskArr", ()=>sortTaskArr);
let taskArr = [];
const createNewTask = function(task, time) {
    //formatting the task string to capitalize first letter of each word
    const formattedTask = task.toLowerCase().split(" ").map((wrd)=>wrd[0].toUpperCase() + wrd.slice(1)).join(" ");
    //creating the task object which will be pushed to the task array
    const taskInfo = {
        task: formattedTask,
        time,
        important: false,
        checked: false,
        itemNum: taskArr.length
    };
    //add new task to the task array
    taskArr.push(taskInfo);
//testing
// const path = require("path");
// let relative = "imgs/star.png";
// let absolute = path.resolve(relative);
// console.log(absolute);
};
const removeFromTaskArr = function(e) {
    const index = +taskArr.findIndex((el)=>el.itemNum === +e.target.closest(".list-item").classList[1].slice(-1));
    //reassign list number fields for tasks in the taskArr
    taskArr.forEach((el)=>{
        if (el.itemNum > index) el.itemNum--;
    });
    //remove the correct element from taskArr
    taskArr = [
        ...taskArr.slice(0, index),
        ...taskArr.slice(index + 1, taskArr.length)
    ];
};
const sortTaskArr = function(arr) {
    taskArr = arr;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fc2We":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkboxes", ()=>checkboxes);
parcelHelpers.export(exports, "checked", ()=>checked);
parcelHelpers.export(exports, "checkedHandler", ()=>checkedHandler);
parcelHelpers.export(exports, "getCheckBoxes", ()=>getCheckBoxes);
parcelHelpers.export(exports, "removeFromCheckedArr", ()=>removeFromCheckedArr);
parcelHelpers.export(exports, "reassignChecked", ()=>reassignChecked);
parcelHelpers.export(exports, "refreshCheckedArr", ()=>refreshCheckedArr);
var _taskArrViewJs = require("./taskArrView.js");
//declare global scope
let checkboxes;
let checked = [];
//used to get the current checkboxes in the window
const getCheckBoxes = function() {
    checkboxes = [
        ...document.querySelectorAll(".checkbox")
    ];
};
//function to reassign the element task numbers in the checked array after an element is removed
const reassignChecked = function(e) {
    //selecting the task number for the element that was removed from the task array
    const removedTaskNum = e.target.closest(".list-item").classList[1].slice(-1);
    // reasssigning all of the values that are changed by the current task being unchecked
    checked = checked.map((el)=>{
        if (el.slice(-1) > removedTaskNum) return `${el.slice(0, el.length - 1)}${el.slice(-1) - 1}`;
        return el;
    });
};
const removeFromCheckedArr = function(e) {
    const index = checked.indexOf(e.target.closest(".list-item").classList[1]);
    //removing the correct list item based on what box was unchecked
    checked = [
        ...checked.slice(0, index),
        ...checked.slice(index + 1, checked.length)
    ];
};
const checkedHandler = function(e) {
    //selecting the closest remove button from the checked box and making it visible
    e.target.closest(".list-item").querySelector(".btn-remove-task").classList.toggle("hidden");
    //finding correct index in taskArr
    const index = +(0, _taskArrViewJs.taskArr).findIndex((el)=>el.itemNum === +e.target.closest(".list-item").classList[1].slice(-1));
    //update the checked array for use in selecting all checked elements to mark as important
    if (e.target.checked) {
        checked.push(e.target.closest(".list-item").classList[1]);
        (0, _taskArrViewJs.taskArr)[index].checked = true;
    }
    if (!e.target.checked) {
        removeFromCheckedArr(e);
        (0, _taskArrViewJs.taskArr)[index].checked = false;
        //unhide the important button
        if (checked.length === 0) document.querySelector(".btn-important").classList.add("hidden");
    }
    if (checked.length !== 0) document.querySelector(".btn-important").classList.remove("hidden");
};
const clearCheckedArr = function() {
    checked.length = 0;
};
const refreshCheckedArr = function(arr) {
    clearCheckedArr();
    arr.forEach((el)=>{
        if (el.checked) checked.push(`item${el.itemNum}`);
    });
};

},{"./taskArrView.js":"elewV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jsNEI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "removeBtns", ()=>removeBtns);
parcelHelpers.export(exports, "getRemoveBtns", ()=>getRemoveBtns);
parcelHelpers.export(exports, "removedHandler", ()=>removedHandler);
var _formViewJs = require("./formView.js");
var _checkedViewJs = require("./checkedView.js");
var _taskArrViewJs = require("./taskArrView.js");
var _sortViewJs = require("./sortView.js");
let removeBtns;
const getRemoveBtns = function() {
    removeBtns = [
        ...document.querySelectorAll(".btn-remove-task")
    ];
};
const removedHandler = function(e) {
    //remove task from the checked array and task array
    (0, _sortViewJs.removeFromSort)(e);
    (0, _checkedViewJs.removeFromCheckedArr)(e);
    (0, _taskArrViewJs.removeFromTaskArr)(e);
    //if the list is empty, remove the important button
    if ((0, _taskArrViewJs.taskArr).length === 0) document.querySelector(".btn-important").classList.add("hidden");
    //if checked array is empty, remove the important button
    if ((0, _checkedViewJs.checked).length === 0) document.querySelector(".btn-important").classList.add("hidden");
    //refresh and rerender the list
    (0, _formViewJs.renderList)();
    //reassign needed values in the checked array
    (0, _checkedViewJs.reassignChecked)(e);
};

},{"./formView.js":"ckTVq","./checkedView.js":"fc2We","./taskArrView.js":"elewV","./sortView.js":"aSWOM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aSWOM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sortHandler", ()=>sortHandler);
parcelHelpers.export(exports, "removeFromSort", ()=>removeFromSort);
var _formViewJs = require("./formView.js");
var _taskArrViewJs = require("./taskArrView.js");
var _checkedViewJs = require("./checkedView.js");
var _removeViewJs = require("./removeView.js");
//global scope
//important tasks
let importantTasks = [];
let importantTasksWithTime = [];
let importantTasksNoTime = [];
//nonimportant tasks
let nonImportantTasks = [];
let nonImportantTasksWithTime = [];
let nonImportantTasksNoTime = [];
//////////////////////////////////////////////////////////////////////////////////////////////////
//helper functions to remove elements from the arrays
const removeEl = function(el, arr) {
    const index = arr.indexOf(el);
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1, arr.length)
    ];
};
const sortImportant = function() {
    //map tasks marked as important to the importantTasks array
    (0, _taskArrViewJs.taskArr).forEach((el)=>{
        if (el.important) {
            if (!importantTasks.includes(el)) importantTasks.push(el);
            if (nonImportantTasks.includes(el)) nonImportantTasks = removeEl(el, nonImportantTasks);
        } else if (!el.important) {
            //if task is not important but is in the important array, remove from important array
            if (importantTasks.includes(el)) importantTasks = removeEl(el, importantTasks);
            //push the unimportant task to the correct array
            if (!nonImportantTasks.includes(el)) nonImportantTasks.push(el);
        }
    });
};
const sortImportantSubArrays = function() {
    //handle sorting important tasks into timed and not timed
    importantTasks.forEach((el)=>{
        if (el.time) {
            //push the timed task to the correct array
            if (!importantTasksWithTime.includes(el)) importantTasksWithTime.push(el);
            //if task is timed but is in the not timed array, remove from not timed array
            if (importantTasksNoTime.includes(el)) importantTasksNoTime = removeEl(el, importantTasksNoTime);
            //if task is in important timed array, remove from the important timed array
            if (nonImportantTasksWithTime.includes(el)) nonImportantTasksWithTime = removeEl(el, nonImportantTasksWithTime);
        } else if (!el.time) {
            //push the untimed task to the correct array
            if (!importantTasksNoTime.includes(el)) importantTasksNoTime.push(el);
            //if task is not timed but is in the not timed array, remove from not timed array
            if (importantTasksWithTime.includes(el)) importantTasksWithTime = removeEl(el, importantTasksWithTime);
            //if task is in not important timed array, remove from the not important timed array
            if (nonImportantTasksNoTime.includes(el)) nonImportantTasksNoTime = removeEl(el, nonImportantTasksNoTime);
        }
    });
};
const sortNonImportantSubArrays = function() {
    //handle sorting nonimportant tasks into timed and not timed
    nonImportantTasks.forEach((el)=>{
        if (el.time) {
            //push the timed task to the correct array
            if (!nonImportantTasksWithTime.includes(el)) nonImportantTasksWithTime.push(el);
            //if task is timed but is in the not timed array, remove from not timed array
            if (nonImportantTasksNoTime.includes(el)) nonImportantTasksNoTime = removeEl(el, nonImportantTasksNoTime);
            //if task is in important timed array, remove from the important timed array
            if (importantTasksWithTime.includes(el)) importantTasksWithTime = removeEl(el, importantTasksWithTime);
        } else if (!el.time) {
            //push the untimed task to the correct array
            if (!nonImportantTasksNoTime.includes(el)) nonImportantTasksNoTime.push(el);
            //if task is not timed but is in the not timed array, remove from not timed array
            if (nonImportantTasksWithTime.includes(el)) nonImportantTasksWithTime = removeEl(el, nonImportantTasksWithTime);
            //if task is in important timed array, remove from the important timed array
            if (importantTasksNoTime.includes(el)) importantTasksNoTime = removeEl(el, importantTasksNoTime);
        }
    });
};
const sortTimed = function(timedArr) {
    return timedArr.sort((a, b)=>{
        const time1 = +a.time.split(":")[0] * 60 + +a.time.split(":")[1];
        const time2 = +b.time.split(":")[0] * 60 + +b.time.split(":")[1];
        return time1 - time2;
    });
};
///////////////////////////////////////////////////////////////////////////////////////////////////
const sortTasks = function() {
    //sort the task array into appropriate sub-arrays
    sortImportant();
    sortImportantSubArrays();
    sortNonImportantSubArrays();
    //sort the timed arrays
    const sortedImportantTimed = sortTimed(importantTasksWithTime);
    const sortedNonImportantTimed = sortTimed(nonImportantTasksWithTime);
    //generating the new taskArr
    (0, _taskArrViewJs.sortTaskArr)([
        ...sortedImportantTimed,
        ...importantTasksNoTime,
        ...sortedNonImportantTimed,
        ...nonImportantTasksNoTime
    ]);
};
const sortHandler = function(e) {
    //guard clause
    if ((0, _taskArrViewJs.taskArr).length === 0) return;
    //handle correctly depending on if the list is already sorted
    sortTasks();
    //rerender the list with the new order
    (0, _checkedViewJs.refreshCheckedArr)((0, _taskArrViewJs.taskArr));
    (0, _formViewJs.renderList)();
};
//handle when an element is removed from the task array, first remove it from the correct sorted/unsorted array
const removeFromSort = function(e) {
    let removed = false;
    let removedTimed = false;
    //select the correct element from task array based on the element that was clicked
    const removedElement = (0, _taskArrViewJs.taskArr)[(0, _taskArrViewJs.taskArr).findIndex((el)=>el.itemNum === +e.target.closest(".list-item").classList[1].slice(-1))];
    //handle removal from correct array
    importantTasks.forEach((el)=>{
        if (el === removedElement) importantTasks = removeEl(el, importantTasks);
        removed = true;
    });
    //gaurd clause for efficiency, if element is already removed, skip
    if (!removed) nonImportantTasks.forEach((el)=>{
        if (el === removedElement) nonImportantTasks = removeEl(el, nonImportantTasks);
        removed = true;
    });
    //handling the timed arrays
    importantTasksWithTime.forEach((el)=>{
        el === removedElement ? importantTasksWithTime = removeEl(el, importantTasksWithTime) : importantTasksWithTime;
        removedTimed = true;
    });
    if (!removedTimed) importantTasksNoTime.forEach((el)=>{
        el === removedElement ? importantTasksNoTime = removeEl(el, importantTasksNoTime) : importantTasksNoTime;
        removedTimed = true;
    });
    if (!removedTimed) nonImportantTasksWithTime.forEach((el)=>{
        el === removedElement ? nonImportantTasksWithTime = removeEl(el, nonImportantTasksWithTime) : nonImportantTasksWithTime;
        removedTimed = true;
    });
    if (!removedTimed) nonImportantTasksNoTime.forEach((el)=>el === removedElement ? nonImportantTasksNoTime = removeEl(el, nonImportantTasksNoTime) : nonImportantTasksNoTime);
};

},{"./formView.js":"ckTVq","./taskArrView.js":"elewV","./checkedView.js":"fc2We","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./removeView.js":"jsNEI"}],"fqU95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "importantBtnHandler", ()=>importantBtnHandler);
var _checkedViewJs = require("./checkedView.js");
var _formViewJs = require("./formView.js");
var _taskArrViewJs = require("./taskArrView.js");
const addImportantAttribute = function(el) {
    //selecting index of the task in the taskArr
    const elementIndex = +el.slice(-1);
    const index = (0, _taskArrViewJs.taskArr).findIndex((element)=>element.itemNum === elementIndex);
    //reassigning the important field for the currently selected task
    if (!(0, _taskArrViewJs.taskArr)[index].important) (0, _taskArrViewJs.taskArr)[index].important = true;
    else (0, _taskArrViewJs.taskArr)[index].important = false;
};
const importantBtnHandler = function() {
    //adding the important attribute to all tasks currently checked
    (0, _checkedViewJs.checked).forEach((el)=>{
        addImportantAttribute(el);
    });
    //rerender the list with updated important field values
    (0, _formViewJs.renderList)();
};

},{"./checkedView.js":"fc2We","./formView.js":"ckTVq","./taskArrView.js":"elewV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["gAoaA","6rimH"], "6rimH", "parcelRequiree5c7")

//# sourceMappingURL=index.8cfc62b9.js.map
