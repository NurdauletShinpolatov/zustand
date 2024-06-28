import Cards from './comonents/Cards'
import Cart from './comonents/Cart'
import Header from './comonents/Header'
import './styles.scss'

function App() {

  return (
    <div className="main">
      <Header />
      <div className="grid-4-1">
        <Cards />
        <Cart />
      </div>
    </div>
  )
}

export default App
