import { books } from "../../const/books";
import { useStore } from "../../store/store";
import Book from "../Book";
import cls from "./Cards.module.scss";

export default function Cards() {
  const [count, setCount] = useStore("count");
  const [user, setUser] = useStore("user");

  const changeName = () => {
    console.log("changing"); // log
    setUser((oldUser) => {
      if (oldUser.name == "Bob") {
        console.log("Nureke"); // log
        return {
          name: "Nureke",
        };
      } else {
        console.log("Bob"); // log
        return {
          name: "Bob",
        };
      }
    });
  };

  console.log("rendering Cards", user); // log
  return (
    <div className={cls.container}>
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <button onClick={changeName}>
        Change Name to {user.name == "Bob" ? "Nureke" : "Bob"}
      </button>
      <p>User: {user.name}</p>
      <p>Count: {count}</p>
      <div className={cls.cards}>
        {books.map((book) => (
          <Book key={book.id} book={book} btnString={"+"} />
        ))}
      </div>
    </div>
  );
}
