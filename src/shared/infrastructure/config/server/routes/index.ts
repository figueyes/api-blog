import {Router} from "express";
import {VersionHealth} from "../../../../../version";
import {IController} from "../../../controller/IController";
import {FindArticleByIdController} from "../../../../../articles/infrastructure/controller/FindArticleByIdController";
import {IFindArticlesUseCase} from "../../../../../articles/application/usecases/interface/IFindArticlesUseCase";
import {FindByArticleIdUseCase} from "../../../../../articles/application/usecases/FindByArticleIdUseCase";
import {IArticleRepository} from "../../../../../articles/domain/repository/IArticleRepository";
import {IArticle} from "../../../../../articles/domain/entity/Article";
import {ArticleRepository} from "../../../../../articles/infrastructure/persistence/mongo/ArticleRepository";
import {ICreateArticleUseCase} from "../../../../../articles/application/usecases/interface/ICreateArticleUseCase";
import {CreateArticleUseCase} from "../../../../../articles/application/usecases/CreateArticleUseCase";
import {CreateArticleController} from "../../../../../articles/infrastructure/controller/CreateArticleController";
import {UpdateArticleUseCase} from "../../../../../articles/application/usecases/UpdateArticleUseCase";
import {IUpdateArticleUseCase} from "../../../../../articles/application/usecases/interface/IUpdateArticleUseCase";
import {UpdateArticleController} from "../../../../../articles/infrastructure/controller/UpdateArticleController";
import {FindArticlesUseCase} from "../../../../../articles/application/usecases/FindArticlesUseCase";
import {FindArticlesController} from "../../../../../articles/infrastructure/controller/FindArticlesController";

export class Routes {
    public router: Router;
    private versionHealth: VersionHealth;
    private readonly repository: IArticleRepository<IArticle>;
    private readonly findArticleUseCase: IFindArticlesUseCase;
    private readonly findArticlesUseCase: IFindArticlesUseCase;
    private readonly createArticleUseCase : ICreateArticleUseCase;
    private readonly updateArticleUseCase: IUpdateArticleUseCase;
    private findArticleController: IController;
    private findArticlesController: IController;
    private createArticleController : IController;
    private updateArticleController: IController;

    constructor() {
        this.router = Router();
        this.versionHealth = new VersionHealth();

        this.repository = new ArticleRepository();

        this.findArticleUseCase = new FindByArticleIdUseCase(this.repository);
        this.findArticlesUseCase = new FindArticlesUseCase(this.repository);
        this.createArticleUseCase = new CreateArticleUseCase(this.repository);
        this.updateArticleUseCase = new UpdateArticleUseCase(this.repository);

        this.findArticleController = new FindArticleByIdController(this.findArticleUseCase);
        this.findArticlesController = new FindArticlesController(this.findArticlesUseCase);
        this.createArticleController = new CreateArticleController(this.createArticleUseCase);
        this.updateArticleController = new UpdateArticleController(this.updateArticleUseCase);
    }

    public run(): Router {
        this.router.get( "/version", this.versionHealth.run);
        this.router.get( "/articles", this.findArticlesController.run);
        this.router.get( "/articles/:id", this.findArticleController.run);
        this.router.post("/articles", this.createArticleController.run);
        this.router.put( "/articles/:id", this.updateArticleController.run)
        return this.router
    }
}
