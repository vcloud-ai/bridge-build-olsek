exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 3733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 3614:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const jwt = __webpack_require__(9344);

const bcrypt = __webpack_require__(8432);

const {
  SECRET,
  DEFAULT_PASS
} = process.env;

const path = __webpack_require__(1017);

const fs = __webpack_require__(7147);

const util = __webpack_require__(3837);

const readContent = util.promisify(fs.readFile);
const writeContent = util.promisify(fs.writeFile);
const createFile = util.promisify(fs.appendFile);

const {
  encrypt,
  decrypt
} = __webpack_require__(704);

const {
  logIntoCloud
} = __webpack_require__(8075);

const credConfPath = path.join(process.cwd(), "credConf.json");

const checkConf = async () => {
  try {
    if (fs.existsSync(credConfPath)) return;
    await createFile(credConfPath, JSON.stringify({}));
  } catch (error) {
    console.log(error);
  }
};

const getAuthConf = async () => {
  try {
    await checkConf();
    const content = await readContent(credConfPath, "utf8");
    const creds = JSON.parse(content);
    return creds;
  } catch (error) {
    return {};
  }
};

const generateToken = async password => {
  try {
    const creds = await getAuthConf();
    let isValidPassword;

    if (creds.password) {
      isValidPassword = bcrypt.compareSync(password, creds.password);
    } else {
      isValidPassword = password === DEFAULT_PASS;
    }

    if (!isValidPassword) return null;
    const token = jwt.sign({
      app: "finder"
    }, SECRET);
    creds.token = token;
    await writeContent(credConfPath, JSON.stringify(creds));
    return token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const validateToken = async token => {
  let creds;

  try {
    creds = await getAuthConf();
    if (!creds.token) return false;
  } catch (error) {
    return false;
  }

  return new Promise(res => {
    jwt.verify(token, SECRET, async err => {
      if (err) res(false);
      if (token !== creds.token) res(false);
      res(true);
    });
  });
};

const updatePassword = async password => {
  if (password.trim().length !== password.length) return false;
  if (password.length < 5) return false;

  try {
    const creds = await getAuthConf();
    const salt = bcrypt.genSaltSync(8);
    creds.password = bcrypt.hashSync(password, salt);
    await writeContent(credConfPath, JSON.stringify(creds));
    return true;
  } catch (error) {
    return false;
  }
};

const updateCloudAccessData = async (data, cloudCreds) => {
  try {
    const creds = await getAuthConf();
    const cloudAuthDetails = {
      login: cloudCreds.login,
      password: encrypt(cloudCreds.password)
    };
    creds.cloudAccessData = _objectSpread(_objectSpread({}, data), {}, {
      cloudAuthDetails
    });
    delete creds.cloudAccessData.error_code;
    delete creds.cloudAccessData.error_description;
    await writeContent(credConfPath, JSON.stringify(creds));
    return {
      message: "Successfully logged into cloud",
      login: cloudCreds.login
    };
  } catch (error) {
    return {
      message: "Something went wrong",
      login: ""
    };
  }
};

const updateTokens = async data => {
  try {
    const creds = await getAuthConf();
    creds.cloudAccessData = _objectSpread(_objectSpread({}, creds.cloudAccessData), {}, {
      shortToken: data.short_token,
      longToken: data.long_token,
      shortTokenValidTill: data.short_token_valid_till,
      longTokenValidTill: data.long_token_valid_till
    });
    await writeContent(credConfPath, JSON.stringify(creds));
  } catch (error) {
    console.log(error);
  }
};

const updateShortToken = async data => {
  try {
    const creds = await getAuthConf();
    creds.cloudAccessData = _objectSpread(_objectSpread({}, creds.cloudAccessData), {}, {
      short_token: data.short_token,
      short_token_valid_till: data.short_token_valid_till
    });
    await writeContent(credConfPath, JSON.stringify(creds));
  } catch (error) {
    console.log(error);
  }
};

const addDevicesGroupId = async groupId => {
  try {
    const creds = await getAuthConf();
    creds.cloudAccessData.group_id = groupId;
    await writeContent(credConfPath, JSON.stringify(creds));
  } catch (error) {
    console.log(error);
  }
};

const deleteCloudAccessData = async () => {
  try {
    const creds = await getAuthConf();
    delete creds.cloudAccessData;
    await writeContent(credConfPath, JSON.stringify(creds));
    return "Successfully logged out";
  } catch (error) {
    return "Something went wrong";
  }
};

const getCloudCreds = async () => {
  try {
    const creds = await getAuthConf();
    if (!creds?.cloudAccessData?.cloudAuthDetails?.password) return {};
    const password = decrypt(creds.cloudAccessData.cloudAuthDetails.password);
    const login = creds.cloudAccessData.cloudAuthDetails.login;
    return {
      login,
      password
    };
  } catch (error) {
    return {};
  }
};

const getCloudAuthInfo = async () => {
  try {
    const creds = await getAuthConf();
    if (!creds?.cloudAccessData) return {};
    return creds.cloudAccessData;
  } catch (error) {
    return {};
  }
};

module.exports = {
  updateCloudAccessData,
  deleteCloudAccessData,
  addDevicesGroupId,
  getCloudAuthInfo,
  getCloudCreds,
  generateToken,
  validateToken,
  updateTokens,
  updateShortToken,
  updatePassword,
  getAuthConf
};

/***/ }),

