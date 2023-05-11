"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const pino = require('pino');
const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        },
        messageFormat: '{levelLabel} - {pid} - url:{req.url}'
    }
});
exports.logger = logger;
