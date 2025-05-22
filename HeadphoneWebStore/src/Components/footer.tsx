import { FC } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { CART_ROUTE, CATALOG_ROUTE } from "./routes"
import { SlSocialVkontakte } from "react-icons/sl"
import { VscGlobe } from "react-icons/vsc"
import { FaWhatsapp } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa"

const Footer: FC = () => {
   return (
      <section className="containerFooter">
         <div className="footerContent">
            <Link to={CATALOG_ROUTE}>
               <p className="footerLogo">QPICK</p>
            </Link>
            <nav className="footerNav">
               <Link to={""} className="footerLink">
                  Избранное
               </Link>
               <Link to={CART_ROUTE} className="footerLink">
                  Корзина
               </Link>
               <Link to={""} className="footerLink">
                  Контакты
               </Link>
            </nav>
            <div className="conditionAndLanguages">
               <Link to={""} className="condition">
                  Условия сервиса
               </Link>
               <div className={"languages"}>
                  <VscGlobe className="globe-icon" />
                  <button className="languagesButton">Рус</button>
                  <button className="languagesButton">Eng</button>
               </div>
            </div>
            <div className="footerSocial">
               <div className="footerSocialLink">
                  <Link
                     to="https://vk.com/">
                     <SlSocialVkontakte className="footerSocialIcon" />
                  </Link>
                  <Link
                     to="https://t.me/">
                     <FaTelegram className="footerSocialIcon" />
                  </Link>
                  <Link
                     to="https://api.whatsapp.com/">
                     <FaWhatsapp className="footerSocialIcon" />
                  </Link>
               </div>
               <div className="copyright">Все права защищены &copy;</div>
            </div>
         </div>
      </section>
   );
};

export default Footer;
