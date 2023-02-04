import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import mongoose, { connect, ConnectOptions } from "mongoose";
import * as dotenv from "dotenv";

//Resolvers
import { EventResolver } from "./resolvers/event.resolvers";

const executeMain = async () => {
  dotenv.config();

  const schema = await buildSchema({
    resolvers: [EventResolver],
    emitSchemaFile: true,
    validate: false,
  });

  mongoose.set("strictQuery", false);

  const mongooseConnect = await connect(`${process.env.MANGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  await mongooseConnect.connection;

  const server = new ApolloServer({ schema: schema });
  const expressServer: Express.Application = Express();

  server.start().then((_) => {
    server.applyMiddleware({ app: expressServer });

    expressServer.listen({ port: process.env.PORT }, () =>
      console.log(
        `Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`
      )
    );
  });
};

executeMain().catch((error) => {
  console.log(error, "error");
});
