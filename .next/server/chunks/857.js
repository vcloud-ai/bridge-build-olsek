"use strict";
exports.id = 857;
exports.ids = [857];
exports.modules = {

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* binding */ commonStyles),
  "Z": () => (/* binding */ HOCs_withCommonStyles)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./public/images/favicon.ico
/* harmony default export */ const favicon = ({"src":"/_next/static/media/favicon.e958c542.ico","height":48,"width":48});
;// CONCATENATED MODULE: ./public/images/searchCameraPlus.svg
/* harmony default export */ const searchCameraPlus = ({"src":"/_next/static/media/searchCameraPlus.9bf906e2.svg","height":32,"width":23});
;// CONCATENATED MODULE: ./public/images/vCloudAi-symbol-logo.svg
/* harmony default export */ const vCloudAi_symbol_logo = ({"src":"/_next/static/media/vCloudAi-symbol-logo.dd0046db.svg","height":46,"width":71});
;// CONCATENATED MODULE: ./public/images/custom/logo.ico
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.325d71e8.ico","height":32,"width":32});
;// CONCATENATED MODULE: ./public/images/custom/searchCameraPlus.svg
/* harmony default export */ const custom_searchCameraPlus = ({"src":"/_next/static/media/searchCameraPlus.6b4ffa94.svg","height":32,"width":23});
;// CONCATENATED MODULE: ./public/images/custom/olsek_badge.png
/* harmony default export */ const olsek_badge = ({"src":"/_next/static/media/olsek_badge.b2fab61b.png","height":250,"width":320,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAArUlEQVR42mNgqN/AAMQcDPW7/YHYi6F+VyBD/c4YsBgICDWsA+HEK82ZWf/bGGyA2PJCc14+L1CMAQzq16tKN6wLBUro/WpRbgJhINvYrGFNKNAUBQb2hnXKRg1rgr636DMAsf+PFq1QvYY1DEAczt+wTpFBt2EtCCcy1J6V/t/K4A7E/gy1p2T1G9bEMICAf8MKEOZkqN+UWNEwv7S6cV4ZkB2e0bCYlYGBgQEAtc9Hxp3uvMMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./HOCs/withCommonStyles.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // DEFAULT ICONS



 // CUSTOM ICONS





const DEFAULT_STYLES_CONF = {
  colors: {
    containerBackgroundColor: '#09141F',
    menuColor: '#172A3B',
    subMenuColor: '#152534',
    contextMenuColor: '#161716',
    secondaryContainerBackgroundColor: '#2E4458',
    messageColor: '#3D5469',
    inactiveBackgroundColor: '#BFCDD9',
    themeGradientColors: ['#152534', '#09141F'],
    themeSecondaryGradientColors: ['#223445', '#152534'],
    buttonWrapperGradientColors: ['#2E4458', '#0D1824'],
    accentGradientColors: ['#CBFF00', '#7BAB00'],
    accentColor: '#CBFF00',
    accentSlightlyTransparentColor: '#CBFF0099',
    accentStronglyTransparentColor: '#CBFF004D',
    inputFieldColor: '#101B26',
    secondaryLabelColor: '#9DADBC',
    switcherLoaderColor: '#0087FF'
  },
  dynamicIcons: {
    favicon: favicon,
    plus: searchCameraPlus,
    logo: vCloudAi_symbol_logo
  },
  font: '"Montserrat"',
  title: 'vCloud.ai bridge'
}; // CONFIGURE AND BUILD WITH CUSTOM BRANDING

const CUSTOM_STYLES_CONF = {
  colors: {
    containerBackgroundColor: '#002950',
    menuColor: '#004F7A',
    subMenuColor: '#035270',
    contextMenuColor: '#002349',
    secondaryContainerBackgroundColor: '#006C9A',
    messageColor: '#0580AF',
    inactiveBackgroundColor: '#BFCDD9',
    themeGradientColors: ['#035270', '#002950'],
    themeSecondaryGradientColors: ['#006794', '#035270'],
    buttonWrapperGradientColors: ['#006C9A', '#002A3A'],
    accentGradientColors: ['#FF8500', '#B35D00'],
    accentColor: '#FF8500',
    accentSlightlyTransparentColor: '#FF850099',
    accentStronglyTransparentColor: '#FF85004D',
    inputFieldColor: '#003861',
    secondaryLabelColor: '#9DADBC',
    switcherLoaderColor: '#FF8500'
  },
  dynamicIcons: {
    favicon: logo,
    plus: custom_searchCameraPlus,
    logo: olsek_badge
  },
  font: '"Questrial"',
  title: 'OLSEK VSS AI bridge'
};

const commonStyles = _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_STYLES_CONF), CUSTOM_STYLES_CONF), {}, {
  colors: _objectSpread(_objectSpread({}, DEFAULT_STYLES_CONF.colors), CUSTOM_STYLES_CONF.colors),
  dynamicIcons: _objectSpread(_objectSpread({}, DEFAULT_STYLES_CONF.dynamicIcons), CUSTOM_STYLES_CONF.dynamicIcons)
}); // eslint-disable-next-line react/display-name


