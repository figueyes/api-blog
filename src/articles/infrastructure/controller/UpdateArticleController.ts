import {IController} from "../../../shared/infrastructure/controller/IController";
import {IUpdateArticleUseCase} from "../../application/usecases/interface/IUpdateArticleUseCase";
import {json, Request, Response} from "express";
import httpStatus from "http-status";

export class UpdateArticleController implements IController {
    private updateArticleUseCase: IUpdateArticleUseCase;

    constructor(updateArticleUseCase: IUpdateArticleUseCase) {
        this.updateArticleUseCase = updateArticleUseCase;
    }

    run = async(req: Request, res: Response): Promise<void> => {
        const {id} = req.params;
        const {body} = req;

        try {
            const updated = await this.updateArticleUseCase.update(id, body);
            res.status(httpStatus.OK).send(updated).end();
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json(e);
        }
    }
}