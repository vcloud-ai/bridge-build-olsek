exports.id = 614;
exports.ids = [614];
exports.modules = {

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
    delete creds.cloudAccessData.errorCode;
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
      shortToken: data.shortToken,
      longToken: data.longToken,
      shortTokenValidTill: data.shortTokenValidTill,
      longTokenValidTill: data.longTokenValidTill
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
      shortToken: data.shortToken,
      shortTokenValidTill: data.shortTokenValidTill
    });
    await writeContent(credConfPath, JSON.stringify(creds));
  } catch (error) {
    console.log(error);
  }
};

const addDevicesGroupId = async groupId => {
  try {
    const creds = await getAuthConf();
    creds.cloudAccessData.groupId = groupId;
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

/***/ })

};
;