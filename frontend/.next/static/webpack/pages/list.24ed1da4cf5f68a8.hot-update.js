"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./pages/list.js":
/*!***********************!*\
  !*** ./pages/list.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/List.module.scss */ \"./styles/List.module.scss\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_getdogimages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/getdogimages */ \"./components/getdogimages.js\");\n/* harmony import */ var _components_getdognames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/getdognames */ \"./components/getdognames.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// import Head from \"next/head\";\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction List(param) {\n    var breeds = param.breeds;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Aqui vai a lista de cards dos dogs\"\n                        }, void 0, false, {\n                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: breeds.map(function(breed) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"card\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card_image\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: breed.image.url,\n                                                alt: breed.name,\n                                                className: \"img_fluid\",\n                                                layout: \"intrinsic\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 33,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 32,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"card_content\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: breed.name\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, breed.id, true, {\n                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, _this);\n                            })\n                        }, void 0, false)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBZ0M7QUFDUztBQUNBO0FBQ007QUFDakI7QUFDdUI7QUFDRjs7QUFlcEMsUUFBUSxDQUFDTSxJQUFJLENBQUMsS0FBVSxFQUFFLENBQUM7UUFBWEMsTUFBTSxHQUFSLEtBQVUsQ0FBUkEsTUFBTTs7SUFDbkMsTUFBTTs7d0ZBRURQLDBEQUFNOzs7Ozt3RkFDTlEsQ0FBRztnQkFBQ0MsU0FBUyxFQUFFUCwyRUFBZ0I7c0dBQzdCUyxDQUFJO29CQUFDRixTQUFTLEVBQUVQLHNFQUFXOztvR0FDekJVLENBQUU7c0NBQUMsQ0FBa0M7Ozs7Ozs7c0NBRW5DTCxNQUFNLENBQUNNLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEtBQUs7OENBQ2hCLE1BQU0sK0RBQUxOLENBQUc7b0NBQUNDLFNBQVMsRUFBQyxDQUFNOztvSEFDbEJELENBQUc7NENBQUNDLFNBQVMsRUFBQyxDQUFZO2tJQUN4Qk4sbURBQUs7Z0RBQ0pZLEdBQUcsRUFBRUQsS0FBSyxDQUFDRSxLQUFLLENBQUNDLEdBQUc7Z0RBQ3BCQyxHQUFHLEVBQUVKLEtBQUssQ0FBQ0ssSUFBSTtnREFDZlYsU0FBUyxFQUFDLENBQVc7Z0RBQ3JCVyxNQUFNLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7b0hBR3JCWixDQUFHOzRDQUFDQyxTQUFTLEVBQUMsQ0FBYztrSUFDMUJZLENBQUU7MERBQUVQLEtBQUssQ0FBQ0ssSUFBSTs7Ozs7Ozs7Ozs7O21DQVZRTCxLQUFLLENBQUNRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFpQjFDckIsMERBQU07Ozs7Ozs7QUFHYixDQUFDO0tBN0J1QkssSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0LmpzP2Q2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGlzdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgR2V0RG9nSW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL2dldGRvZ2ltYWdlc1wiO1xuaW1wb3J0IEdldERvZ05hbWVzIGZyb20gXCIuLi9jb21wb25lbnRzL2dldGRvZ25hbWVzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kb2dzXCJcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJyZWVkczogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgYnJlZWRzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8aDI+QXF1aSB2YWkgYSBsaXN0YSBkZSBjYXJkcyBkb3MgZG9nczwvaDI+XG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHticmVlZHMubWFwKChicmVlZCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e2JyZWVkLmlkfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfaW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2JyZWVkLmltYWdlLnVybH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXticmVlZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdfZmx1aWRcIlxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgPGgzPnticmVlZC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC8+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk5hdkJhciIsIkZvb3RlciIsInN0eWxlcyIsIkltYWdlIiwiR2V0RG9nSW1hZ2VzIiwiR2V0RG9nTmFtZXMiLCJMaXN0IiwiYnJlZWRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImgyIiwibWFwIiwiYnJlZWQiLCJzcmMiLCJpbWFnZSIsInVybCIsImFsdCIsIm5hbWUiLCJsYXlvdXQiLCJoMyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});