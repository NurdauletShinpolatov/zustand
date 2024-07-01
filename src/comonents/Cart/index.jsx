import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../store/cartStore";
import Book from "../Book";
import cls from "./Cart.module.scss";
import { useStore } from "../../store/store";

export default function Cart() {
  const cart = useCartStore(useShallow((state) => state.cart));
  const clearCart = useCartStore(useShallow((state) => state.clearCart));
  const [count] = useStore("count");

  console.log("rendering cart"); // log

  return (
    <div className={cls.cart}>
      <h1 className={cls.header}>Cart</h1>
      <p>Count: {count}</p>
      <button onClick={clearCart} className={cls.clearBtn}>
        clearAll
      </button>
      <div className={cls.elements}>
        {cart.map((elem) => (
          <Book key={elem.id} book={elem} btnString={"-"} />
        ))}
      </div>
    </div>
  );
}
