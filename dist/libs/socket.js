"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIO = exports.initIO = void 0;
/* eslint-disable */
const socket_io_1 = require("socket.io");
const AppError_1 = __importDefault(require("../errors/AppError"));
let io;
const initIO = (httpServer) => {
    io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: process.env.FRONTEND_URL,
            credentials: true // permitir credenciais (cookies, cabeçalhos de autenticação, etc.)
        }
    });
    // io.on("connection", socket => {
    //   socket.on("joinChatBox", (ticketId: string) => {
    //     socket.join(ticketId);
    //   });
    //   socket.on("joinNotification", () => {
    //     socket.join("notification");
    //   });
    //   socket.on("joinTickets", (status: string) => {
    //     socket.join(status);
    //   });
    //   socket.on("joinMessagesInternas", (idUser: number) => {
    //     socket.join(idUser);
    //   });
    //   socket.on("disconnect", () => {});
    // });
    return io;
};
exports.initIO = initIO;
const getIO = () => {
    if (!io) {
        throw new AppError_1.default("Socket IO not initialized");
    }
    return io;
};
exports.getIO = getIO;
