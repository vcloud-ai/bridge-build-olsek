"use strict";
(() => {
var exports = {};
exports.id = 383;
exports.ids = [383];
exports.modules = {

/***/ 7987:
/***/ ((module) => {

module.exports = require("terminate");

/***/ }),

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 2081:
/***/ ((module) => {

module.exports = require("child_process");

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

/***/ 9995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const {
  deleteOneCamera
} = __webpack_require__(1546);

const streamsHandler = __webpack_require__(7564);

async function handler(req, res) {
  const {
    name,
    url,
    ip,
    port,
    type,
    id
  } = req.query;

  if (req.method === "DELETE") {
    try {
      const cameras = await deleteOneCamera(name, url, ip, port, type);
      streamsHandler.destroyStream(id);
      res.status(200).send({
        cameras
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    res.status(404).send("Not found");
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [546,564], () => (__webpack_exec__(9995)));
module.exports = __webpack_exports__;

})();