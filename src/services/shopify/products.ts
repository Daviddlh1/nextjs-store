import { shopifyUrls } from "./urls";
import { env } from "@/config/env";

export const getProducts = async () => {
  try {
    const response = await fetch(
      shopifyUrls.products.all,
      {
        headers: new Headers({
          "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
        }),
      }
    );

    // throw new Error('Failed to fetch products');
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return null;
  }
};
