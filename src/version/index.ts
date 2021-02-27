import httpStatus from "http-status";
import {Request, Response} from "express";
import {IController} from "../shared/infrastructure/controller/IController";
import * as packageJSON from "../../package.json";

export class VersionHealth implements IController {
    run = async (req: Request, res: Response): Promise<void> => {
        try {
            const version = {
                app: packageJSON.name,
                version: packageJSON.version,
                env: process.env.ENVIRONMENT_TYPE
            };
            res.status(httpStatus.OK).send({...version})

        } catch (error) {
            res.status(httpStatus.BAD_REQUEST).json(error)
        }
    }
}