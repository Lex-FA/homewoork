import { deleteBtn } from "./deleteBtn";
import { ICartProduct } from "../Components/types";

export const reduceBtn = ({ id }: Pick<ICartProduct, "id">) => {
  const cart: ICartProduct[] = JSON.parse(localStorage.getItem("cart") ?? "[]");
  const product = cart.find((e) => e.id === id);
  if (product) {
    product.count -= 1;
    localStorage.setItem("cart", JSON.stringify([...cart]));
    if (product.count === 0) {
      deleteBtn({ id });
    }
  }
  window.dispatchEvent(new Event("cart"));
};
