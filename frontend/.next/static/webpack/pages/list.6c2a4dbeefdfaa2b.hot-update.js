/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/list",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Navbar.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Navbar.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Color Variables */\\n\\n.Navbar_nav__SAZhw {\\n  width: 100%;\\n  height: 68px;\\n  background-color: #333333;\\n  margin: auto;\\n  color: #fff;\\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n  margin-top: 0;\\n  position: fixed;\\n  z-index: 1;\\n}\\n.Navbar_nav__SAZhw .Navbar_logo_navbar__ScTtn {\\n  width: 200px;\\n  height: auto;\\n  float: left;\\n  margin-left: 20px;\\n  margin-top: 10px;\\n  display: inline-flex;\\n}\\n.Navbar_nav__SAZhw .Navbar_logo_navbar__ScTtn img {\\n  border-radius: 50em;\\n}\\n.Navbar_nav__SAZhw .Navbar_logo_navbar__ScTtn span {\\n  color: #4de6b8;\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  font-size: 20px;\\n  margin: 16px 0 0 8px;\\n}\\n.Navbar_nav__SAZhw ul {\\n  list-style: none;\\n  display: flex;\\n  justify-content: flex-end;\\n  grid-gap: 24px;\\n  gap: 24px;\\n  align-items: start;\\n  padding: 0;\\n}\\n.Navbar_nav__SAZhw ul li {\\n  margin: 0 2%;\\n  padding: 0;\\n}\\n.Navbar_nav__SAZhw ul li a {\\n  color: #4de6b8;\\n  text-decoration: none;\\n  font-size: 1.5em;\\n  font-family: \\\"Yellowtail\\\", cursive;\\n  cursor: pointer;\\n}\\n.Navbar_nav__SAZhw ul li a:hover, .Navbar_nav__SAZhw ul li a:focus, .Navbar_nav__SAZhw ul li a:active {\\n  color: #bdb3a5;\\n  transition: all 0.5s ease-in-out;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/variables.module.scss\",\"webpack://styles/Navbar.module.scss\"],\"names\":[],\"mappings\":\"AAAA,oBAAA;;ACEA;EACI,WAAA;EACA,YAAA;EACA,yBDIS;ECHT,YAAA;EACA,WAAA;EACA,4EAAA;EACA,aAAA;EACA,eAAA;EACA,UAAA;AAOJ;AALI;EACE,YAAA;EACA,YAAA;EACA,WAAA;EACA,iBAAA;EACA,gBAAA;EACA,oBAAA;AAON;AANM;EACE,mBAAA;AAQR;AANM;EACE,cDnBM;ECoBN,kCAAA;EACA,eAAA;EACA,oBAAA;AAQR;AAJI;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;EACA,cAAA;EAAA,SAAA;EACA,kBAAA;EACA,UAAA;AAMN;AAJM;EACE,YAAA;EACA,UAAA;AAMR;AALQ;EACE,cDtCI;ECuCJ,qBAAA;EACA,gBAAA;EACA,kCAAA;EACA,eAAA;AAOV;AANU;EAGE,cDhDI;ECkDJ,gCAAA;AAMZ\",\"sourcesContent\":[\"/* Color Variables */\\n\\n$default_background: #fff;\\n$primary_color: #bdb3a5;\\n$primary_color_hover: #968e83;\\n$green_color: rgb(77, 230, 184);\\n$green_color_hover: rgb(74, 141, 132);\\n$red_color: #e72761;\\n$white_color: #ffffff;\\n$dark_color: #333333;\\n\\n:export {\\n  default_background: $default_background;\\n  primary_color: $primary_color;\\n  green_background: $green_color;\\n  red_color: $red_color;\\n}\\n\",\"@import \\\"./variables.module.scss\\\";\\n\\n.nav {\\n    width: 100%;\\n    height: 68px;\\n    background-color: $dark_color;\\n    margin: auto;\\n    color: #fff;\\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\\n    margin-top: 0;\\n    position: fixed;\\n    z-index: 1;\\n  \\n    .logo_navbar {\\n      width: 200px;\\n      height: auto;\\n      float: left;\\n      margin-left: 20px;\\n      margin-top: 10px;\\n      display: inline-flex;\\n      img {\\n        border-radius: 50em;\\n      }\\n      span {\\n        color: $green_color;\\n        font-family: \\\"Yellowtail\\\", cursive;\\n        font-size: 20px;\\n        margin: 16px 0 0 8px;\\n      }\\n    }\\n  \\n    ul {\\n      list-style: none;\\n      display: flex;\\n      justify-content: flex-end;\\n      gap: 24px;\\n      align-items: start;\\n      padding: 0;\\n  \\n      li {\\n        margin: 0 2%;\\n        padding: 0;\\n        a {\\n          color: $green_color;\\n          text-decoration: none;\\n          font-size: 1.5em;\\n          font-family: \\\"Yellowtail\\\", cursive;\\n          cursor: pointer;\\n          &:hover,\\n          &:focus,\\n          &:active {\\n            color: $primary_color;\\n            -webkit-transition: all 0.5s ease-in-out;\\n            transition: all 0.5s ease-in-out;\\n          }\\n        }\\n      }\\n    }\\n  }\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"default_background\": \"#fff\",\n\t\"primary_color\": \"#bdb3a5\",\n\t\"green_background\": \"#4de6b8\",\n\t\"red_color\": \"#e72761\",\n\t\"nav\": \"Navbar_nav__SAZhw\",\n\t\"logo_navbar\": \"Navbar_logo_navbar__ScTtn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzVdLnVzZVs0XSEuL3N0eWxlcy9OYXZiYXIubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxtS0FBK0U7QUFDekg7QUFDQTtBQUNBLHVGQUF1RixnQkFBZ0IsaUJBQWlCLDhCQUE4QixpQkFBaUIsZ0JBQWdCLGlGQUFpRixrQkFBa0Isb0JBQW9CLGVBQWUsR0FBRyxpREFBaUQsaUJBQWlCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLHFCQUFxQix5QkFBeUIsR0FBRyxxREFBcUQsd0JBQXdCLEdBQUcsc0RBQXNELG1CQUFtQix5Q0FBeUMsb0JBQW9CLHlCQUF5QixHQUFHLHlCQUF5QixxQkFBcUIsa0JBQWtCLDhCQUE4QixtQkFBbUIsY0FBYyx1QkFBdUIsZUFBZSxHQUFHLDRCQUE0QixpQkFBaUIsZUFBZSxHQUFHLDhCQUE4QixtQkFBbUIsMEJBQTBCLHFCQUFxQix5Q0FBeUMsb0JBQW9CLEdBQUcseUdBQXlHLG1CQUFtQixxQ0FBcUMsR0FBRyxPQUFPLDBJQUEwSSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLFlBQVksV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsWUFBWSw0RUFBNEUsMEJBQTBCLGdDQUFnQyxrQ0FBa0Msd0NBQXdDLHNCQUFzQix3QkFBd0IsdUJBQXVCLGFBQWEsNENBQTRDLGtDQUFrQyxtQ0FBbUMsMEJBQTBCLEdBQUcseUNBQXlDLFVBQVUsa0JBQWtCLG1CQUFtQixvQ0FBb0MsbUJBQW1CLGtCQUFrQixtRkFBbUYsb0JBQW9CLHNCQUFzQixpQkFBaUIsd0JBQXdCLHFCQUFxQixxQkFBcUIsb0JBQW9CLDBCQUEwQix5QkFBeUIsNkJBQTZCLGFBQWEsOEJBQThCLFNBQVMsY0FBYyw4QkFBOEIsK0NBQStDLDBCQUEwQiwrQkFBK0IsU0FBUyxPQUFPLGNBQWMseUJBQXlCLHNCQUFzQixrQ0FBa0Msa0JBQWtCLDJCQUEyQixtQkFBbUIsZ0JBQWdCLHVCQUF1QixxQkFBcUIsYUFBYSxnQ0FBZ0Msa0NBQWtDLDZCQUE2QixpREFBaUQsNEJBQTRCLDhEQUE4RCxvQ0FBb0MsdURBQXVELCtDQUErQyxhQUFhLFdBQVcsU0FBUyxPQUFPLEtBQUssbUJBQW1CO0FBQ3psSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5zY3NzPzc4MDciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbG9yIFZhcmlhYmxlcyAqL1xcblxcbi5OYXZiYXJfbmF2X19TQVpodyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XFxuICBtYXJnaW46IGF1dG87XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG59XFxuLk5hdmJhcl9uYXZfX1NBWmh3IC5OYXZiYXJfbG9nb19uYXZiYXJfX1NjVHRuIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5OYXZiYXJfbmF2X19TQVpodyAuTmF2YmFyX2xvZ29fbmF2YmFyX19TY1R0biBpbWcge1xcbiAgYm9yZGVyLXJhZGl1czogNTBlbTtcXG59XFxuLk5hdmJhcl9uYXZfX1NBWmh3IC5OYXZiYXJfbG9nb19uYXZiYXJfX1NjVHRuIHNwYW4ge1xcbiAgY29sb3I6ICM0ZGU2Yjg7XFxuICBmb250LWZhbWlseTogXFxcIlllbGxvd3RhaWxcXFwiLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxNnB4IDAgMCA4cHg7XFxufVxcbi5OYXZiYXJfbmF2X19TQVpodyB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBncmlkLWdhcDogMjRweDtcXG4gIGdhcDogMjRweDtcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5OYXZiYXJfbmF2X19TQVpodyB1bCBsaSB7XFxuICBtYXJnaW46IDAgMiU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uTmF2YmFyX25hdl9fU0FaaHcgdWwgbGkgYSB7XFxuICBjb2xvcjogIzRkZTZiODtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LWZhbWlseTogXFxcIlllbGxvd3RhaWxcXFwiLCBjdXJzaXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uTmF2YmFyX25hdl9fU0FaaHcgdWwgbGkgYTpob3ZlciwgLk5hdmJhcl9uYXZfX1NBWmh3IHVsIGxpIGE6Zm9jdXMsIC5OYXZiYXJfbmF2X19TQVpodyB1bCBsaSBhOmFjdGl2ZSB7XFxuICBjb2xvcjogI2JkYjNhNTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL3ZhcmlhYmxlcy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9OYXZiYXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsb0JBQUE7O0FDRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRElTO0VDSFQsWUFBQTtFQUNBLFdBQUE7RUFDQSw0RUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQU9KO0FBTEk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFPTjtBQU5NO0VBQ0UsbUJBQUE7QUFRUjtBQU5NO0VBQ0UsY0RuQk07RUNvQk4sa0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFRUjtBQUpJO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU1OO0FBSk07RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQU1SO0FBTFE7RUFDRSxjRHRDSTtFQ3VDSixxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FBT1Y7QUFOVTtFQUdFLGNEaERJO0VDa0RKLGdDQUFBO0FBTVpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ29sb3IgVmFyaWFibGVzICovXFxuXFxuJGRlZmF1bHRfYmFja2dyb3VuZDogI2ZmZjtcXG4kcHJpbWFyeV9jb2xvcjogI2JkYjNhNTtcXG4kcHJpbWFyeV9jb2xvcl9ob3ZlcjogIzk2OGU4MztcXG4kZ3JlZW5fY29sb3I6IHJnYig3NywgMjMwLCAxODQpO1xcbiRncmVlbl9jb2xvcl9ob3ZlcjogcmdiKDc0LCAxNDEsIDEzMik7XFxuJHJlZF9jb2xvcjogI2U3Mjc2MTtcXG4kd2hpdGVfY29sb3I6ICNmZmZmZmY7XFxuJGRhcmtfY29sb3I6ICMzMzMzMzM7XFxuXFxuOmV4cG9ydCB7XFxuICBkZWZhdWx0X2JhY2tncm91bmQ6ICRkZWZhdWx0X2JhY2tncm91bmQ7XFxuICBwcmltYXJ5X2NvbG9yOiAkcHJpbWFyeV9jb2xvcjtcXG4gIGdyZWVuX2JhY2tncm91bmQ6ICRncmVlbl9jb2xvcjtcXG4gIHJlZF9jb2xvcjogJHJlZF9jb2xvcjtcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlcy5tb2R1bGUuc2Nzc1xcXCI7XFxuXFxuLm5hdiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDY4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrX2NvbG9yO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICBcXG4gICAgLmxvZ29fbmF2YmFyIHtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgICAgaW1nIHtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwZW07XFxuICAgICAgfVxcbiAgICAgIHNwYW4ge1xcbiAgICAgICAgY29sb3I6ICRncmVlbl9jb2xvcjtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiWWVsbG93dGFpbFxcXCIsIGN1cnNpdmU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBtYXJnaW46IDE2cHggMCAwIDhweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIFxcbiAgICB1bCB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgZ2FwOiAyNHB4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgICBwYWRkaW5nOiAwO1xcbiAgXFxuICAgICAgbGkge1xcbiAgICAgICAgbWFyZ2luOiAwIDIlO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICBjb2xvcjogJGdyZWVuX2NvbG9yO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiWWVsbG93dGFpbFxcXCIsIGN1cnNpdmU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgJjpob3ZlcixcXG4gICAgICAgICAgJjpmb2N1cyxcXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeV9jb2xvcjtcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZGVmYXVsdF9iYWNrZ3JvdW5kXCI6IFwiI2ZmZlwiLFxuXHRcInByaW1hcnlfY29sb3JcIjogXCIjYmRiM2E1XCIsXG5cdFwiZ3JlZW5fYmFja2dyb3VuZFwiOiBcIiM0ZGU2YjhcIixcblx0XCJyZWRfY29sb3JcIjogXCIjZTcyNzYxXCIsXG5cdFwibmF2XCI6IFwiTmF2YmFyX25hdl9fU0FaaHdcIixcblx0XCJsb2dvX25hdmJhclwiOiBcIk5hdmJhcl9sb2dvX25hdmJhcl9fU2NUdG5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[5].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[4]!./styles/Navbar.module.scss\n");

/***/ })

});