const withCommonStyles = Component => props => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
    theme: _objectSpread({}, commonStyles),
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread(_objectSpread({}, props), {}, {
      theme: commonStyles
    }))
  });
};

/* harmony default export */ const HOCs_withCommonStyles = (withCommonStyles);


/***/ }),

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
// EXTERNAL MODULE: ./HOCs/withCommonStyles.js + 6 modules
var withCommonStyles = __webpack_require__(4449);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/common/AppLoader/index.js






const AppLoader = ({
  customStyles,
  theme
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    customStyles: customStyles,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_react_loader_spinner_.Puff, {
      color: theme.colors.switcherLoaderColor,
      height: 25,
      width: 25
    })
  });
};

/* harmony default export */ const common_AppLoader = ((0,withCommonStyles/* default */.Z)(AppLoader));

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
/* harmony export */   "A2": () => (/* binding */ logoutFromCloud),
/* harmony export */   "Bc": () => (/* binding */ connectStreamsToCloud),
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "I_": () => (/* binding */ getIpAddress),
/* harmony export */   "Ih": () => (/* binding */ updateCameraStream),
/* harmony export */   "Ll": () => (/* binding */ unsetToken),
/* harmony export */   "S": () => (/* binding */ updateIpAddress),
/* harmony export */   "Vb": () => (/* binding */ getAddedCameras),
/* harmony export */   "YL": () => (/* binding */ searchCamerasInSubnet),
/* harmony export */   "gQ": () => (/* binding */ updatePassword),
/* harmony export */   "hA": () => (/* binding */ connectToCloud),
/* harmony export */   "hk": () => (/* binding */ checkCloudAuth),
/* harmony export */   "jU": () => (/* binding */ removeCamera),
/* harmony export */   "qL": () => (/* binding */ getNetworkRange),
/* harmony export */   "qm": () => (/* binding */ addBulkCameras),
/* harmony export */   "vV": () => (/* binding */ addCamera),
/* harmony export */   "vq": () => (/* binding */ removeBulkCameras),
/* harmony export */   "x4": () => (/* binding */ login)
/* harmony export */ });
/* unused harmony exports logIntoCloud, getPartizanShortToken, getDevicesGroupId, getCloudStreams, connectCamToCloud */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2109);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_common_Toast__WEBPACK_IMPORTED_MODULE_1__]);
components_common_Toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const {
  PARTIZAN_API_ADDRESS
} = process.env;

const setToken = () => {
  const token = localStorage.getItem("authToken");
  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = token;
};

const unsetToken = () => {
  (axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.headers.common.Authorization) = null;
  localStorage.clear();
};

const handleAuthError = () => {
  (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
    type: "error",
    message: "Unathorized"
  });
  unsetToken();
  throw new Error(401);
};

