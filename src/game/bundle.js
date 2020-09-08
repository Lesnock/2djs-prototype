/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/game/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../2djs/dist/index.js":
/*!*****************************!*\
  !*** ../2djs/dist/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SpriteSheet = exports.Loader = exports.Animation = exports.Graphics = exports.Input = exports.Display = exports.Configs = exports.Globals = exports.Sprite = exports.Assets = exports.State = exports.Tile = exports.Game = void 0;\r\nvar Game_1 = __webpack_require__(/*! ./src/core/modules/Game */ \"../2djs/dist/src/core/modules/Game.js\");\r\nObject.defineProperty(exports, \"Game\", { enumerable: true, get: function () { return __importDefault(Game_1).default; } });\r\nvar Tile_1 = __webpack_require__(/*! ./src/core/modules/Tile */ \"../2djs/dist/src/core/modules/Tile.js\");\r\nObject.defineProperty(exports, \"Tile\", { enumerable: true, get: function () { return __importDefault(Tile_1).default; } });\r\nvar State_1 = __webpack_require__(/*! ./src/core/modules/State */ \"../2djs/dist/src/core/modules/State.js\");\r\nObject.defineProperty(exports, \"State\", { enumerable: true, get: function () { return __importDefault(State_1).default; } });\r\nvar Assets_1 = __webpack_require__(/*! ./src/core/modules/Assets */ \"../2djs/dist/src/core/modules/Assets.js\");\r\nObject.defineProperty(exports, \"Assets\", { enumerable: true, get: function () { return __importDefault(Assets_1).default; } });\r\nvar Sprite_1 = __webpack_require__(/*! ./src/core/modules/Sprite */ \"../2djs/dist/src/core/modules/Sprite.js\");\r\nObject.defineProperty(exports, \"Sprite\", { enumerable: true, get: function () { return __importDefault(Sprite_1).default; } });\r\nvar Globals_1 = __webpack_require__(/*! ./src/core/modules/Globals */ \"../2djs/dist/src/core/modules/Globals.js\");\r\nObject.defineProperty(exports, \"Globals\", { enumerable: true, get: function () { return __importDefault(Globals_1).default; } });\r\nvar Configs_1 = __webpack_require__(/*! ./src/core/modules/Configs */ \"../2djs/dist/src/core/modules/Configs.js\");\r\nObject.defineProperty(exports, \"Configs\", { enumerable: true, get: function () { return __importDefault(Configs_1).default; } });\r\nvar Display_1 = __webpack_require__(/*! ./src/core/modules/Display */ \"../2djs/dist/src/core/modules/Display.js\");\r\nObject.defineProperty(exports, \"Display\", { enumerable: true, get: function () { return __importDefault(Display_1).default; } });\r\nvar Input_1 = __webpack_require__(/*! ./src/core/modules/input/Input */ \"../2djs/dist/src/core/modules/input/Input.js\");\r\nObject.defineProperty(exports, \"Input\", { enumerable: true, get: function () { return __importDefault(Input_1).default; } });\r\nvar Graphics_1 = __webpack_require__(/*! ./src/core/modules/Graphics */ \"../2djs/dist/src/core/modules/Graphics.js\");\r\nObject.defineProperty(exports, \"Graphics\", { enumerable: true, get: function () { return __importDefault(Graphics_1).default; } });\r\nvar Animation_1 = __webpack_require__(/*! ./src/core/modules/Animation */ \"../2djs/dist/src/core/modules/Animation.js\");\r\nObject.defineProperty(exports, \"Animation\", { enumerable: true, get: function () { return __importDefault(Animation_1).default; } });\r\nvar Loader_1 = __webpack_require__(/*! ./src/core/modules/loader/Loader */ \"../2djs/dist/src/core/modules/loader/Loader.js\");\r\nObject.defineProperty(exports, \"Loader\", { enumerable: true, get: function () { return __importDefault(Loader_1).default; } });\r\nvar SpriteSheet_1 = __webpack_require__(/*! ./src/core/modules/SpriteSheet */ \"../2djs/dist/src/core/modules/SpriteSheet.js\");\r\nObject.defineProperty(exports, \"SpriteSheet\", { enumerable: true, get: function () { return __importDefault(SpriteSheet_1).default; } });\r\n\n\n//# sourceURL=webpack:///../2djs/dist/index.js?");

/***/ }),

