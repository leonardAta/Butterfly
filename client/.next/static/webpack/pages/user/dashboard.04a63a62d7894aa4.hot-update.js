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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List!=!antd */ \"__barrel_optimize__?names=Avatar,List!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../functions */ \"./functions/index.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst People = (param)=>{\n    let { people, handleFollow } = param;\n    _s();\n    const [state] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: people,\n            renderItem: (user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.List.Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n                            src: (0,_functions__WEBPACK_IMPORTED_MODULE_6__.imageSource)(user)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                            lineNumber: 22,\n                            columnNumber: 37\n                        }, void 0),\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-between\",\n                            children: [\n                                user.name,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>handleFollow(user),\n                                    className: \"text-primary pointer\",\n                                    children: \"Follow\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 37\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                            lineNumber: 24,\n                            columnNumber: 33\n                        }, void 0)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                        lineNumber: 21,\n                        columnNumber: 25\n                    }, void 0)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n                    lineNumber: 20,\n                    columnNumber: 21\n                }, void 0)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/components/cards/People.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(People, \"UjFOtnfn+BdjzN3+/k6ZtUavjyk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = People;\n/* harmony default export */ __webpack_exports__[\"default\"] = (People);\nvar _c;\n$RefreshReg$(_c, \"People\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhcmRzL1Blb3BsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNDO0FBQ1I7QUFDWTtBQUNJO0FBQ2Y7QUFDaUI7QUFFN0MsTUFBTVEsU0FBUztRQUFDLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFOztJQUNwQyxNQUFNLENBQUNDLE1BQU0sR0FBR1gsaURBQVVBLENBQUNLLGlEQUFXQTtJQUN0QyxNQUFNTyxTQUFTUixzREFBU0E7SUFFeEIscUJBQ0k7a0JBRUksNEVBQUNGLHlFQUFJQTtZQUNEVyxZQUFXO1lBQ1hDLFlBQVlMO1lBQ1pNLFlBQVksQ0FBQ0MscUJBQ1QsOERBQUNkLHlFQUFJQSxDQUFDZSxJQUFJOzhCQUNOLDRFQUFDZix5RUFBSUEsQ0FBQ2UsSUFBSSxDQUFDQyxJQUFJO3dCQUNYQyxzQkFBUSw4REFBQ2xCLDJFQUFNQTs0QkFBQ21CLEtBQUtiLHVEQUFXQSxDQUFDUzs7Ozs7O3dCQUNqQ0sscUJBQ0ksOERBQUNDOzRCQUFJQyxXQUFVOztnQ0FFVlAsS0FBS1EsSUFBSTtnQ0FBRTs4Q0FDWiw4REFBQ0M7b0NBQUtDLFNBQVMsSUFBTWhCLGFBQWFNO29DQUFPTyxXQUFVOzhDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5RztHQTdCTWY7O1FBRWFKLGtEQUFTQTs7O0tBRnRCSTtBQStCTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NhcmRzL1Blb3BsZS5qcz80NjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgaW1hZ2VTb3VyY2UgfSBmcm9tICcuLi8uLi9mdW5jdGlvbnMnXG5cbmNvbnN0IFBlb3BsZSA9ICh7IHBlb3BsZSwgaGFuZGxlRm9sbG93IH0pID0+IHtcbiAgICBjb25zdCBbc3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8cHJlPntKU09OLnN0cmluZ2lmeShwZW9wbGUsIG51bGwsIDQpfTwvcHJlPiAqL31cbiAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD0naG9yaXpvbnRhbCdcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwZW9wbGV9XG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHVzZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e2ltYWdlU291cmNlKHVzZXIpfSAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvdXNlci8ke3VzZXIudXNlcm5hbWV9YH0+e3VzZXIudXNlcm5hbWV9PC9MaW5rPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZvbGxvdyh1c2VyKX0gY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnkgcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9sbG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlb3BsZVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBdmF0YXIiLCJMaXN0IiwibW9tZW50IiwidXNlUm91dGVyIiwiVXNlckNvbnRleHQiLCJMaW5rIiwiaW1hZ2VTb3VyY2UiLCJQZW9wbGUiLCJwZW9wbGUiLCJoYW5kbGVGb2xsb3ciLCJzdGF0ZSIsInJvdXRlciIsIml0ZW1MYXlvdXQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsInVzZXIiLCJJdGVtIiwiTWV0YSIsImF2YXRhciIsInNyYyIsInRpdGxlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/cards/People.js\n"));

/***/ }),

/***/ "./functions/index.js":
/*!****************************!*\
  !*** ./functions/index.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});