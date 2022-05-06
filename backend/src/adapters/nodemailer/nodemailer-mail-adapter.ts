import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    
  });


export class NodemailerAdapter implements MailAdapter{
    async sendMail({subject, body}:SendMailData){

        await transport.sendMail({
          from: 'Equipe Feedget <oi@feedget.com>',
          to: 'Sara <sara-romao@live.com>',
          subject,
          html:body,
      })

    }
}