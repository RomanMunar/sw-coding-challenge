import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { fetcher } from ".";

export const getProducts = async () => {
  return await fetcher(
    "https://sw-coding-challenge.herokuapp.com/api/v1/products"
  ).then((res) => res.json());
};

export const ProductSchema = z.object({
  name: z.string(),
  imageUrl: z.string(),
  originalPrice: z.string(),
  salePrice: z.string().min(1),
  sizes: z.array(z.object({ isAvailable: z.boolean(), label: z.string() })),
});

export type Product = z.infer<typeof ProductSchema>;

export const useProductQuery = () =>
  useQuery(["products"], async () => {
    const response = await getProducts();
    return z
      .object({
        d: z.array(ProductSchema),
      })
      .parse(response);
  });
