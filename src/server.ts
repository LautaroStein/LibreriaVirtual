import express from 'express';
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/book.resolver";

export async function startServer(){    
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({resolvers : [BookResolver]})
    });

    apolloServer.applyMiddleware({ app, path: '/graphql' })

    return app
};