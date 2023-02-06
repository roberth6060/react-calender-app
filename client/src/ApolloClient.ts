import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // uri: "/graphql",
  uri: "https://calendar-web-app.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
