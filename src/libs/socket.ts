/* eslint-disable */
import { Server as SocketIO } from "socket.io";
import { Server } from "http";
import AppError from "../errors/AppError";

let io: SocketIO;
interface MessageInternasData {
  id_user_from: number;
  id_user_to: number;
  name_user_from: string;
  name_user_to: string;
  message: string;
  type_message: string;
}
export const initIO = (httpServer: Server): SocketIO => {
  io = new SocketIO(httpServer, {
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

export const getIO = (): SocketIO => {
  if (!io) {
    throw new AppError("Socket IO not initialized");
  }
  return io;
};
