import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import React from "react";
import { GlobalStyles } from "../components/global-styles";
import { useApollo } from "../lib/apollo-client";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const clinet = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={clinet}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ApolloProvider>
  );
};

export default App;
