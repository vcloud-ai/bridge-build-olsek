"use strict";
(() => {
var exports = {};
exports.id = 304;
exports.ids = [304];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9821:
/***/ ((module) => {

module.exports = require("get-ip-range");

/***/ }),

/***/ 6077:
/***/ ((module) => {

module.exports = require("ip");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 2976:
/***/ ((module) => {

module.exports = require("node-onvif");

/***/ }),

/***/ 855:
/***/ ((module) => {

module.exports = require("xml2js");

/***/ }),

/***/ 4436:
/***/ ((module) => {

module.exports = import("is-port-reachable");;

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 1891:
/***/ ((module) => {

module.exports = require("dgram");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 2685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var services_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1815);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3614);
/* harmony import */ var services_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(services_auth__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_search__WEBPACK_IMPORTED_MODULE_0__]);
services_search__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const isAuthorized = await (0,services_auth__WEBPACK_IMPORTED_MODULE_1__.validateToken)(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const networkRange = (0,services_search__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkRangeByIp */ .A)();
      res.status(200).json(networkRange);
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(404).send("Not found");
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [614,815], () => (__webpack_exec__(2685)));
module.exports = __webpack_exports__;

})();