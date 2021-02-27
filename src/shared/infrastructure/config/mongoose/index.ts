import mongoose from 'mongoose';

export class Mongo {
    private db: string;

    constructor() {
        this.db = process.env.DATABASE_MONGO_URL || '';
    }
    connection =(): void => {
        mongoose
            .connect(this.db, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                autoIndex: true,
                poolSize: 10,
            })
            .then(() => console.log(`successfully connected to: ${this.db}`))
            .catch((e) => {
                console.log(`error connecting to database. ${e}`)
            });
    };
}


