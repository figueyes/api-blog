import {IFindArticlesUseCase} from "./interface/IFindArticlesUseCase";
import {IArticle} from "../../domain/entity/Article";
import {IArticleRepository} from "../../domain/repository/IArticleRepository";

export class FindArticlesUseCase implements IFindArticlesUseCase {
    private repository: IArticleRepository<IArticle>;

    constructor(repository: IArticleRepository<IArticle>) {
        this.repository = repository;
    }

    find = async (query?: unknown): Promise<Array<IArticle>> => {
        const articles = await this.repository.find(query);
        return articles as Array<IArticle>;
    }

}