/***/ 704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const crypto = __webpack_require__(6113);

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const encrypt = text => {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString("hex")
  };
};

const decrypt = text => {
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

module.exports = {
  encrypt,
  decrypt
};

/***/ }),

/***/ 8075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBulkCameras": () => (/* binding */ addBulkCameras),
/* harmony export */   "addCamera": () => (/* binding */ addCamera),
/* harmony export */   "auth": () => (/* binding */ auth),
/* harmony export */   "checkCloudAuth": () => (/* binding */ checkCloudAuth),
/* harmony export */   "connectCamToCloud": () => (/* binding */ connectCamToCloud),
/* harmony export */   "connectStreamsToCloud": () => (/* binding */ connectStreamsToCloud),
/* harmony export */   "connectToCloud": () => (/* binding */ connectToCloud),
/* harmony export */   "getAddedCameras": () => (/* binding */ getAddedCameras),
/* harmony export */   "getCloudStreams": () => (/* binding */ getCloudStreams),
/* harmony export */   "getDevicesGroupId": () => (/* binding */ getDevicesGroupId),
/* harmony export */   "getIpAddress": () => (/* binding */ getIpAddress),
/* harmony export */   "getNetworkRange": () => (/* binding */ getNetworkRange),
/* harmony export */   "getPartizanShortToken": () => (/* binding */ getPartizanShortToken),
/* harmony export */   "logIntoCloud": () => (/* binding */ logIntoCloud),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logoutFromCloud": () => (/* binding */ logoutFromCloud),
/* harmony export */   "removeBulkCameras": () => (/* binding */ removeBulkCameras),
/* harmony export */   "removeCamera": () => (/* binding */ removeCamera),
/* harmony export */   "searchCamerasInSubnet": () => (/* binding */ searchCamerasInSubnet),
/* harmony export */   "unsetToken": () => (/* binding */ unsetToken),
/* harmony export */   "updateCameraStream": () => (/* binding */ updateCameraStream),
/* harmony export */   "updateIpAddress": () => (/* binding */ updateIpAddress),
/* harmony export */   "updatePassword": () => (/* binding */ updatePassword)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_Toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3733);
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default()["delete"]('/api/connect');
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
    await axios__WEBPACK_IMPORTED_MODULE_0___default().patch('/api/editStream', {
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/login', {
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/auth?token=${token}');
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/updatePassword', {
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get('/api/ipAddress');
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
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/ipAddress', {
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
    await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/connectStreamsToCloud', {
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
    } = await partizanInstance.post('/security/login', params);
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
    } = await partizanInstance.post('/security/getToken', params);
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
    } = await partizanInstance.post('/rest/DeviceList/Groups/getCamerasGroupList');
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
    } = await partizanInstance.get('/rest/DeviceList/getDeviceList');
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
    await partizanInstance.post('/rest/DeviceList/addVirtualDevice', params);
  } catch (error) {
    throw new Error(error.message);
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;