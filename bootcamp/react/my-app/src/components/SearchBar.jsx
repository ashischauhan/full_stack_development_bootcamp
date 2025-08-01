export default function SearchBar({ searchProduct, handleStockToggle }) {
  return (
    <form className="flex flex-col gap-4 mb-6">
      <input
        onChange={searchProduct}
        className="bg-gray-100 p-4 rounded-3xl"
        type="text"
        placeholder="Search..."
      />
      <label className="flex items-center">
        <input onClick={handleStockToggle} type="checkbox" className="mr-2" />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
