const express = require("express");
require("./db/mongoose");
const userRouter = require("./Router/user");
const profileRouter = require("./Router/profile");
const cors = require("cors");
const app = express();

app.use(express.json());

//app.use(cors());

let allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Method", "*");
  next();
};
app.use(allowCrossDomain);

const { createProxyMiddleware } = require("http-proxy-middleware");
app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:8080/", //original url
    changeOrigin: true,
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["Access-Control-Allow-Origin"] = "*";
    },
  })
);

app.use(userRouter);
app.use(profileRouter);

module.exports = app;
