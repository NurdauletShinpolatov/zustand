import { useCartStore } from '../../store/cartStore'
import Book from '../Book'
import cls from './Cart.module.scss'

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCartStore((state) => ({...state}))


    return(
        <div className={cls.cart}>
            <h1 className={cls.header}>Cart</h1>
            <div className={cls.elements}>
                {cart.map(elem => (
                    <Book 
                        key={elem.id}
                        book={elem}
                        btnString={"-"} 
                    />
                ))}
            </div>
        </div>
    )
}