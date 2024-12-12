import { createLazyFileRoute } from "@tanstack/react-router";
import ProductPage from "../pages/productPage";

export const Route = createLazyFileRoute("/")({
  component: ProductPage,
});
