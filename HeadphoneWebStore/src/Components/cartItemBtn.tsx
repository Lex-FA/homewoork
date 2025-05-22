import { FC } from "react";
import { ICartProduct } from "./types";
import "./cartItemBtn.css";
import { increaseBtn } from "../functionBtn/increaseBtn";
import { deleteBtn } from "../functionBtn/deleteBtn";
import { reduceBtn } from "../functionBtn/reduceBtn";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const CartItem: FC<ICartProduct> = ({ img, price, title, count, id }) => {
   return (
      <div className="cartItemCard">
         <div className="cartItem">
            <img className="cartItemImg" src={img} alt="Наушники" />
            <div className="cartItemDescription">
               <p className="cartItemTitle">{title}</p>
               <p className="cartItemPrice">{price.toLocaleString()} ₽</p>
            </div>
            <button
               className="cartItemDelete"
               onClick={() => {
                  deleteBtn({ id });
               }} >
               <RiDeleteBin2Line className="cartItemIcon" />
            </button>
            <p className="cartItemTotalPrice">
               {(price * count).toLocaleString()} ₽
            </p>
            <div className="cartItemCount">
               <button
                  className="buttonCount"
                  onClick={() => {
                     reduceBtn({ id });
                  }}
               >
                  <LuMinus className="buttonCountIcon" />
               </button>
               <p className="count">{count}</p>
               <button
                  className="buttonCount"
                  onClick={() => {
                     increaseBtn({ img, id, title, price });
                  }}
               >
                  <LuPlus className="buttonCountIcon" />
               </button>
            </div>
         </div>
      </div>
   );
};
export default CartItem;
