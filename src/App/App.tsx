import { useState } from "react";

import { useProductQuery } from "../api/products";
import {
  ProductWithVariants,
  RecommendedProducts,
} from "../components/products";
import { mockProduct } from "../components/products/ProductWithVariants";
import CardLayout from "./CardLayout";

function App() {
  const [mock, setMock] = useState(true);
  const { data: products } = useProductQuery();

  const toggleMock = () => setMock((p) => !p);

  return (
    <>
      <button
        onClick={toggleMock}
        className="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-1 border-2 border-black rounded text-sm font-medium"
      >
        Toggle mock
      </button>
      <CardLayout
        leftChildren={
          <>
            {mock ? (
              <>
                <RecommendedProducts />
                <div className="w-[350px] h-[150px] rounded-[8px] bg-white" />
              </>
            ) : (
              <RecommendedProducts products={products?.d} />
            )}
          </>
        }
        rightChildren={
          <>
            {mock ? (
              <>
                <div className="w-[350px] h-[360px] bg-white rounded-[8px] py-3 px-4"></div>
                <ProductWithVariants />
              </>
            ) : (
              products?.d.map((p) => (
                <ProductWithVariants
                  key={`${p.name}${p.originalPrice}`}
                  product={p}
                />
              ))
            )}
          </>
        }
      />
    </>
  );
}

export default App;
