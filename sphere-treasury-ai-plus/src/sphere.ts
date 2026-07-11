import { Sphere } from "@unicitylabs/sphere-sdk";
import { createBrowserProviders } from "@unicitylabs/sphere-sdk/impl/browser";

export const sphere = Sphere.init({
  appId: "sphere-treasury-ai-plus",
  providers: createBrowserProviders({
    network: "testnet",
  }),
});