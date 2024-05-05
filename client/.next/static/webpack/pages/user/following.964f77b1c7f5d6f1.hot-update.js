"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/following",{

/***/ "./pages/user/following.js":
/*!*********************************!*\
  !*** ./pages/user/following.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Avatar,List!=!antd */ \"__barrel_optimize__?names=Avatar,List!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Following = ()=>{\n    _s();\n    const [state] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_4__.UserContext);\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (state && state.token) fetchFollowing();\n    }, [\n        state && state.token\n    ]);\n    const fetchFollowing = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"/user-following\");\n            // console.log('following =>', data)\n            setPeople(data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const imageSource = (user)=>{\n        if (user.image) {\n            return user.image.url;\n        } else {\n            return \"/images/logo.png\";\n        }\n    };\n    const handleFollow = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.List, {\n            itemLayout: \"horizontal\",\n            dataSource: people,\n            renderItem: (user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.List.Item, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.List.Item.Meta, {\n                        avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Avatar_List_antd__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n                            src: imageSource(user)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/following.js\",\n                            lineNumber: 47,\n                            columnNumber: 37\n                        }, void 0),\n                        title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-between\",\n                            children: [\n                                user.username,\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    onClick: ()=>handleFollow(user),\n                                    className: \"text-primary pointer\",\n                                    children: \"Follow\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/following.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 37\n                                }, void 0)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/following.js\",\n                            lineNumber: 49,\n                            columnNumber: 33\n                        }, void 0)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/following.js\",\n                        lineNumber: 46,\n                        columnNumber: 25\n                    }, void 0)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/following.js\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, void 0)\n        }, void 0, false, {\n            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/following.js\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_s(Following, \"lesRrFhXvlaYvaOB++u5UILQFgc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Following;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Following);\nvar _c;\n$RefreshReg$(_c, \"Following\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyL2ZvbGxvd2luZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3BCO0FBQ1I7QUFDWTtBQUNJO0FBQ2xCO0FBQ0c7QUFFNUIsTUFBTVUsWUFBWTs7SUFDZCxNQUFNLENBQUNDLE1BQU0sR0FBR1gsaURBQVVBLENBQUNPLGlEQUFXQTtJQUN0QyxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNYSxTQUFTUixzREFBU0E7SUFFeEJKLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsU0FBU0EsTUFBTUksS0FBSyxFQUFFQztJQUM5QixHQUFHO1FBQUNMLFNBQVNBLE1BQU1JLEtBQUs7S0FBQztJQUV6QixNQUFNQyxpQkFBaUI7UUFDbkIsSUFBSTtZQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVQsaURBQVMsQ0FBQztZQUNqQyxvQ0FBb0M7WUFDcENLLFVBQVVJO1FBQ2QsRUFBRSxPQUFPRSxLQUFLO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDaEI7SUFDSjtJQUVBLE1BQU1HLGNBQWMsQ0FBQ0M7UUFDakIsSUFBSUEsS0FBS0MsS0FBSyxFQUFFO1lBQ1osT0FBT0QsS0FBS0MsS0FBSyxDQUFDQyxHQUFHO1FBQ3pCLE9BQU87WUFDSCxPQUFPO1FBQ1g7SUFDSjtJQUVBLE1BQU1DLGVBQWUsV0FBYTtJQUVsQyxxQkFDSTtrQkFFSSw0RUFBQ3RCLHlFQUFJQTtZQUNEdUIsWUFBVztZQUNYQyxZQUFZaEI7WUFDWmlCLFlBQVksQ0FBQ04scUJBQ1QsOERBQUNuQix5RUFBSUEsQ0FBQzBCLElBQUk7OEJBQ04sNEVBQUMxQix5RUFBSUEsQ0FBQzBCLElBQUksQ0FBQ0MsSUFBSTt3QkFDWEMsc0JBQVEsOERBQUM3QiwyRUFBTUE7NEJBQUM4QixLQUFLWCxZQUFZQzs7Ozs7O3dCQUNqQ1cscUJBQ0ksOERBQUNDOzRCQUFJQyxXQUFVOztnQ0FFVmIsS0FBS2MsUUFBUTtnQ0FBRTs4Q0FDaEIsOERBQUNDO29DQUFLQyxTQUFTLElBQU1iLGFBQWFIO29DQUFPYSxXQUFVOzhDQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc5RztHQXRETTFCOztRQUdhSixrREFBU0E7OztLQUh0Qkk7QUF3RE4sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9mb2xsb3dpbmcuanM/OTAzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBdmF0YXIsIExpc3QgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgRm9sbG93aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICAgIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSlcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnRva2VuKSBmZXRjaEZvbGxvd2luZygpXG4gICAgfSwgW3N0YXRlICYmIHN0YXRlLnRva2VuXSlcblxuICAgIGNvbnN0IGZldGNoRm9sbG93aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy91c2VyLWZvbGxvd2luZycpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9sbG93aW5nID0+JywgZGF0YSlcbiAgICAgICAgICAgIHNldFBlb3BsZShkYXRhKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGltYWdlU291cmNlID0gKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHVzZXIuaW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyLmltYWdlLnVybFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcvaW1hZ2VzL2xvZ28ucG5nJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRm9sbG93ID0gYXN5bmMgKCkgPT4ge31cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7LyogPHByZT57SlNPTi5zdHJpbmdpZnkocGVvcGxlLCBudWxsLCA0KX08L3ByZT4gKi99XG4gICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9J2hvcml6b250YWwnXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17cGVvcGxlfVxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh1c2VyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPXtpbWFnZVNvdXJjZSh1c2VyKX0gLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPXtgL3VzZXIvJHt1c2VyLnVzZXJuYW1lfWB9Pnt1c2VyLnVzZXJuYW1lfTwvTGluaz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX17JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gaGFuZGxlRm9sbG93KHVzZXIpfSBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSBwb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sbG93aW5nXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXZhdGFyIiwiTGlzdCIsIm1vbWVudCIsInVzZVJvdXRlciIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJMaW5rIiwiRm9sbG93aW5nIiwic3RhdGUiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJyb3V0ZXIiLCJ0b2tlbiIsImZldGNoRm9sbG93aW5nIiwiZGF0YSIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZVNvdXJjZSIsInVzZXIiLCJpbWFnZSIsInVybCIsImhhbmRsZUZvbGxvdyIsIml0ZW1MYXlvdXQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIkl0ZW0iLCJNZXRhIiwiYXZhdGFyIiwic3JjIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ1c2VybmFtZSIsInNwYW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/user/following.js\n"));

/***/ })

});