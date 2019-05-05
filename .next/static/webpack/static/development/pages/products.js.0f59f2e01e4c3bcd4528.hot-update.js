webpackHotUpdate("static/development/pages/products.js",{

/***/ "./src/api/products/getProducts.js":
/*!*****************************************!*\
  !*** ./src/api/products/getProducts.js ***!
  \*****************************************/
/*! exports provided: getProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../apiClient */ "./src/api/apiClient.js");
/* harmony import */ var _utils_formatProduct__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../utils/formatProduct */ "./src/api/utils/formatProduct.js");





var getProducts =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(urlQuery) {
    var _ref2, data, meta, included;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_apiClient__WEBPACK_IMPORTED_MODULE_3__["api"])("/api/skus?include=prices");

          case 2:
            _ref2 = _context.sent;
            data = _ref2.data;
            meta = _ref2.meta;
            included = _ref2.included;
            console.log(data);
            return _context.abrupt("return", {
              data: data.map(function (product) {
                return Object(_utils_formatProduct__WEBPACK_IMPORTED_MODULE_4__["formatProduct"])(product, included);
              }),
              meta: meta
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getProducts(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=products.js.0f59f2e01e4c3bcd4528.hot-update.js.map