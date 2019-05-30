// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/imports/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "texte": "Murs, ville,\n\nEt port,\nAsile\nDe mort,\nMer grise\nOù brise\nLa brise,\nTout dort. $Dans la plaine\n\nNaît un bruit.\nC’est l’haleine\nDe la nuit.\nElle brame\nComme une âme\nQu’une flamme\nToujours suit !$La voix plus haute\n\nSemble un grelot.\nD’un nain qui saute\nC’est le galop.\nIl fuit, s’élance,\nPuis en cadence\nSur un pied danse\nAu bout d’un flot. $La rumeur approche.\n\nL’écho la redit.\nC’est comme la cloche\nD’un couvent maudit ;\nComme un bruit de foule,\nQui tonne et qui roule,\nEt tantôt s’écroule,\nEt tantôt grandit, $Dieu ! la voix sépulcrale\n\nDes Djinns !... Quel bruit ils font !\nFuyons sous la spirale\nDe l’escalier profond.\nDéjà s’éteint ma lampe,\nEt l’ombre de la rampe,\nQui le long du mur rampe,\nMonte jusqu’au plafond.$C’est l’essaim des Djinns qui passe,\n\nEt tourbillonne en sifflant !\nLes ifs, que leur vol fracasse,\nCraquent comme un pin brûlant.\nLeur troupeau, lourd et rapide,\nVolant dans l’espace vide,\nSemble un nuage livide\nQui porte un éclair au flanc. $Ils sont tout près ! - Tenons fermée\n\nCette salle, où nous les narguons.\nQuel bruit dehors ! Hideuse armée\nDe vampires et de dragons !\nLa poutre du toit descellée\nPloie ainsi qu’une herbe mouillée,\nEt la vieille porte rouillée\nTremble, à déraciner ses gonds ! $Cris de l’enfer! voix qui hurle et qui pleure !\n\nL’horrible essaim, poussé par l’aquilon,\nSans doute, ô ciel ! s’abat sur ma demeure.\nLe mur fléchit sous le noir bataillon.\nLa maison crie et chancelle penchée,\nEt l’on dirait que, du sol arrachée,\nAinsi qu’il chasse une feuille séchée,\nLe vent la roule avec leur tourbillon ! $Prophète ! si ta main me sauve\n\nDe ces impurs démons des soirs,\nJ’irai prosterner mon front chauve\nDevant tes sacrés encensoirs !\nFais que sur ces portes fidèles\nMeure leur souffle d’étincelles,\nEt qu’en vain l’ongle de leurs ailes\nGrince et crie à ces vitraux noirs ! $Ils sont passés ! - Leur cohorte\n\nS’envole, et fuit, et leurs pieds\nCessent de battre ma porte\nDe leurs coups multipliés.\nL’air est plein d’un bruit de chaînes,\nEt dans les forêts prochaines\nFrissonnent tous les grands chênes,\nSous leur vol de feu pliés ! $De leurs ailes lointaines\n\nLe battement décroît,\nSi confus dans les plaines,\nSi faible, que l’on croit\nOuïr la sauterelle\nCrier d’une voix grêle,\nOu pétiller la grêle\nSur le plomb d’un vieux toit. $D’étranges syllabes\n\nNous viennent encor ;\nAinsi, des arabes\nQuand sonne le cor,\nUn chant sur la grève\nPar instants s’élève,\nEt l’enfant qui rêve\nFait des rêves d’or. $Les Djinns funèbres,\n\nFils du trépas,\nDans les ténèbres\nPressent leurs pas ;\nLeur essaim gronde :\nAinsi, profonde,\nMurmure une onde\nQu’on ne voit pas. $Ce bruit vague\n\nQui s’endort,\nC’est la vague\nSur le bord ;\nC’est la plainte,\nPresque éteinte,\nD’une sainte\nPour un mort. $On doute\n\nLa nuit...\nJ’écoute :\nTout fuit,\nTout passe\nL’espace\nEfface\nLe bruit."
};
exports.default = _default;
},{}],"src/imports/poeme.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Poeme = function Poeme(p) {
  var phrase = "";
  var width, height;
  var index = 0;
  var texte = [];
  var font;
  var fontsize = 30;

  p.preload = function () {
    font = p.loadFont("http://localhost:1234/font.otf");
    console.log(font);
  };

  p.setup = function () {
    width = p.windowWidth;
    height = p.windowHeight;
    p.createCanvas(width, height);
    p.frameRate(10);
  };

  p.draw = function () {
    p.background("white");
    p.readText(_data.default.texte);
    index++;
  };

  p.readText = function (phrase) {
    if (index < phrase.length) {
      if (phrase[index] != '$') {
        texte.push(phrase[index]);
      } else {
        texte = [];
      }
    } else {
      texte = [];
    } // console.log(texte)


    p.fill(0).textSize(fontsize).textLeading(fontsize + 3);
    p.textFont(font);
    p.text(texte.join(''), 20, 20, width, height);
  };
};

var _default = Poeme;
exports.default = _default;
},{"./data":"src/imports/data.js"}],"src/index.js":[function(require,module,exports) {
'use strict'; //Force page refresh on hot reload

var _poeme = _interopRequireDefault(require("./imports/poeme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (module.hot) {
  module.hot.accept(function () {
    window.location.reload();
  });
}

new p5(_poeme.default);
},{"./imports/poeme":"src/imports/poeme.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34719" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map