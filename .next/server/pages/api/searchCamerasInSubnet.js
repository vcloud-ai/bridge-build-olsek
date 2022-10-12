"use strict";
(() => {
var exports = {};
exports.id = 321;
exports.ids = [321];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

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

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

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

/***/ 2886:
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  getIPRange
} = __webpack_require__(9821);



const {
  getAddedOnvifCameras
} = __webpack_require__(1546);


async function handler(req, res) {
  const networkRange = req.body;

  if (req.method === "POST") {
    try {
      const isAuthorized = await (0,services_auth__WEBPACK_IMPORTED_MODULE_1__.validateToken)(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      let camerasInSubnet = await (0,services_search__WEBPACK_IMPORTED_MODULE_0__/* .startScanNetwork */ .$)(networkRange);
      const rangeIPv4 = getIPRange(networkRange.start, networkRange.end);
      camerasInSubnet = camerasInSubnet.filter(el => rangeIPv4.includes(el.ip));
      const cameras = await getAddedOnvifCameras();
      camerasInSubnet = await Promise.all(camerasInSubnet.map(async camera => {
        const existingCam = cameras.find(cam => cam.ip === camera.ip);
        if (existingCam) return _objectSpread(_objectSpread({}, existingCam), {}, {
          ping: camera.ping
        });
        return camera;
      }));
      res.status(200).json(camerasInSubnet);
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
var __webpack_exports__ = __webpack_require__.X(0, [614,546,815], () => (__webpack_exec__(2886)));
module.exports = __webpack_exports__;

})();