import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cloueut9v04gn01t789ft3289/master",
  documents: "src/**/*.graphql",
  generates: {
    "src/types.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "types.ts",
      },
      plugins: ["typescript-operations", "typescript", "typed-document-node"],
    },
  },
};

export default config;
