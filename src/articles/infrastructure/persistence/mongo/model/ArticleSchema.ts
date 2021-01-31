import mongoose, {Document, Schema, ObjectId} from "mongoose";


;


interface IArticleSchema extends Document {
}

const ArticleSchema = new Schema(
    {
        articleId: {type: String},
        title: {type: String, required: true},
        author: {
            name: {type: String, required: true},
            country: {type: String, required: true},
        },
        subTitle: {type: String, required: true},
        mainImage: {type: String, required: true},
        category: {type: String, unique: true, required: true},
        body: {type: String, required: true},
        tags: [String],
        comments: [Schema.Types.Mixed],
        responses: [Schema.Types.Mixed],
        estimatedReading: {type: String},
        createdAt: {type: Date},
        updateAt: {type: Date},
    },
    {
        timestamps: true,
        collection: 'article'
    });

export default mongoose.model<IArticleSchema>('Article', ArticleSchema);