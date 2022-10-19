module.exports = {
  apps: [
    {
      name: "finder",
      script: "npm",
      args: "start",
      autorestart: true,
      env: {
        NODE_ENV: "development",
        SECRET: "S3cr3t!@",
        DEFAULT_PASS: "admin",
        RTSP_SERVER_HOST: "link.vcloud.ai",
        RTSP_SERVER_PORT: 10554,
        PARTIZAN_API_ADDRESS: "https://rest.partizancloud.com:8443",
      },
    },
  ],
};
