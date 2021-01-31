import {IUpdateArticleUseCase} from "./interface/IUpdateArticleUseCase";
import {IArticleRepository} from "../../domain/repository/IArticleRepository";
import {IArticle} from "../../domain/entity/Article";

export class UpdateArticleUseCase implements IUpdateArticleUseCase {
    private repository: IArticleRepository<IArticle>;

    constructor(repository: IArticleRepository<IArticle>) {
        this.repository = repository;
    }

    update = async (id: string, body: IArticle): Promise<IArticle> => {
        const updated = await this.repository.update({"articleId": id}, body);
        return updated;
    }
}