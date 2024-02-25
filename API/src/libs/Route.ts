import { makeId } from "./Util";


export class Route {
    Id: string;
    name: string|null;
    path: string;
    method: string;
    auth: boolean;

    constructor(name: string|null, path: string|null, method: string|null, auth: boolean|null) {
        this.Id = makeId(5);
        this.name = name;
        this.path = path || '';
        this.method = method || 'GET';
        this.auth = auth || false;
    }

    setPath(path: string) { this.path = path; }
    setMethod(method: string) { this.method = method; }
    setAuth(auth: boolean) { this.auth = auth; }

    getPath() { return this.path; }
    getMethod() { return this.method; }
    getAuth() { return this.auth; }
    getName() { return this.name; }
    getId() { return this.Id; }

    toString() {
        return `Route: ${this.name} | Path: ${this.path} | Method: ${this.method} | Auth: ${this.auth}`;
    }

    equals(route: Route) {
        return this.Id === route.Id && this.name === route.name && this.path === route.path && this.method === route.method && this.auth === route.auth;
    }

    toJSON() {
        return {
            Id: this.Id,
            name: this.name,
            path: this.path,
            method: this.method,
            auth: this.auth
        }
    }

    static fromJSON(json: any): Route {
        const route = new Route(json.name, json.path, json.method, json.auth);
        route.Id = json.Id;
        return route;
    }

}