const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/posts", {
      target: "https://kofiserver.onrender.com/api",
      changeOrigin: false,
    })
  );
};
