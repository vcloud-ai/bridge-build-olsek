"use strict";
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 3073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkUrlIsValid": () => (/* binding */ checkUrlIsValid)
/* harmony export */ });
const {
  spawn
} = __webpack_require__(2081);

const checkUrlIsValid = url => new Promise((res, _) => {
  console.log("url to check ===> ", url);

  if (url.includes("undefined")) {
    res({
      message: "Something went wrong during url check"
    });
    return;
  } // FFMPEG 5
  // const cmd =
  //   `-rtsp_transport tcp -rtsp_flags listen -v debug -loglevel error -timeout 5000000 -print_format json -show_error ${url}`.split(
  //     " "
  //   );
  // FFMPEG 4


  const cmd = `-rtsp_transport tcp -v debug -loglevel error -print_format json -show_error ${url}`.split(" ");
  const probeUrl = spawn("ffprobe", cmd);
  probeUrl.stderr.on("data", err => {
    const result = err.toString("utf8"); //

    console.log(result); //

    if (result.includes("Input/output error")) {
      res({
        message: "Url is invalid"
      });
    }
  });
  probeUrl.stdout.on("data", data => {
    const result = data.toString("utf8"); //

    console.log(result); //

    if (result.includes("Operation not permitted")) {
      res({
        message: "Operation not permitted"
      });
    }

    if (result.includes("Operation timed out")) {
      res({
        message: "Operation timed out"
      });
    }
  });
  probeUrl.on("close", (code, signal) => {
    console.log(code, signal);

    if (code) {
      res({
        message: "Url is invalid"
      });
      return;
    }

    res({
      message: "Successfully added"
    });
  });
});

/***/ }),

/***/ 1005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vcloud_vms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(456);
/* harmony import */ var vcloud_vms_service__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vcloud_vms_service__WEBPACK_IMPORTED_MODULE_0__);

let connectedONVIFCameras = [];

const getCamera = cameraId => connectedONVIFCameras.find(cam => cam.cameraId === cameraId);

const connectToONVIFCamera = async (cameraId, accountId, options) => new Promise(res => {
  const cam = getCamera(cameraId);

  if (!cam) {
    const camera = new vcloud_vms_service__WEBPACK_IMPORTED_MODULE_0__.ONVIFCamera();
    camera.init(options);
    connectedONVIFCameras.push({
      camera,
      accountId,
      cameraId
    });
  }

  res();
});

const addONVIFCamera = async (options, isSubStream = false) => {
  const dev = new vcloud_vms_service__WEBPACK_IMPORTED_MODULE_0__.ONVIFCamera();
  await dev.init(options);
  const streams = dev.camera.getUdpStreamUrl(); // console.log({streams});

  let streamInfo = {
    url: "",
    codec: null
  };
  if (streams.length) streamInfo = isSubStream && streams.length > 1 ? streams[1] : streams[0];
  let streamUrl = streamInfo.url;

  if (options.pass) {
    const encodedPassword = options.pass.split("").map(el => escape(el)).join("");
    streamUrl = streamUrl.split("//");
    streamUrl = `${streamUrl[0]}//${options.user}:${encodedPassword}@${streamUrl[1]}`;
  } // console.log('=== ONVIF URL AND CODEC ===');
  // console.log({ url: streamUrl, codec: streamInfo.codec });


  return {
    url: streamUrl,
    codec: streamInfo.codec
  };
};

const disconnectONVIFCamera = (cameraId, accountId) => {
  connectedONVIFCameras = connectedONVIFCameras.filter(cam => !(cam.cameraId === cameraId && cam.accountId === accountId));
};

const moveONVIFCamera = (command, cameraId, accountId) => {
  const camera = getCamera(cameraId);
  if (camera && camera.accountId === accountId) camera.camera.move(command);
};

const stopONVIFCamera = (cameraId, accountId) => {
  const camera = getCamera(cameraId);
  if (camera && camera.accountId === accountId) camera.camera.stop();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  connectToONVIFCamera,
  addONVIFCamera,
  disconnectONVIFCamera,
  moveONVIFCamera,
  stopONVIFCamera
});

/***/ })

};
;