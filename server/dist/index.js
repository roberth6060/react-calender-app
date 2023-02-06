"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const mongoose_1 = __importStar(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
const path_1 = __importDefault(require("path"));
//Resolvers
const event_resolvers_1 = require("./resolvers/event.resolvers");
const executeMain = async () => {
    dotenv.config();
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [event_resolvers_1.EventResolver],
        emitSchemaFile: true,
        validate: false,
    });
    mongoose_1.default.set("strictQuery", false);
    const mongooseConnect = await (0, mongoose_1.connect)(`${process.env.MANGODB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    await mongooseConnect.connection;
    const server = new apollo_server_express_1.ApolloServer({ schema: schema });
    const expressServer = (0, express_1.default)();
    server.start().then((_) => {
        server.applyMiddleware({ app: expressServer });
        //set static folder:
        expressServer.use(express_1.default.static("public"));
        expressServer.get("*", (req, res) => {
            res.sendFile(path_1.default.resolve(__dirname, "public", "index.html"));
        });
        expressServer.listen({ port: process.env.PORT }, () => console.log(`Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`));
    });
};
executeMain().catch((error) => {
    console.log(error, "error");
});
//# sourceMappingURL=index.js.map