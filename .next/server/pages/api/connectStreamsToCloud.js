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

/***/ 1667:
/***/ ((module) => {

module.exports = require("next/dist/compiled/async-sema");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 6732:
/***/ ((module) => {

module.exports = require("next/dist/compiled/gzip-size");

/***/ }),

/***/ 5590:
/***/ ((module) => {

module.exports = require("next/dist/compiled/strip-ansi");

/***/ }),

/***/ 740:
/***/ ((module) => {

module.exports = require("next/dist/compiled/text-table");

/***/ }),

/***/ 7153:
/***/ ((module) => {

module.exports = require("next/dist/server/config.js");

/***/ }),

/***/ 9439:
/***/ ((module) => {

module.exports = require("next/dist/server/lib/find-page-file.js");

/***/ }),

/***/ 459:
/***/ ((module) => {

module.exports = require("next/dist/server/load-components.js");

/***/ }),

/***/ 1168:
/***/ ((module) => {

module.exports = require("next/dist/server/node-polyfill-fetch.js");

/***/ }),

/***/ 3731:
/***/ ((module) => {

module.exports = require("next/dist/server/web/sandbox/index.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 7742:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/normalize-page-path.js");

/***/ }),

/***/ 3895:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/escape-path-delimiters.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/runtime-config.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7915:
/***/ ((module) => {

module.exports = require("styled-jsx");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

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

/***/ 8188:
/***/ ((module) => {

module.exports = require("module");

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
/* harmony import */ var next_dist_server_dev_static_paths_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5386);
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
        groupId
      } = await getCloudAuthInfo();
      const token = await (0,helpers_getPartizanToken__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
      const promises = devices.map(device => (0,services_requests__WEBPACK_IMPORTED_MODULE_0__.connectCamToCloud)(device, token, groupId));
      await Promise.all(promises);
      await res.status(200).send({
        message: "Success"
      });
    } catch (error) {
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
var __webpack_exports__ = __webpack_require__.X(0, [386,614,231], () => (__webpack_exec__(3759)));
module.exports = __webpack_exports__;

})();