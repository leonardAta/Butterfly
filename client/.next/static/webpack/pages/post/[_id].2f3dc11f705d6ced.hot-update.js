"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[_id]",{

/***/ "./pages/post/[_id].js":
/*!*****************************!*\
  !*** ./pages/post/[_id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst PostComments = ()=>{\n    _s();\n    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const _id = router.query._id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (_id) fetchPost();\n    }, [\n        _id\n    ]);\n    const fetchPost = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_5__.axios.get(\"/user-post/\".concat(_id));\n            setPost(data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n        children: JSON.stringify(post, null, 4)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/post/[_id].js\",\n        lineNumber: 25,\n        columnNumber: 12\n    }, undefined);\n};\n_s(PostComments, \"rICDI5Rue5pM24+SyHB48vp7d0k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = PostComments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostComments);\nvar _c;\n$RefreshReg$(_c, \"PostComments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tfaWRdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQztBQUNKO0FBQ1Y7QUFDNEI7QUFDbkI7QUFFdEMsTUFBTU0sZUFBZTs7SUFDakIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTVMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLE1BQU1ELE9BQU9FLEtBQUssQ0FBQ0QsR0FBRztJQUU1QlQsZ0RBQVNBLENBQUM7UUFDTixJQUFJUyxLQUFLRTtJQUNiLEdBQUc7UUFBQ0Y7S0FBSTtJQUVSLE1BQU1FLFlBQVk7UUFDZCxJQUFJO1lBQ0EsTUFBTSxFQUFFQyxJQUFJLEVBQUUsR0FBRyxNQUFNVix3Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLGNBQWtCLE9BQUpKO1lBQy9DRixRQUFRSztRQUNaLEVBQUUsT0FBT0UsS0FBSztZQUNWQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2hCO0lBQ0o7SUFFQSxxQkFBTyw4REFBQ0c7a0JBQUtDLEtBQUtDLFNBQVMsQ0FBQ2IsTUFBTSxNQUFNOzs7Ozs7QUFDNUM7R0FuQk1EOztRQUVhSixrREFBU0E7OztLQUZ0Qkk7QUFxQk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bX2lkXS5qcz9lZTI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgYXhpb3MgfSBmcm9tICdheGlvcydcbmltcG9ydCBVc2VyUm91dGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvVXNlclJvdXRlJ1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcblxuY29uc3QgUG9zdENvbW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgX2lkID0gcm91dGVyLnF1ZXJ5Ll9pZFxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKF9pZCkgZmV0Y2hQb3N0KClcbiAgICB9LCBbX2lkXSlcblxuICAgIGNvbnN0IGZldGNoUG9zdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvdXNlci1wb3N0LyR7X2lkfWApXG4gICAgICAgICAgICBzZXRQb3N0KGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDxwcmU+e0pTT04uc3RyaW5naWZ5KHBvc3QsIG51bGwsIDQpfTwvcHJlPlxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Q29tbWVudHNcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImF4aW9zIiwiVXNlclJvdXRlIiwidG9hc3QiLCJQb3N0Q29tbWVudHMiLCJwb3N0Iiwic2V0UG9zdCIsInJvdXRlciIsIl9pZCIsInF1ZXJ5IiwiZmV0Y2hQb3N0IiwiZGF0YSIsImdldCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwcmUiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[_id].js\n"));

/***/ })

});