import { NextApiRequest, NextApiResponse } from "next";

const domain = process.env.SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN;

export default async function available(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  async function ShopifyData(query: any) {
    const URL = `https://${domain}/api/2022-10/graphql.json`;

    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken!,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(URL, options).then((response) =>
        response.json()
      );

      return data;
    } catch (error) {
      console.log(error);
      // throw new Error("Products not fetched");
    }
  }

  async function getProduct(handle: any) {
    const query = `
    {
      product(handle: "${handle}") {
        id
        variants(first: 25) {
          edges {
            node {
              title
              id
              availableForSale
            }
          }
        }
      }
    }`;

    const response = await ShopifyData(query);

    const product = response.data.product ?? [];

    return product;
  }

  const products = await getProduct(id);

  res.status(200).json(products);
}
