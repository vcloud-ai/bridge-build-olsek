"use strict";
(() => {
var exports = {};
exports.id = 400;
exports.ids = [400];
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

/***/ 6948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const {
  getAddedCameras,
  deleteAddedCameras
} = __webpack_require__(1546);

async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const cameras = await deleteAddedCameras();
      res.status(200).send({
        cameras
      });
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else if (req.method === "GET") {
    try {
      const allCams = await getAddedCameras();
      const cameras = allCams.map(cam => {
        const res = cam;
        delete res.password;
        return res;
      });
      res.status(200).json({
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
var __webpack_exports__ = __webpack_require__.X(0, [546], () => (__webpack_exec__(6948)));
module.exports = __webpack_exports__;

})();