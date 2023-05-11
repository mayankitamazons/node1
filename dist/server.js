"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const http_graceful_shutdown_1 = __importDefault(require("http-graceful-shutdown"));
const app =(require("./app"));
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const socket_1 = require("./libs/socket");
const logger_1 = require("./utils/logger");
const server = app.listen(port, () => {
  logger.info(`Server started on port: ${port}`);
});
socket_1.initIO(server);
http_graceful_shutdown_1.default(server);
