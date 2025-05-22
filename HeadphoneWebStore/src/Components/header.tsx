import { FC } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri"
import { FaRegHeart } from "react-icons/fa"
import { CART_ROUTE, CATALOG_ROUTE } from "./routes"
import { useCart } from "../functionBtn/useCart";

const Header: FC = () => {
   const cart = useCart();
   const cartLengthCart = cart.reduce((acc, item) => acc + item.count, 0);

   return (
      <section className="containerHeader">
         <div className="headerContent">
            <Link to={CATALOG_ROUTE}>
               <p className="headerLogo">QPICK</p>
            </Link>
            <div className="headerIcons">
               <Link to={""}>
                  <FaRegHeart className="likeIcon"  />
                  <div className="cartLengthLike"></div>
               </Link>
               <Link to={CART_ROUTE}>
                  <RiShoppingCart2Line className="cartIcon" />
                  <div className="cartLengthCart">{cartLengthCart}</div>
               </Link>
            </div>
         </div>
      </section>
   );
};

export default Header;
