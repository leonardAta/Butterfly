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

/***/ "__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js":
/*!**************************************************************************!*\
  !*** __barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Avatar: () => (/* reexport safe */ _avatar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar */ \"./node_modules/antd/es/avatar/index.js\");\n\"use client\";\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1BdmF0YXIhPSEuL25vZGVfbW9kdWxlcy9hbnRkL2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9pbmRleC5qcz9hZTBiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEF2YXRhciB9IGZyb20gXCIuL2F2YXRhclwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js\n");

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _barrel_optimize_names_Avatar_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar!=!antd */ \"__barrel_optimize__?names=Avatar!=!./node_modules/antd/es/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_3__]);\n_context__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nconst Nav = ()=>{\n    const [current, setCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.UserContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n         false && 0;\n    }, [\n         false && 0\n    ]);\n    console.log(\"current ->\", current);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const logout = ()=>{\n        window.localStorage.removeItem(\"auth\");\n        setState(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"nav d-flex justify-content-between\",\n        style: {\n            backgroundColor: \"#000000\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                className: `nav-link text-light logo ${current === \"/\" && \"active\"}`,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_antd__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        src: \"/images/logo.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    \"Butterfly\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, undefined),\n            state !== null ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"dropdown\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"btn dropdown-toggle text-light\",\n                            role: \"button\",\n                            \"data-bs-toggle\": \"dropdown\",\n                            \"aria-expanded\": \"false\",\n                            children: state && state.user && state.user.name\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"dropdown-menu\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/dashboard\",\n                                        className: `nav-link dropdown-item  ${current === \"/user/dashboard\" && \"active\"}`,\n                                        children: \"Dashboard\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        href: \"/user/profile/update\",\n                                        className: `nav-link dropdown-item  ${current === \"/user/profile/update\" && \"active\"}`,\n                                        children: \"Profile\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        onClick: logout,\n                                        className: \"nav-link\",\n                                        children: \"Logout\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                            lineNumber: 42,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                    lineNumber: 33,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/login\",\n                        className: `nav-link text-light ${current === \"/login\" && \"active\"}`,\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        className: `nav-link text-light ${current === \"/register\" && \"active\"}`,\n                        children: \"Register\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n                        lineNumber: 77,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/Nav.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQ7QUFDM0I7QUFDWTtBQUNEO0FBQ1Y7QUFFN0IsTUFBTU8sTUFBTTtJQUNSLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1gsaURBQVVBLENBQUNJLGlEQUFXQTtJQUVoREgsZ0RBQVNBLENBQUM7UUFDTlcsTUFBZSxJQUFJSCxDQUFvQztJQUMzRCxHQUFHO1FBQUNHLE1BQWUsSUFBSUUsQ0FBd0I7S0FBQztJQUVoREcsUUFBUUMsR0FBRyxDQUFDLGNBQWNWO0lBRTFCLE1BQU1XLFNBQVNkLHNEQUFTQTtJQUV4QixNQUFNZSxTQUFTO1FBQ1hOLE9BQU9PLFlBQVksQ0FBQ0MsVUFBVSxDQUFDO1FBQy9CWCxTQUFTO1FBQ1RRLE9BQU9JLElBQUksQ0FBQztJQUNoQjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO1FBQXFDQyxPQUFPO1lBQUVDLGlCQUFpQjtRQUFVOzswQkFDcEYsOERBQUN4QixrREFBSUE7Z0JBQUN5QixNQUFLO2dCQUFJSCxXQUFXLENBQUMseUJBQXlCLEVBQUVqQixZQUFZLE9BQU8sU0FBUyxDQUFDOztrQ0FDL0UsOERBQUNGLHNFQUFNQTt3QkFBQ3VCLEtBQUk7Ozs7OztvQkFBcUI7Ozs7Ozs7WUFJcENuQixVQUFVLHFCQUNQOzBCQUNJLDRFQUFDb0I7b0JBQUlMLFdBQVU7O3NDQUNYLDhEQUFDTTs0QkFDR04sV0FBVTs0QkFDVk8sTUFBSzs0QkFDTEMsa0JBQWU7NEJBQ2ZDLGlCQUFjO3NDQUVieEIsU0FBU0EsTUFBTXlCLElBQUksSUFBSXpCLE1BQU15QixJQUFJLENBQUNDLElBQUk7Ozs7OztzQ0FFM0MsOERBQUNDOzRCQUFHWixXQUFVOzs4Q0FDViw4REFBQ2E7OENBQ0csNEVBQUNuQyxrREFBSUE7d0NBQ0R5QixNQUFLO3dDQUNMSCxXQUFXLENBQUMsd0JBQXdCLEVBQUVqQixZQUFZLHFCQUFxQixTQUFTLENBQUM7a0RBQ3BGOzs7Ozs7Ozs7Ozs4Q0FLTCw4REFBQzhCOzhDQUNHLDRFQUFDbkMsa0RBQUlBO3dDQUNEeUIsTUFBSzt3Q0FDTEgsV0FBVyxDQUFDLHdCQUF3QixFQUNoQ2pCLFlBQVksMEJBQTBCLFNBQ3pDLENBQUM7a0RBQ0w7Ozs7Ozs7Ozs7OzhDQUtMLDhEQUFDOEI7OENBQ0csNEVBQUNQO3dDQUFFUSxTQUFTbkI7d0NBQVFLLFdBQVU7a0RBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQVF6RDs7a0NBQ0ksOERBQUN0QixrREFBSUE7d0JBQUN5QixNQUFLO3dCQUFTSCxXQUFXLENBQUMsb0JBQW9CLEVBQUVqQixZQUFZLFlBQVksU0FBUyxDQUFDO2tDQUFFOzs7Ozs7a0NBSTFGLDhEQUFDTCxrREFBSUE7d0JBQUN5QixNQUFLO3dCQUFZSCxXQUFXLENBQUMsb0JBQW9CLEVBQUVqQixZQUFZLGVBQWUsU0FBUyxDQUFDO2tDQUFFOzs7Ozs7Ozs7Ozs7OztBQU9wSDtBQUNBLGlFQUFlRCxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vY29tcG9uZW50cy9OYXYuanM/ODY0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IEF2YXRhciB9IGZyb20gJ2FudGQnXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG4gICAgfSwgW3Byb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKVxuXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnQgLT4nLCBjdXJyZW50KVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoJylcbiAgICAgICAgc2V0U3RhdGUobnVsbClcbiAgICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPSduYXYgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyB9fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy8nIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtbGlnaHQgbG9nbyAke2N1cnJlbnQgPT09ICcvJyAmJiAnYWN0aXZlJ31gfT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz0nL2ltYWdlcy9sb2dvLnBuZycgLz5cbiAgICAgICAgICAgICAgICBCdXR0ZXJmbHlcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAge3N0YXRlICE9PSBudWxsID8gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkcm9wZG93bic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGRyb3Bkb3duLXRvZ2dsZSB0ZXh0LWxpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT0nZHJvcGRvd24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD0nZmFsc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlICYmIHN0YXRlLnVzZXIgJiYgc3RhdGUudXNlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj0nL3VzZXIvZGFzaGJvYXJkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgZHJvcGRvd24taXRlbSAgJHtjdXJyZW50ID09PSAnL3VzZXIvZGFzaGJvYXJkJyAmJiAnYWN0aXZlJ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXNoYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPScvdXNlci9wcm9maWxlL3VwZGF0ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIGRyb3Bkb3duLWl0ZW0gICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9PT0gJy91c2VyL3Byb2ZpbGUvdXBkYXRlJyAmJiAnYWN0aXZlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPSduYXYtbGluayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZ2luJyBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VycmVudCA9PT0gJy9sb2dpbicgJiYgJ2FjdGl2ZSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL3JlZ2lzdGVyJyBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LWxpZ2h0ICR7Y3VycmVudCA9PT0gJy9yZWdpc3RlcicgJiYgJ2FjdGl2ZSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L25hdj5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJBdmF0YXIiLCJOYXYiLCJjdXJyZW50Iiwic2V0Q3VycmVudCIsInN0YXRlIiwic2V0U3RhdGUiLCJwcm9jZXNzIiwiYnJvd3NlciIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwibG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJuYXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhyZWYiLCJzcmMiLCJkaXYiLCJhIiwicm9sZSIsImRhdGEtYnMtdG9nZ2xlIiwiYXJpYS1leHBhbmRlZCIsInVzZXIiLCJuYW1lIiwidWwiLCJsaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserContext: () => (/* binding */ UserContext),\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children })=>{\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        user: {},\n        token: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setState(JSON.parse(window.localStorage.getItem(\"auth\")));\n    }, []);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const token = state && state.token ? state.token : \"\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.baseURL = \"http://localhost:9000/api\";\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].defaults.headers.common[\"Authorization\"] = `Bearer ${token}`;\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].interceptors.response.use(function(response) {\n        // Do something before request is sent\n        return response;\n    }, function(error) {\n        // Do something with request error\n        let res = error.response;\n        if (res.status === 401 && !res.config.__isRetryRequest) {\n            setState(null);\n            window.localStorage.removeItem(\"auth\");\n            router.push(\"/login\");\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: [\n            state,\n            setState\n        ],\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/context/index.js\",\n        lineNumber: 39,\n        columnNumber: 12\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7QUFDYztBQUV2QyxNQUFNSyw0QkFBY0osb0RBQWFBO0FBRWpDLE1BQU1LLGVBQWUsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDOUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO1FBQy9CVSxNQUFNLENBQUM7UUFDUEMsT0FBTztJQUNYO0lBRUFULGdEQUFTQSxDQUFDO1FBQ05PLFNBQVNHLEtBQUtDLEtBQUssQ0FBQ0MsT0FBT0MsWUFBWSxDQUFDQyxPQUFPLENBQUM7SUFDcEQsR0FBRyxFQUFFO0lBRUwsTUFBTUMsU0FBU2Isc0RBQVNBO0lBRXhCLE1BQU1PLFFBQVFILFNBQVNBLE1BQU1HLEtBQUssR0FBR0gsTUFBTUcsS0FBSyxHQUFHO0lBQ25EUixzREFBYyxDQUFDZ0IsT0FBTyxHQUFHQywyQkFBMkI7SUFDcERqQixzREFBYyxDQUFDb0IsT0FBTyxDQUFDQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxPQUFPLEVBQUViLE1BQU0sQ0FBQztJQUVsRVIsMERBQWtCLENBQUN1QixRQUFRLENBQUNDLEdBQUcsQ0FDM0IsU0FBVUQsUUFBUTtRQUNkLHNDQUFzQztRQUN0QyxPQUFPQTtJQUNYLEdBQ0EsU0FBVUUsS0FBSztRQUNYLGtDQUFrQztRQUNsQyxJQUFJQyxNQUFNRCxNQUFNRixRQUFRO1FBQ3hCLElBQUlHLElBQUlDLE1BQU0sS0FBSyxPQUFPLENBQUNELElBQUlFLE1BQU0sQ0FBQ0MsZ0JBQWdCLEVBQUU7WUFDcER2QixTQUFTO1lBQ1RLLE9BQU9DLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQztZQUMvQmhCLE9BQU9pQixJQUFJLENBQUM7UUFDaEI7SUFDSjtJQUdKLHFCQUFPLDhEQUFDN0IsWUFBWThCLFFBQVE7UUFBQ0MsT0FBTztZQUFDNUI7WUFBT0M7U0FBUztrQkFBR0Y7Ozs7OztBQUM1RDtBQUNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL2NvbnRleHQvaW5kZXguanM/NWQyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcblxuY29uc3QgVXNlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xuICAgICAgICB1c2VyOiB7fSxcbiAgICAgICAgdG9rZW46ICcnLFxuICAgIH0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTdGF0ZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aCcpKSlcbiAgICB9LCBbXSlcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICBjb25zdCB0b2tlbiA9IHN0YXRlICYmIHN0YXRlLnRva2VuID8gc3RhdGUudG9rZW4gOiAnJ1xuICAgIGF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWBcblxuICAgIGF4aW9zLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoXG4gICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy8gRG8gc29tZXRoaW5nIGJlZm9yZSByZXF1ZXN0IGlzIHNlbnRcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIHJlcXVlc3QgZXJyb3JcbiAgICAgICAgICAgIGxldCByZXMgPSBlcnJvci5yZXNwb25zZVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSAmJiAhcmVzLmNvbmZpZy5fX2lzUmV0cnlSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgc2V0U3RhdGUobnVsbClcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGgnKVxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIClcblxuICAgIHJldHVybiA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT57Y2hpbGRyZW59PC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbn1cbmV4cG9ydCB7IFVzZXJDb250ZXh0LCBVc2VyUHJvdmlkZXIgfVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJjaGlsZHJlbiIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJKU09OIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJjb21tb24iLCJpbnRlcmNlcHRvcnMiLCJyZXNwb25zZSIsInVzZSIsImVycm9yIiwicmVzIiwic3RhdHVzIiwiY29uZmlnIiwiX19pc1JldHJ5UmVxdWVzdCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Nav */ \"./components/Nav.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/reset.css */ \"./node_modules/antd/dist/reset.css\");\n/* harmony import */ var antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_reset_css__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Nav__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _context__WEBPACK_IMPORTED_MODULE_5__]);\n([_components_Nav__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_4__, _context__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// import { Head } from 'next/document'\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_5__.UserProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/css/styles.css\"\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                    lineNumber: 14,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_4__.ToastContainer, {\n                position: \"top-center\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/_app.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNWO0FBQ1A7QUFDNUIsdUNBQXVDO0FBQ1E7QUFDTjtBQUNLO0FBQ2xCO0FBRTVCLFNBQVNJLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbkMscUJBQ0ksOERBQUNILGtEQUFZQTs7MEJBQ1QsOERBQUNGLGtEQUFJQTswQkFDRCw0RUFBQ007b0JBQUtDLEtBQUk7b0JBQWFDLE1BQUs7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ1QsdURBQUdBOzs7OzswQkFDSiw4REFBQ0UsMERBQWNBO2dCQUFDUSxVQUFTOzs7Ozs7MEJBQ3pCLDhEQUFDTDtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7QUFHcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcbmltcG9ydCBOYXYgZnJvbSAnLi4vY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG4vLyBpbXBvcnQgeyBIZWFkIH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBVc2VyUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0J1xuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJ1xuaW1wb3J0ICdhbnRkL2Rpc3QvcmVzZXQuY3NzJ1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8VXNlclByb3ZpZGVyPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvY3NzL3N0eWxlcy5jc3MnIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2IC8+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249J3RvcC1jZW50ZXInIC8+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVXNlclByb3ZpZGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJOYXYiLCJIZWFkIiwiVG9hc3RDb250YWluZXIiLCJVc2VyUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxpbmsiLCJyZWwiLCJocmVmIiwicG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "@ant-design/colors":
/*!*************************************!*\
  !*** external "@ant-design/colors" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@ant-design/colors");

/***/ }),

/***/ "@ant-design/cssinjs":
/*!**************************************!*\
  !*** external "@ant-design/cssinjs" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@ant-design/cssinjs");

/***/ }),

/***/ "@ctrl/tinycolor":
/*!**********************************!*\
  !*** external "@ctrl/tinycolor" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@ctrl/tinycolor");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

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

/***/ "rc-motion":
/*!****************************!*\
  !*** external "rc-motion" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("rc-motion");

/***/ }),

/***/ "rc-resize-observer":
/*!*************************************!*\
  !*** external "rc-resize-observer" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("rc-resize-observer");

/***/ }),

/***/ "rc-tooltip":
/*!*****************************!*\
  !*** external "rc-tooltip" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("rc-tooltip");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("react-is");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@ant-design","vendor-chunks/antd","vendor-chunks/rc-util","vendor-chunks/@babel","vendor-chunks/rc-pagination","vendor-chunks/rc-picker","vendor-chunks/react-toastify","vendor-chunks/bootstrap"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();