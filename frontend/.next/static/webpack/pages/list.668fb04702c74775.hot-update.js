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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_backtop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/backtop */ \"./components/backtop.js\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/List.module.scss */ \"./styles/List.module.scss\");\n/* harmony import */ var _styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar __N_SSG = true;\nfunction List(param) {\n    var breeds = param.breeds;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                        className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    id: \"top\",\n                                    className: \"font_dog text_align_center\",\n                                    children: \"FAVORITE BREEDS\"\n                                }, void 0, false, {\n                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                                children: breeds.map(function(breed) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: [\n                                            (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                            flip - vertical - left\n                                        ].join(\" \"),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_title),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: breed.avatar,\n                                                        alt: breed.owner,\n                                                        className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().avatar)\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                        lineNumber: 29,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: breed.owner\n                                                    }, void 0, false, {\n                                                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                        lineNumber: 34,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 28,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_image),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: breed.url,\n                                                    alt: breed.name,\n                                                    className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().img_card)\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 37,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 36,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_List_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card_description),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    children: breed.description\n                                                }, void 0, false, {\n                                                    fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, breed.id, true, {\n                                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_backtop__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/media/DADOS/REPOS/dogapinext/frontend/pages/list.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0E7QUFDRTtBQUNJOztBQVloQyxRQUFRLENBQUNJLElBQUksQ0FBQyxLQUFVLEVBQUUsQ0FBQztRQUFYQyxNQUFNLEdBQVIsS0FBVSxDQUFSQSxNQUFNOztJQUNuQyxNQUFNOzt3RkFFREwsMERBQU07Ozs7O3dGQUNOTSxDQUFHO2dCQUFDQyxTQUFTLEVBQUVKLDJFQUFnQjs7Z0dBQzdCTSxDQUFJO3dCQUFDRixTQUFTLEVBQUVKLHNFQUFXOzt3R0FDekJHLENBQUc7Z0NBQUNDLFNBQVMsRUFBRUosdUVBQVk7c0hBQ3pCUSxDQUFFO29DQUFDQyxFQUFFLEVBQUMsQ0FBSztvQ0FBQ0wsU0FBUyxFQUFDLENBQTRCOzhDQUFDLENBQWU7Ozs7Ozs7Ozs7O3dHQUVwRUQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFFSixzRUFBVzswQ0FDeEJFLE1BQU0sQ0FBQ1MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsS0FBSztrREFDZCxNQUFNLCtEQUFMVCxDQUFHO3dDQUFDQyxTQUFTLEVBQUUsQ0FBQ0o7NENBQUFBLHNFQUFXOzRDQUFFYyxJQUFJLEdBQUNDLFFBQVEsR0FBQ0MsSUFBSTt3Q0FBQSxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFHOzt3SEFDdkRkLENBQUc7Z0RBQUNDLFNBQVMsRUFBRUosNEVBQWlCOztnSUFDOUJtQixDQUFHO3dEQUNGQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ1MsTUFBTTt3REFDakJDLEdBQUcsRUFBRVYsS0FBSyxDQUFDVyxLQUFLO3dEQUNoQm5CLFNBQVMsRUFBRUosd0VBQWE7Ozs7OztnSUFFekJ3QixDQUFJO2tFQUFFWixLQUFLLENBQUNXLEtBQUs7Ozs7Ozs7Ozs7Ozt3SEFFbkJwQixDQUFHO2dEQUFDQyxTQUFTLEVBQUVKLDRFQUFpQjtzSUFDOUJtQixDQUFHO29EQUNGQyxHQUFHLEVBQUVSLEtBQUssQ0FBQ2MsR0FBRztvREFDZEosR0FBRyxFQUFFVixLQUFLLENBQUNlLElBQUk7b0RBQ2Z2QixTQUFTLEVBQUVKLDBFQUFlOzs7Ozs7Ozs7Ozt3SEFHN0JHLENBQUc7Z0RBQUNDLFNBQVMsRUFBRUosa0ZBQXVCO3NJQUNwQzhCLENBQUM7OERBQUVsQixLQUFLLENBQUNtQixXQUFXOzs7Ozs7Ozs7Ozs7dUNBakJ5Q25CLEtBQUssQ0FBQ0gsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0dBdUJqRlYsMkRBQU87Ozs7Ozs7Ozs7O3dGQUVURCwwREFBTTs7Ozs7OztBQUdiLENBQUM7S0F2Q3VCRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xpc3QuanM/ZDZkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBCYWNrVG9wIGZyb20gXCIuLi9jb21wb25lbnRzL2JhY2t0b3BcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9MaXN0Lm1vZHVsZS5zY3NzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHsgIFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9kb2dzXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYnJlZWRzOiBkYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3QoeyBicmVlZHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2QmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgPGgxIGlkPVwidG9wXCIgY2xhc3NOYW1lPVwiZm9udF9kb2cgdGV4dF9hbGlnbl9jZW50ZXJcIj5GQVZPUklURSBCUkVFRFM8L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgICB7YnJlZWRzLm1hcCgoYnJlZWQpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5jYXJkLCBmbGlwLXZlcnRpY2FsLWxlZnRdLmpvaW4oXCIgXCIpfSBrZXk9e2JyZWVkLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF90aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXticmVlZC5hdmF0YXJ9IFxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YnJlZWQub3duZXJ9IFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YnJlZWQub3duZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfaW1hZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXticmVlZC51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXticmVlZC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ19jYXJkfSAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkX2Rlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2JyZWVkLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxCYWNrVG9wIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJGb290ZXIiLCJCYWNrVG9wIiwic3R5bGVzIiwiTGlzdCIsImJyZWVkcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImgxIiwiaWQiLCJncmlkIiwibWFwIiwiYnJlZWQiLCJjYXJkIiwiZmxpcCIsInZlcnRpY2FsIiwibGVmdCIsImpvaW4iLCJjYXJkX3RpdGxlIiwiaW1nIiwic3JjIiwiYXZhdGFyIiwiYWx0Iiwib3duZXIiLCJzcGFuIiwiY2FyZF9pbWFnZSIsInVybCIsIm5hbWUiLCJpbWdfY2FyZCIsImNhcmRfZGVzY3JpcHRpb24iLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/list.js\n");

/***/ })

});