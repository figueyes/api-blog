import {IController} from "../../../shared/infrastructure/controller/IController";
import {IFindArticlesUseCase} from "../../application/usecases/interface/IFindArticlesUseCase";
import {Request, Response} from "express";
import httpStatus from "http-status";

export class FindArticleByIdController implements IController {
     private findArticleByIdUseCase: IFindArticlesUseCase;

     constructor(findArticleByIdUseCase: IFindArticlesUseCase) {
         this.findArticleByIdUseCase = findArticleByIdUseCase;
     }
     run = async (req: Request, res: Response): Promise<void> => {
         const {id} = req.params;
         try {
             const article = await this.findArticleByIdUseCase.find(id);
             res.status(httpStatus.OK).send(article);
         }
         catch (e){
             res.status(httpStatus.BAD_REQUEST).json(e);
         }
     }
}