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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_backtop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/backtop */ \"./components/backtop.js\");\n/* harmony import */ var _components_vidsession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/vidsession */ \"./components/vidsession.js\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.js\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/List.module.scss */ \"./styles/List.module.scss\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nvar isLoading = false;\nvar __N_SSG = true;\nfunction List(param) {\n    var breeds = param.breeds;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_vidsession__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    id: \"top\",\n                                    className: \"font_dog text_align_center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                        children: \"Favorite Breeds\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().grid),\n                                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 16\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: breeds.map(function(breed) {\n                                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\".concat((_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card), \" flip-vertical-left\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_title),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                            src: breed.avatar,\n                                                            alt: breed.owner,\n                                                            className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().avatar)\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                            lineNumber: 44,\n                                                            columnNumber: 23\n                                                        }, _this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            children: breed.owner\n                                                        }, void 0, false, {\n                                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 23\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_image),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: breed.url,\n                                                        alt: breed.name,\n                                                        className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img_card)\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 21\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_6___default().card_description),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        children: breed.description\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 23\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 58,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            ]\n                                        }, breed.id, true, {\n                                            fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 19\n                                        }, _this);\n                                    }, 200000)\n                                }, void 0, false)\n                            }, void 0, false, {\n                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_backtop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDQTtBQUNFO0FBQ1E7QUFDUjtBQUVJO0FBRS9DLEdBQUcsQ0FBQ00sU0FBUyxHQUFHLEtBQUs7O0FBY04sUUFBUSxDQUFDQyxJQUFJLENBQUMsS0FBVSxFQUFFLENBQUM7UUFBWEMsTUFBTSxHQUFSLEtBQVUsQ0FBUkEsTUFBTTs7SUFDbkMsTUFBTTs7d0ZBRURSLDBEQUFNOzs7Ozt3RkFDTkcsOERBQVk7Ozs7O3dGQUNaTSxDQUFHO2dCQUFDQyxTQUFTLEVBQUVMLDJFQUFnQjs7Z0dBQzdCTyxDQUFJO3dCQUFDRixTQUFTLEVBQUVMLHNFQUFXOzt3R0FDekJJLENBQUc7Z0NBQUNDLFNBQVMsRUFBRUwsdUVBQVk7c0hBQ3pCUyxDQUFFO29DQUFDQyxFQUFFLEVBQUMsQ0FBSztvQ0FBQ0wsU0FBUyxFQUFDLENBQTRCOzBIQUNoRE0sQ0FBQztrREFBQyxDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O3dHQUdyQlAsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFTCxzRUFBVzswQ0FDeEJDLFNBQVMsK0VBQ05GLDJEQUFPOzs7Ozs4Q0FFTkksTUFBTSxDQUFDVSxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLO3NEQUNoQixNQUNqQixDQUFDLDhEQURpQlYsQ0FBRzs0Q0FDRkMsU0FBUyxFQUFHLEdBQWMsTUFBbUIsQ0FBL0JMLHNFQUFXLEVBQUMsQ0FBbUI7OzRIQUU1Q0ksQ0FBRztvREFBQ0MsU0FBUyxFQUFFTCw0RUFBaUI7O29JQUM5QmlCLENBQUc7NERBQ0ZDLEdBQUcsRUFBRUosS0FBSyxDQUFDSyxNQUFNOzREQUNqQkMsR0FBRyxFQUFFTixLQUFLLENBQUNPLEtBQUs7NERBQ2hCaEIsU0FBUyxFQUFFTCx3RUFBYTs7Ozs7O29JQUV6QnNCLENBQUk7c0VBQUVSLEtBQUssQ0FBQ08sS0FBSzs7Ozs7Ozs7Ozs7OzRIQUVuQmpCLENBQUc7b0RBQUNDLFNBQVMsRUFBRUwsNEVBQWlCOzBJQUM5QmlCLENBQUc7d0RBQ0ZDLEdBQUcsRUFBRUosS0FBSyxDQUFDVSxHQUFHO3dEQUNkSixHQUFHLEVBQUVOLEtBQUssQ0FBQ1csSUFBSTt3REFDZnBCLFNBQVMsRUFBRUwsMEVBQWU7Ozs7Ozs7Ozs7OzRIQUc3QkksQ0FBRztvREFBQ0MsU0FBUyxFQUFFTCxrRkFBdUI7MElBQ3BDNEIsQ0FBQztrRUFBRWQsS0FBSyxDQUFDZSxXQUFXOzs7Ozs7Ozs7Ozs7MkNBakJsQmYsS0FBSyxDQUFDSixFQUFFOzs7Ozt1Q0FvQmQsTUFBTTs7Ozs7Ozs7Ozs7OztnR0FLaEJiLDJEQUFPOzs7Ozs7Ozs7Ozt3RkFFVEQsMERBQU07Ozs7Ozs7QUFHYixDQUFDO0tBakR1Qk0sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0LmpzP2Q2ZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgQmFja1RvcCBmcm9tIFwiLi4vY29tcG9uZW50cy9iYWNrdG9wXCI7XG5pbXBvcnQgVmlkZW9TZXNzaW9uIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZHNlc3Npb25cIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL2xvYWRpbmdcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0xpc3QubW9kdWxlLnNjc3NcIjtcblxubGV0IGlzTG9hZGluZyA9IGZhbHNlO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2RvZ3NcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBicmVlZHM6IGRhdGEsXG4gICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgfVxuICB9O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBicmVlZHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8VmlkZW9TZXNzaW9uIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgPGgxIGlkPVwidG9wXCIgY2xhc3NOYW1lPVwiZm9udF9kb2cgdGV4dF9hbGlnbl9jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHU+RmF2b3JpdGUgQnJlZWRzPC91PlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IFxuICAgICAgICAgICAgICAgPExvYWRpbmcgLz4gOlxuICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICB7YnJlZWRzLm1hcCgoYnJlZWQpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY2FyZH0gZmxpcC12ZXJ0aWNhbC1sZWZ0YH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXticmVlZC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF90aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXticmVlZC5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2JyZWVkLm93bmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2JyZWVkLm93bmVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9pbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXticmVlZC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2JyZWVkLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdfY2FyZH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2Rlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICA8cD57YnJlZWQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICksIDIwMDAwMCl9ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8QmFja1RvcCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTmF2QmFyIiwiRm9vdGVyIiwiQmFja1RvcCIsIlZpZGVvU2Vzc2lvbiIsIkxvYWRpbmciLCJzdHlsZXMiLCJpc0xvYWRpbmciLCJMaXN0IiwiYnJlZWRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiaDEiLCJpZCIsInUiLCJncmlkIiwibWFwIiwiYnJlZWQiLCJjYXJkIiwiY2FyZF90aXRsZSIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsIm93bmVyIiwic3BhbiIsImNhcmRfaW1hZ2UiLCJ1cmwiLCJuYW1lIiwiaW1nX2NhcmQiLCJjYXJkX2Rlc2NyaXB0aW9uIiwicCIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});