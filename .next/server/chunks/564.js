exports.id = 564;
exports.ids = [564];
exports.modules = {

/***/ 7564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  spawn
} = __webpack_require__(2081);

const terminate = __webpack_require__(7987);

const {
  getCameraById
} = __webpack_require__(1546);

class StreamsHandler {
  constructor() {
    _defineProperty(this, "addStream", deviceInfo => {
      const isAdded = global.streams.find(stream => stream.info.id === deviceInfo.id);
      if (isAdded) return;
      const stream = new Streamer(deviceInfo);
      global.streams.push(stream);
      stream.init();
    });

    _defineProperty(this, "destroyStream", async id => {
      const stream = global.streams.find(stream => stream.info.id === id);
      if (!stream) return;
      await stream.stop();
      global.streams = global.streams.filter(stream => stream.info.id !== id);
    });

    _defineProperty(this, "updateStream", async id => {
      const stream = global.streams.find(stream => stream.info.id === id);
      if (!stream) return;
      await stream.update();
    });
  }

}

class Streamer {
  constructor(deviceInfo) {
    this.info = deviceInfo;
    this.streamProcess = null;
    this.isStopped = false;
    this.restartTimeout = null;
    this.streamUrl = null;
  }

  init() {
    this.streamUrl = this.info.url;

    if (this.info.secondUrl && !this.info.isMainStream) {
      this.streamUrl = this.info.secondUrl;
    }

    const cmd = ["-rtsp_transport", "tcp", "-i", this.streamUrl, "-threads", "1", "-loglevel", "error", "-c", "copy", "-f", "rtsp", this.info.proxyUrl];
    this.streamProcess = spawn("ffmpeg", cmd);
    this.streamProcess.stderr.on("data", data => {// console.log(`camera id ====> ${this.info.id}`);
      // console.log(data.toString("utf8"));
    });
    this.streamProcess.stdout.on("data", data => {// console.log(`camera id ====> ${this.info.id}`);
      // console.log(data.toString("utf8"));
    });
    this.streamProcess.on("close", () => {
      if (this.isStopped) return;
      this.restartTimeout = setTimeout(this.init.bind(this), 5000);
    });
  }

  async stop() {
    this.isStopped = true;
    clearTimeout(this.restartTimeout);
    await this.kill();
  }

  async update() {
    this.info = await getCameraById(this.info.id);
    await this.kill();
  }

  async kill() {
    if (!this.streamProcess?.pid) return;
    return new Promise(res => {
      terminate(this.streamProcess.pid, () => {
        this.streamProcess = null;
        res();
      });
    });
  }

}

const streamsHandler = new StreamsHandler();
module.exports = streamsHandler;

/***/ })

};
;