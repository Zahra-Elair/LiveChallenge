import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}

export const useProducts = () => {
  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data.products;
  };
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
