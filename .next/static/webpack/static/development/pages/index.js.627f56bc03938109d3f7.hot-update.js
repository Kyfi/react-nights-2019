webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/ProductList/index.js":
/*!****************************************!*\
  !*** ./src/pages/ProductList/index.js ***!
  \****************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_products_getProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/products/getProducts */ "./src/api/products/getProducts.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loader */ "./src/components/Loader/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Pagination */ "./src/components/Pagination/index.js");
/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Product */ "./src/pages/ProductList/components/Product/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled */ "./src/pages/ProductList/styled.js");
/* harmony import */ var _store_cart_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/cart/actions */ "./src/store/cart/actions.js");
/* harmony import */ var _store_products_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/products/actions */ "./src/store/products/actions.js");
/* harmony import */ var _constants_base__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../constants/base */ "./src/constants/base.js");















var Products = function Products(_ref) {
  var res = _ref.res,
      match = _ref.match,
      page = _ref.page,
      size = _ref.size,
      addProduct = _ref.addProduct,
      isLoading = _ref.isLoading;

  var handleAddToCart = function handleAddToCart(productId) {
    return addProduct(productId);
  };
  /*const handleSizeChange = newSize => {
    Router.push(`/products?page=${page}&size=${newSize}`)
  }*/


  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, isLoading && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    centered: true
  }), res && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["ProductsWrap"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_10__["ProductsWrapInner"], {
    "data-testid": 'products-in-list'
  }, res.data.map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Product__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: product.id,
      node: product,
      addProduct: handleAddToCart
    });
  })))));
};

var getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var store, query, _query$page, page, _query$size, size, res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = _ref2.store, query = _ref2.query;
            _query$page = query.page, page = _query$page === void 0 ? _constants_base__WEBPACK_IMPORTED_MODULE_13__["PAGE_DEFAULT"] : _query$page, _query$size = query.size, size = _query$size === void 0 ? _constants_base__WEBPACK_IMPORTED_MODULE_13__["PAGE_SIZE_DEFAULT"] : _query$size;
            _context.next = 4;
            return Object(_api_products_getProducts__WEBPACK_IMPORTED_MODULE_3__["getProducts"])({
              page: {
                number: page,
                size: size
              }
            });

          case 4:
            res = _context.sent;
            store.dispatch(_store_products_actions__WEBPACK_IMPORTED_MODULE_12__["loadProducts"](res.data));
            return _context.abrupt("return", {
              page: page,
              size: size,
              isLoading: false,
              res: res
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getInitialProps(_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mapDispatchToProps = {
  addProduct: _store_cart_actions__WEBPACK_IMPORTED_MODULE_11__["addProduct"]
};
var ProductList = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(Products);
ProductList.getInitialProps = getInitialProps;


/***/ })

})
//# sourceMappingURL=index.js.627f56bc03938109d3f7.hot-update.js.map