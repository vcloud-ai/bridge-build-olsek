"use strict";
(() => {
var exports = {};
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 7987:
/***/ ((module) => {

module.exports = require("terminate");

/***/ }),

/***/ 5828:
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("vcloud-vms-service");

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

/***/ 971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const {
  addONVIFCamera
} = (__webpack_require__(1005)/* ["default"] */ .Z);

const {
  checkUrlIsValid
} = __webpack_require__(3073);

const {
  addOneCamera,
  getAddedCameras
} = __webpack_require__(1546);

const streamsHandler = __webpack_require__(7564);

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        name,
        url,
        type,
        port,
        ip,
        login,
        password
      } = req.body;
      const credsMatch = /(?<=\/{2})[^]+(?=@)/gi;
      let streamUrl = url;
      let subStreamUrl = "";

      if (streamUrl && !password && credsMatch.test(streamUrl)) {
        const [credentials] = streamUrl.match(credsMatch);
        const creds = credentials.split(":");
        const encodedPw = creds[1].split("").map(el => escape(el)).join("");
        streamUrl = streamUrl.replace(credsMatch, `${creds[0]}:${encodedPw}`);
      }

      if (streamUrl && password) {
        const encodedPassword = password.split("").map(el => escape(el)).join("");
        streamUrl = streamUrl.split("//");
        streamUrl = `${streamUrl[0]}//${login}:${encodedPassword}@${streamUrl[1]}`;
      }

      if (type === "ONVIF") {
        const {
          url: firstUrl,
          secondUrl
        } = await addONVIFCamera({
          ip,
          port,
          user: login,
          pass: unescape(password)
        });
        streamUrl = firstUrl;
        subStreamUrl = secondUrl;

        if (streamUrl.includes(":undefined")) {
          streamUrl = streamUrl.replace(":undefined", "");
        }
      }

      const cameras = await getAddedCameras();
      const isAdded = cameras.find(cam => cam.url === streamUrl);

      if (isAdded) {
        return res.status(200).send({
          message: "Camera already added"
        });
      }

      const {
        message
      } = await checkUrlIsValid(streamUrl);
      const encodedPassword = password ? escape(password) : password;

      if (message !== "Successfully added") {
        res.status(400).send({
          message
        });
      } else {
        const camera = await addOneCamera({
          login,
          password: encodedPassword,
          name,
          type,
          url: streamUrl,
          secondUrl: subStreamUrl,
          ip,
          port
        });
        streamsHandler.addStream(camera);
        res.status(200).send({
          message
        });
      }
    } catch (error) {
      console.log(error);
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
var __webpack_exports__ = __webpack_require__.X(0, [546,564,178], () => (__webpack_exec__(971)));
module.exports = __webpack_exports__;

})();