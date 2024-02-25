import { MCServer } from "./MCServer";


export class ServerManager {
    servers: MCServer[];
    constructor() {
        this.servers = [];
    }

    addServer(server: MCServer) {
        this.servers.push(server);
    }

    removeServer(Id: string) {
        let index = this.servers.findIndex(server => server.Id === Id);
        if (index > -1) {
            this.servers.splice(index, 1);
        }
    }

    getServer(Id: string) {
        return this.servers.find(server => server.Id === Id);
    }

    hasServer(Id: string) {
        return this.servers.some(server => server.Id === Id);
    }

    hasServerByName(name: string) {
        return this.servers.some(server => server.name === name);
    }

    hasServerBySocketKey(socketKey: string) {
        return this.servers.some(server => server.getSocketKey() === socketKey);
    }

    getServers() {
        return this.servers;
    }
}