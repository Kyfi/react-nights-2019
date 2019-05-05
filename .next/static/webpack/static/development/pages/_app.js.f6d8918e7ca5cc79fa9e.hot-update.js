webpackHotUpdate("static/development/pages/_app.js",{

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
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/components/Header/styled.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/urls */ "./src/constants/urls.js");




var Header = function Header(_ref) {
  var isAuthenticated = _ref.isAuthenticated;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["NavLeft"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].index
  }, 'Product List')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["NavRight"], null, isAuthenticated ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].myAccount
  }, "My Account"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].logout
  }, "Logout")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].signIn
  }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].signUp
  }, "Sign Up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["StyledLink"], {
    href: _constants_urls__WEBPACK_IMPORTED_MODULE_2__["default"].cart
  }, 'My Cart'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.f6d8918e7ca5cc79fa9e.hot-update.js.map