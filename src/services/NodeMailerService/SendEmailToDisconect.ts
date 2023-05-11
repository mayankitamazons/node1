/* eslint-disable */
import { NodeMailer } from "../../libs/nodemailer";
import { logger } from "../../utils/logger";

const sendEmailDisconnect = async (whatsappId: number) => {
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
  } catch (err) {
    logger.error(err);
  }
};

export default sendEmailDisconnect;
