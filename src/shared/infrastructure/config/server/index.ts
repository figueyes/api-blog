import express, {Application} from "express";
import dotenv from 'dotenv'
import {Routes} from "./routes";
import {Mongo} from "../mongoose";
import bodyParser from "body-parser";
import cors from 'cors';

dotenv.config

class App {
    public server: Application;
    public routes: Routes;
    public database: Mongo;
    private BASE_PATH: string = process.env.BASE_PATH || '/'

    constructor() {
        this.server = express();
        this.routes = new Routes();
        this.database = new Mongo();
        this.config();
    }

    private config(): void {
        this.server.use(bodyParser.json());
        this.server.use(cors())
        this.server.use(this.BASE_PATH, this.routes.go());
        this.database.connection();
    }
}

export default new App().server