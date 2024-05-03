/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user/profile/update",{

/***/ "./pages/user/profile/update.js":
/*!**************************************!*\
  !*** ./pages/user/profile/update.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Modal!=!antd */ \"__barrel_optimize__?names=Modal!=!./node_modules/antd/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_forms_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/forms/Form */ \"./components/forms/Form.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _server_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../server/models/user */ \"../server/models/user.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ProfileUpdate = ()=>{\n    _s();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [about, setAbout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [secret, setSecret] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ok, setOk] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (state && state.user) {\n            console.log(\"user from state => \", state.user);\n            setUsername(state.user.username);\n            setAbout(state.user.about);\n            setName(state.user.name);\n            setEmail(state.user.email);\n        }\n    }, [\n        state && state.user\n    ]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            setLoading(true);\n            const { data: data1 } = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].put(\"/profile-update\", {\n                username,\n                about,\n                name,\n                email,\n                password,\n                secret\n            });\n            console.log(\"update response =>\", data1);\n            if (data1.error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(data1.error);\n                setLoading(false);\n            } else {\n                setOk(true);\n                setLoading(false);\n                let auth = JSON.parse(localStorage.getItem(\"auth\"));\n                auth.user = data1;\n                localStorage.setItem(\"auth\", JSON.stringify(auth));\n                setState({\n                    ...state,\n                    user: data1\n                });\n            }\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(data.error);\n            setLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container-fluid\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-5 bg-secondary text-light bg-default-image\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                    lineNumber: 69,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row py-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-md-6 offset-md-3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_Form__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        profileUpdate: true,\n                        username: username,\n                        setUsername: setUsername,\n                        about: about,\n                        setAbout: setAbout,\n                        handleSubmit: handleSubmit,\n                        name: name,\n                        setName: setName,\n                        email: email,\n                        setEmail: setEmail,\n                        password: password,\n                        setPassword: setPassword,\n                        secret: secret,\n                        setSecret: setSecret,\n                        loading: loading\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                        lineNumber: 76,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                    lineNumber: 75,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Modal_antd__WEBPACK_IMPORTED_MODULE_9__.Modal, {\n                        title: \"Congratulations!\",\n                        open: ok,\n                        onCancel: ()=>setOk(false),\n                        footer: null,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"Profile Update Successful!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                            lineNumber: 104,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                        lineNumber: 98,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-center\",\n                        children: [\n                            \"Already have an account? \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                                lineNumber: 112,\n                                columnNumber: 50\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                        lineNumber: 111,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                    lineNumber: 110,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/profile/update.js\",\n        lineNumber: 67,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ProfileUpdate, \"5DGiaVKvGnEPvqZ950eb5i+ixfo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = ProfileUpdate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileUpdate);\nvar _c;\n$RefreshReg$(_c, \"ProfileUpdate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEMsVUFBVUE7d0JBQ1ZDLFVBQVVBO3dCQUNWQyxhQUFhQTt3QkFDYkMsUUFBUUE7d0JBQ1JDLFdBQVdBO3dCQUNYRyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckIsOERBQUNxQjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUMzQyxvRUFBS0E7d0JBQ0Y4QyxPQUFNO3dCQUNOQyxNQUFNNUI7d0JBQ042QixVQUFVLElBQU01QixNQUFNO3dCQUN0QjZCLFFBQVE7a0NBRVIsNEVBQUNDO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS2YsOERBQUNSO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ087d0JBQUVQLFdBQVU7OzRCQUFjOzBDQUNFLDhEQUFDMUMsa0RBQUlBO2dDQUFDa0QsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRTtHQTNHTTdDOztRQVdhRixrREFBU0E7OztLQVh0QkU7QUE2R04sK0RBQWVBLGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9wcm9maWxlL3VwZGF0ZS5qcz80NGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Zvcm1zL0Zvcm0nXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB1c2VyIGZyb20gJy4uLy4uLy4uLy4uL3NlcnZlci9tb2RlbHMvdXNlcidcblxuY29uc3QgUHJvZmlsZVVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFthYm91dCwgc2V0QWJvdXRdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzZWNyZXQsIHNldFNlY3JldF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbb2ssIHNldE9rXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUudXNlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgZnJvbSBzdGF0ZSA9PiAnLCBzdGF0ZS51c2VyKVxuICAgICAgICAgICAgc2V0VXNlcm5hbWUoc3RhdGUudXNlci51c2VybmFtZSlcbiAgICAgICAgICAgIHNldEFib3V0KHN0YXRlLnVzZXIuYWJvdXQpXG4gICAgICAgICAgICBzZXROYW1lKHN0YXRlLnVzZXIubmFtZSlcbiAgICAgICAgICAgIHNldEVtYWlsKHN0YXRlLnVzZXIuZW1haWwpXG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUgJiYgc3RhdGUudXNlcl0pXG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucHV0KGAvcHJvZmlsZS11cGRhdGVgLCB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgYWJvdXQsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBzZWNyZXQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0ZSByZXNwb25zZSA9PicsIGRhdGEpXG5cbiAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoZGF0YS5lcnJvcilcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRPayh0cnVlKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAgICAgICAgICAgICBsZXQgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcbiAgICAgICAgICAgICAgICBhdXRoLnVzZXIgPSBkYXRhXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGgnLCBKU09OLnN0cmluZ2lmeShhdXRoKSlcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIHVzZXI6IGRhdGF9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKGRhdGEuZXJyb3IpXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHB5LTUgYmctc2Vjb25kYXJ5IHRleHQtbGlnaHQgYmctZGVmYXVsdC1pbWFnZSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Qcm9maWxlPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHB5LTUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBvZmZzZXQtbWQtMyc+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVXBkYXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWU9e3NldFVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWJvdXQ9e2Fib3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWJvdXQ9e3NldEFib3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TmFtZT17c2V0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVtYWlsPXtzZXRFbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFBhc3N3b3JkPXtzZXRQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3JldD17c2VjcmV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VjcmV0PXtzZXRTZWNyZXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wnPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdDb25ncmF0dWxhdGlvbnMhJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb3Blbj17b2t9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0T2soZmFsc2UpfVxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qcm9maWxlIFVwZGF0ZSBTdWNjZXNzZnVsITwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sJz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj0nL2xvZ2luJz5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVVwZGF0ZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImF4aW9zIiwidG9hc3QiLCJNb2RhbCIsIkxpbmsiLCJGb3JtIiwiVXNlckNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJ1c2VyIiwiUHJvZmlsZVVwZGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJhYm91dCIsInNldEFib3V0IiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNlY3JldCIsInNldFNlY3JldCIsIm9rIiwic2V0T2siLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZGF0YSIsInB1dCIsImVycm9yIiwiYXV0aCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwcm9maWxlVXBkYXRlIiwidGl0bGUiLCJvcGVuIiwib25DYW5jZWwiLCJmb290ZXIiLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/profile/update.js\n"));

