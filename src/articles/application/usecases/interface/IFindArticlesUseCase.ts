import {IArticle} from "../../../domain/entity/Article";
import {IRead} from "../../../domain/repository/IRead";

export interface IFindArticlesUseCase extends IRead<IArticle> {
}