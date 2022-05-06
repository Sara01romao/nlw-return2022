import express from 'express';
import { NodemailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
export const routes = express.Router()



routes.post('/feedbacks', async (req, res) =>{
    const {type, comment, screenshot} = req.body;
  
    const prismaFeedbackRepository = new PrismaFeedbackRepository();
    const nodemailerAdapter = new NodemailerAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerAdapter
    )
    
    await submitFeedbackUseCase.execute({
        type: type,
        comment:comment,
        screenshot:screenshot,
    })

  
      return res.status(201).send();
  })
  
