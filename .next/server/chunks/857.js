"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 4767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_AppLoader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/common/AppLoader/styles.js

const Wrapper = external_styled_components_default().div.withConfig({
  displayName: "styles__Wrapper",
  componentId: "sc-jeejul-0"
})(["display:flex;width:100%;height:100%;align-items:center;justify-content:center;z-index:8;", ";"], props => props.customStyles);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/AppLoader/index.js





const AppLoader = ({
  customStyles
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    customStyles: customStyles,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_loader_spinner_.Puff, {
      color: "#0087FF",
      height: 25,
      width: 25
    })
  });
};

/* harmony default export */ const common_AppLoader = (AppLoader);

/***/ }),

/***/ 2109:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_1__, uuid__WEBPACK_IMPORTED_MODULE_2__]);
([react_toastify__WEBPACK_IMPORTED_MODULE_1__, uuid__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


 // import {
//   FaInfo,
//   FaCheck,
//   FaExclamationTriangle,
//   FaBug,
//   FaExclamationCircle,
// } from "react-icons/fa";
// export const displayIcon = (type) => {
//   switch (type) {
//     case "success":
//       return <FaCheck />;
//     case "info":
//       return <FaInfo />;
//     case "error":
//       return <FaExclamationCircle />;
//     case "warning":
//       return <FaExclamationTriangle />;
//     default:
//       return <FaBug />;
//   }
// };



const ToastMessage = ({
  type,
  message
}) => react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast[type]( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
  style: {
    display: "flex"
  },
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    style: {
      flexGrow: 1,
      fontSize: 15,
      padding: "8px 12px"
    },
    children: message
  })
}), {
  toastId: "customId"
});

ToastMessage.dismiss = react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.dismiss;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastMessage);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ connectToProxyServer),
/* harmony export */   "Vb": () => (/* binding */ getAddedCameras),
/* harmony export */   "YL": () => (/* binding */ searchCamerasInSubnet),
/* harmony export */   "jU": () => (/* binding */ removeCamera),
/* harmony export */   "qL": () => (/* binding */ getNetworkRange),
/* harmony export */   "qm": () => (/* binding */ addBulkCameras),
/* harmony export */   "vV": () => (/* binding */ addCamera),
/* harmony export */   "vq": () => (/* binding */ removeBulkCameras)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_Toast__WEBPACK_IMPORTED_MODULE_1__]);
components_common_Toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getNetworkRange = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/networkRange");
    return data;
  } catch (error) {
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: error.message
    });
  }
};
const searchCamerasInSubnet = async networkRange => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/searchCamerasInSubnet", networkRange);
    return data;
  } catch (error) {
    console.log(error.message);
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: error.message
    });
  }
};
const addCamera = async camera => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/addCameraInfo", camera);
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "info",
      message: data.message
    });
    return data;
  } catch (error) {
    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const addBulkCameras = async cameras => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/addBulkCameras", {
      cameras
    });
    return data.addedCameras;
  } catch (error) {
    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const getAddedCameras = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/devices");
    return data.cameras;
  } catch (error) {
    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const removeBulkCameras = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/devices");
    return data.cameras;
  } catch (error) {
    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const removeCamera = async camera => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/deleteAddedCamera", {
      params: {
        name: camera.name,
        url: camera.url,
        port: camera.port,
        ip: camera.ip
      }
    });
    return data.cameras;
  } catch (error) {
    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const connectToProxyServer = async () => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/connect");
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "info",
      message: data.message
    });
  } catch (error) {
    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;