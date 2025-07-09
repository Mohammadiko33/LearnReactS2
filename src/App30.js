import React, { useState } from "react";
import "./components/30.ShopingCart/App.css";
import Header from "./components/30.ShopingCart/ShopingCart-header";
import Footer from "./components/30.ShopingCart/ShopingCart-footer";
import Product from "./components/30.ShopingCart/Product";
import CartProduct from "./components/30.ShopingCart/CartProduct";

export default function App30() {

  const [products , setProducts] = useState([
        {
          id: 1,
          name: "Album 1",
          image: "./30.Assets/225image1.png",
          price: 12.99,
        },
        {
          id: 2,
          name: "Album 2",
          image: "./30.Assets/225image2.png",
          price: 14.99,
        },
        {
          id: 3,
          name: "Album 3",
          image: "./30.Assets/225image3.png",
          price: 9.99,
        },
        {
          id: 4,
          name: "Album 4",
          image: "./30.Assets/225image4.png",
          price: 19.99,
        },
        {
          id: 5,
          name: "T-shirt",
          image: "./30.Assets/225image5.png",
          price: 24.99,
        },
        {
          id: 6,
          name: "Coffee",
          image: "./30.Assets/225image6.png",
          price: 6.99,
        },
      ])
  const [cart , setCart] = useState([])
  const [total, setTotal] = useState(0);

  const addToProductHandler = id => {
    const product = products.find(product => product.id === id);
    const cartProduct = cart.find(product => product.id === id);
    
    if (cartProduct) {
      updateQuantityHandler(id, cartProduct.quantity + 1);
    } else {
      setCart(prevState => [...prevState, { ...product, quantity: 1 }]);
      setTotal(prevState => prevState + product.price);
    }
  }
  

  const removableHandler = (userID , e) => {
    const product = cart.find((product) => product.id === userID);
    setCart(prevState => prevState.filter(product => product.id !== userID));
    setTotal(prevState => prevState - (product.price * product.quantity));
  }
  

  const updateQuantityHandler = (id, quantity) => {
    if (quantity < 1 || quantity > 99) return;
  
    setCart(prevState => {
      const newCart = prevState.map(product => {
        if (product.id === id) {
          return { ...product, quantity };
        }
        return product;
      });
      
      const newTotal = newCart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
      setTotal(newTotal);
  
      return newCart;
    });
  }
  

  const removeAllProductHandler = () => {
    setCart([])
    setTotal(0);
  }

    return (
      <>
        <Header />
        <main>
          {products.map((product) => (
            <Product
              {...product}
              key={product.id}
              onAdd={addToProductHandler}
            />
          ))}
          <img
            src="./30.Assets/225Cart.png"
            alt="cart"
            className="cartIcon"
          />
          <div className="cart">
            <div className="soratHasab__header">
              <h3 className="item_title">ITEM</h3>
              <h3 className="item__price">PRICE</h3>
              <h3 className="item__quantity">QUANTITY</h3>
            </div>
            <div className="soratHasab">
              {cart.length > 0 &&
                cart.map(cartt => (
                  <CartProduct {...cartt} key={cartt.id} onRemove={removableHandler} onUpdate={updateQuantityHandler} />
                ))}
            </div>

            <div className="tatols_price">
              <h3 className="tatol">TOTAL</h3>
              <p className="price result">{total.toFixed(2)}</p>
            </div>

            <button className="purch" onClick={removeAllProductHandler}>PURCHASE</button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

