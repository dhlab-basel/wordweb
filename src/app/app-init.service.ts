import {Injectable} from "@angular/core";
import {KnoraService} from "./services/knora.service";
import {mergeMap} from "rxjs/operators";
import {forkJoin} from "rxjs";
import {ListService} from "./services/list.service";
import {GravsearchBuilderService} from "./services/gravsearch-builder.service";

export interface IAppConfig {

  env: {
    name: string;
  };
  ontologyIRI: string;
  apiURL: string;
  externalApiURL: string;
  iiifURL: string;
  appURL: string;
  appName: string;
  localData: string;
  pagingLimit: number;
  startComponent: string;
}

@Injectable({
    providedIn: "root"
})
export class AppInitService {

  static settings: IAppConfig;

  constructor(
      private knoraService: KnoraService,
      private listService: ListService,
      private gsBuilder: GravsearchBuilderService) {
  }

  Init() {

    return new Promise<void>((resolve, reject) => {
      console.log("AppInitService.init() called");
      // do your initialisation stuff here

      AppInitService.settings = window["tempConfigStorage"] as IAppConfig;

      this.gsBuilder.apiURL = AppInitService.settings.apiURL;

      this.knoraService.knoraConnection = AppInitService.settings.apiURL;

      this.knoraService.login("root@example.com", "test")
          .pipe(
              mergeMap(() => this.knoraService.getAllLists()),
              mergeMap((lists: Array<any>) => forkJoin<any>(lists.map(list => this.knoraService.getList(list.id))))
          )
          .subscribe((fullList: Array<any>) => {
            console.log(fullList);
            fullList.map(list => this.listService.setAllLists = list);

            console.log("AppInitService: finished");
            resolve();
          }, (error) => console.error("Failed to connect", error));
    });
  }
}
