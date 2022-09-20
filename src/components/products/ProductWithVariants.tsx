import { Product } from "../../api/products";
import { formatPrice } from "../../utils";
import { TimeSlot } from "../icons";

type Props = { product?: Product };

const ProductWithVariants = (props: Props) => {
  const { name, originalPrice, salePrice, sizes } =
    props.product ?? mockProduct;
  // Used as a reference for radio items
  const identifier = name + originalPrice;

  return (
    <div className="w-[350px] bg-white rounded-[8px] py-3 px-4">
      <div className="flex gap-2 mb-2">
        <div className="h-4 w-4 rounded-full bg-black"></div>
        <p className="font-medium text-xs">Pull &amp; Bear</p>
      </div>
      <p className="font-medium mb-3">{name}</p>
      <div className="flex items-center gap-5 mb-4">
        <p className="font-medium">{formatPrice(salePrice)}</p>
        <s className="text-secondary text-xs">{formatPrice(originalPrice)}</s>
      </div>
      <form className="flex gap-2">
        {sizes.map(({ isAvailable, label }) => (
          <div key={label}>
            <input
              className="absolute invisible hidden"
              type="radio"
              id={identifier + label}
              disabled={!isAvailable}
              defaultChecked={label === "M"}
              name={identifier}
            />
            <label
              className="select-none flex items-center justify-center gap-1 w-[50px] py-2 border-[1.5px] rounded-md text-xs font-medium radio-item"
              htmlFor={identifier + label}
            >
              {!isAvailable && <TimeSlot className="align-middle h-2 w-2" />}
              {label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export const mockProduct: Product = {
  name: "AC/DC North American Tour T-Shirt",
  imageUrl: "https://loremflickr.com/150/150/fashion?98866",
  salePrice: "$25.90",
  originalPrice: "$37.99",
  sizes: [
    {
      isAvailable: true,
      label: "XS",
    },
    {
      isAvailable: true,
      label: "S",
    },
    {
      isAvailable: true,
      label: "M",
    },
    {
      isAvailable: false,
      label: "L",
    },
    {
      isAvailable: true,
      label: "XL",
    },
  ],
};

export default ProductWithVariants;
