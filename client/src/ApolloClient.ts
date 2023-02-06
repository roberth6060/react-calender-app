import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  // uri: "/graphql", //uncomment this code to use graphql with your local graphql server (listens on PORT 8000)
  uri: "https://calendar-web-app.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
