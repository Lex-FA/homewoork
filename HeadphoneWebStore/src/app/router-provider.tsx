import { FC, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CART_ROUTE, CATALOG_ROUTE} from "../Components/routes";
import CatalogPage from "../Components/catalogPage";
import Cart from "../Components/cartList";

const AppRouterProvider: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route path={CATALOG_ROUTE} element={<CatalogPage />} />
      <Route path={CART_ROUTE} element={<Cart />} />
    </Routes>
  );
};

export default AppRouterProvider;
