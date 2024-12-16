"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const routes_1 = require("./routes/routes");
const Port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "9994";
const server = (0, fastify_1.fastify)({ logger: true });
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, routes_1.configureRoutes)(server);
        yield server.listen({ port: parseInt(Port), host: '::' });
        console.log(`Server started at ${Port}`);
    }
    catch (err) {
        console.error('Error starting server', err);
        process.exit(1);
    }
});
start();
