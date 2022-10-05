"use strict";
exports.id = 546;
exports.ids = [546];
exports.modules = {

/***/ 1546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addBulkOnvifCameras": () => (/* binding */ addBulkOnvifCameras),
/* harmony export */   "addOneCamera": () => (/* binding */ addOneCamera),
/* harmony export */   "changeStream": () => (/* binding */ changeStream),
/* harmony export */   "deleteAddedCameras": () => (/* binding */ deleteAddedCameras),
/* harmony export */   "deleteOneCamera": () => (/* binding */ deleteOneCamera),
/* harmony export */   "getAddedCameras": () => (/* binding */ getAddedCameras),
/* harmony export */   "getAddedOnvifCameras": () => (/* binding */ getAddedOnvifCameras),
/* harmony export */   "getCameraById": () => (/* binding */ getCameraById)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const path = __webpack_require__(1017);

const fs = __webpack_require__(7147);

const util = __webpack_require__(3837);

const uuid = __webpack_require__(5828);

const confFileName = "deviceConf.json";
const confFilePath = path.join(process.cwd(), confFileName);
const createFile = util.promisify(fs.appendFile);
const readContent = util.promisify(fs.readFile);
const writeContent = util.promisify(fs.writeFile);
const {
  RTSP_SERVER_HOST,
  RTSP_SERVER_PORT
} = process.env;
const encoding = "utf8";

const checkFile = async () => {
  try {
    if (!fs.existsSync(confFilePath)) await createFile(confFilePath, JSON.stringify([]));
  } catch (error) {
    console.log(error);
  }
};

const getAddedOnvifCameras = async () => {
  try {
    await checkFile();
    const content = await readContent(confFilePath, encoding);
    let cameras = JSON.parse(content);
    cameras = cameras.filter(cam => cam.type === "ONVIF").map(cam => {
      const camera = _objectSpread(_objectSpread({}, cam), {}, {
        isAdded: true
      });

      delete camera.password;
      delete camera.url;
      return camera;
    });
    return cameras;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getAddedCameras = async () => {
  try {
    await checkFile();
    const content = await readContent(confFilePath, encoding);
    const cameras = JSON.parse(content);
    return cameras;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const addOneCamera = async ({
  login = "",
  password = "",
  name,
  type,
  url,
  secondUrl,
  ip = "",
  port = ""
}) => {
  try {
    await checkFile();
    const content = await readContent(confFilePath, encoding);
    const cameras = JSON.parse(content);
    let filteredCams;

    if (type === "ONVIF") {
      filteredCams = cameras.filter(cam => cam.ip !== ip);
    } else {
      filteredCams = cameras.filter(cam => cam.url !== url);
    }

    const id = uuid.v4();
    const newCamera = {
      login,
      password,
      name,
      type,
      url,
      secondUrl,
      proxyUrl: `rtsp://${RTSP_SERVER_HOST}:${RTSP_SERVER_PORT}/rtspServer/${id}`,
      ip,
      port,
      id,
      isMainStream: true,
      isConnectedToCloud: false
    };
    const newCollection = JSON.stringify([...filteredCams, newCamera]);
    await writeContent(confFilePath, newCollection);
    return newCamera;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const addBulkOnvifCameras = async (cameras = []) => {
  try {
    await checkFile();
    const content = await readContent(confFilePath, encoding);
    const existingCams = JSON.parse(content);
    const filteredCams = existingCams.filter(cam => {
      const isCamAdded = cameras.find(camera => camera.ip === cam.ip);
      return !isCamAdded;
    });
    const newCameras = cameras.map(cam => {
      const id = uuid.v4();
      return {
        login: cam.login || "",
        password: cam.password || "",
        name: cam.name,
        type: cam.type,
        url: cam.url,
        secondUrl: cam.secondUrl,
        ip: cam.ip || "",
        port: cam.port || "",
        proxyUrl: `rtsp://${RTSP_SERVER_HOST}:${RTSP_SERVER_PORT}/rtspServer/${id}`,
        id,
        isMainStream: true,
        isConnectedToCloud: false
      };
    });
    const newCollection = JSON.stringify([...filteredCams, ...newCameras]);
    await writeContent(confFilePath, newCollection);
    return newCameras;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const deleteAddedCameras = async () => {
  await checkFile();
  await writeContent(confFilePath, JSON.stringify([]));
  return [];
};
const deleteOneCamera = async (name, url, ip, port, type) => {
  await checkFile();
  const content = await readContent(confFilePath, encoding);
  const cams = JSON.parse(content);
  let updatedCams;

  if (type === "ONVIF") {
    updatedCams = cams.filter(cam => cam.ip !== ip && cam.name !== name && cam.port !== port);
  } else {
    updatedCams = cams.filter(cam => cam.name !== name && cam.url !== url);
  }

  await writeContent(confFilePath, JSON.stringify(updatedCams));
  return updatedCams;
};
const changeStream = async (updatedCameraInfo, cameras) => {
  await checkFile();
  let updatedCams = cameras.filter(cam => cam.id !== updatedCameraInfo.id);
  updatedCams = [...updatedCams, updatedCameraInfo];
  await writeContent(confFilePath, JSON.stringify(updatedCams));
};
const getCameraById = async id => {
  await checkFile();
  const cameras = await getAddedCameras();
  return cameras.find(cam => cam.id === id);
};

/***/ })

};
;