import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as dotenv from "dotenv";
import mongoose from "mongoose";

//Resolvers
import { EventResolver } from "./resolvers/event.resolvers";

const executeMain = async () => {
  dotenv.config();

  const schema = await buildSchema({
    resolvers: [EventResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const MONGO_URI = process.env.MANGODB_URI;
  if (!MONGO_URI) {
    throw new Error("You must provide a MongoLab URI");
  }

  mongoose.Promise = global.Promise;
  mongoose.connect(MONGO_URI);
  mongoose.connection
    .once("open", () => console.log("Connected to MongoLab instance."))
    .on("error", (error) =>
      console.log("Error connecting to MongoLab:", error)
    );

  const server = new ApolloServer({ schema: schema });
  const expressServer: Express.Application = Express();

  server.applyMiddleware({ app: expressServer });

  expressServer.listen({ port: process.env.PORT }, () =>
    console.log(
      `Server ready and listening at ==> http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
  );
};

executeMain().catch((error) => {
  console.log(error, "error");
});