/***/ "../2djs/dist/src/core/helpers.js":
/*!****************************************!*\
  !*** ../2djs/dist/src/core/helpers.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createBuffer = void 0;\r\nfunction createBuffer(width, height) {\r\n    var buffer = document.createElement('canvas');\r\n    buffer.width = width;\r\n    buffer.height = height;\r\n    return buffer;\r\n}\r\nexports.createBuffer = createBuffer;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/helpers.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Animation.js":
/*!**************************************************!*\
  !*** ../2djs/dist/src/core/modules/Animation.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Animation = /** @class */ (function () {\r\n    function Animation(frames, loop) {\r\n        if (loop === void 0) { loop = true; }\r\n        this.frames = frames;\r\n        this.loop = loop;\r\n        this.size = this.frames.length;\r\n        this.index = 0;\r\n        this.lastTime = new Date().getTime();\r\n        this.timer = 0;\r\n        this.canPlay = true;\r\n    }\r\n    Object.defineProperty(Animation.prototype, \"currentFrame\", {\r\n        get: function () {\r\n            return this.frames[this.index];\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Animation.prototype.update = function () {\r\n        if (!this.canPlay) {\r\n            return;\r\n        }\r\n        this.timer += new Date().getTime() - this.lastTime;\r\n        this.lastTime = new Date().getTime();\r\n        var frameSpeed = this.frames[this.index].speed;\r\n        if (this.timer < frameSpeed) {\r\n            return;\r\n        }\r\n        this.index++;\r\n        this.timer = 0;\r\n        if (this.index >= this.size) {\r\n            if (!this.loop) {\r\n                this.index = this.size - 1; // -1 because index starts on zero\r\n                this.canPlay = false;\r\n                return;\r\n            }\r\n            this.index = 0;\r\n        }\r\n    };\r\n    return Animation;\r\n}());\r\nexports.default = Animation;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Animation.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Assets.js":
/*!***********************************************!*\
  !*** ../2djs/dist/src/core/modules/Assets.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar images = new Map();\r\nvar sheets = new Map();\r\nvar audios = new Map();\r\nvar json = new Map();\r\nvar Assets = {\r\n    images: images,\r\n    sheets: sheets,\r\n    audios: audios,\r\n    json: json\r\n};\r\nAssets.images = images;\r\nAssets.sheets = sheets;\r\nAssets.audios = audios;\r\nAssets.json = json;\r\nexports.default = Assets;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Assets.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Configs.js":
/*!************************************************!*\
  !*** ../2djs/dist/src/core/modules/Configs.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar configs = {\r\n    title: '2DJS',\r\n    width: 800,\r\n    height: 600,\r\n    fps: 60,\r\n    mainController: 'keyboard'\r\n};\r\nexports.default = configs;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Configs.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Display.js":
/*!************************************************!*\
  !*** ../2djs/dist/src/core/modules/Display.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createCanvas = void 0;\r\nvar Graphics_1 = __importDefault(__webpack_require__(/*! ./Graphics */ \"../2djs/dist/src/core/modules/Graphics.js\"));\r\n/**\r\n * Create a canvas Element\r\n * @param width\r\n * @param height\r\n */\r\nfunction createCanvas(width, height) {\r\n    var canvas = document.createElement('canvas');\r\n    canvas.width = width;\r\n    canvas.height = height;\r\n    canvas.style.setProperty('image-rendering', 'pixelated');\r\n    return canvas;\r\n}\r\nexports.createCanvas = createCanvas;\r\nvar Display = /** @class */ (function () {\r\n    function Display(width, height) {\r\n        var _a;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.canvas = createCanvas(width, height);\r\n        (_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.appendChild(this.canvas);\r\n        this.graphics = new Graphics_1.default(this.canvas.getContext('2d'));\r\n    }\r\n    Display.prototype.getGraphics = function () {\r\n        return this.graphics;\r\n    };\r\n    return Display;\r\n}());\r\nexports.default = Display;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Display.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Game.js":
/*!*********************************************!*\
  !*** ../2djs/dist/src/core/modules/Game.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar State_1 = __importDefault(__webpack_require__(/*! ./State */ \"../2djs/dist/src/core/modules/State.js\"));\r\nvar Assets_1 = __importDefault(__webpack_require__(/*! ./Assets */ \"../2djs/dist/src/core/modules/Assets.js\"));\r\nvar Configs_1 = __importDefault(__webpack_require__(/*! ./Configs */ \"../2djs/dist/src/core/modules/Configs.js\"));\r\nvar Display_1 = __importDefault(__webpack_require__(/*! ./Display */ \"../2djs/dist/src/core/modules/Display.js\"));\r\nvar Globals_1 = __importDefault(__webpack_require__(/*! ./Globals */ \"../2djs/dist/src/core/modules/Globals.js\"));\r\nvar Input_1 = __importDefault(__webpack_require__(/*! ./input/Input */ \"../2djs/dist/src/core/modules/input/Input.js\"));\r\nvar Loader_1 = __importDefault(__webpack_require__(/*! ./loader/Loader */ \"../2djs/dist/src/core/modules/loader/Loader.js\"));\r\nvar Game = /** @class */ (function () {\r\n    function Game(_configs) {\r\n        this.config = __assign(__assign({}, Configs_1.default), _configs);\r\n        document.title = this.config.title;\r\n        // Start display\r\n        this.display = new Display_1.default(this.config.width, this.config.height);\r\n        // Start Input\r\n        this.input = new Input_1.default(this.config);\r\n        this.input.listener();\r\n        // Start Globals\r\n        this.globals = new Globals_1.default();\r\n        // Start Loader\r\n        this.loader = new Loader_1.default();\r\n        // Assets\r\n        this.assets = Assets_1.default;\r\n    }\r\n    Game.prototype.start = function (initialState) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        if (!initialState) {\r\n                            throw new Error('A initial state is required to start the game.');\r\n                        }\r\n                        if (!(initialState instanceof State_1.default)) {\r\n                            throw new Error('initialState should be an instance of State');\r\n                        }\r\n                        // Pass modules to state\r\n                        initialState.setModules({\r\n                            config: this.config,\r\n                            input: this.input,\r\n                            globals: this.globals,\r\n                            display: this.display,\r\n                            loader: this.loader,\r\n                            assets: this.assets\r\n                        });\r\n                        this.currentState = initialState;\r\n                        this.globals.set('currentState', initialState);\r\n                        return [4 /*yield*/, this.globals.get('currentState').start()];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.runLoop();\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    /**\r\n     * Set the current state of the game\r\n     */\r\n    Game.prototype.setCurrentState = function (state) {\r\n        this.globals.set('currentState', state);\r\n    };\r\n    Game.prototype.update = function (dt) {\r\n        var currentState = this.globals.get('currentState');\r\n        if (currentState.canUpdate) {\r\n            currentState.update(dt);\r\n        }\r\n    };\r\n    Game.prototype.render = function (g) {\r\n        g.clear(this.display.width, this.display.height);\r\n        var currentState = this.globals.get('currentState');\r\n        if (currentState.canRender) {\r\n            currentState.render(g);\r\n            currentState.layers.render(g);\r\n        }\r\n    };\r\n    Game.prototype.runLoop = function () {\r\n        var _this = this;\r\n        var fps = this.config.fps;\r\n        var deltaTime = 1 / fps;\r\n        var lastTime = 0;\r\n        var timer = 0;\r\n        var now;\r\n        var loop = function () {\r\n            now = performance.now();\r\n            // Timer in miliseconds\r\n            timer += (now - lastTime) / 100;\r\n            if (timer > 1) {\r\n                timer = 1;\r\n            }\r\n            // Exec all overflow timer compared to delta\r\n            while (timer > deltaTime) {\r\n                _this.update(deltaTime);\r\n                _this.render(_this.display.graphics);\r\n                timer -= deltaTime;\r\n            }\r\n            lastTime = now;\r\n            requestAnimationFrame(loop);\r\n        };\r\n        loop();\r\n    };\r\n    return Game;\r\n}());\r\nexports.default = Game;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Game.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Globals.js":
/*!************************************************!*\
  !*** ../2djs/dist/src/core/modules/Globals.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar globalData = {};\r\nvar Globals = /** @class */ (function () {\r\n    function Globals() {\r\n    }\r\n    /**\r\n     * Get data from global data\r\n     */\r\n    Globals.prototype.get = function (key) {\r\n        // Sent array\r\n        if (Array.isArray(key)) {\r\n            var data_1 = {};\r\n            key.forEach(function (keyName) {\r\n                if (typeof keyName !== 'string') {\r\n                    throw new Error('Key name from global data should be a string');\r\n                }\r\n                data_1[keyName] = globalData[keyName];\r\n            });\r\n            return data_1;\r\n        }\r\n        // Sent string (unique value)\r\n        if (typeof key === 'string') {\r\n            return globalData[key];\r\n        }\r\n    };\r\n    /**\r\n     * Get all global data\r\n     */\r\n    Globals.prototype.all = function () {\r\n        return globalData;\r\n    };\r\n    /**\r\n     * Set data to global data\r\n     */\r\n    Globals.prototype.set = function (key, data) {\r\n        var _this = this;\r\n        // Sent object\r\n        if (typeof key === 'object') {\r\n            Object.keys(key).forEach(function (keyName) {\r\n                var object = key;\r\n                _this.set(keyName, object[keyName]);\r\n            });\r\n            return;\r\n        }\r\n        globalData[key] = data;\r\n    };\r\n    return Globals;\r\n}());\r\nexports.default = Globals;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Globals.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Graphics.js":
/*!*************************************************!*\
  !*** ../2djs/dist/src/core/modules/Graphics.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Tile_1 = __importDefault(__webpack_require__(/*! ./Tile */ \"../2djs/dist/src/core/modules/Tile.js\"));\r\nvar Sprite_1 = __importDefault(__webpack_require__(/*! ./Sprite */ \"../2djs/dist/src/core/modules/Sprite.js\"));\r\nvar Graphics = /** @class */ (function () {\r\n    function Graphics(context) {\r\n        this.context = context;\r\n    }\r\n    Graphics.prototype.clear = function (displayWidth, displayHeight) {\r\n        this.context.clearRect(0, 0, displayWidth, displayHeight);\r\n    };\r\n    Graphics.prototype.drawRect = function (x, y, width, height, color) {\r\n        this.context.save();\r\n        if (color) {\r\n            this.context.fillStyle = color;\r\n        }\r\n        this.context.fillRect(x, y, width, height);\r\n        this.context.restore();\r\n    };\r\n    Graphics.prototype.drawSprite = function (sprite, x, y, width, height) {\r\n        var dWidth = !width ? sprite.width : width;\r\n        var dHeight = !height ? sprite.height : height;\r\n        this.context.drawImage(sprite.buffer, x, y, dWidth, dHeight);\r\n    };\r\n    Graphics.prototype.drawTile = function (tile, x, y, width, height) {\r\n        var dWidth = !width ? tile.width : width;\r\n        var dHeight = !height ? tile.height : height;\r\n        this.context.drawImage(tile.buffer, x, y, dWidth, dHeight);\r\n    };\r\n    Graphics.prototype.drawAnimation = function (animation, x, y, width, height) {\r\n        var currentFrame = animation.currentFrame;\r\n        var bufferOrImage = null;\r\n        if (currentFrame.frame instanceof Sprite_1.default || currentFrame.frame instanceof Tile_1.default) {\r\n            bufferOrImage = currentFrame.frame.buffer;\r\n        }\r\n        else {\r\n            bufferOrImage = currentFrame.frame;\r\n        }\r\n        var dWidth = !width ? currentFrame.frame.width : width;\r\n        var dHeight = !height ? currentFrame.frame.height : height;\r\n        this.context.drawImage(bufferOrImage, x, y, dWidth, dHeight);\r\n        animation.update();\r\n    };\r\n    return Graphics;\r\n}());\r\nexports.default = Graphics;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Graphics.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Sprite.js":
/*!***********************************************!*\
  !*** ../2djs/dist/src/core/modules/Sprite.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"../2djs/dist/src/core/helpers.js\");\r\nvar Sprite = /** @class */ (function () {\r\n    function Sprite(image, xCrop, yCrop, widthCrop, heightCrop) {\r\n        if (xCrop === void 0) { xCrop = 0; }\r\n        if (yCrop === void 0) { yCrop = 0; }\r\n        var _a;\r\n        this.image = image;\r\n        this.x = xCrop;\r\n        this.y = yCrop;\r\n        this.width = !widthCrop ? this.image.width : widthCrop;\r\n        this.height = !heightCrop ? this.image.height : heightCrop;\r\n        var buffer = helpers_1.createBuffer(this.width, this.height);\r\n        (_a = buffer\r\n            .getContext('2d')) === null || _a === void 0 ? void 0 : _a.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);\r\n        this.buffer = buffer;\r\n    }\r\n    return Sprite;\r\n}());\r\nexports.default = Sprite;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Sprite.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/SpriteSheet.js":
/*!****************************************************!*\
  !*** ../2djs/dist/src/core/modules/SpriteSheet.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Tile_1 = __importDefault(__webpack_require__(/*! ./Tile */ \"../2djs/dist/src/core/modules/Tile.js\"));\r\nvar Sprite_1 = __importDefault(__webpack_require__(/*! ./Sprite */ \"../2djs/dist/src/core/modules/Sprite.js\"));\r\nvar Animation_1 = __importDefault(__webpack_require__(/*! ./Animation */ \"../2djs/dist/src/core/modules/Animation.js\"));\r\nvar SpriteSheet = /** @class */ (function () {\r\n    function SpriteSheet(image) {\r\n        this.image = image;\r\n        this.tiles = new Map();\r\n        this.sprites = new Map();\r\n        this.animations = new Map();\r\n    }\r\n    SpriteSheet.prototype.defineTile = function (id, xCrop, yCrop, width, height) {\r\n        var tile = new Tile_1.default(this.image, xCrop, yCrop, width, height);\r\n        this.tiles.set(id, tile);\r\n        return tile;\r\n    };\r\n    SpriteSheet.prototype.defineSprite = function (name, xCrop, yCrop, width, height) {\r\n        var sprite = new Sprite_1.default(this.image, xCrop, yCrop, width, height);\r\n        this.sprites.set(name, sprite);\r\n        return sprite;\r\n    };\r\n    SpriteSheet.prototype.defineAnimation = function (name, frames, loop) {\r\n        var _this = this;\r\n        if (loop === void 0) { loop = true; }\r\n        // Transform string frames in real sprites\r\n        var fixedFrames = frames.map(function (frame) {\r\n            if (typeof frame.frame === 'string') {\r\n                var sprite = _this.sprites.get(frame.frame);\r\n                if (!sprite) {\r\n                    throw new Error(\"Sprite \" + frame.frame + \" does not exists in spritesheet\");\r\n                }\r\n                return {\r\n                    frame: sprite,\r\n                    speed: frame.speed\r\n                };\r\n            }\r\n            return frame;\r\n        });\r\n        var animation = new Animation_1.default(fixedFrames, loop);\r\n        this.animations.set(name, animation);\r\n        return animation;\r\n    };\r\n    SpriteSheet.prototype.drawSprite = function (g, name, x, y, width, height) {\r\n        if (!this.sprites.has(name)) {\r\n            throw new Error(\"Sprite \" + name + \" does not exists in spritesheet\");\r\n        }\r\n        g.drawSprite(this.sprites.get(name), x, y, width, height);\r\n    };\r\n    SpriteSheet.prototype.drawTile = function (g, id, x, y, width, height) {\r\n        if (!this.tiles.has(id)) {\r\n            throw new Error(\"Tile \" + id + \" does not exists in spritesheet\");\r\n        }\r\n        g.drawTile(this.tiles.get(id), x, y, width, height);\r\n    };\r\n    SpriteSheet.prototype.drawAnimation = function (g, name, x, y, width, height) {\r\n        if (!this.animations.has(name)) {\r\n            throw new Error(\"Animation \" + name + \" does not exists in spritesheet\");\r\n        }\r\n        g.drawAnimation(this.animations.get(name), x, y, width, height);\r\n    };\r\n    return SpriteSheet;\r\n}());\r\nexports.default = SpriteSheet;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/SpriteSheet.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/State.js":
/*!**********************************************!*\
  !*** ../2djs/dist/src/core/modules/State.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar LayerManager_1 = __importDefault(__webpack_require__(/*! ./layers/LayerManager */ \"../2djs/dist/src/core/modules/layers/LayerManager.js\"));\r\nvar State = /** @class */ (function () {\r\n    function State() {\r\n        this.canUpdate = true;\r\n        this.canRender = true;\r\n        this.layers = new LayerManager_1.default();\r\n    }\r\n    State.prototype.update = function (dt) { };\r\n    ;\r\n    State.prototype.render = function (g) { };\r\n    ;\r\n    /**\r\n     * Set Game Modules\r\n     */\r\n    State.prototype.setModules = function (_a) {\r\n        var config = _a.config, input = _a.input, display = _a.display, globals = _a.globals, loader = _a.loader, assets = _a.assets;\r\n        this.config = config;\r\n        this.input = input;\r\n        this.display = display;\r\n        this.globals = globals;\r\n        this.loader = loader;\r\n        this.assets = assets;\r\n    };\r\n    /**\r\n     * Start\r\n     */\r\n    State.prototype.start = function (props) {\r\n        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {\r\n            return [2 /*return*/];\r\n        }); });\r\n    };\r\n    State.prototype.changeToState = function (state, props) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        state.setModules({\r\n                            config: this.config,\r\n                            input: this.input,\r\n                            display: this.display,\r\n                            globals: this.globals,\r\n                            loader: this.loader,\r\n                            assets: this.assets\r\n                        });\r\n                        return [4 /*yield*/, state.start(props)];\r\n                    case 1:\r\n                        _a.sent();\r\n                        this.globals.set('currentState', state);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    /**\r\n     * Get Layer Graphics\r\n     * @param index\r\n     */\r\n    State.prototype.onLayer = function (index) {\r\n        return this.layers.get(index).g;\r\n    };\r\n    return State;\r\n}());\r\nexports.default = State;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/State.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/Tile.js":
/*!*********************************************!*\
  !*** ../2djs/dist/src/core/modules/Tile.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"../2djs/dist/src/core/helpers.js\");\r\nvar Tile = /** @class */ (function () {\r\n    function Tile(image, xCrop, yCrop, widthCrop, heightCrop) {\r\n        if (xCrop === void 0) { xCrop = 0; }\r\n        if (yCrop === void 0) { yCrop = 0; }\r\n        var _a;\r\n        this.image = image;\r\n        this.x = xCrop;\r\n        this.y = yCrop;\r\n        this.width = !widthCrop ? this.image.width : widthCrop;\r\n        this.height = !heightCrop ? this.image.height : heightCrop;\r\n        var buffer = helpers_1.createBuffer(this.width, this.height);\r\n        (_a = buffer\r\n            .getContext('2d')) === null || _a === void 0 ? void 0 : _a.drawImage(this.image, this.x, this.y, this.width, this.height, 0, 0, this.width, this.height);\r\n        this.buffer = buffer;\r\n    }\r\n    return Tile;\r\n}());\r\nexports.default = Tile;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/Tile.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/input/Input.js":
/*!****************************************************!*\
  !*** ../2djs/dist/src/core/modules/input/Input.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar KeyboardController_1 = __importDefault(__webpack_require__(/*! ./controllers/KeyboardController */ \"../2djs/dist/src/core/modules/input/controllers/KeyboardController.js\"));\r\nvar controllers = {};\r\nvar Input = /** @class */ (function () {\r\n    function Input(configs) {\r\n        this.configs = configs;\r\n        // Keyboard Controller is the default\r\n        this.addController(new KeyboardController_1.default());\r\n    }\r\n    Object.defineProperty(Input.prototype, \"controllers\", {\r\n        /**\r\n         * Get all available controllers\r\n         */\r\n        get: function () {\r\n            return controllers;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    /**\r\n     * Get Controller instance\r\n     */\r\n    Input.prototype.getController = function (name) {\r\n        return controllers[name];\r\n    };\r\n    /**\r\n     * Add Controller to Input system\r\n     */\r\n    Input.prototype.addController = function (controller) {\r\n        controllers[controller.name] = controller;\r\n    };\r\n    /**\r\n     * Shortcut for method 'get' of main controller\r\n     */\r\n    Input.prototype.get = function (name) {\r\n        if (!controllers[this.configs.mainController]) {\r\n            throw new Error(\"Controller \" + this.configs.mainController + \" does not exists.\");\r\n        }\r\n        return controllers[this.configs.mainController].get(name);\r\n    };\r\n    /**\r\n     * Add listeners to keyboard keys\r\n     */\r\n    Input.prototype.listener = function () {\r\n        Object.keys(controllers).forEach(function (controllerName) {\r\n            controllers[controllerName].listener();\r\n        });\r\n    };\r\n    return Input;\r\n}());\r\nexports.default = Input;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/input/Input.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/input/controllers/Controller.js":
/*!*********************************************************************!*\
  !*** ../2djs/dist/src/core/modules/input/controllers/Controller.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controller = /** @class */ (function () {\r\n    function Controller() {\r\n        this.keys = {};\r\n    }\r\n    /**\r\n     * Get status of a keyboard key\r\n     */\r\n    Controller.prototype.get = function (name) {\r\n        if (!this.keys[name]) {\r\n            this.keys[name] = false;\r\n        }\r\n        return this.keys[name];\r\n    };\r\n    return Controller;\r\n}());\r\nexports.default = Controller;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/input/controllers/Controller.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/input/controllers/KeyboardController.js":
/*!*****************************************************************************!*\
  !*** ../2djs/dist/src/core/modules/input/controllers/KeyboardController.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Controller_1 = __importDefault(__webpack_require__(/*! ./Controller */ \"../2djs/dist/src/core/modules/input/controllers/Controller.js\"));\r\nvar KeyboardController = /** @class */ (function (_super) {\r\n    __extends(KeyboardController, _super);\r\n    function KeyboardController() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.name = 'keyboard';\r\n        return _this;\r\n    }\r\n    KeyboardController.prototype.listener = function () {\r\n        var _this = this;\r\n        // Key Down\r\n        document.onkeydown = function (event) {\r\n            event.preventDefault();\r\n            _this.keys[event.code] = true;\r\n        };\r\n        // Key Up\r\n        document.onkeyup = function (event) {\r\n            event.preventDefault();\r\n            _this.keys[event.code] = false;\r\n        };\r\n    };\r\n    return KeyboardController;\r\n}(Controller_1.default));\r\nexports.default = KeyboardController;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/input/controllers/KeyboardController.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/layers/Layer.js":
/*!*****************************************************!*\
  !*** ../2djs/dist/src/core/modules/layers/Layer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Configs_1 = __importDefault(__webpack_require__(/*! ../Configs */ \"../2djs/dist/src/core/modules/Configs.js\"));\r\nvar Graphics_1 = __importDefault(__webpack_require__(/*! ../Graphics */ \"../2djs/dist/src/core/modules/Graphics.js\"));\r\nvar Display_1 = __webpack_require__(/*! ../Display */ \"../2djs/dist/src/core/modules/Display.js\");\r\nvar Layer = /** @class */ (function () {\r\n    function Layer(_a) {\r\n        var _b = _a === void 0 ? {} : _a, width = _b.width, height = _b.height, _c = _b.transparency, transparency = _c === void 0 ? 1 : _c, _d = _b.isVisible, isVisible = _d === void 0 ? true : _d;\r\n        this.isVisible = true;\r\n        var _width = !width ? Configs_1.default.width : width;\r\n        var _height = !height ? Configs_1.default.height : height;\r\n        // Create canvas and context\r\n        this.canvas = Display_1.createCanvas(_width, _height);\r\n        var context = this.canvas.getContext('2d');\r\n        // Set Graphics\r\n        this.g = new Graphics_1.default(context);\r\n        this.isVisible = isVisible;\r\n        this.transparency = transparency;\r\n    }\r\n    Layer.prototype.render = function (g) {\r\n        g.context.save();\r\n        g.context.globalAlpha = this.transparency;\r\n        g.context.drawImage(this.canvas, 0, 0);\r\n        g.context.restore();\r\n    };\r\n    return Layer;\r\n}());\r\nexports.default = Layer;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/layers/Layer.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/layers/LayerManager.js":
/*!************************************************************!*\
  !*** ../2djs/dist/src/core/modules/layers/LayerManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Layer_1 = __importDefault(__webpack_require__(/*! ./Layer */ \"../2djs/dist/src/core/modules/layers/Layer.js\"));\r\nvar LayerManager = /** @class */ (function () {\r\n    function LayerManager() {\r\n        this.layers = [];\r\n    }\r\n    LayerManager.prototype.add = function (options) {\r\n        if (options === void 0) { options = {}; }\r\n        var nextIndex = this.layers.length;\r\n        var layer = new Layer_1.default(options);\r\n        this.layers.push(layer);\r\n        return nextIndex;\r\n    };\r\n    LayerManager.prototype.get = function (index) {\r\n        if (!this.layers[index]) {\r\n            throw new Error(\"Layer \" + index + \" was not created\");\r\n        }\r\n        return this.layers[index];\r\n    };\r\n    LayerManager.prototype.render = function (g) {\r\n        this.layers.forEach(function (layer) {\r\n            if (layer.isVisible) {\r\n                layer.render(g);\r\n            }\r\n        });\r\n    };\r\n    return LayerManager;\r\n}());\r\nexports.default = LayerManager;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/layers/LayerManager.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/loader/ImageLoader.js":
/*!***********************************************************!*\
  !*** ../2djs/dist/src/core/modules/loader/ImageLoader.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Assets_1 = __importDefault(__webpack_require__(/*! ../Assets */ \"../2djs/dist/src/core/modules/Assets.js\"));\r\nvar ImageLoader = /** @class */ (function () {\r\n    function ImageLoader() {\r\n    }\r\n    ImageLoader.prototype.load = function (path) {\r\n        if (Assets_1.default.images.has(path)) {\r\n            return new Promise(function (resolve) {\r\n                resolve(Assets_1.default.images.get(path));\r\n            });\r\n        }\r\n        var image = new Image();\r\n        return new Promise(function (resolve) {\r\n            image.onload = function () {\r\n                Assets_1.default.images.set(path, image);\r\n                resolve(image);\r\n            };\r\n            image.src = path;\r\n        });\r\n    };\r\n    return ImageLoader;\r\n}());\r\nexports.default = ImageLoader;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/loader/ImageLoader.js?");

/***/ }),

/***/ "../2djs/dist/src/core/modules/loader/Loader.js":
/*!******************************************************!*\
  !*** ../2djs/dist/src/core/modules/loader/Loader.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ImageLoader_1 = __importDefault(__webpack_require__(/*! ./ImageLoader */ \"../2djs/dist/src/core/modules/loader/ImageLoader.js\"));\r\nvar Loader = /** @class */ (function () {\r\n    function Loader() {\r\n    }\r\n    /**\r\n     * Load image\r\n     */\r\n    Loader.prototype.loadImage = function (path) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var loader;\r\n            return __generator(this, function (_a) {\r\n                loader = new ImageLoader_1.default();\r\n                return [2 /*return*/, loader.load(path)];\r\n            });\r\n        });\r\n    };\r\n    return Loader;\r\n}());\r\nexports.default = Loader;\r\n\n\n//# sourceURL=webpack:///../2djs/dist/src/core/modules/loader/Loader.js?");

/***/ }),

