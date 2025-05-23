import { FC } from "react";
import CartItem from "./cartItemBtn";
import "./basket.css";
import { useCart } from "../functionBtn/useCart";
import CartTotalCost from "./CartTotalCost";

const CartList: FC = () => {
   const cart = useCart();
   const totalCost = cart.reduce(
      (acc, item) => acc + item.price * item.count,
      0,
   );

   return (
      <div className="containerCart">
         <div className="cartBlock">
            <p className="containerCartTitle">Корзина</p>
            <div className="containerCartBlock">
               {cart.length ? (
                  <div className="cartListAll">
                     {cart.map(({ img, price, id, count, title }) => (
                        <CartItem
                           count={count}
                           img={img}
                           title={title}
                           price={price}
                           id={id}
                           key={`cartList${id}`}
                        />
                     ))}
                  </div>
               ) : (
                  <div>
                     <p className="containerCartText">Ваша корзина пуста, вперёд за покупками!</p>
                  </div>
               )}
               <CartTotalCost totalCost={totalCost} />
            </div>
         </div>
      </div>
   );
};
export default CartList;
