import { books } from '../../const/books'
import Book from '../Book'
import cls from './Cards.module.scss'

export default function Cards() {
    

    return(
        <div className={cls.cards}>
            {books.map(book => (
                <Book 
                    key={book.id}
                    book={book}
                    btnString={"+"} 
                />
            ))}
        </div>
    )
}