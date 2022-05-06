import { MailAdapter } from "../adapters/mail-adapter";
import { feedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type:string;
    comment:string;
    screenshot?:string;
}


export class SubmitFeedbackUseCase{
    constructor(
        private feedbacksRepository: feedbacksRepository,
        private mailAdapter: MailAdapter,
    ){}

    async execute(request:SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;

        await this.feedbacksRepository.create({
           
                type: type,
                comment:comment,
                screenshot:screenshot,
            
        })

        await this.mailAdapter.sendMail({
           subject: "Novo feedback",
           body: [
                `<div style="font-family: sans-serif; font-size:16px; color:#111;">`,
                `<p>Tipo do feedback: ${type}</p>`,
                `<p>Comentário: ${comment}</p>`,
                `</div>`
            ].join('\n')
        })
    }
}

