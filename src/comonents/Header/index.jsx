import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../store/cartStore";
import cls from "./Header.module.scss";

export default function Header() {
  const lang = useCartStore(useShallow((state) => state.lang));
  const setLang = useCartStore(useShallow((state) => state.setLang));

  const handleChange = (e) => {
    setLang(e.target.value);
  };

  console.log("rendering header"); // log

  return (
    <div className={cls.header}>
      <select onChange={handleChange} value={lang} className={cls.lang}>
        <option value="en">en</option>
        <option value="ru">ru</option>
        <option value="uz">uz</option>
      </select>
    </div>
  );
}
