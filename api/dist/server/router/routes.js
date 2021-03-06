"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_util_1 = __importDefault(require("./routes.util"));
//Middle ware that is specific to this router
class Routes {
    constructor(router) {
        this.router = router;
        this.registerRoutes = () => {
            console.log("MAIN IS: " + routes_util_1.default);
            routes_util_1.default.forEach((route) => {
                switch (route.method) {
                    case 'get':
                        this.router.get(route.url, route.handler);
                        break;
                    case 'post':
                        this.router.post(route.url, route.handler);
                        break;
                    case 'update':
                        this.router.put(route.url, route.handler);
                        break;
                    case 'delete':
                        this.router.delete(route.url, route.handler);
                        break;
                    default:
                        console.error("[SERVER: ] METHOD NOT ALLOWED");
                        break;
                }
                return this.router;
            });
        };
        this.registerPostRoutes = () => {
            console.log("MAIN IS: " + routes_util_1.default);
            routes_util_1.default.forEach((route) => {
                this.router.post(route.url, route.handler);
                return this.router;
            });
        };
        this.main = () => {
            this.registerRoutes();
            return this.router;
        };
        this.main = this.main.bind(this);
    }
}
exports.default = new Routes((0, express_1.default)()).main();
//# sourceMappingURL=routes.js.map