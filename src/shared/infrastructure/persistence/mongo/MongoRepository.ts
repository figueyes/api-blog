import {IRead} from "../../../../articles/domain/repository/IRead";
import {IWrite} from "../../../../articles/domain/repository/IWrite";
import {IUpdate} from "../../../../articles/domain/repository/IUpdate";
import {Document, FilterQuery, Model, UpdateQuery} from "mongoose";

export class MongoRepository<T> implements IRead<T>, IWrite<T>, IUpdate<T> {
    private schema: Model<Document>

    constructor(schema: Model<Document>) {
        this.schema = schema;
    }

    create = (body: T): Promise<T> =>
        new Promise<T>((resolve, reject) => {
            this.schema.create(body,
                (e: unknown, r: Document<T>) => {
                    if (e) reject(e);
                    resolve(<T>(<unknown>r))
                });
        });

    find = (query?: FilterQuery<T>): Promise<T | Array<T>> =>
        new Promise<T>((resolve, reject) => {
            this.schema.find({...query},
                (e: unknown, r: Document[]) => {
                    if (e) reject(e);
                    resolve(<T>(<unknown>r))
                });
        });

    update = (query: FilterQuery<T>, body: UpdateQuery<T>): Promise<T> =>
        new Promise<T>((resolve, reject) => {
            this.schema.updateOne(query, body, null,
                (e: unknown, r: Document) => {
                    if (e) reject(e);
                    resolve(<T>(<unknown>r))
                });
        });


}