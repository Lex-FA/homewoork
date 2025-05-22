import { FC } from "react";
import { IProduct } from "./types";
import "./productCard.css";
import { increaseBtn } from "../functionBtn/increaseBtn";
import { IoMdStar } from "react-icons/io";

const ProductCard: FC<IProduct> = ({
   img,
   rate,
   title,
   price,
   oldPrice,
   id,
}) => {
   return (
      <div className="productCard">
         <div className="productCardImg">
            <img src={img} alt={title} />
         </div>
         <div className="productCardDescription">
            <p className="productCardTitle">{title}</p>
            <div className="productCardPrices">
               <p className="productCardPrice">{price.toLocaleString()} ₽</p>
               {oldPrice ? (
                  <p className="productCardOldPrice">{oldPrice.toLocaleString()} ₽</p>
               ) : null}
            </div>
            <div className="productCardRate">
               <IoMdStar className="rateIcon" />
               <p className="productCardRateNumber">{rate}</p>
            </div>

            <button
               className="productCardBuyButton"
               onClick={() => {
                  increaseBtn({ img, id, title, price });
               }}
            >
               Купить
            </button>
         </div>
      </div>
   );
};
export default ProductCard;
