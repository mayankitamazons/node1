"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../utils/logger");
const sendEmailDisconnect = (whatsappId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const getWhatsapp = await Whatsapp.findOne({
        //   where: { id: whatsappId }
        // });
        // if (getWhatsapp) {
        //   var getCompany = await Company.findOne({
        //     where: { id: getWhatsapp.adminId }
        //   });
        //   if (getCompany) {
        //     var contentNodeMailer = {
        //       sentNameTo: getCompany.name,
        //       sentReceiverTo: getCompany.email,
        //       content: {
        //         nameConnection: getWhatsapp.name,
        //         nameCompany: getCompany.name
        //       },
        //       emailContent: "disconnect",
        //       email: ""
        //     };
        //     NodeMailer(contentNodeMailer); //Enviar Email
        //   }
        // }
    }
    catch (err) {
        logger_1.logger.error(err);
    }
});
exports.default = sendEmailDisconnect;