/***/ }),

/***/ "../server/node_modules/mongoose/dist/browser.umd.js":
/*!***********************************************************!*\
  !*** ../server/node_modules/mongoose/dist/browser.umd.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/***/ }),

/***/ "../server/models/user.js":
/*!********************************!*\
  !*** ../server/models/user.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"../server/node_modules/mongoose/dist/browser.umd.js\");\n\nconst { Schema } = mongoose__WEBPACK_IMPORTED_MODULE_0__\n\nconst userSchema = new Schema(\n    {\n        name: {\n            type: String,\n            trim: true,\n            required: true,\n        },\n\n        password: {\n            type: String,\n            trim: true,\n            required: true,\n            min: 6,\n            max: 60,\n        },\n\n        email: {\n            type: String,\n            trim: true,\n            unique: true,\n            required: true,\n        },\n\n        secret: {\n            type: String,\n            required: true,\n        },\n\n        username: {\n            type: String,\n            unique: true,\n            required: true,\n        },\n        about: {},\n        photo: String,\n        following: [\n            {\n                type: Schema.ObjectId,\n                ref: 'User',\n            },\n        ],\n\n        followers: [\n            {\n                type: Schema.ObjectId,\n                ref: 'User',\n            },\n        ],\n    },\n    { timestamps: true },\n)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mongoose__WEBPACK_IMPORTED_MODULE_0__.model('User', userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2VydmVyL21vZGVscy91c2VyLmpzIiwibWFwcGluZ3MiOiI7O0FBQStCO0FBQy9CLFFBQVEsU0FBUyxFQUFFLHFDQUFROztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTCxNQUFNLGtCQUFrQjtBQUN4Qjs7QUFFQSwrREFBZSwyQ0FBYyxvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL3NlcnZlci9tb2RlbHMvdXNlci5qcz8zMjFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZVxuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IFNjaGVtYShcbiAgICB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgbWluOiA2LFxuICAgICAgICAgICAgbWF4OiA2MCxcbiAgICAgICAgfSxcblxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdHJpbTogdHJ1ZSxcbiAgICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHNlY3JldDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG5cbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBhYm91dDoge30sXG4gICAgICAgIHBob3RvOiBTdHJpbmcsXG4gICAgICAgIGZvbGxvd2luZzogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFNjaGVtYS5PYmplY3RJZCxcbiAgICAgICAgICAgICAgICByZWY6ICdVc2VyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG5cbiAgICAgICAgZm9sbG93ZXJzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogU2NoZW1hLk9iamVjdElkLFxuICAgICAgICAgICAgICAgIHJlZjogJ1VzZXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHsgdGltZXN0YW1wczogdHJ1ZSB9LFxuKVxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbCgnVXNlcicsIHVzZXJTY2hlbWEpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../server/models/user.js\n"));

/***/ })

});