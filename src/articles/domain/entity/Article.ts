import {IComment} from "./Comment";
import {IResponse} from "./Response";

export interface IArticle {
    articleId: string
    title: string;
    author: {
        name: string;
        country: string;
    };
    subTitle: string;
    mainImage: string;
    category: string;
    body: string;
    tags: Array<string>;
    comments: Array<IComment>;
    responses: Array<IResponse>;
    estimatedReading: string;
    createdAt: Date;
    updateAt: Date;
}