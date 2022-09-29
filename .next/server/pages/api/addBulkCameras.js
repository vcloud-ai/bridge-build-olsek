"use strict";
(() => {
var exports = {};
exports.id = 388;
exports.ids = [388];
exports.modules = {

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

/***/ 2388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  addONVIFCamera
} = (__webpack_require__(1005)/* ["default"] */ .Z);

const {
  checkUrlIsValid
} = __webpack_require__(3073);

const {
  addBulkOnvifCameras,
  getAddedCameras
} = __webpack_require__(1546);

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const {
        cameras
      } = req.body;
      const promises = cameras.map(cam => checkCamera(cam));
      let addedCameras = await Promise.all(promises);
      addedCameras = addedCameras.filter(cam => cam.name);
      await addBulkOnvifCameras(addedCameras);
      addedCameras = addedCameras.map(cam => {
        const camera = _objectSpread({}, cam);

        delete camera.password;
        delete camera.url;
        camera.isAdded = true;
        return camera;
      });
      res.status(200).json({
        addedCameras
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } else {
    res.status(404).send("Not found");
  }
}

async function checkCamera(camera) {
  try {
    const {
      name,
      url,
      type,
      port,
      ip,
      login,
      password
    } = camera;
    const credsMatch = /(?<=\/{2})[^]+(?=@)/gi;
    let streamUrl = url;

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

    let onvifCodec = null;

    if (type === "ONVIF") {
      const {
        url: onvifLink,
        codec
      } = await addONVIFCamera({
        ip,
        port,
        user: login,
        pass: unescape(password)
      });
      streamUrl = onvifLink;

      if (streamUrl.includes(":undefined")) {
        streamUrl = streamUrl.replace(":undefined", "");
      }

      onvifCodec = codec;
    }

    const cameras = await getAddedCameras();
    const isAdded = cameras.find(cam => cam.url === streamUrl);
    if (isAdded) return [];
    const {
      message
    } = await checkUrlIsValid(streamUrl);
    const encodedPassword = password ? escape(password) : password;
    if (message !== "Successfully added") return [];else return {
      login,
      password: encodedPassword,
      name,
      type,
      url: streamUrl,
      ip,
      port
    };
  } catch (error) {
    return [];
  }
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [546,178], () => (__webpack_exec__(2388)));
module.exports = __webpack_exports__;

})();