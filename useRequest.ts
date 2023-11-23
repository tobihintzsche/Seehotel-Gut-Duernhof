import { useQuery, UseQueryOptions } from "react-query";
import { GraphQLClient } from "graphql-request";

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

const endpoint =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cloueut9v04gn01t789ft3289/master"; // Update the endpoint to match your GraphQL server

const client = new GraphQLClient(endpoint);

export const useCustomQuery = <T, V>(
  name: string,
  graphQlDocument: DocumentNode<T, V>,
  variables?: V & Omit<UseQueryOptions<T, Error, T>, "queryKey" | "queryFn">
) => {
  return useQuery<T, Error>(name, () =>
    client.request<T>(graphQlDocument, variables)
  );
};
