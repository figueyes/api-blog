import {IUpdate} from "../../../domain/repository/IUpdate";
import {IArticle} from "../../../domain/entity/Article";

export interface IUpdateArticleUseCase extends IUpdate<IArticle> {}