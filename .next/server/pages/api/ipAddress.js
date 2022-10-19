(() => {
var exports = {};
exports.id = 397;
exports.ids = [397];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8432:
/***/ ((module) => {

"use strict";
module.exports = require("bcryptjs");

/***/ }),

/***/ 9344:
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ 2081:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 2398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const {
  validateToken
} = __webpack_require__(3614);

const {
  updateConf,
  getIpAddress
} = __webpack_require__(3661);

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const {
        ip
      } = req.body;
      const message = await updateConf(ip);
      return res.status(200).json({
        message
      });
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  } else if (req.method === "GET") {
    try {
      const isAuthorized = await validateToken(req.headers.authorization);

      if (!isAuthorized) {
        return res.status(401).json({
          message: "Unauthorized"
        });
      }

      const ip = await getIpAddress();
      return res.status(200).json({
        ip
      });
    } catch (error) {
      res.status(400).json({
        message: error
      });
    }
  } else {
    res.status(404).send("Not found");
  }
}

/***/ }),

/***/ 3661:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const fs = __webpack_require__(7147);

const util = __webpack_require__(3837);

const {
  execSync
} = __webpack_require__(2081);

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const ipConfPath = "/etc/network/interfaces";
const addressFilter = /address \d{1,3}\.\d{1,3}.\d{1,3}\.\d{1,3}/;

const updateConf = async newIp => {
  try {
    const ipCheck = /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.){3}(25[0-5]|(2[0-4]|1\d|[1-9]|)\d)$/;
    const isValid = ipCheck.test(newIp);
    if (!newIp.includes("192.168.") || !isValid || newIp.endsWith(".0") || newIp.endsWith(".1")) return "Invalid format";
    const content = await readFile(ipConfPath, "utf8");
    const updatedConf = content.replace(addressFilter, `address ${newIp}`);
    await writeFile(ipConfPath, updatedConf);
    execSync("shutdown -r now");
    return "Successfully updated address";
  } catch (error) {
    console.log(error);
    return "Something went wrong";
  }
};

const getIpAddress = async () => {
  try {
    const content = await readFile(ipConfPath, "utf8");
    let arr = addressFilter.exec(content);
    arr = arr[0].split(" ");
    return arr[1];
  } catch (error) {
    console.log(error);
    return "";
  }
};

getIpAddress();
module.exports = {
  updateConf,
  getIpAddress
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [614], () => (__webpack_exec__(2398)));
module.exports = __webpack_exports__;

})();