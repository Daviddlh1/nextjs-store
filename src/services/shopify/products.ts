import { shopifyUrls } from "./urls";
import { env } from "@/config/env";

export const getProducts = async (id?: string): Promise<ProductType[]> => {
  try {
    const apiUrl = id
      ? `${shopifyUrls.products.all}?ids=${id}`
      : shopifyUrls.products.all;

    const response = await fetch(apiUrl, {
      headers: new Headers({
        "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
      }),
    });

    // throw new Error('Failed to fetch products');
    const data = await response.json();
    const transformedProducts = data.products.map((product: any) => {
      return {
        id: product.id,
        gql_id: product.variants[0].admin_graphql_api_id,
        title: product.title,
        description: product.body_html,
        price: product.variants[0].price,
        image: product.image.src,
        quantity: product.variants[0].inventory_quantity,
        handle: product.handle,
        tags: product.tags,
      };
    });
    return transformedProducts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: new Headers({
      "X-Shopify-Access-Token": env.SHOPIFY_TOKEN,
    }),
    cache: "force-cache",
    next: {
      tags: ["main-products"],
    },
  });
  const { products } = await response.json();
  return products;
};
