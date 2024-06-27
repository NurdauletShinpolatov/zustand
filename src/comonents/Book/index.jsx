import { useCartStore } from "../../store/cartStore"
import cls from "./Book.module.scss"

export default function Book({ book, btnString }) {
    const { cart, addToCart, removeFromCart } = useCartStore((state) => ({...state}))

    const handleClick = () => {
        if (btnString == "+") {
            addToCart(book)
        } else{
            removeFromCart(book.id)
        }
    }

    const hideBtn = btnString == "-" ? false : !!cart.find(elem => elem.id == book.id) 

    return(
        <div key={book.id} className={cls.book}>
            <span>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
            </span>
            {!hideBtn && <button className={cls.btn} onClick={handleClick}>{btnString}</button>}
        </div>
    )
}