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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/List.module.scss */ \"./styles/List.module.scss\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar __N_SSG = true;\nfunction List(param) {\n    var breeds = param.breeds;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: \"Aqui vai a lista de cards dos dogs\"\n                        }, void 0, false, {\n                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                            children: breeds.map(function(breed) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_title),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                    src: breed.avatar,\n                                                    alt: breed.owner,\n                                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().avatar)\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 28,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: breed.owner\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 29,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 27,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_image),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                src: breed.url,\n                                                alt: breed.name,\n                                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().img_card),\n                                                layout: \"fill\"\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 32,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 19\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().description),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                children: breed.description\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, breed.id, true, {\n                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ1g7QUFFaUI7O0FBWWhDLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVhDLE1BQU0sR0FBUixLQUFVLENBQVJBLE1BQU07O0lBQ25DLE1BQU07O3dGQUVETCwwREFBTTs7Ozs7d0ZBQ05NLENBQUc7Z0JBQUNDLFNBQVMsRUFBRUosMkVBQWdCO3NHQUM3Qk0sQ0FBSTtvQkFBQ0YsU0FBUyxFQUFFSixzRUFBVzs7b0dBQ3pCTyxDQUFFO3NDQUFDLENBQWtDOzs7Ozs7b0dBQ3JDSixDQUFHOzRCQUFDQyxTQUFTLEVBQUVKLHNFQUFXO3NDQUN4QkUsTUFBTSxDQUFDTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLOzhDQUNkLE1BQU0sK0RBQUxQLENBQUc7b0NBQUNDLFNBQVMsRUFBRUosc0VBQVc7O29IQUN4QkcsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFFSiw0RUFBaUI7OzRIQUM5QkQsbURBQUs7b0RBQUNjLEdBQUcsRUFBRUgsS0FBSyxDQUFDSSxNQUFNO29EQUFFQyxHQUFHLEVBQUVMLEtBQUssQ0FBQ00sS0FBSztvREFBRVosU0FBUyxFQUFFSix3RUFBYTs7Ozs7OzRIQUNuRWlCLENBQUk7OERBQUVQLEtBQUssQ0FBQ00sS0FBSzs7Ozs7Ozs7Ozs7O29IQUVuQmIsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFFSiw0RUFBaUI7a0lBQzlCRCxtREFBSztnREFDSmMsR0FBRyxFQUFFSCxLQUFLLENBQUNTLEdBQUc7Z0RBQ2RKLEdBQUcsRUFBRUwsS0FBSyxDQUFDVSxJQUFJO2dEQUNmaEIsU0FBUyxFQUFFSiwwRUFBZTtnREFDMUJzQixNQUFNLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7b0hBR2hCbkIsQ0FBRzs0Q0FBQ0MsU0FBUyxFQUFFSiw2RUFBa0I7a0lBQy9Cd0IsQ0FBRTswREFBRWQsS0FBSyxDQUFDYSxXQUFXOzs7Ozs7Ozs7Ozs7bUNBZFFiLEtBQUssQ0FBQ2UsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFxQm5EM0IsMERBQU07Ozs7Ozs7QUFHYixDQUFDO0tBakN1QkcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0LmpzP2Q2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xpc3QubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkgeyAgXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2RvZ3NcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBicmVlZHM6IGRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCh7IGJyZWVkcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGgyPkFxdWkgdmFpIGEgbGlzdGEgZGUgY2FyZHMgZG9zIGRvZ3M8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgICB7YnJlZWRzLm1hcCgoYnJlZWQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IGtleT17YnJlZWQuaWR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17YnJlZWQuYXZhdGFyfSBhbHQ9e2JyZWVkLm93bmVyfSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9ICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YnJlZWQub3duZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2JyZWVkLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2JyZWVkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX2NhcmR9XG4gICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICAgICAgICA8aDM+e2JyZWVkLmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2QmFyIiwiRm9vdGVyIiwiSW1hZ2UiLCJzdHlsZXMiLCJMaXN0IiwiYnJlZWRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImgyIiwiZ3JpZCIsIm1hcCIsImJyZWVkIiwiY2FyZCIsImNhcmRfdGl0bGUiLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJvd25lciIsInNwYW4iLCJjYXJkX2ltYWdlIiwidXJsIiwibmFtZSIsImltZ19jYXJkIiwibGF5b3V0IiwiZGVzY3JpcHRpb24iLCJoMyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});