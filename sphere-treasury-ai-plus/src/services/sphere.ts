import { Sphere } from "@unicitylabs/sphere-sdk";
import { createBrowserProviders } from "./providers";

export async function initializeSphere() {
  console.log("Initializing Sphere...");

  try {
    const providers = createBrowserProviders({
      network: "testnet2",
    });

    const result = await Sphere.init({
      ...providers,
      network: "testnet2",
      autoGenerate: true,
    });

    console.log("Sphere Result:", result);
    console.log("Sphere Object:", result.sphere);
    console.log("Identity:", (result.sphere as any)._identity);
    console.log(
      "Direct Address:",
      (result.sphere as any)._identity.directAddress
    );

    alert("Sphere initialized!");

    return result;
  } catch (error) {
    console.error(error);

    alert("Sphere initialization failed.");

    return null;
  }
}