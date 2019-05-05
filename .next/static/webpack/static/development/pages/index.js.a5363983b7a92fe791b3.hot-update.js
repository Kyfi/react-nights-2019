webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/components/Header/styled.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/urls */ "./src/constants/urls.js");





var Header = function Header(_ref) {
  var isAuthenticated = _ref.isAuthenticated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["NavLeft"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Product List'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["NavRight"], null, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].myAccount
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'My Account')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].logout
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Logout'))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].signIn
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Sign In')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].signUp
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], null, 'Sign Up'))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_3__["default"].cart
  }, 'My Cart'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/styled.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styled.js ***!
  \*****************************************/
/*! exports provided: Wrapper, Nav, NavLeft, NavRight, StyledLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeft", function() { return NavLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRight", function() { return NavRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _common_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/theme */ "./src/common/theme.js");


var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__Wrapper",
  componentId: "sc-1m0bsgy-0"
})(["position:relative;z-index:1;"]);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav.withConfig({
  displayName: "styled__Nav",
  componentId: "sc-1m0bsgy-1"
})(["background:white;display:flex;justify-content:space-between;box-shadow:", ";"], _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].shadow.basic);
var NavLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__NavLeft",
  componentId: "sc-1m0bsgy-2"
})(["display:flex;"]);
var NavRight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styled__NavRight",
  componentId: "sc-1m0bsgy-3"
})(["display:flex;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "styled__StyledLink",
  componentId: "sc-1m0bsgy-4"
})(["text-decoration:none;color:", ";background-color:", ";padding:20px;border:0;border-right:1px solid lightgrey;white-space:nowrap;font-weight:300;&:hover{color:", ";}"], _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.black, _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.white, _common_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.purple);

/***/ })

})
//# sourceMappingURL=index.js.a5363983b7a92fe791b3.hot-update.js.map