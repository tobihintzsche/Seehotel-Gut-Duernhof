// path-to-generated-file.ts

import { useQuery, UseQueryOptions } from "react-query";
import { GraphQLClient } from "graphql-request";
import {
  Exact,
  GetHomePageDocument,
  GetHomePageQuery,
  GetHomePageQueryVariables,
} from "./src/homePageQuery.generated";
import { QueryKey, QueryOptions, queryOptions } from "@tanstack/react-query";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cloueut9v04gn01t789ft3289/master"; // Update the endpoint to match your GraphQL server

const client = new GraphQLClient(endpoint);

// Define the GraphQL

type UseGetQueryProps<T, V> = {
  graphQlDocument: DocumentNode<T, V>;
  variables?: V & Omit<UseQueryOptions<T, Error, T>, "queryKey" | "queryFn">;
  name: string;
};

export const useCustomQuery = <T, V>({
  graphQlDocument,
  variables,
  name,
}: UseGetQueryProps<T, V>) => {
  return useQuery<T, Error>(name, async () => {
    const response = await client.request<T>(graphQlDocument, variables);
    return response;
  });
};
