"use strict";
(() => {
var exports = {};
exports.id = 607;
exports.ids = [607];
exports.modules = {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const {
  getAddedCameras
} = __webpack_require__(1546);

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const cameras = await getAddedCameras();
      console.log(cameras); // TODO investigate P2P

      res.status(200).send({
        message: "Connected successfully"
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [546], () => (__webpack_exec__(7698)));
module.exports = __webpack_exports__;

})();