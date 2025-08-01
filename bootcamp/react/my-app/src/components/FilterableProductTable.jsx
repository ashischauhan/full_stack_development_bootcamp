import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import products from "../data/products.js";
import { useState } from "react";

export default function FilterableProductTable() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleStockToggle(event) {
    const element = event.target.checked;
    if (element) {
      setFilteredProducts(products.filter((product) => product.stocked));
    } else {
      setFilteredProducts(products);
    }
  }
  function searchProduct(event) {
    const element = event.target.value;
    if (element) {
      setFilteredProducts(
        products.filter((product) => {
          return (
            product.name.toLowerCase().includes(element.toLowerCase()) ||
            product.category.toLowerCase().includes(element.toLowerCase())
          );
        })
      );
    } else {
      setFilteredProducts(products);
    }
  }
  // This component can be used to filter products based on search input and stock status
  // For now, it just renders the SearchBar and ProductTable components
  return (
    <div>
      <SearchBar
        handleStockToggle={handleStockToggle}
        searchProduct={searchProduct}
      />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
