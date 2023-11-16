import "../styles/globals.css";
import React from "react";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import { LayoutContextProvider } from "../LayoutContext";
import { Layout } from "../components/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({
  Component,
  pageProps,
}: AppProps<{ pageContext?: any }>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutContextProvider>
    </QueryClientProvider>
  );
}
