import { feedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
    type:string;
    comment:string;
    screenshot?:string;
}


export class SubmitFeedbackUseCase{
    constructor(
        private feedbacksRepository: feedbacksRepository,
    ){}

    async execute(request:SubmitFeedbackUseCaseRequest){
        const {type, comment, screenshot} = request;

        await this.feedbacksRepository.create({
           
                type: type,
                comment:comment,
                screenshot:screenshot,
            
        })
    }
}

