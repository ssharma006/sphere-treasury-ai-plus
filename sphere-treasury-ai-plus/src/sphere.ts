import { Sphere } from "@unicitylabs/sphere-sdk";
import { createBrowserProviders } from "@unicitylabs/sphere-sdk/impl/browser";

export const sphere = Sphere.init({
  ...createBrowserProviders({
    network: "testnet2",
  }),
  network: "testnet2",
  autoGenerate: true,
});