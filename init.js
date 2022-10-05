const axios = require("axios");
const config = require("./ecosystem.config.js");
const HOST = "127.0.0.1";
const PORT = config.apps[0].env.NODE_ENV === "production" ? 80 : 3000;

const initStreams = async () => {
  try {
    await axios.get(`http://${HOST}:${PORT}/api/init`);
  } catch (error) {
    console.log(error);
    setTimeout(initStreams, 3000);
  }
};

initStreams();
