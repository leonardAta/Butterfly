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

/***/ "./pages/user/dashboard.js":
/*!*********************************!*\
  !*** ./pages/user/dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ \"./context/index.js\");\n/* harmony import */ var _components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/routes/UserRoute */ \"./components/routes/UserRoute.js\");\n/* harmony import */ var _components_forms_CreatePostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/forms/CreatePostForm */ \"./components/forms/CreatePostForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* harmony import */ var _components_cards_PostList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cards/PostList */ \"./components/cards/PostList.js\");\n/* harmony import */ var _components_cards_People__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/cards/People */ \"./components/cards/People.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [uploading, setUploading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (state && state.token) {\n            fetchUserPosts();\n            findPeople();\n        }\n    }, [\n        state && state.token\n    ]);\n    const fetchUserPosts = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"/user-posts\");\n            // console.log('user posts => ', data)\n            setPosts(data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const findPeople = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"/find-people\");\n            setPeople(data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const postSubmit = async (e)=>{\n        e.preventDefault();\n        // console.log('post =>', content)\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"/create-post\", {\n                content,\n                image\n            });\n            console.log(\"Create-post response => \", data);\n            if (data.error) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(data.error);\n            } else {\n                fetchUserPosts();\n                react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Flutter Created!\");\n                setContent(\"\");\n                setImage({});\n            }\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const handleImage = async (e)=>{\n        const file = e.target.files[0];\n        let formData = new FormData();\n        formData.append(\"image\", file);\n        // console.log([...formData])\n        setUploading(true);\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(\"/upload-image\", formData);\n            // console.log('uploaded image => ', data)\n            setImage({\n                url: data.url,\n                public_id: data.public_id\n            });\n            setUploading(false);\n        } catch (err) {\n            console.log(err);\n            setUploading(false);\n        }\n    };\n    const handleDelete = async (post)=>{\n        try {\n            const answer = window.confirm(\"Are you sure you want to delete this flutter?\");\n            if (!answer) return;\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"][\"delete\"](\"/delete-post/\".concat(post._id));\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Flutter deleted\");\n            fetchUserPosts();\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const handleFollow = async (user)=>{\n        // console.log('add user to following list', user)\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].put(\"/user-follow\", {\n                _id: user._id\n            });\n            let auth = JSON.parse(localStorage.getItem(\"auth\"));\n            auth.user = data;\n            localStorage.setItem(\"auth\", JSON.stringify(auth));\n            setState({\n                ...state,\n                user: data\n            });\n            let filtered = people.filter((p)=>p._id !== user._id);\n            setPeople(filtered);\n            react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.success(\"Now following \".concat(user.name, \" \\uD83E\\uDDDA‍♀️!\"));\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_UserRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row py-5 text-light bg-default-image\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col text-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Feed\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                            lineNumber: 123,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                        lineNumber: 122,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                    lineNumber: 121,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row py-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_forms_CreatePostForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    content: content,\n                                    setContent: setContent,\n                                    postSubmit: postSubmit,\n                                    handleImage: handleImage,\n                                    uploading: uploading,\n                                    image: image\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                                    lineNumber: 137,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_PostList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    posts: posts,\n                                    handleDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                            lineNumber: 128,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-md-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cards_People__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                people: people,\n                                handleFollow: handleFollow\n                            }, void 0, false, {\n                                fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                                lineNumber: 143,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n                    lineNumber: 127,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n            lineNumber: 120,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbookpro/Documents/Dev/Butterfly/client/pages/user/dashboard.js\",\n        lineNumber: 119,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"+IR2IOG4l8fIqhC86ZmqMyDQDnU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ1hGLE9BQU9BOzs7Ozs7OENBRVgsOERBQUN1RDs7Ozs7OENBQ0QsOERBQUM5RCxrRUFBUUE7b0NBQUNXLE9BQU9BO29DQUFPNEIsY0FBY0E7Ozs7Ozs7Ozs7OztzQ0FJMUMsOERBQUNvQjs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQzNELGdFQUFNQTtnQ0FBQ1ksUUFBUUE7Z0NBQVFnQyxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05RDtHQTFJTTNDOztRQVNhTCxrREFBU0E7OztLQVR0Qks7QUE0SU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9kYXNoYm9hcmQuanM/MzhjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnXG5pbXBvcnQgVXNlclJvdXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm91dGVzL1VzZXJSb3V0ZSdcbmltcG9ydCBDcmVhdGVQb3N0Rm9ybSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Zvcm1zL0NyZWF0ZVBvc3RGb3JtJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuaW1wb3J0IFBvc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUG9zdExpc3QnXG5pbXBvcnQgUGVvcGxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUGVvcGxlJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dClcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKHt9KVxuICAgIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS50b2tlbikge1xuICAgICAgICAgICAgZmV0Y2hVc2VyUG9zdHMoKVxuICAgICAgICAgICAgZmluZFBlb3BsZSgpXG4gICAgICAgIH1cbiAgICB9LCBbc3RhdGUgJiYgc3RhdGUudG9rZW5dKVxuXG4gICAgY29uc3QgZmV0Y2hVc2VyUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL3VzZXItcG9zdHMnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgcG9zdHMgPT4gJywgZGF0YSlcbiAgICAgICAgICAgIHNldFBvc3RzKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZmluZFBlb3BsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvZmluZC1wZW9wbGUnKVxuICAgICAgICAgICAgc2V0UGVvcGxlKGRhdGEpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcG9zdFN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAvLyBjb25zb2xlLmxvZygncG9zdCA9PicsIGNvbnRlbnQpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jcmVhdGUtcG9zdCcsIHsgY29udGVudCwgaW1hZ2UgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGUtcG9zdCByZXNwb25zZSA9PiAnLCBkYXRhKVxuXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgIHRvYXN0LmVycm9yKGRhdGEuZXJyb3IpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZldGNoVXNlclBvc3RzKClcbiAgICAgICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdGbHV0dGVyIENyZWF0ZWQhJylcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50KCcnKVxuICAgICAgICAgICAgICAgIHNldEltYWdlKHt9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUltYWdlID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhbLi4uZm9ybURhdGFdKVxuICAgICAgICBzZXRVcGxvYWRpbmcodHJ1ZSlcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL3VwbG9hZC1pbWFnZScsIGZvcm1EYXRhKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwbG9hZGVkIGltYWdlID0+ICcsIGRhdGEpXG4gICAgICAgICAgICBzZXRJbWFnZSh7XG4gICAgICAgICAgICAgICAgdXJsOiBkYXRhLnVybCxcbiAgICAgICAgICAgICAgICBwdWJsaWNfaWQ6IGRhdGEucHVibGljX2lkLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSlcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAocG9zdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyID0gd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBmbHV0dGVyPycpXG4gICAgICAgICAgICBpZiAoIWFuc3dlcikgcmV0dXJuXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2RlbGV0ZS1wb3N0LyR7cG9zdC5faWR9YClcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKCdGbHV0dGVyIGRlbGV0ZWQnKVxuICAgICAgICAgICAgZmV0Y2hVc2VyUG9zdHMoKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZvbGxvdyA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGQgdXNlciB0byBmb2xsb3dpbmcgbGlzdCcsIHVzZXIpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnB1dCgnL3VzZXItZm9sbG93JywgeyBfaWQ6IHVzZXIuX2lkIH0pXG4gICAgICAgICAgICBsZXQgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSlcbiAgICAgICAgICAgIGF1dGgudXNlciA9IGRhdGFcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJywgSlNPTi5zdHJpbmdpZnkoYXV0aCkpXG4gICAgICAgICAgICBzZXRTdGF0ZSh7IC4uLnN0YXRlLCB1c2VyOiBkYXRhIH0pXG5cbiAgICAgICAgICAgIGxldCBmaWx0ZXJlZCA9IHBlb3BsZS5maWx0ZXIoKHApID0+IHAuX2lkICE9PSB1c2VyLl9pZClcbiAgICAgICAgICAgIHNldFBlb3BsZShmaWx0ZXJlZClcblxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhgTm93IGZvbGxvd2luZyAke3VzZXIubmFtZX0g8J+nmuKAjeKZgO+4jyFgKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxVc2VyUm91dGU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLWZsdWlkJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHB5LTUgdGV4dC1saWdodCBiZy1kZWZhdWx0LWltYWdlJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+RmVlZDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9Jy9pbWFnZXMvZGVmYXVsdC5qcGcnIGFsdD0naW1hZ2UnIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IHB5LTMnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENyZWF0ZVBvc3RGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17Y29udGVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50PXtzZXRDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RTdWJtaXQ9e3Bvc3RTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW1hZ2U9e2hhbmRsZUltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGluZz17dXBsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb3N0TGlzdCBwb3N0cz17cG9zdHN9IGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KHBvc3RzLCBudWxsLCA0KX08L3ByZT4gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1tZC00Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQZW9wbGUgcGVvcGxlPXtwZW9wbGV9IGhhbmRsZUZvbGxvdz17aGFuZGxlRm9sbG93fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1VzZXJSb3V0ZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVc2VyQ29udGV4dCIsIlVzZXJSb3V0ZSIsIkNyZWF0ZVBvc3RGb3JtIiwidXNlUm91dGVyIiwiYXhpb3MiLCJ0b2FzdCIsIlBvc3RMaXN0IiwiUGVvcGxlIiwiSG9tZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImltYWdlIiwic2V0SW1hZ2UiLCJ1cGxvYWRpbmciLCJzZXRVcGxvYWRpbmciLCJwb3N0cyIsInNldFBvc3RzIiwicGVvcGxlIiwic2V0UGVvcGxlIiwicm91dGVyIiwidG9rZW4iLCJmZXRjaFVzZXJQb3N0cyIsImZpbmRQZW9wbGUiLCJkYXRhIiwiZ2V0IiwiZXJyIiwiY29uc29sZSIsImxvZyIsInBvc3RTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiZXJyb3IiLCJzdWNjZXNzIiwiaGFuZGxlSW1hZ2UiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXJsIiwicHVibGljX2lkIiwiaGFuZGxlRGVsZXRlIiwiYW5zd2VyIiwid2luZG93IiwiY29uZmlybSIsImRlbGV0ZSIsIl9pZCIsImhhbmRsZUZvbGxvdyIsInVzZXIiLCJwdXQiLCJhdXRoIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmaWx0ZXJlZCIsImZpbHRlciIsInAiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user/dashboard.js\n"));

/***/ })

});