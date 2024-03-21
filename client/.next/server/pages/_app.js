"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n\n\n\n\n\nconst Nav = ()=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"nav d-flex justify-content-between\",\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                href: \"/\",\n                className: \"nav-link text-light logo\",\n                children: \"Butterfly\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                        href: \"/login\",\n                        className: \"nav-link text-light\",\n                        children: state && state.user && state.user.name\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 24,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: logout,\n                        className: \"nav-link text-light\",\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                        href: \"/login\",\n                        className: \"nav-link text-light\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__, {\n                        href: \"/register\",\n                        className: \"nav-link text-light\",\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtDO0FBQ047QUFDWTtBQUNEO0FBRXZDLE1BQU1JLE1BQU07SUFDUixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04saURBQVVBLENBQUNFLGlEQUFXQTtJQUVoRCxNQUFNSyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTUssU0FBUztRQUNYQyxPQUFPQyxZQUFZLENBQUNDLFVBQVUsQ0FBQztRQUMvQkwsU0FBUztRQUNUQyxPQUFPSyxJQUFJLENBQUM7SUFDaEI7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFxQ0MsT0FBTztZQUFFQyxpQkFBaUI7UUFBVTs7MEJBQ3BGLDhEQUFDZixzQ0FBSUE7Z0JBQUNnQixNQUFLO2dCQUFJSCxXQUFVOzBCQUEyQjs7Ozs7O1lBSW5EVCxVQUFVLHFCQUNQOztrQ0FDSSw4REFBQ0osc0NBQUlBO3dCQUFDZ0IsTUFBSzt3QkFBU0gsV0FBVTtrQ0FDekJULFNBQVNBLE1BQU1hLElBQUksSUFBSWIsTUFBTWEsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7a0NBRTNDLDhEQUFDQzt3QkFBRUMsU0FBU2I7d0JBQVFNLFdBQVU7a0NBQXNCOzs7Ozs7OzZDQUt4RDs7a0NBQ0ksOERBQUNiLHNDQUFJQTt3QkFBQ2dCLE1BQUs7d0JBQVNILFdBQVU7a0NBQXNCOzs7Ozs7a0NBSXBELDhEQUFDYixzQ0FBSUE7d0JBQUNnQixNQUFLO3dCQUFZSCxXQUFVO2tDQUFzQjs7Ozs7Ozs7Ozs7Ozs7QUFPM0U7QUFDQSxpRUFBZVYsR0FBR0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbXBvbmVudHMvTmF2LmpzPzg2NGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKVxuICAgICAgICBzZXRTdGF0ZShudWxsKVxuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAnIH19PlxuICAgICAgICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSduYXYtbGluayB0ZXh0LWxpZ2h0IGxvZ28nPlxuICAgICAgICAgICAgICAgIEJ1dHRlcmZseVxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICB7c3RhdGUgIT09IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZ2luJyBjbGFzc05hbWU9J25hdi1saW5rIHRleHQtbGlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPSduYXYtbGluayB0ZXh0LWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPSduYXYtbGluayB0ZXh0LWxpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcmVnaXN0ZXInIGNsYXNzTmFtZT0nbmF2LWxpbmsgdGV4dC1saWdodCc+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L25hdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiTGluayIsIlVzZXJDb250ZXh0IiwidXNlUm91dGVyIiwiTmF2Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInJvdXRlciIsImxvZ291dCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoIiwibmF2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJocmVmIiwidXNlciIsIm5hbWUiLCJhIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/context/index.js\",\n        lineNumber: 15,\n        columnNumber: 12\n    }, undefined);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBEO0FBRTFELE1BQU1HLDRCQUFjRixvREFBYUE7QUFFakMsTUFBTUcsZUFBZSxDQUFDLEVBQUVDLFFBQVEsRUFBRTtJQUM5QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7UUFDL0JRLE1BQU0sQ0FBQztRQUNQQyxPQUFPO0lBQ1g7SUFFQVAsZ0RBQVNBLENBQUM7UUFDTkssU0FBU0csS0FBS0MsS0FBSyxDQUFDQyxPQUFPQyxZQUFZLENBQUNDLE9BQU8sQ0FBQztJQUNwRCxHQUFHLEVBQUU7SUFFTCxxQkFBTyw4REFBQ1gsWUFBWVksUUFBUTtRQUFDQyxPQUFPO1lBQUNWO1lBQU9DO1NBQVM7a0JBQUdGOzs7Ozs7QUFDNUQ7QUFDb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb250ZXh0L2luZGV4LmpzPzVkMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5jb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHVzZXI6IHt9LFxuICAgICAgICB0b2tlbjogJycsXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFN0YXRlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoJykpKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PntjaGlsZHJlbn08L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxufVxuZXhwb3J0IHsgVXNlckNvbnRleHQsIFVzZXJQcm92aWRlciB9XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlRWZmZWN0IiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_4__]);\nreact_toastify__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// import { Head } from 'next/document'\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_5__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_head__WEBPACK_IMPORTED_MODULE_3__, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/css/styles.css\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDVjtBQUNQO0FBQzVCLHVDQUF1QztBQUNRO0FBQ047QUFDSztBQUNsQjtBQUU1QixTQUFTSSxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ25DLHFCQUNJLDhEQUFDSCxrREFBWUE7OzBCQUNULDhEQUFDRixzQ0FBSUE7MEJBQ0QsNEVBQUNNO29CQUFLQyxLQUFJO29CQUFhQyxNQUFLOzs7Ozs7Ozs7OzswQkFFaEMsOERBQUNULHVEQUFHQTs7Ozs7MEJBQ0osOERBQUNFLDBEQUFjQTtnQkFBQ1EsVUFBUzs7Ozs7OzBCQUN6Qiw4REFBQ0w7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBR3BDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuLy8gaW1wb3J0IHsgSGVhZCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dCdcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcbmltcG9ydCAnYW50ZC9kaXN0L3Jlc2V0LmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFVzZXJQcm92aWRlcj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL2Nzcy9zdHlsZXMuY3NzJyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5hdiAvPlxuICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIHBvc2l0aW9uPSd0b3AtY2VudGVyJyAvPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1VzZXJQcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiTmF2IiwiSGVhZCIsIlRvYXN0Q29udGFpbmVyIiwiVXNlclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwiaHJlZiIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/antd","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();