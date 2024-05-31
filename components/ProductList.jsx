import ProductCard from "./ProductCard";

const ProductList = ({ view }) => {
  return (
    <div className="px-4 pt-8">
      <div className={view == "grid" ? "grid grid-cols-2 gap-4" : " space-y-2"}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((product, i) => (
          <ProductCard key={i} view={view} />
        ))}
      </div>
      <br />

      <br />
    </div>
  );
};

export default ProductList;
