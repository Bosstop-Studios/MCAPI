import { Route } from "./Route";
import { makeId, makeUUID } from "./Util";

export class MCServer {
    Id: string;
    name: string = 'MCServer';
    //auth: string;
    socketKey: string;
    routes: Route[];
    history: any[];

    constructor(Id: string|null = '', name: string = 'MCServer', routes: Route[] = []) {
        this.Id = Id || makeUUID();
        this.socketKey = makeId(5);
        this.routes = [];
        this.history = [];
    }

    setName(name: string) { this.name = name; }
    setRoutes(routes: Route[]) { this.routes = routes; }

    getName() { return this.name; }
    getRoutes() { return this.routes; }
    getId() { return this.Id; }
    getSocketKey() { return this.socketKey; }

    hasRoute(Id: string) {
        return this.routes.some(route => route.Id === Id);
    }

    hasPath(path: string) {
        return this.routes.some(route => route.path === path);
    }

    getRoute(Id: string) {
        return this.routes.find(route => route.Id === Id);
    }

    removeRoute(Id: string) {
        let index = this.routes.findIndex(route => route.Id === Id);
        if (index > -1) {
            this.routes.splice(index, 1);
        }
    }

    addRoute(route: Route) {
        if (this.hasPath(route.path)) return;
        this.routes.push(route);
    }

}