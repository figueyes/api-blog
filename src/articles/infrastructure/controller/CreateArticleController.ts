import {IController} from "../../../shared/infrastructure/controller/IController";
import {Request, Response} from "express";
import {ICreateArticleUseCase} from "../../application/usecases/interface/ICreateArticleUseCase";
import httpStatus from "http-status";
import {IArticle} from "../../domain/entity/Article";

export class CreateArticleController implements IController {
    private createArticleUseCase: ICreateArticleUseCase;

    constructor(createArticleUseCase: ICreateArticleUseCase) {
        this.createArticleUseCase = createArticleUseCase;
    }
    run = async (req: Request, res: Response): Promise<void> => {
        const {body} = req;
        try {
            const article = await this.createArticleUseCase.create(body as IArticle);
            res.status(httpStatus.CREATED).send(article);
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json(e);
        }
    }

}