const getNetworkRange = async () => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/networkRange");
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: error.message
    });
  }
};
const searchCamerasInSubnet = async networkRange => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/searchCamerasInSubnet", networkRange);
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: error.message
    });
  }
};
const addCamera = async camera => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/addCameraInfo", camera);
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "info",
      message: data.message
    });
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    if (error.response?.data?.message) {
      (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        type: "error",
        message: error.response.data.message
      });
      return null;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const addBulkCameras = async cameras => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/addBulkCameras", {
      cameras
    });
    return data.addedCameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

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
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/devices");
    return data.cameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

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
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/devices");
    return data.cameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

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
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/deleteAddedCamera", {
      params: {
        name: camera.name,
        url: camera.url,
        port: camera.port,
        ip: camera.ip,
        id: camera.id
      }
    });
    return data.cameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

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
const connectToCloud = async credentials => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/connect", credentials);
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "info",
      message: data.message
    });
    return data.login;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

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
const checkCloudAuth = async () => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/connect");
    return data.login;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    if (error.response?.data?.message) {
      // toast({ type: "error", message: error.response.data.message });
      return;
    } // toast({ type: "error", message: "Something went wrong" });

  }
};
const logoutFromCloud = async () => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]("/api/connect");
    return data.login;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

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
const updateCameraStream = async (id, isMainStream) => {
  try {
    setToken();
    await axios__WEBPACK_IMPORTED_MODULE_0___default().patch("/api/editStream", {
      id,
      isMainStream
    });
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "info",
      message: "Successfully updated stream source"
    });
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const login = async password => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/login", {
      password
    });
    const toastContent = data.token ? {
      type: "info",
      message: "Successfully logged in"
    } : {
      type: "error",
      message: "Invalid password"
    };
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(toastContent);
    return data.token;
  } catch (error) {
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
    return null;
  }
};
const auth = async token => {
  try {
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/api/auth?token=${token}`);
    return data.isValid;
  } catch (error) {
    return false;
  }
};
const updatePassword = async password => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/updatePassword", {
      password
    });
    const toastContent = data.isUpdated ? {
      type: "info",
      message: "Successfully updated password"
    } : {
      type: "error",
      message: "New password does not match requirements (must be 5 or more characters)"
    };
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(toastContent);
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    return false;
  }
};
const getIpAddress = async () => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/ipAddress");
    return data.ip;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const updateIpAddress = async ip => {
  try {
    setToken();
    const {
      data
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/ipAddress", {
      ip
    });
    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "info",
      message: data.message
    });
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }
  }
};
const connectStreamsToCloud = async (devices = []) => {
  try {
    setToken();
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post("/api/connectStreamsToCloud", {
      devices
    });
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    (0,components_common_Toast__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
      type: "error",
      message: "Something went wrong"
    });
  }
}; // PARTIZAN REQUESTS

const partizanInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: PARTIZAN_API_ADDRESS
});
const logIntoCloud = async ({
  login,
  password
}) => {
  try {
    const params = new URLSearchParams();
    params.append("email", login);
    params.append("password", password);
    const {
      data
    } = await partizanInstance.post("/security/login", params);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getPartizanShortToken = async longToken => {
  try {
    const params = new URLSearchParams();
    params.append("token", longToken);
    const {
      data
    } = await partizanInstance.post("/security/getToken", params);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getDevicesGroupId = async token => {
  try {
    partizanInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const {
      data
    } = await partizanInstance.post("/rest/DeviceList/Groups/getCamerasGroupList");
    const group_id = data.data[0].cameras_group_id;
    return group_id;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
const getCloudStreams = async token => {
  try {
    partizanInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const {
      data
    } = await partizanInstance.get("/rest/DeviceList/getDeviceList");
    return data.user_devices.filter(d => d.stream).map(d => ({
      name: d.device_name,
      stream: d.stream
    }));
  } catch (error) {
    return [];
  }
};
const connectCamToCloud = async (device, token, groupId) => {
  try {
    partizanInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const params = new URLSearchParams();
    params.append("device_name", device.name);
    params.append("device_tzname", tz);
    params.append("cameras_group_id", groupId);
    params.append("stream_url", device.proxyUrl);
    await partizanInstance.post("/rest/DeviceList/addVirtualDevice", params);
  } catch (error) {
    throw new Error(error.message);
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;