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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Yellowtail&display=swap\\\");\\n/* Color Variables */\\n:export {\\n  default_background: #fff;\\n  primary_color: #bdb3a5;\\n  green_background: #4de6b8;\\n  red_color: #e72761;\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.font_14px {\\n  font-size: 14px;\\n}\\n\\n.font_16px {\\n  font-size: 16px;\\n}\\n\\n.font_18px {\\n  font-size: 18px;\\n}\\n\\n.font_buttons {\\n  font-size: 1.5em;\\n}\\n\\n.font_dog {\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  font-weight: normal;\\n}\\n\\n.button {\\n  padding: 0.3em 4em;\\n  text-align: center;\\n  margin: auto;\\n  color: #333333;\\n  border-radius: 6px;\\n}\\n\\n.back_top_button {\\n  width: 60px;\\n  height: 60px;\\n  color: #333333;\\n  background-color: #4de6b8;\\n  opacity: 0.5;\\n  position: fixed;\\n  border-radius: 50em;\\n  right: 40px;\\n  bottom: 20px;\\n}\\n.back_top_button:hover, .back_top_button:focus, .back_top_button:active {\\n  background-color: #4de6b8;\\n  opacity: 1;\\n  transition: all 0.3s ease-in-out;\\n}\\n.back_top_button span {\\n  margin: auto;\\n  text-align: center;\\n  font-weight: bold;\\n}\\n\\n.button_primary {\\n  background-color: #bdb3a5;\\n}\\n.button_primary:hover, .button_primary:focus, .button_primary:active {\\n  background-color: #968e83;\\n  color: #ffffff;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\\n.button_green {\\n  background-color: #4de6b8;\\n}\\n.button_green:hover, .button_green:focus, .button_green:active {\\n  background-color: #a4f0e6;\\n  color: #ffffff;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\\n/* Components */\\nnav {\\n  width: 100%;\\n  height: 68px;\\n  background-color: #333333;\\n  margin: auto;\\n  color: #fff;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  margin-top: 0;\\n  position: fixed;\\n}\\nnav ul {\\n  list-style: none;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 0;\\n}\\nnav ul li {\\n  margin: 0;\\n  padding: 0;\\n}\\nnav ul li a {\\n  color: #fff;\\n  text-decoration: none;\\n  font-size: 1.5em;\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  cursor: pointer;\\n}\\nnav ul li a:hover, nav ul li a:focus, nav ul li a:active {\\n  color: #fff;\\n  text-decoration: none;\\n  transition: all 0.5s ease-in-out;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n}\\n\\nfooter {\\n  display: flex;\\n  flex: 1 1;\\n  padding: 2rem 0;\\n  border-top: 1px solid #eaeaea;\\n  justify-content: center;\\n  align-items: center;\\n}\\nfooter a {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-grow: 1;\\n  font-weight: bold;\\n}\\n\\n/* animations*/\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.scss\",\"webpack://styles/variables.module.scss\"],\"names\":[],\"mappings\":\"AAAQ,8FAAA;AACA,+EAAA;ACDR,oBAAA;AAYA;EACI,wBAXiB;EAYjB,sBAXY;EAYZ,yBAVU;EAWV,kBATQ;ADCZ;;AAJA;;EAEE,UAAA;EACA,SAAA;EACA,8IAAA;AAOF;;AAHA;EACE,cAAA;EACA,qBAAA;AAMF;;AAHA;EACE,sBAAA;AAMF;;AAHA;EACE,eAAA;AAMF;;AAJA;EACE,eAAA;AAOF;;AALA;EACE,eAAA;AAQF;;AALA;EACE,gBAAA;AAQF;;AALA;EACE,kCAAA;EACA,mBAAA;AAQF;;AALA;EACE,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,cCnCW;EDoCX,kBAAA;AAQF;;AALA;EACE,WAAA;EACA,YAAA;EACA,cC1CW;ED2CX,yBC/CY;EDgDZ,YAAA;EACA,eAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAQF;AANE;EACE,yBCvDU;EDwDV,UAAA;EAEA,gCAAA;AAQJ;AALE;EACE,YAAA;EACA,kBAAA;EACA,iBAAA;AAOJ;;AAHA;EACE,yBCvEc;AD6EhB;AAJE;EAGE,yBC3EkB;ED4ElB,cCxEU;ED0EV,gCAAA;EACA,4EAAA;AAIJ;;AAAA;EACE,yBCnFY;ADsFd;AADE;EAGE,yBAAA;EACA,cCtFU;EDwFV,gCAAA;EACA,4EAAA;AACJ;;AAGA,eAAA;AACA;EACE,WAAA;EACA,YAAA;EACA,yBChGW;EDiGX,YAAA;EACA,WAAA;EACA,4EAAA;EACA,aAAA;EACA,eAAA;AAAF;AAEE;EACE,gBAAA;EACA,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,UAAA;AAAJ;AAEI;EACE,SAAA;EACA,UAAA;AAAN;AACM;EACE,WAAA;EACA,qBAAA;EACA,gBAAA;EACA,kCAAA;EACA,eAAA;AACR;AAAQ;EAGE,WAAA;EACA,qBAAA;EAEA,gCAAA;EACA,4EAAA;AAAV;;AAQA;EACE,aAAA;EACA,SAAA;EACA,eAAA;EACA,6BAAA;EACA,uBAAA;EACA,mBAAA;AALF;AAOE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,iBAAA;AALJ;;AASA,cAAA\",\"sourcesContent\":[\"@import url(\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\");\\n@import url(\\\"https://fonts.googleapis.com/css2?family=Yellowtail&display=swap\\\");\\n@import \\\"./variables.module.scss\\\";\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n\\n* {\\n  box-sizing: border-box;\\n}\\n\\n.font_14px {\\n  font-size: 14px;\\n}\\n.font_16px {\\n  font-size: 16px;\\n}\\n.font_18px {\\n  font-size: 18px;\\n}\\n\\n.font_buttons {\\n  font-size: 1.5em;\\n}\\n\\n.font_dog {\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  font-weight: normal;\\n}\\n\\n.button {\\n  padding: 0.3em 4em;\\n  text-align: center;\\n  margin: auto;\\n  color: $dark_color;\\n  border-radius: 6px;\\n}\\n\\n.back_top_button {\\n  width: 60px;\\n  height: 60px;\\n  color: $dark_color;\\n  background-color: $green_color;\\n  opacity: 0.5;\\n  position: fixed;\\n  border-radius: 50em;\\n  right: 40px;\\n  bottom: 20px;\\n  \\n  &:hover, &:focus, &:active {\\n    background-color: $green_color;\\n    opacity: 1;\\n    -webkit-transition: all 0.5s ease-in-out;\\n    transition: all 0.3s ease-in-out;\\n  }\\n\\n  span {\\n    margin: auto;\\n    text-align: center;\\n    font-weight: bold;\\n  }\\n}\\n\\n.button_primary {\\n  background-color: $primary_color;\\n\\n  &:hover,\\n  &:focus,\\n  &:active {\\n    background-color: $primary_color_hover;\\n    color: $white_color;\\n    -webkit-transition: all 0.5s ease-in-out;\\n    transition: all 0.5s ease-in-out;\\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  }\\n}\\n\\n.button_green {\\n  background-color: $green_color;\\n\\n  &:hover,\\n  &:focus,\\n  &:active {\\n    background-color: rgb(164, 240, 230);\\n    color: $white_color;\\n    -webkit-transition: all 0.5s ease-in-out;\\n    transition: all 0.5s ease-in-out;\\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  }\\n}\\n\\n/* Components */\\nnav {\\n  width: 100%;\\n  height: 68px;\\n  background-color: $dark_color;\\n  margin: auto;\\n  color: #fff;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  margin-top: 0;\\n  position: fixed;\\n\\n  ul {\\n    list-style: none;\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: center;\\n    padding: 0;\\n\\n    li {\\n      margin: 0;\\n      padding: 0;\\n      a {\\n        color: #fff;\\n        text-decoration: none;\\n        font-size: 1.5em;\\n        font-family: \\\"Yellowtail\\\", cursive;\\n        cursor: pointer;\\n        &:hover,\\n        &:focus,\\n        &:active {\\n          color: #fff;\\n          text-decoration: none;\\n          -webkit-transition: all 0.5s ease-in-out;\\n          transition: all 0.5s ease-in-out;\\n          box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,\\n            rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n        }\\n      }\\n    }\\n  }\\n}\\n\\nfooter {\\n  display: flex;\\n  flex: 1;\\n  padding: 2rem 0;\\n  border-top: 1px solid #eaeaea;\\n  justify-content: center;\\n  align-items: center;\\n\\n  a {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    flex-grow: 1;\\n    font-weight: bold;\\n  }\\n}\\n\\n/* animations*/\\n\",\"/* Color Variables */\\n\\n$default_background: #fff;\\n$primary_color: #bdb3a5;\\n$primary_color_hover: #968e83;\\n$green_color: rgb(77, 230, 184);\\n$green_color_hover: rgb(74, 141, 132);\\n$red_color: #e72761;\\n$white_color: #ffffff;\\n$dark_color: #333333;\\n\\n\\n:export {\\n    default_background: $default_background;\\n    primary_color: $primary_color;\\n    green_background: $green_color;\\n    red_color: $red_color;\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzldLnVzZVs0XSEuL3N0eWxlcy9nbG9iYWxzLnNjc3MuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLDJJQUEySSxvRkFBb0Ysa0NBQWtDLDZCQUE2QiwyQkFBMkIsOEJBQThCLHVCQUF1QixHQUFHLGlCQUFpQixlQUFlLGNBQWMsbUpBQW1KLEdBQUcsT0FBTyxtQkFBbUIsMEJBQTBCLEdBQUcsT0FBTywyQkFBMkIsR0FBRyxnQkFBZ0Isb0JBQW9CLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLGdCQUFnQixvQkFBb0IsR0FBRyxtQkFBbUIscUJBQXFCLEdBQUcsZUFBZSx5Q0FBeUMsd0JBQXdCLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLGlCQUFpQixtQkFBbUIsdUJBQXVCLEdBQUcsc0JBQXNCLGdCQUFnQixpQkFBaUIsbUJBQW1CLDhCQUE4QixpQkFBaUIsb0JBQW9CLHdCQUF3QixnQkFBZ0IsaUJBQWlCLEdBQUcsMkVBQTJFLDhCQUE4QixlQUFlLHFDQUFxQyxHQUFH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QywwQkFBMEIsd0RBQXdELHdCQUF3QixrQ0FBa0MscURBQXFELDZDQUE2QyxzR0FBc0csV0FBVyxTQUFTLE9BQU8sS0FBSyxHQUFHLFlBQVksa0JBQWtCLFlBQVksb0JBQW9CLGtDQUFrQyw0QkFBNEIsd0JBQXdCLFNBQVMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsbUJBQW1CLHdCQUF3QixLQUFLLEdBQUcsMkVBQTJFLDBCQUEwQixnQ0FBZ0Msa0NBQWtDLHdDQUF3QyxzQkFBc0Isd0JBQXdCLHVCQUF1QixlQUFlLDhDQUE4QyxvQ0FBb0MscUNBQXFDLDRCQUE0QixHQUFHLG1CQUFtQjtBQUM5L1A7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5zY3NzPzE0YWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9mb250LWF3ZXNvbWUvNi4wLjAtYmV0YTMvY3NzL2FsbC5taW4uY3NzXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9WWVsbG93dGFpbCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4vKiBDb2xvciBWYXJpYWJsZXMgKi9cXG46ZXhwb3J0IHtcXG4gIGRlZmF1bHRfYmFja2dyb3VuZDogI2ZmZjtcXG4gIHByaW1hcnlfY29sb3I6ICNiZGIzYTU7XFxuICBncmVlbl9iYWNrZ3JvdW5kOiAjNGRlNmI4O1xcbiAgcmVkX2NvbG9yOiAjZTcyNzYxO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZvbnRfMTRweCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5mb250XzE2cHgge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4uZm9udF8xOHB4IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmZvbnRfYnV0dG9ucyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uZm9udF9kb2cge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJZZWxsb3d0YWlsXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC4zZW0gNGVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5iYWNrX3RvcF9idXR0b24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGU2Yjg7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3JkZXItcmFkaXVzOiA1MGVtO1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBib3R0b206IDIwcHg7XFxufVxcbi5iYWNrX3RvcF9idXR0b246aG92ZXIsIC5iYWNrX3RvcF9idXR0b246Zm9jdXMsIC5iYWNrX3RvcF9idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGU2Yjg7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5iYWNrX3RvcF9idXR0b24gc3BhbiB7XFxuICBtYXJnaW46IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbl9wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGIzYTU7XFxufVxcbi5idXR0b25fcHJpbWFyeTpob3ZlciwgLmJ1dHRvbl9wcmltYXJ5OmZvY3VzLCAuYnV0dG9uX3ByaW1hcnk6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5NjhlODM7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG59XFxuXFxuLmJ1dHRvbl9ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRlNmI4O1xcbn1cXG4uYnV0dG9uX2dyZWVuOmhvdmVyLCAuYnV0dG9uX2dyZWVuOmZvY3VzLCAuYnV0dG9uX2dyZWVuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRmMGU2O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxufVxcblxcbi8qIENvbXBvbmVudHMgKi9cXG5uYXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDY4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG59XFxubmF2IHVsIGxpIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbm5hdiB1bCBsaSBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWWVsbG93dGFpbFxcXCIsIGN1cnNpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbm5hdiB1bCBsaSBhOmhvdmVyLCBuYXYgdWwgbGkgYTpmb2N1cywgbmF2IHVsIGxpIGE6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMTtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5mb290ZXIgYSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIGFuaW1hdGlvbnMqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvZ2xvYmFscy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZhcmlhYmxlcy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBUSw4RkFBQTtBQUNBLCtFQUFBO0FDRFIsb0JBQUE7QUFZQTtFQUNJLHdCQVhpQjtFQVlqQixzQkFYWTtFQVlaLHlCQVZVO0VBV1Ysa0JBVFE7QURDWjs7QUFKQTs7RUFFRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDhJQUFBO0FBT0Y7O0FBSEE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFNRjs7QUFIQTtFQUNFLHNCQUFBO0FBTUY7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0FBUUY7O0FBTEE7RUFDRSxnQkFBQTtBQVFGOztBQUxBO0VBQ0Usa0NBQUE7RUFDQSxtQkFBQTtBQVFGOztBQUxBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQ25DVztFRG9DWCxrQkFBQTtBQVFGOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQzFDVztFRDJDWCx5QkMvQ1k7RURnRFosWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUUY7QUFORTtFQUNFLHlCQ3ZEVTtFRHdEVixVQUFBO0VBRUEsZ0NBQUE7QUFRSjtBQUxFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFPSjs7QUFIQTtFQUNFLHlCQ3ZFYztBRDZFaEI7QUFKRTtFQUdFLHlCQzNFa0I7RUQ0RWxCLGNDeEVVO0VEMEVWLGdDQUFBO0VBQ0EsNEVBQUE7QUFJSjs7QUFBQTtFQUNFLHlCQ25GWTtBRHNGZDtBQURFO0VBR0UseUJBQUE7RUFDQSxjQ3RGVTtFRHdGVixnQ0FBQTtFQUNBLDRFQUFBO0FBQ0o7O0FBR0EsZUFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNoR1c7RURpR1gsWUFBQTtFQUNBLFdBQUE7RUFDQSw0RUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQUY7QUFFRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQUo7QUFFSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQU47QUFDTTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBQ1I7QUFBUTtFQUdFLFdBQUE7RUFDQSxxQkFBQTtFQUVBLGdDQUFBO0VBQ0EsNEVBQUE7QUFBVjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBT0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVNBLGNBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2ZvbnQtYXdlc29tZS82LjAuMC1iZXRhMy9jc3MvYWxsLm1pbi5jc3NcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1ZZWxsb3d0YWlsJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgXFxcIi4vdmFyaWFibGVzLm1vZHVsZS5zY3NzXFxcIjtcXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIE94eWdlbixcXG4gICAgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmZvbnRfMTRweCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5mb250XzE2cHgge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uZm9udF8xOHB4IHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmZvbnRfYnV0dG9ucyB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbn1cXG5cXG4uZm9udF9kb2cge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJZZWxsb3d0YWlsXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi5idXR0b24ge1xcbiAgcGFkZGluZzogMC4zZW0gNGVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgY29sb3I6ICRkYXJrX2NvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uYmFja190b3BfYnV0dG9uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgY29sb3I6ICRkYXJrX2NvbG9yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuX2NvbG9yO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm9yZGVyLXJhZGl1czogNTBlbTtcXG4gIHJpZ2h0OiA0MHB4O1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgXFxuICAmOmhvdmVyLCAmOmZvY3VzLCAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbl9jb2xvcjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICB9XFxuXFxuICBzcGFuIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uX3ByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlfY29sb3I7XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyxcXG4gICY6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnlfY29sb3JfaG92ZXI7XFxuICAgIGNvbG9yOiAkd2hpdGVfY29sb3I7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgfVxcbn1cXG5cXG4uYnV0dG9uX2dyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmVlbl9jb2xvcjtcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzLFxcbiAgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY0LCAyNDAsIDIzMCk7XFxuICAgIGNvbG9yOiAkd2hpdGVfY29sb3I7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBDb21wb25lbnRzICovXFxubmF2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2OHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtfY29sb3I7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcblxcbiAgdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMDtcXG5cXG4gICAgbGkge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgICAgIGEge1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJZZWxsb3d0YWlsXFxcIiwgY3Vyc2l2ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICY6aG92ZXIsXFxuICAgICAgICAmOmZvY3VzLFxcbiAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCxcXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAycmVtIDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIGEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG59XFxuXFxuLyogYW5pbWF0aW9ucyovXFxuXCIsXCIvKiBDb2xvciBWYXJpYWJsZXMgKi9cXG5cXG4kZGVmYXVsdF9iYWNrZ3JvdW5kOiAjZmZmO1xcbiRwcmltYXJ5X2NvbG9yOiAjYmRiM2E1O1xcbiRwcmltYXJ5X2NvbG9yX2hvdmVyOiAjOTY4ZTgzO1xcbiRncmVlbl9jb2xvcjogcmdiKDc3LCAyMzAsIDE4NCk7XFxuJGdyZWVuX2NvbG9yX2hvdmVyOiByZ2IoNzQsIDE0MSwgMTMyKTtcXG4kcmVkX2NvbG9yOiAjZTcyNzYxO1xcbiR3aGl0ZV9jb2xvcjogI2ZmZmZmZjtcXG4kZGFya19jb2xvcjogIzMzMzMzMztcXG5cXG5cXG46ZXhwb3J0IHtcXG4gICAgZGVmYXVsdF9iYWNrZ3JvdW5kOiAkZGVmYXVsdF9iYWNrZ3JvdW5kO1xcbiAgICBwcmltYXJ5X2NvbG9yOiAkcHJpbWFyeV9jb2xvcjtcXG4gICAgZ3JlZW5fYmFja2dyb3VuZDogJGdyZWVuX2NvbG9yO1xcbiAgICByZWRfY29sb3I6ICRyZWRfY29sb3I7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[9].use[4]!./styles/globals.scss\n");

/***/ })

});