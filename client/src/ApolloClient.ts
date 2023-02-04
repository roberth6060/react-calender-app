import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // uri: process.env.REACT_API_URL,
  uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
});