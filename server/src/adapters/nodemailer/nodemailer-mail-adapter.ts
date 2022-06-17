import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
 host: "smtp.mailtrap.io",
 port: 2525,
 auth: {
   user: "2545de5d6c62a3",
   pass: "2cd80b4cbd4d7a"
 }
});

//Somente para fazer um novo commit

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
   await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com",
      to: 'Azenaide Fernandes <azenaidefkt@gmail.com>',
      subject,
      html:  body,        
    }); 
  }
}