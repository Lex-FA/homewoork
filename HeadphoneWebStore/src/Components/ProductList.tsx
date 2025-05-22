import { FC } from "react";
import "./body.css";
import { products } from "./products";
import ProductCard from "./productCard";
import { HeadPhoneType } from "./types";

interface IProductList {
   productType: HeadPhoneType;
}

const ProductList: FC<IProductList> = ({ productType }) => {
   return (
      <div className="productListItem">
         {products
            .filter(({ type }) => type === productType)
            .map(({ img, oldPrice, price, type, rate, title, id }) => (
               <ProductCard
                  key={`productCard${id}`}
                  id={id}
                  img={img}
                  title={title}
                  price={price}
                  rate={rate}
                  type={type}
                  oldPrice={oldPrice}
                  
               />
            ))}
      </div>
   );
};
export default ProductList;
