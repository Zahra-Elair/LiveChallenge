import { useState } from "react";
import { useProducts } from "../api/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const ProductPage = () => {
  const { data, isLoading, error } = useProducts();

  const [filter, setFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<string>("default");

  // Filter products by category
  const filteredProducts = data
    ? filter === "all"
      ? data
      : data.filter((product) => product.category === filter)
    : [];

  // Sort products by price
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="px-6 py-4 min-w-full">
      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Filter by Category */}
        <Select onValueChange={(value) => setFilter(value)} defaultValue="all">
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="smartphones">Smartphones</SelectItem>
            <SelectItem value="laptops">Laptops</SelectItem>
            <SelectItem value="fragrances">Fragrances</SelectItem>
            <SelectItem value="skincare">Skincare</SelectItem>
          </SelectContent>
        </Select>

        {/* Sort by Price */}
        <Select
          onValueChange={(value) => setSortOrder(value)}
          defaultValue="default"
        >
          <SelectTrigger className="w-full md:w-64">
            <SelectValue placeholder="Sort by price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="lowToHigh">Price: Low to High</SelectItem>
            <SelectItem value="highToLow">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="min-h-[60vh]">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-60 w-full rounded-lg" />
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">Error fetching products!</p>
        ) : sortedProducts.length === 0 ? (
          <p className="text-gray-500 text-xl text-center">
            No products found for this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }} // Zoom effect on hover
              >
                <Card className="hover:shadow-lg transition-all duration-300 rounded-lg">
                  <CardHeader className="p-0">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-48 object-contain rounded-t-lg bg-gray-100"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg font-semibold truncate">
                      {product.title}
                    </CardTitle>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-2">
                      {product.description}
                    </p>
                    <p className="text-primary font-semibold text-xl mt-2">
                      ${product.price}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
