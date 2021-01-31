import {MongoRepository} from "../../../../shared/infrastructure/persistence/mongo/MongoRepository";
import {IArticle} from "../../../domain/entity/Article";
import ArticleSchema from "./model/ArticleSchema";

export class ArticleRepository extends MongoRepository<IArticle> {
    constructor() {
        super(ArticleSchema);
    }
}