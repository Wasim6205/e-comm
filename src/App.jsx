import { useContext } from "react"
import Navbar from "./components/Navbar"
import { MyStore } from "./context/MyContext"
import CartScreen from "./components/CartScreen"
import ProductCard from "./components/ProductCard"

const App = () => {
  const {toggle,productsData,cartItems} = useContext(MyStore)
  return (
    <div>
      <Navbar />
      {
        toggle ? <CartScreen /> : productsData.length > 0 ? <div className="px-10 py-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productsData.map((product) => {
            let isInCart = cartItems.find((cartItem) => cartItem.id === product.id)

            return <ProductCard key={product.id} product={product} quantity={isInCart?.quantity} />
          })}
        </div> : <p>No Products Found</p>
      }
    </div>
  )
}

export default App