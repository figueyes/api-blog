import {IWrite} from "../../../domain/repository/IWrite";
import {IArticle} from "../../../domain/entity/Article";

export interface ICreateArticleUseCase extends IWrite<IArticle>{

}