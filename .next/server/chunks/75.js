"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 3733:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
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
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ToastMessage)));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JT": () => (/* binding */ getCloudStreams),
/* harmony export */   "ih": () => (/* binding */ logIntoCloud),
/* harmony export */   "jV": () => (/* binding */ getDevicesGroupId),
/* harmony export */   "n": () => (/* binding */ getPartizanShortToken),
/* harmony export */   "y5": () => (/* binding */ connectCamToCloud)
/* harmony export */ });
/* unused harmony exports unsetToken, getNetworkRange, searchCamerasInSubnet, addCamera, addBulkCameras, getAddedCameras, removeBulkCameras, removeCamera, connectToCloud, checkCloudAuth, logoutFromCloud, updateCameraStream, login, auth, updatePassword, getIpAddress, updateIpAddress, connectStreamsToCloud */
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
  axios.defaults.headers.common["Authorization"] = token;
};

const unsetToken = () => {
  axios.defaults.headers.common["Authorization"] = null;
  localStorage.clear();
};

const handleAuthError = () => {
  toast({
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
    } = await axios.get("/api/networkRange");
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    toast({
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
    } = await axios.post("/api/searchCamerasInSubnet", networkRange);
    return data;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    toast({
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
    } = await axios.post("/api/addCameraInfo", camera);
    toast({
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
      toast({
        type: "error",
        message: error.response.data.message
      });
      return null;
    }

    toast({
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
    } = await axios.post("/api/addBulkCameras", {
      cameras
    });
    return data.addedCameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    if (error.response?.data?.message) {
      toast({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    toast({
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
    } = await axios.get("/api/devices");
    return data.cameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    if (error.response?.data?.message) {
      toast({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    toast({
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
    } = await axios.delete("/api/devices");
    return data.cameras;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    if (error.response?.data?.message) {
      toast({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    toast({
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
    } = await axios.delete("/api/deleteAddedCamera", {
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
      toast({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    toast({
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
    } = await axios.post("/api/connect", credentials);
    toast({
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
      toast({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    toast({
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
    } = await axios.get("/api/connect");
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
    } = await axios.delete("/api/connect");
    return data.login;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    if (error.response?.data?.message) {
      toast({
        type: "error",
        message: error.response.data.message
      });
      return;
    }

    toast({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const updateCameraStream = async (id, isMainStream) => {
  try {
    setToken();
    await axios.patch("/api/editStream", {
      id,
      isMainStream
    });
    toast({
      type: "info",
      message: "Successfully updated stream source"
    });
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    toast({
      type: "error",
      message: "Something went wrong"
    });
  }
};
const login = async password => {
  try {
    const {
      data
    } = await axios.post("/api/login", {
      password
    });
    const toastContent = data.token ? {
      type: "info",
      message: "Successfully logged in"
    } : {
      type: "error",
      message: "Invalid password"
    };
    toast(toastContent);
    return data.token;
  } catch (error) {
    toast({
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
    } = await axios.get(`/api/auth?token=${token}`);
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
    } = await axios.post(`/api/updatePassword`, {
      password
    });
    const toastContent = data.isUpdated ? {
      type: "info",
      message: "Successfully updated password"
    } : {
      type: "error",
      message: "New password does not match requirements (must be 5 or more characters)"
    };
    toast(toastContent);
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
    } = await axios.get(`/api/ipAddress`);
    return data.ip;
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    toast({
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
    } = await axios.post(`/api/ipAddress`, {
      ip
    });
    toast({
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
    await axios.post(`/api/connectStreamsToCloud`, {
      devices
    });
  } catch (error) {
    if (error.response?.status === 401) {
      handleAuthError();
      return;
    }

    toast({
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
    } = await partizanInstance.post(`/security/login`, params);
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
    } = await partizanInstance.post(`/security/getToken`, params);
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
    } = await partizanInstance.post(`/rest/v3/getCamerasGroupList`);
    const [camerasGroup] = data;
    return camerasGroup.cameras_group_id;
  } catch (error) {
    return null;
  }
};
const getCloudStreams = async token => {
  try {
    partizanInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const {
      data
    } = await partizanInstance.get(`/rest/v3/getUserDeviceListDirContent`);
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
    await partizanInstance.post(`/rest/v3/addVirtualDevice`, params);
  } catch (error) {
    throw new Error(error.message);
  }
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;