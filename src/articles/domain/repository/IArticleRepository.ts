import {IRead} from "./IRead";
import {IWrite} from "./IWrite";
import {IUpdate} from "./IUpdate";

export interface IArticleRepository<IArticle> extends IRead<IArticle>,
    IWrite<IArticle>,
    IUpdate<IArticle> {}