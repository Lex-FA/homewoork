import { FC } from "react";
import "./CartTotalCost.css";

interface ICartTotalCost {
   totalCost: number;
}

const CartTotalCost: FC<ICartTotalCost> = ({ totalCost }) => {

   return (
      <div>
         <div className="cartCostBlock">
            <div className="totalCost">
               <p className="totalCostTitle">итого</p>
               <p className="totalCostPrice">{totalCost.toLocaleString()} ₽</p>
            </div>
            <button
               className="totalCostButton">
               Перейти к оформлению
            </button>
         </div>
      </div>
   )
}

export default CartTotalCost