webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./src/api/apiClient.js":
/*!******************************!*\
  !*** ./src/api/apiClient.js ***!
  \******************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _constants_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/urls */ "./src/constants/urls.js");
/* harmony import */ var _getGuestToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getGuestToken */ "./src/api/getGuestToken.js");
/* harmony import */ var _customers_refreshCustomerToken__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/refreshCustomerToken */ "./src/api/customers/refreshCustomerToken.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/token */ "./src/utils/token.js");
/* harmony import */ var _utils_refreshToken__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/refreshToken */ "./src/utils/refreshToken.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-browser */ "./src/utils/is-browser.js");
/* harmony import */ var _utils_is_browser__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_is_browser__WEBPACK_IMPORTED_MODULE_11__);




/* eslint-disable no-constant-condition */

/* eslint-disable no-await-in-loop */











var makeRequest = function makeRequest(url, options, token) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].apiUrl).concat(url), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.api+json',
      Authorization: "Bearer ".concat(token)
    }
  }, options));
};

var api =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, options) {
    var token, response, refreshToken;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = Object(_utils_token__WEBPACK_IMPORTED_MODULE_7__["getToken"])();

            if (_context.t0) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return Object(_getGuestToken__WEBPACK_IMPORTED_MODULE_5__["getGuestToken"])();

          case 4:
            _context.t0 = _context.sent;

          case 5:
            token = _context.t0;
            _context.prev = 6;
            _context.next = 9;
            return makeRequest(url, options, token);

          case 9:
            response = _context.sent;

            if (!(response && response.status === 401)) {
              _context.next = 24;
              break;
            }

            refreshToken = Object(_utils_refreshToken__WEBPACK_IMPORTED_MODULE_8__["getRefreshToken"])(); // If we have a refresh token this means we have logged in user
            // and we need to refresh access token

            if (!refreshToken) {
              _context.next = 18;
              break;
            }

            _context.next = 15;
            return Object(_customers_refreshCustomerToken__WEBPACK_IMPORTED_MODULE_6__["refreshCustomerToken"])();

          case 15:
            token = _context.sent;
            _context.next = 21;
            break;

          case 18:
            _context.next = 20;
            return Object(_getGuestToken__WEBPACK_IMPORTED_MODULE_5__["getGuestToken"])();

          case 20:
            token = _context.sent;

          case 21:
            _context.next = 23;
            return makeRequest(url, options, token);

          case 23:
            response = _context.sent;

          case 24:
            // Here is a place to handle special cases
            // CASE: second 401 we need to logout
            if (response && response.status === 401) {
              Object(_utils_is_browser__WEBPACK_IMPORTED_MODULE_11__["isBrowser"])() && window.location.assign(_constants_urls__WEBPACK_IMPORTED_MODULE_4__["default"].logout);
            } // If everything went fine just return the result


            return _context.abrupt("return", response.json());

          case 28:
            _context.prev = 28;
            _context.t1 = _context["catch"](6);
            // Place to handle global api errors
            react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].error('Internet connection lost.. :(');
            throw _context.t1;

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 28]]);
  }));

  return function api(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=cart.js.a157807e578c62487714.hot-update.js.map