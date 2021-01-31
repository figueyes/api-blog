import {ICreateArticleUseCase} from "./interface/ICreateArticleUseCase";
import {IArticle} from "../../domain/entity/Article";
import {IArticleRepository} from "../../domain/repository/IArticleRepository";
import { v4 as uuid } from 'uuid';

export class CreateArticleUseCase implements ICreateArticleUseCase {
    private repository: IArticleRepository<IArticle>;

    constructor(repository: IArticleRepository<IArticle>) {
        this.repository = repository;
    }

    create= async (body: IArticle): Promise<IArticle> => {
        body.articleId = uuid();
        const created = await this.repository.create(body);
        console.log(JSON.stringify(created))
        return created;
    }

}