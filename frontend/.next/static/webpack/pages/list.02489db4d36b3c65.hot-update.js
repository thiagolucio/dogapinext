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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/List.module.scss */ \"./styles/List.module.scss\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar __N_SSG = true;\nfunction List(param) {\n    var breeds = param.breeds;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Aqui vai a lista de cards dos dogs\"\n                        }, void 0, false, {\n                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                            children: breeds.map(function(breed) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_title),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: breed.avatar,\n                                                    alt: breed.owner,\n                                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().avatar)\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: breed.owner\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 33,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_image),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: breed.url,\n                                                alt: breed.name,\n                                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().img_card),\n                                                layout: \"responsive\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().description),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: breed.description\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, breed.id, true, {\n                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ1g7QUFFaUI7O0FBWWhDLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVhDLE1BQU0sR0FBUixLQUFVLENBQVJBLE1BQU07O0lBQ25DLE1BQU07O3dGQUVETCwwREFBTTs7Ozs7d0ZBQ05NLENBQUc7Z0JBQUNDLFNBQVMsRUFBRUosMkVBQWdCO3NHQUM3Qk0sQ0FBSTtvQkFBQ0YsU0FBUyxFQUFFSixzRUFBVzs7b0dBQ3pCTyxDQUFFO3NDQUFDLENBQWtDOzs7Ozs7b0dBQ3JDSixDQUFHOzRCQUFDQyxTQUFTLEVBQUVKLHNFQUFXO3NDQUN4QkUsTUFBTSxDQUFDTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLOzhDQUNkLE1BQU0sK0RBQUxQLENBQUc7b0NBQUNDLFNBQVMsRUFBRUosc0VBQVc7O29IQUN4QkcsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFFSiw0RUFBaUI7OzRIQUM5QmEsQ0FBRztvREFDRkMsR0FBRyxFQUFFSixLQUFLLENBQUNLLE1BQU07b0RBQ2pCQyxHQUFHLEVBQUVOLEtBQUssQ0FBQ08sS0FBSztvREFDaEJiLFNBQVMsRUFBRUosd0VBQWE7Ozs7Ozs0SEFFekJrQixDQUFJOzhEQUFFUixLQUFLLENBQUNPLEtBQUs7Ozs7Ozs7Ozs7OztvSEFFbkJkLENBQUc7NENBQUNDLFNBQVMsRUFBRUosNEVBQWlCO2tJQUM5QmEsQ0FBRztnREFDRkMsR0FBRyxFQUFFSixLQUFLLENBQUNVLEdBQUc7Z0RBQ2RKLEdBQUcsRUFBRU4sS0FBSyxDQUFDVyxJQUFJO2dEQUNmakIsU0FBUyxFQUFFSiwwRUFBZTtnREFFMUJ1QixNQUFNLEVBQUMsQ0FBWTs7Ozs7Ozs7Ozs7b0hBR3RCcEIsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFFSiw2RUFBa0I7a0lBQy9CeUIsQ0FBRTswREFBRWYsS0FBSyxDQUFDYyxXQUFXOzs7Ozs7Ozs7Ozs7bUNBbkJRZCxLQUFLLENBQUNnQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQTBCbkQ1QiwwREFBTTs7Ozs7OztBQUdiLENBQUM7S0F0Q3VCRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3QuanM/ZDZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTGlzdC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7ICBcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZG9nc1wiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJyZWVkczogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0KHsgYnJlZWRzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8aDI+QXF1aSB2YWkgYSBsaXN0YSBkZSBjYXJkcyBkb3MgZG9nczwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIHticmVlZHMubWFwKChicmVlZCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0ga2V5PXticmVlZC5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfdGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YnJlZWQuYXZhdGFyfSBcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2JyZWVkLm93bmVyfSBcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2JyZWVkLm93bmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2ltYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YnJlZWQudXJsfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YnJlZWQubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdfY2FyZH1cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57YnJlZWQuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJGb290ZXIiLCJJbWFnZSIsInN0eWxlcyIsIkxpc3QiLCJicmVlZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiaDIiLCJncmlkIiwibWFwIiwiYnJlZWQiLCJjYXJkIiwiY2FyZF90aXRsZSIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsIm93bmVyIiwic3BhbiIsImNhcmRfaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiaW1nX2NhcmQiLCJsYXlvdXQiLCJkZXNjcmlwdGlvbiIsImgzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});