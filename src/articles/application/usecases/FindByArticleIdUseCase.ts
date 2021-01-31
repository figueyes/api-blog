import {IFindArticlesUseCase} from "./interface/IFindArticlesUseCase";
import {IArticle} from "../../domain/entity/Article";
import {IArticleRepository} from "../../domain/repository/IArticleRepository";


export class FindByArticleIdUseCase implements IFindArticlesUseCase {
    private repository: IArticleRepository<IArticle>;

    constructor(repository: IArticleRepository<IArticle>) {
        this.repository = repository;
    }

    find = async (id: string): Promise<IArticle | Array<IArticle>> => {
        const article = await this.repository.find({"articleId": id})
        return article;
    }

}