/***/ "./src/game/index.js":
/*!***************************!*\
  !*** ./src/game/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _2djs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! 2djs */ \"../2djs/dist/index.js\");\n/* harmony import */ var _2djs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_2djs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _states_GameState_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./states/GameState.ts */ \"./src/game/states/GameState.ts\");\n/* harmony import */ var _states_GameState_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_states_GameState_ts__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst game = new _2djs__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]({\n  title: 'My Game',\n  width: 800,\n  height: 600,\n  fps: 60\n})\n\ngame.start(new _states_GameState_ts__WEBPACK_IMPORTED_MODULE_1___default.a())\n\n\n//# sourceURL=webpack:///./src/game/index.js?");

/***/ }),

/***/ "./src/game/states/GameState.ts":
/*!**************************************!*\
  !*** ./src/game/states/GameState.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _2djs_1 = __webpack_require__(/*! 2djs */ \"../2djs/dist/index.js\");\r\nvar LoadingState_1 = __importDefault(__webpack_require__(/*! ./LoadingState */ \"./src/game/states/LoadingState.ts\"));\r\nvar GameState = /** @class */ (function (_super) {\r\n    __extends(GameState, _super);\r\n    function GameState() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.canUpdate = false;\r\n        _this.canRender = false;\r\n        return _this;\r\n    }\r\n    GameState.prototype.start = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var image, image2, image3;\r\n            var _this = this;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        setTimeout(function () {\r\n                            _this.canUpdate = true;\r\n                            _this.canRender = true;\r\n                        }, 1000);\r\n                        this.blockX = 100;\r\n                        this.blockY = 100;\r\n                        this.blockVelocity = 100;\r\n                        return [4 /*yield*/, this.loader.loadImage('game/images/test.jpg')];\r\n                    case 1:\r\n                        image = _a.sent();\r\n                        this.sprite = new _2djs_1.Sprite(image);\r\n                        this.tile = new _2djs_1.Tile(image);\r\n                        return [4 /*yield*/, this.loader.loadImage('game/images/mario.jpg')];\r\n                    case 2:\r\n                        image2 = _a.sent();\r\n                        return [4 /*yield*/, this.loader.loadImage('game/images/mario.png')];\r\n                    case 3:\r\n                        image3 = _a.sent();\r\n                        this.animation = new _2djs_1.Animation([\r\n                            { frame: this.sprite, speed: 500 },\r\n                            { frame: image2, speed: 500 },\r\n                        ], true);\r\n                        this.spritesheet = new _2djs_1.SpriteSheet(image);\r\n                        this.spritesheet.defineSprite('primeiro', 0, 0, 100, 100);\r\n                        this.spritesheet.defineSprite('segundo', 200, 200, 20, 20);\r\n                        this.spritesheet.defineTile(0, 100, 100, 20, 20);\r\n                        this.spritesheet.defineAnimation('test', [\r\n                            {\r\n                                frame: 'primeiro',\r\n                                speed: 500\r\n                            },\r\n                            {\r\n                                frame: 'segundo',\r\n                                speed: 500\r\n                            }\r\n                        ], true);\r\n                        // Layer 0 - Background\r\n                        this.layers.add({ isVisible: true });\r\n                        // Layer 1 - Foreground\r\n                        this.layers.add({ isVisible: true, transparency: 1 });\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    };\r\n    GameState.prototype.update = function (dt) {\r\n        if (this.input.get('KeyA')) {\r\n            this.blockX -= this.blockVelocity * dt;\r\n        }\r\n        if (this.input.get('KeyD')) {\r\n            this.changeToState(new LoadingState_1.default(), {\r\n                nextLevel: '2'\r\n            });\r\n        }\r\n    };\r\n    GameState.prototype.render = function (g) {\r\n        // g.drawSprite(this.sprite, 0, 0, 100, 100)\r\n        // g.drawTile(this.tile, 100, 0, 100, 100)\r\n        // g.drawAnimation(this.animation, 200, 0, 100, 100)\r\n        this.onLayer(1).drawRect(this.blockX, this.blockY, 100, 100, '#550000');\r\n        // this.spritesheet.drawSprite(g, 'primeiro', 500, 0)\r\n        // this.spritesheet.drawTile(g, 0, 400, 0)\r\n        // // this.spritesheet.drawAnimation(g, 'test', 400, 400)\r\n        // g.drawAnimation(<Animation>this.spritesheet.animations.get('test'), 400, 400)\r\n        this.onLayer(0).drawRect(0, 0, 300, 800, '#555500');\r\n        this.onLayer(0).drawSprite(this.sprite, 0, 0);\r\n        this.onLayer(1).drawRect(0, 0, 300, 300, '#0000FF');\r\n        // this.onLayer(1).drawRect()\r\n        // this.layers.get(1).g.drawRect\r\n        // g.drawSprite\r\n        // g.drawTile\r\n        // g.drawImage\r\n        // g.drawRect\r\n        // g.drawTriangle\r\n        // Advanced ----\r\n        // g.light.render('simple-light')\r\n        // this.layers.renderAll()\r\n        // this.layer[0].render()\r\n        // this.layer['background'].render()\r\n    };\r\n    return GameState;\r\n}(_2djs_1.State));\r\nexports.default = GameState;\r\n\n\n//# sourceURL=webpack:///./src/game/states/GameState.ts?");

