import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Footer from "./components/Footer";
// import { Header, Body, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import { useState } from "react";

import pImg1 from "./assets/images/ProductImg/jolochip.jpg";
import pImg2 from "./assets/images/ProductImg/laptop.jpg";
import pImg3 from "./assets/images/ProductImg/gopro.jpg";
import pImg4 from "./assets/images/ProductImg/TechnoPhone.jpg";
import pImg5 from "./assets/images/ProductImg/fastrackWatch.jpg";
import pImg6 from "./assets/images/ProductImg/Logitech MX Master 3S.jpg";
import pImg7 from "./assets/images/ProductImg/HyperX.jpg";
import pImg8 from "./assets/images/ProductImg/BenQMonitor.jpg";
import pImg9 from "./assets/images/ProductImg/Logitech G213 Keyboard.jpg";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [cartItems, setCartItems] = useState([]);
  //add to cart
  const addToCart = (product) => {
    for (let i = 0; i < cartItems.length; i++) {
      if (product.id === cartItems[i].id) {
        alert("Product already exists CHECK YOUR CART IDIOT...");
        return;
      }
      console.log(cartItems[i]);
    }
    const cartItem = {
      ...product,
      // quantity: quantity,
    };
    setCartItems((prevItems) => [...prevItems, cartItem]);

    console.log("Congratulations Item Added To Cart", product);
  };
  //delete from cart
  const deleteItem = (productId) => {
    const index = cartItems.findIndex((item) => item.id === productId);
    const prevItems = cartItems;
    prevItems.splice(index, 1);
    // const updatedCart = [
    //   ...cartItems.slice(0, index),
    //   ...cartItems.slice(index + 1),
    // ];
    setCartItems([...prevItems]);
  };

  const products = [
    {
      id: 1,
      title: "JOLOCHIP LAST-CHIP-CHALLENGE (PACK OF 1)",
      image: pImg1,
      rating: 4,
      price: 249,
      quantity: 1,
    },
    {
      id: 2,
      title:
        "ASUS Vivobook S15 OLED 2022, 15.6inch 39.62 cm FHD OLED, Intel Core Evo i5-12500H 12th Gen, Thin and Light Laptop (16GB/512GB SSD/Iris Xe Graphics/Windows 11/Office 2021/Black/1.8 kg) K3502ZA-L502WS",
      image: pImg2,
      rating: 4,
      price: 71990,
      quantity: 1,
    },
    {
      id: 3,
      title:
        "GoPro HERO11 Waterproof Action Camera with Front + Rear LCD Screens, 5.3K60 Ultra HD Video, Hypersmooth Resolution,1080p Live Streaming with Enduro Battery (1 Year INTL Warranty + 1 Year in Warranty)",
      image: pImg3,
      rating: 4,
      price: 44990,
      quantity: 1,
    },
    {
      id: 4,
      title:
        "Tecno Spark 10 5G (Meta Blue, 8GB RAM,256GB Storage)|16GB Expandable RAM | Ultra Clear 50MP Superior Rear Camera| Dimensity 6020 7nm Powerful 5G Processor",
      image: pImg4,
      rating: 4,
      price: 15499,
      quantity: 1,
    },
    {
      id: 5,
      title:
        "Fastrack New Limitless FS1 Smart Watch|Biggest 1.95inch Horizon Curve Display|SingleSync BT Calling v5.3|Built-in Alexa|Upto 5 Day Battery|ATS Chipset with Zero Lag|100+ Sports Modes|150+ Watchfaces",
      image: pImg5,
      rating: 4,
      price: 2495,
      quantity: 1,
    },
    {
      id: 6,
      title:
        "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-Fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome-Graphite",
      image: pImg6,
      rating: 5,
      price: 10045,
      quantity: 1,
    },
    {
      id: 7,
      title:
        "HyperX Cloud Core On-Ear Wired Gaming Headset with Mic for PC, DTS Headpone:X (Black)",
      image: pImg7,
      rating: 4,
      price: 6490,
      quantity: 1,
    },
    {
      id: 8,
      title:
        "BenQ MOBIUZ EX3415R 34inch (86cm) 21:9 VESA DisplayHDR400 Ultrawide IPS Curved Gaming Monitor with Remote-WQHD+, 1900R,144Hz,1ms MPRT,98% P3,PIP&PBP,AMD FreeSync Premium,HDMI,DP,USB 3.0Hub(Metallic Gray)",
      image: pImg8,
      rating: 4,
      price: 69990,
      quantity: 1,
    },
    {
      id: 9,
      title:
        "Logitech G213 Prodigy USB Gaming Keyboard, LIGHTSYNC RGB Backlit Keys, Spill-Resistant, Customizable Keys, Dedicated Multi-Media Keys - Black",
      image: pImg9,
      rating: 4,
      price: 4595,
      quantity: 1,
    },
  ];

  return (
    <>
      {/* Header */}
      {/* <Header /> */}
      {/* Body */}
      {/* <Body /> */}
      {/* ProductBanner */}
      {/* electronics */}
      {/* blockbusteDeals */}

      {/* Footer */}
      <BrowserRouter>
        {/* <Header cartItems={cartItems} /> */}
        <div className="app">
          <Header cartItems={cartItems} />
          <Routes>
            <Route
              index
              element={<Body products={products} addToCart={addToCart} />}
            />
            <Route
              path="ShoppingCart"
              element={
                <ShoppingCart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  deleteItem={deleteItem}
                />
              }
            />
            {/* <Route path="SignUp" element={<SignUp />} /> */}
            <Route path="SignIn" element={<SignIn />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Details" element={<Details />} />
          </Routes>
          {/* <Footer /> */}
          {/* <Routes>
            <Route path="SignIn" element={<SignIn />} />
          </Routes>
          <Routes>
            <Route path="SignUp" element={<SignUp />} />
          </Routes> */}
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
