"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/globals.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/globals.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Yellowtail&display=swap\\\");\\n/* Color Variables */\\n:export {\\n  default_background: #fff;\\n  primary_color: #bdb3a5;\\n  green_background: #4de6b8;\\n  red_color: #e72761;\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.font_14px {\\n  font-size: 14px;\\n}\\n\\n.font_16px {\\n  font-size: 16px;\\n}\\n\\n.font_18px {\\n  font-size: 18px;\\n}\\n\\n.font_buttons {\\n  font-size: 1.5em;\\n}\\n\\n.font_dog {\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  font-weight: normal;\\n}\\n\\n.button {\\n  padding: 0.3em 4em;\\n  text-align: center;\\n  margin: auto;\\n  color: #333333;\\n  border-radius: 6px;\\n}\\n\\n.back_top_button {\\n  width: 60px;\\n  height: 60px;\\n  color: #333333;\\n  background-color: #4de6b8;\\n  opacity: 0.5;\\n  position: fixed;\\n  border-radius: 50em;\\n  right: 40px;\\n  bottom: 20px;\\n}\\n.back_top_button:hover, .back_top_button:focus, .back_top_button:active {\\n  background-color: #4de6b8;\\n  opacity: 1;\\n  transition: all 0.3s ease-in-out;\\n}\\n.back_top_button span {\\n  top: 10px;\\n  text-align: center;\\n  font-weight: bold;\\n}\\n\\n.button_primary {\\n  background-color: #bdb3a5;\\n}\\n.button_primary:hover, .button_primary:focus, .button_primary:active {\\n  background-color: #968e83;\\n  color: #ffffff;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\\n.button_green {\\n  background-color: #4de6b8;\\n}\\n.button_green:hover, .button_green:focus, .button_green:active {\\n  background-color: #a4f0e6;\\n  color: #ffffff;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\\n/* Components */\\nnav {\\n  width: 100%;\\n  height: 68px;\\n  background-color: #333333;\\n  margin: auto;\\n  color: #fff;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  margin-top: 0;\\n  position: fixed;\\n}\\nnav ul {\\n  list-style: none;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 0;\\n}\\nnav ul li {\\n  margin: 0;\\n  padding: 0;\\n}\\nnav ul li a {\\n  color: #fff;\\n  text-decoration: none;\\n  font-size: 1.5em;\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  cursor: pointer;\\n}\\nnav ul li a:hover, nav ul li a:focus, nav ul li a:active {\\n  color: #fff;\\n  text-decoration: none;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\\nfooter {\\n  display: flex;\\n  flex: 1 1;\\n  padding: 2rem 0;\\n  border-top: 1px solid #eaeaea;\\n  justify-content: center;\\n  align-items: center;\\n}\\nfooter a {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-grow: 1;\\n  font-weight: bold;\\n}\\n\\n/* animations*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.scss\",\"webpack://styles/variables.module.scss\"],\"names\":[],\"mappings\":\"AAAQ,8FAAA;AACA,+EAAA;ACDR,oBAAA;AAYA;EACI,wBAXiB;EAYjB,sBAXY;EAYZ,yBAVU;EAWV,kBATQ;ADCZ;;AAJA;;EAEE,UAAA;EACA,SAAA;EACA,8IAAA;AAOF;;AAHA;EACE,cAAA;EACA,qBAAA;AAMF;;AAHA;EACE,sBAAA;AAMF;;AAHA;EACE,eAAA;AAMF;;AAJA;EACE,eAAA;AAOF;;AALA;EACE,eAAA;AAQF;;AALA;EACE,gBAAA;AAQF;;AALA;EACE,kCAAA;EACA,mBAAA;AAQF;;AALA;EACE,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,cCnCW;EDoCX,kBAAA;AAQF;;AALA;EACE,WAAA;EACA,YAAA;EACA,cC1CW;ED2CX,yBC/CY;EDgDZ,YAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAQF;AANE;EACE,yBCvDU;EDwDV,UAAA;EAEA,gCAAA;AAQJ;AALE;EACE,SAAA;EACA,kBAAA;EACA,iBAAA;AAOJ;;AAHA;EACE,yBCvEc;AD6EhB;AAJE;EAGE,yBC3EkB;ED4ElB,cCxEU;ED0EV,gCAAA;EACA,4EAAA;AAIJ;;AAAA;EACE,yBCnFY;ADsFd;AADE;EAGE,yBAAA;EACA,cCtFU;EDwFV,gCAAA;EACA,4EAAA;AACJ;;AAGA,eAAA;AACA;EACE,WAAA;EACA,YAAA;EACA,yBChGW;EDiGX,YAAA;EACA,WAAA;EACA,4EAAA;EACA,aAAA;EACA,eAAA;AAAF;AAEE;EACE,gBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;AAAJ;AAEI;EACE,SAAA;EACA,UAAA;AAAN;AACM;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,kCAAA;EACA,eAAA;AACR;AAAQ;EAGE,WAAA;EACA,qBAAA;EAEA,gCAAA;EACA,4EAAA;AAAV;;AAQA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,6BAAA;EACA,uBAAA;EACA,mBAAA;AALF;AAOE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;AALJ;;AASA,cAAA\",\"sourcesContent\":[\"@import url(\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Yellowtail&display=swap\\\");\\n@import \\\"./variables.module.scss\\\";\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.font_14px {\\n  font-size: 14px;\\n}\\n.font_16px {\\n  font-size: 16px;\\n}\\n.font_18px {\\n  font-size: 18px;\\n}\\n\\n.font_buttons {\\n  font-size: 1.5em;\\n}\\n\\n.font_dog {\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  font-weight: normal;\\n}\\n\\n.button {\\n  padding: 0.3em 4em;\\n  text-align: center;\\n  margin: auto;\\n  color: $dark_color;\\n  border-radius: 6px;\\n}\\n\\n.back_top_button {\\n  width: 60px;\\n  height: 60px;\\n  color: $dark_color;\\n  background-color: $green_color;\\n  opacity: 0.5;\\n  position: fixed;\\n  border-radius: 50em;\\n  right: 40px;\\n  bottom: 20px;\\n  \\n  &:hover, &:focus, &:active {\\n    background-color: $green_color;\\n    opacity: 1;\\n    -webkit-transition: all 0.5s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n  }\\n\\n  span {\\n    top: 10px;\\n    text-align: center;\\n    font-weight: bold;\\n  }\\n}\\n\\n.button_primary {\\n  background-color: $primary_color;\\n\\n  &:hover,\\n  &:focus,\\n  &:active {\\n    background-color: $primary_color_hover;\\n    color: $white_color;\\n    -webkit-transition: all 0.5s ease-in-out;\\n    transition: all 0.5s ease-in-out;\\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  }\\n}\\n\\n.button_green {\\n  background-color: $green_color;\\n\\n  &:hover,\\n  &:focus,\\n  &:active {\\n    background-color: rgb(164, 240, 230);\\n    color: $white_color;\\n    -webkit-transition: all 0.5s ease-in-out;\\n    transition: all 0.5s ease-in-out;\\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  }\\n}\\n\\n/* Components */\\nnav {\\n  width: 100%;\\n  height: 68px;\\n  background-color: $dark_color;\\n  margin: auto;\\n  color: #fff;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  margin-top: 0;\\n  position: fixed;\\n\\n  ul {\\n    list-style: none;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    padding: 0;\\n\\n    li {\\n      margin: 0;\\n      padding: 0;\\n      a {\\n        color: #fff;\\n        text-decoration: none;\\n        font-size: 1.5em;\\n        font-family: \\\"Yellowtail\\\", cursive;\\n        cursor: pointer;\\n        &:hover,\\n        &:focus,\\n        &:active {\\n          color: #fff;\\n          text-decoration: none;\\n          -webkit-transition: all 0.5s ease-in-out;\\n          transition: all 0.5s ease-in-out;\\n          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,\\n            rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n        }\\n      }\\n    }\\n  }\\n}\\n\\nfooter {\\n  display: flex;\\n  flex: 1;\\n  padding: 2rem 0;\\n  border-top: 1px solid #eaeaea;\\n  justify-content: center;\\n  align-items: center;\\n\\n  a {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-grow: 1;\\n    font-weight: bold;\\n  }\\n}\\n\\n/* animations*/\\n\",\"/* Color Variables */\\n\\n$default_background: #fff;\\n$primary_color: #bdb3a5;\\n$primary_color_hover: #968e83;\\n$green_color: rgb(77, 230, 184);\\n$green_color_hover: rgb(74, 141, 132);\\n$red_color: #e72761;\\n$white_color: #ffffff;\\n$dark_color: #333333;\\n\\n\\n:export {\\n    default_background: $default_background;\\n    primary_color: $primary_color;\\n    green_background: $green_color;\\n    red_color: $red_color;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDJJQUEySSxvRkFBb0Ysa0NBQWtDLDZCQUE2QiwyQkFBMkIsOEJBQThCLHVCQUF1QixHQUFHLGlCQUFpQixlQUFlLGNBQWMsbUpBQW1KLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsZUFBZSx5Q0FBeUMsd0JBQXdCLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLGlCQUFpQixtQkFBbUIsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIsbUJBQW1CLDhCQUE4QixpQkFBaUIsb0JBQW9CLHdCQUF3QixnQkFBZ0IsaUJBQWlCLEdBQUcsMkVBQTJFLDhCQUE4QixlQUFlLHFDQUFxQyxHQUFH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MEJBQTBCLHdEQUF3RCx3QkFBd0Isa0NBQWtDLHFEQUFxRCw2Q0FBNkMsc0dBQXNHLFdBQVcsU0FBUyxPQUFPLEtBQUssR0FBRyxZQUFZLGtCQUFrQixZQUFZLG9CQUFvQixrQ0FBa0MsNEJBQTRCLHdCQUF3QixTQUFTLG9CQUFvQiw4QkFBOEIsMEJBQTBCLG1CQUFtQix3QkFBd0IsS0FBSyxHQUFHLDJFQUEyRSwwQkFBMEIsZ0NBQWdDLGtDQUFrQyx3Q0FBd0Msc0JBQXNCLHdCQUF3Qix1QkFBdUIsZUFBZSw4Q0FBOEMsb0NBQW9DLHFDQUFxQyw0QkFBNEIsR0FBRyxtQkFBbUI7QUFDeC9QO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2Nzcz8xNGFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzYuMC4wLWJldGEzL2Nzcy9hbGwubWluLmNzc1xcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVllbGxvd3RhaWwmZGlzcGxheT1zd2FwXFxcIik7XFxuLyogQ29sb3IgVmFyaWFibGVzICovXFxuOmV4cG9ydCB7XFxuICBkZWZhdWx0X2JhY2tncm91bmQ6ICNmZmY7XFxuICBwcmltYXJ5X2NvbG9yOiAjYmRiM2E1O1xcbiAgZ3JlZW5fYmFja2dyb3VuZDogIzRkZTZiODtcXG4gIHJlZF9jb2xvcjogI2U3Mjc2MTtcXG59XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mb250XzE0cHgge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZm9udF8xNnB4IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLmZvbnRfMThweCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5mb250X2J1dHRvbnMge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmZvbnRfZG9nIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWWVsbG93dGFpbFxcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM2VtIDRlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uYmFja190b3BfYnV0dG9uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRlNmI4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTBlbTtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbn1cXG4uYmFja190b3BfYnV0dG9uOmhvdmVyLCAuYmFja190b3BfYnV0dG9uOmZvY3VzLCAuYmFja190b3BfYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRlNmI4O1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYmFja190b3BfYnV0dG9uIHNwYW4ge1xcbiAgdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b25fcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiM2E1O1xcbn1cXG4uYnV0dG9uX3ByaW1hcnk6aG92ZXIsIC5idXR0b25fcHJpbWFyeTpmb2N1cywgLmJ1dHRvbl9wcmltYXJ5OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTY4ZTgzO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcblxcbi5idXR0b25fZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkZTZiODtcXG59XFxuLmJ1dHRvbl9ncmVlbjpob3ZlciwgLmJ1dHRvbl9ncmVlbjpmb2N1cywgLmJ1dHRvbl9ncmVlbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E0ZjBlNjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxubmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2OHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbm5hdiB1bCBsaSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5uYXYgdWwgbGkgYSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LWZhbWlseTogXFxcIlllbGxvd3RhaWxcXFwiLCBjdXJzaXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5uYXYgdWwgbGkgYTpob3ZlciwgbmF2IHVsIGxpIGE6Zm9jdXMsIG5hdiB1bCBsaSBhOmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuZm9vdGVyIGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4vKiBhbmltYXRpb25zKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy92YXJpYWJsZXMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQVEsOEZBQUE7QUFDQSwrRUFBQTtBQ0RSLG9CQUFBO0FBWUE7RUFDSSx3QkFYaUI7RUFZakIsc0JBWFk7RUFZWix5QkFWVTtFQVdWLGtCQVRRO0FEQ1o7O0FBSkE7O0VBRUUsVUFBQTtFQUNBLFNBQUE7RUFDQSw4SUFBQTtBQU9GOztBQUhBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBTUY7O0FBSEE7RUFDRSxzQkFBQTtBQU1GOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtBQVFGOztBQUxBO0VBQ0UsZ0JBQUE7QUFRRjs7QUFMQTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUFRRjs7QUFMQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0NuQ1c7RURvQ1gsa0JBQUE7QUFRRjs7QUFMQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0MxQ1c7RUQyQ1gseUJDL0NZO0VEZ0RaLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFGO0FBTkU7RUFDRSx5QkN2RFU7RUR3RFYsVUFBQTtFQUVBLGdDQUFBO0FBUUo7QUFMRTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBT0o7O0FBSEE7RUFDRSx5QkN2RWM7QUQ2RWhCO0FBSkU7RUFHRSx5QkMzRWtCO0VENEVsQixjQ3hFVTtFRDBFVixnQ0FBQTtFQUNBLDRFQUFBO0FBSUo7O0FBQUE7RUFDRSx5QkNuRlk7QURzRmQ7QUFERTtFQUdFLHlCQUFBO0VBQ0EsY0N0RlU7RUR3RlYsZ0NBQUE7RUFDQSw0RUFBQTtBQUNKOztBQUdBLGVBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDaEdXO0VEaUdYLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUFGO0FBRUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUFKO0FBRUk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUFOO0FBQ007RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQVE7RUFHRSxXQUFBO0VBQ0EscUJBQUE7RUFFQSxnQ0FBQTtFQUNBLDRFQUFBO0FBQVY7O0FBUUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQU9FO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFTQSxjQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi4wLjAtYmV0YTMvY3NzL2FsbC5taW4uY3NzXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WWVsbG93dGFpbCZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5tb2R1bGUuc2Nzc1xcXCI7XFxuXFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sXFxuICAgIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5mb250XzE0cHgge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZm9udF8xNnB4IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLmZvbnRfMThweCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5mb250X2J1dHRvbnMge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmZvbnRfZG9nIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWWVsbG93dGFpbFxcXCIsIGN1cnNpdmU7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM2VtIDRlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGNvbG9yOiAkZGFya19jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmJhY2tfdG9wX2J1dHRvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGNvbG9yOiAkZGFya19jb2xvcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbl9jb2xvcjtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwZW07XFxuICByaWdodDogNDBweDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIFxcbiAgJjpob3ZlciwgJjpmb2N1cywgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5fY29sb3I7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgfVxcblxcbiAgc3BhbiB7XFxuICAgIHRvcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbl9wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5X2NvbG9yO1xcblxcbiAgJjpob3ZlcixcXG4gICY6Zm9jdXMsXFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5X2NvbG9yX2hvdmVyO1xcbiAgICBjb2xvcjogJHdoaXRlX2NvbG9yO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbl9ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW5fY29sb3I7XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyxcXG4gICY6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2NCwgMjQwLCAyMzApO1xcbiAgICBjb2xvcjogJHdoaXRlX2NvbG9yO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG4gIH1cXG59XFxuXFxuLyogQ29tcG9uZW50cyAqL1xcbm5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrX2NvbG9yO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG5cXG4gIHVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIGxpIHtcXG4gICAgICBtYXJnaW46IDA7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBhIHtcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiWWVsbG93dGFpbFxcXCIsIGN1cnNpdmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAmOmhvdmVyLFxcbiAgICAgICAgJjpmb2N1cyxcXG4gICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsXFxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxufVxcblxcbi8qIGFuaW1hdGlvbnMqL1xcblwiLFwiLyogQ29sb3IgVmFyaWFibGVzICovXFxuXFxuJGRlZmF1bHRfYmFja2dyb3VuZDogI2ZmZjtcXG4kcHJpbWFyeV9jb2xvcjogI2JkYjNhNTtcXG4kcHJpbWFyeV9jb2xvcl9ob3ZlcjogIzk2OGU4MztcXG4kZ3JlZW5fY29sb3I6IHJnYig3NywgMjMwLCAxODQpO1xcbiRncmVlbl9jb2xvcl9ob3ZlcjogcmdiKDc0LCAxNDEsIDEzMik7XFxuJHJlZF9jb2xvcjogI2U3Mjc2MTtcXG4kd2hpdGVfY29sb3I6ICNmZmZmZmY7XFxuJGRhcmtfY29sb3I6ICMzMzMzMzM7XFxuXFxuXFxuOmV4cG9ydCB7XFxuICAgIGRlZmF1bHRfYmFja2dyb3VuZDogJGRlZmF1bHRfYmFja2dyb3VuZDtcXG4gICAgcHJpbWFyeV9jb2xvcjogJHByaW1hcnlfY29sb3I7XFxuICAgIGdyZWVuX2JhY2tncm91bmQ6ICRncmVlbl9jb2xvcjtcXG4gICAgcmVkX2NvbG9yOiAkcmVkX2NvbG9yO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/globals.scss\n");

/***/ })

});