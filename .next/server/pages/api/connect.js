"use strict";
(() => {
var exports = {};
exports.id = 607;
exports.ids = [607];
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

/***/ 7698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([services_requests__WEBPACK_IMPORTED_MODULE_0__]);
services_requests__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const {
  getAuthConf,
  validateToken,
  getCloudAuthInfo,
  addDevicesGroupId,
  updateCloudAccessData,
  deleteCloudAccessData
} = __webpack_require__(3614);


async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const data = await (0,services_requests__WEBPACK_IMPORTED_MODULE_0__/* .logIntoCloud */ .ih)(req.body);

      if (data.errorDescription) {
        return res.status(200).send({
          message: data.errorDescription
        });
      }

      const {
        message,
        login
      } = await updateCloudAccessData(data, req.body);
      const cloudAuthInfo = await getCloudAuthInfo();
      const devicesGroupId = await (0,services_requests__WEBPACK_IMPORTED_MODULE_0__/* .getDevicesGroupId */ .jV)(cloudAuthInfo.shortToken);
      await addDevicesGroupId(devicesGroupId);
      res.status(200).send({
        message,
        login
      });
    } catch (error) {
      res.status(400).send({
        message: "Something went wrong"
      });
    }
  } else if (req.method === "GET") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const creds = await getAuthConf();
      res.status(200).send({
        login: creds?.cloudAccessData?.cloudAuthDetails?.login || null
      });
    } catch (error) {
      res.status(400).send({
        message: error.message
      });
    }
  } else if (req.method === "DELETE") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const message = await deleteCloudAccessData();
      res.status(200).send({
        login: null,
        message
      });
    } catch (error) {
      res.status(400).send({
        message: error
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
var __webpack_exports__ = __webpack_require__.X(0, [614,75], () => (__webpack_exec__(7698)));
module.exports = __webpack_exports__;

})();