/***/ }),

/***/ "./src/game/states/LoadingState.ts":
/*!*****************************************!*\
  !*** ./src/game/states/LoadingState.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar _2djs_1 = __webpack_require__(/*! 2djs */ \"../2djs/dist/index.js\");\r\nvar GameState_1 = __importDefault(__webpack_require__(/*! ./GameState */ \"./src/game/states/GameState.ts\"));\r\nvar LoadingState = /** @class */ (function (_super) {\r\n    __extends(LoadingState, _super);\r\n    function LoadingState() {\r\n        var _this = _super !== null && _super.apply(this, arguments) || this;\r\n        _this.canUpdate = false;\r\n        return _this;\r\n    }\r\n    LoadingState.prototype.start = function (_a) {\r\n        var nextLevel = _a.nextLevel;\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _this = this;\r\n            return __generator(this, function (_b) {\r\n                setTimeout(function () {\r\n                    _this.canUpdate = true;\r\n                }, 1000);\r\n                return [2 /*return*/];\r\n            });\r\n        });\r\n    };\r\n    LoadingState.prototype.update = function () {\r\n        if (this.input.get('KeyD')) {\r\n            this.changeToState(new GameState_1.default(), {\r\n                nextLevel: '2'\r\n            });\r\n        }\r\n    };\r\n    LoadingState.prototype.render = function (g) {\r\n        g.drawRect(0, 0, 200, 200);\r\n    };\r\n    return LoadingState;\r\n}(_2djs_1.State));\r\nexports.default = LoadingState;\r\n\n\n//# sourceURL=webpack:///./src/game/states/LoadingState.ts?");

/***/ })

/******/ });