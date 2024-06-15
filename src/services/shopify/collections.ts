import { shopifyUrls } from "./urls";
import { env } from "@/config/env";

export const getCollections = async () => {
  try {
    const response = await fetch(shopifyUrls.collections.all, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    // throw new Error('Failed to fetch products');
    const data = await response.json();
    const transformedSmartCollections = data.smart_collections.map(
      (collection: any) => {
        return {
          id: collection.id,
          title: collection.title,
          handle: collection.handle,
        };
      }
    );
    return transformedSmartCollections;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCollectionProducts = async (id: string) => {
  try {
    const response = await fetch(`${shopifyUrls.collections.products(id)}`, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });
    const data = await response.json();
    return data.products
  } catch (error) {
    console.error(error);
    return null;
  }
};
