import { useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { useEffect } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  console.log("cartItems", cartItems);

  const getProductsData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity+1 }
          : cartItem,
      ),
    );
  };

  let decrementQuantity = (id) => {
    let clickedProduct = cartItems.find((elem) => elem.id === id);

    if (clickedProduct.quantity === 1) {
      let arr = cartItems.filter((val) => val.id !== id);
      setCartItems(arr);
      return;
    }

    setCartItems((prev) =>
      prev.map((val) =>
        val.id === id ? { ...val, quantity: val.quantity - 1 } : val,
      ),
    );
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MyStore.Provider
      value={{
        productsData,
        setProductsData,
        isLoading,
        toggle,
        setToggle,
        cartItems,
        setCartItems,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
