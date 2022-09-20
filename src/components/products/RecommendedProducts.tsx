import { useState } from "react";
import { Product } from "../../api/products";
import { formatPrice } from "../../utils";
import { Heart, HeartFill } from "../icons";

type Props = {
  products?: Product[];
};

const RecommendedProducts = ({ products = mockProducts }: Props) => {
  const [seeMore, setSeeMore] = useState(false);
  const displayedProducts = !seeMore ? products.slice(0, 2) : products;

  const toggleSeeMore = () => setSeeMore((p) => !p);

  return (
    <div className="relative w-[350px] bg-white rounded-[8px] py-3 px-4 overflow-hidden">
      <div className="flex justify-between mb-2">
        <h2 className="text-lg font-medium">Recommended for you</h2>
        <button
          role="button"
          onClick={toggleSeeMore}
          className="text-sm font-medium text-brand-teal"
        >
          See {seeMore ? "less" : "more"}
        </button>
      </div>
      <ul className="grid grid-cols-2 gap-5">
        {displayedProducts.map((p) => (
          <ProductItem key={p.name} {...p} />
        ))}
      </ul>
      {!seeMore && (
        <button
          onClick={toggleSeeMore}
          className="absolute left-0 bottom-0 w-full h-4 bg-gradient-to-b from-white/0 to-black/20"
        />
      )}
    </div>
  );
};

const ProductItem = (prop: Product) => {
  const [like, setLike] = useState(false);

  const toggleLike = () => setLike((p) => !p);

  return (
    <div className="w-full">
      <div className="relative h-[150px] w-full rounded-md overflow-hidden bg-secondary">
        <img className="h-[150px] w-auto" src={prop.imageUrl} />
        <div className="absolute shadow-sm top-1 right-1">
          <button onClick={toggleLike} className="bg-white rounded-sm p-1">
            {like ? (
              <HeartFill className="h-5 w-5 text-red-400" />
            ) : (
              <Heart className="h-5 w-5 " />
            )}
          </button>
        </div>
      </div>
      <p className="text-[13px] leading-5 mt-2 text-secondary mb-2">
        <span className="font-medium text-black">Apple</span> {prop.name}
      </p>
      <p className="text-sm font-medium">{formatPrice(prop.salePrice)}</p>
    </div>
  );
};

const mockProducts: Product[] = [
  {
    name: "2021 Apple 16-inch MacBook Pro",
    imageUrl: "/mb-1.pn",
    originalPrice: "$2639.90",
    salePrice: "$2639.90",
    sizes: [],
  },
  {
    name: "2019 Apple 16-inch MacBook Pro",
    imageUrl: "/mb-2.pn",
    originalPrice: "$2799.90",
    salePrice: "$2799.90",
    sizes: [],
  },
  {
    name: "2021 Apple 16-inch MacBook Pro",
    imageUrl: "/mb-1.pn",
    originalPrice: "$2639.90",
    salePrice: "$2639.90",
    sizes: [],
  },
  {
    name: "2019 Apple 16-inch MacBook Pro",
    imageUrl: "/mb-2.pn",
    originalPrice: "$2799.90",
    salePrice: "$2799.90",
    sizes: [],
  },
  {
    name: "2021 Apple 16-inch MacBook Pro",
    imageUrl: "/mb-1.pn",
    originalPrice: "$2639.90",
    salePrice: "$2639.90",
    sizes: [],
  },
  {
    name: "2019 Apple 16-inch MacBook Pro",
    imageUrl: "/mb-2.pn",
    originalPrice: "$2799.90",
    salePrice: "$2799.90",
    sizes: [],
  },
];

export default RecommendedProducts;
