import {IController} from "../../../shared/infrastructure/controller/IController";
import {IFindArticlesUseCase} from "../../application/usecases/interface/IFindArticlesUseCase";
import {Request, Response} from "express";
import httpStatus from "http-status";

export class FindArticlesController implements IController {
    private findArticlesUseCase: IFindArticlesUseCase;

    constructor(findArticlesUseCase: IFindArticlesUseCase) {
        this.findArticlesUseCase = findArticlesUseCase;
    }

    run = async (req: Request, res: Response): Promise<void> => {
        try {
            const articles = await this.findArticlesUseCase.find();
            res.status(httpStatus.OK).send(articles);
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json(e);
        }
    }
}
