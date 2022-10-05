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
    // res({ message: "Something went wrong during url check" });
    res({
      message: "Url is invalid"
    });
    return;
  } // FFMPEG 5
  // const cmd =
  //   `-rtsp_transport tcp -v debug -loglevel error -timeout 5000000 -print_format json -show_error ${url}`.split(
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


const processUrl = (url, pass) => {
  const encodedPassword = pass.split("").map(el => escape(el)).join("");
  const streamUrl = url.split("//");
  return `${streamUrl[0]}//${options.user}:${encodedPassword}@${streamUrl[1]}`;
};

const addONVIFCamera = async options => {
  console.log({
    options
  });
  const dev = new vcloud_vms_service__WEBPACK_IMPORTED_MODULE_0__.ONVIFCamera();
  await dev.init(options);
  const streams = dev.camera.getUdpStreamUrl();
  const [mainStream, subStream] = streams;
  let mainStreamUrl = mainStream.url || "",
      subStreamUrl = subStream.url || "";

  if (options?.pass) {
    mainStreamUrl = processUrl(mainStreamUrl, options.pass);
    subStreamUrl = processUrl(subStreamUrl, options.pass);
  }

  return {
    url: mainStreamUrl,
    secondUrl: subStreamUrl
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addONVIFCamera
});

/***/ })

};
;