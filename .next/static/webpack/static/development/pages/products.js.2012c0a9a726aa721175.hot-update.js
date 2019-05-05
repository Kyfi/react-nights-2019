webpackHotUpdate("static/development/pages/products.js",{

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
  return fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["server"], "/api/skus?include=prices"), Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
            console.log(token);
            _context.prev = 7;
            _context.next = 10;
            return makeRequest(url, options, token);

          case 10:
            response = _context.sent;

            if (!(response && response.status === 401)) {
              _context.next = 25;
              break;
            }

            refreshToken = Object(_utils_refreshToken__WEBPACK_IMPORTED_MODULE_8__["getRefreshToken"])(); // If we have a refresh token this means we have logged in user
            // and we need to refresh access token

            if (!refreshToken) {
              _context.next = 19;
              break;
            }

            _context.next = 16;
            return Object(_customers_refreshCustomerToken__WEBPACK_IMPORTED_MODULE_6__["refreshCustomerToken"])();

          case 16:
            token = _context.sent;
            _context.next = 22;
            break;

          case 19:
            _context.next = 21;
            return Object(_getGuestToken__WEBPACK_IMPORTED_MODULE_5__["getGuestToken"])();

          case 21:
            token = _context.sent;

          case 22:
            _context.next = 24;
            return makeRequest(url, options, token);

          case 24:
            response = _context.sent;

          case 25:
            // Here is a place to handle special cases
            // CASE: second 401 we need to logout
            if (response && response.status === 401) {
              Object(_utils_is_browser__WEBPACK_IMPORTED_MODULE_11__["isBrowser"])() && window.location.assign(_constants_urls__WEBPACK_IMPORTED_MODULE_4__["default"].logout);
            } // If everything went fine just return the result


            return _context.abrupt("return", response.json());

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](7);
            // Place to handle global api errors
            react_toastify__WEBPACK_IMPORTED_MODULE_9__["toast"].error('Internet connection lost.. :(');
            throw _context.t1;

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[7, 29]]);
  }));

  return function api(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=products.js.2012c0a9a726aa721175.hot-update.js.map