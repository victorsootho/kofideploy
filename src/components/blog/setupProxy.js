const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/blogs", {
      target: "https://kofiserver.onrender.com/api",
      changeOrigin: true,
    })
  );
};
