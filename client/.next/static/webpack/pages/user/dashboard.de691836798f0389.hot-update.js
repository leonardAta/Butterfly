"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/dashboard",{

/***/ "./components/cards/People.js":
/*!************************************!*\
  !*** ./components/cards/People.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List!=!antd */ \"__barrel_optimize__?names=Avatar,List!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst People = (param)=>{\n    let { people } = param;\n    _s();\n    const [state] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const imageSource = (user)=>{\n        if (user.image) {\n            return user.image.url;\n        } else {\n            return \"/images/butterfly.jpeg\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                children: JSON.stringify(people, null, 4)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_6__.List, {\n                itemLayout: \"horizontal\",\n                dataSource: people,\n                renderItem: (user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_6__.List.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_6__.List.Item.Meta, {\n                            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_6__.Avatar, {\n                                src: imageSource(user)\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                                lineNumber: 28,\n                                columnNumber: 37\n                            }, void 0),\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-between\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        href: \"/user/\".concat(user.username),\n                                        children: user.username\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 37\n                                    }, void 0),\n                                    user.username,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-primary\",\n                                        children: \"Follow\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 53\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                                lineNumber: 30,\n                                columnNumber: 33\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, void 0)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, void 0)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(People, \"UjFOtnfn+BdjzN3+/k6ZtUavjyk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = People;\n/* harmony default export */ __webpack_exports__[\"default\"] = (People);\nvar _c;\n$RefreshReg$(_c, \"People\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Blb3BsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDQztBQUNSO0FBQ1k7QUFDSTtBQUNmO0FBRTVCLE1BQU1PLFNBQVM7UUFBQyxFQUFFQyxNQUFNLEVBQUU7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHVCxpREFBVUEsQ0FBQ0ssaURBQVdBO0lBQ3RDLE1BQU1LLFNBQVNOLHNEQUFTQTtJQUV4QixNQUFNTyxjQUFjLENBQUNDO1FBQ2pCLElBQUlBLEtBQUtDLEtBQUssRUFBRTtZQUNaLE9BQU9ELEtBQUtDLEtBQUssQ0FBQ0MsR0FBRztRQUN6QixPQUFPO1lBQ0gsT0FBTztRQUNYO0lBQ0o7SUFDQSxxQkFDSTs7MEJBQ0ksOERBQUNDOzBCQUFLQyxLQUFLQyxTQUFTLENBQUNULFFBQVEsTUFBTTs7Ozs7OzBCQUNuQyw4REFBQ04seUVBQUlBO2dCQUNEZ0IsWUFBVztnQkFDWEMsWUFBWVg7Z0JBQ1pZLFlBQVksQ0FBQ1IscUJBQ1QsOERBQUNWLHlFQUFJQSxDQUFDbUIsSUFBSTtrQ0FDTiw0RUFBQ25CLHlFQUFJQSxDQUFDbUIsSUFBSSxDQUFDQyxJQUFJOzRCQUNYQyxzQkFBUSw4REFBQ3RCLDJFQUFNQTtnQ0FBQ3VCLEtBQUtiLFlBQVlDOzs7Ozs7NEJBQ2pDYSxxQkFDSSw4REFBQ0M7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDckIsa0RBQUlBO3dDQUFDc0IsTUFBTSxTQUF1QixPQUFkaEIsS0FBS2lCLFFBQVE7a0RBQUtqQixLQUFLaUIsUUFBUTs7Ozs7O29DQUNuRGpCLEtBQUtpQixRQUFRO29DQUFDO2tEQUFDLDhEQUFDQzt3Q0FBS0gsV0FBVTtrREFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbkY7R0FqQ01wQjs7UUFFYUgsa0RBQVNBOzs7S0FGdEJHO0FBbUNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2FyZHMvUGVvcGxlLmpzPzQ2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQXZhdGFyLCBMaXN0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IFBlb3BsZSA9ICh7IHBlb3BsZSB9KSA9PiB7XG4gICAgY29uc3QgW3N0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGltYWdlU291cmNlID0gKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIuaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyLmltYWdlLnVybFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcvaW1hZ2VzL2J1dHRlcmZseS5qcGVnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShwZW9wbGUsIG51bGwsIDQpfTwvcHJlPlxuICAgICAgICAgICAgPExpc3RcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PSdob3Jpem9udGFsJ1xuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e3Blb3BsZX1cbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsodXNlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz17aW1hZ2VTb3VyY2UodXNlcil9IC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXIvJHt1c2VyLnVzZXJuYW1lfWB9Pnt1c2VyLnVzZXJuYW1lfTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLnVzZXJuYW1lfSA8c3BhbiBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+Rm9sbG93PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZW9wbGVcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiQXZhdGFyIiwiTGlzdCIsIm1vbWVudCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiTGluayIsIlBlb3BsZSIsInBlb3BsZSIsInN0YXRlIiwicm91dGVyIiwiaW1hZ2VTb3VyY2UiLCJ1c2VyIiwiaW1hZ2UiLCJ1cmwiLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5IiwiaXRlbUxheW91dCIsImRhdGFTb3VyY2UiLCJyZW5kZXJJdGVtIiwiSXRlbSIsIk1ldGEiLCJhdmF0YXIiLCJzcmMiLCJ0aXRsZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJ1c2VybmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cards/People.js\n"));

/***/ })

});