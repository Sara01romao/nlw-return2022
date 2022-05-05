import express from 'express';
import nodemailer from 'nodemailer'
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router()

const transport = nodemailer.createTransport({
    
  });


routes.post('/feedbacks', async (req, res) =>{
    const {type, comment, screenshot} = req.body;
  
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository
    )
    
    await submitFeedbackUseCase.execute({
        type: type,
        comment:comment,
        screenshot:screenshot,
    })

  
    /*   await transport.sendMail({
          from: 'Equipe Feedget <oi@feedget.com>',
          to: 'Sara <sara-romao@live.com>',
          subject: 'Novo feedback',
          html:[
              `<div style="font-family: sans-serif; font-size:16px; color:#111;">`,
              `<p>Tipo do feedback: ${type}</p>`,
              `<p>Comentário: ${comment}</p>`,
              `</div>`
          ].join('\n')
      })
   */
      return res.status(201).send();
  })
  
//1:27