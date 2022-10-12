"use strict";
(() => {
var exports = {};
exports.id = 400;
exports.ids = [400];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 7987:
/***/ ((module) => {

module.exports = require("terminate");

/***/ }),

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

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

/***/ 6948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3231);
/* harmony import */ var services_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_0__, services_requests__WEBPACK_IMPORTED_MODULE_1__]);
([helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_0__, services_requests__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
const {
  getAddedCameras,
  deleteAddedCameras
} = __webpack_require__(1546);

const streamsHandler = __webpack_require__(7564);

const {
  validateToken
} = __webpack_require__(3614);



async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const allCams = await getAddedCameras();
      const cameras = await deleteAddedCameras();
      allCams.forEach(cam => {
        streamsHandler.destroyStream(cam.id);
      });
      res.status(200).send({
        cameras
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else if (req.method === "GET") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const token = await (0,helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
      const cloudDevices = await (0,services_requests__WEBPACK_IMPORTED_MODULE_1__/* .getCloudStreams */ .JT)(token);
      const allCams = await getAddedCameras();
      const cameras = allCams.map(cam => {
        const res = cam;
        delete res.password;
        res.isDeviceInCloud = cloudDevices.some(d => cam.proxyUrl === d.stream);
        return res;
      });
      res.status(200).json({
        cameras
      });
    } catch (error) {
      console.log(error);
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
var __webpack_exports__ = __webpack_require__.X(0, [614,546,564,75,231], () => (__webpack_exec__(6948)));
module.exports = __webpack_exports__;

})();