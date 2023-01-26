"use strict";
(() => {
var exports = {};
exports.id = 62;
exports.ids = [62];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

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

/***/ 3759:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8075);
/* harmony import */ var helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_requests__WEBPACK_IMPORTED_MODULE_0__, helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_1__]);
([services_requests__WEBPACK_IMPORTED_MODULE_0__, helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const {
  validateToken,
  getCloudAuthInfo
} = __webpack_require__(3614);



async function handler(req, res) {
  const {
    devices
  } = req.body;

  if (req.method === "POST") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const {
        group_id: groupId
      } = await getCloudAuthInfo();
      const token = await (0,helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
      const promises = devices.map(device => (0,services_requests__WEBPACK_IMPORTED_MODULE_0__.connectCamToCloud)(device, token, groupId));
      await Promise.all(promises);
      await res.status(200).send({
        message: "Success"
      });
    } catch (error) {
      console.log(error.message);
      res.status(400).send({
        message: error.message
      });
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
var __webpack_exports__ = __webpack_require__.X(0, [614,231], () => (__webpack_exec__(3759)));
module.exports = __webpack_exports__;

})();