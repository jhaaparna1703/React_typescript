import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//components
import { Header } from "./components/appHeader";
import { ProductOptions } from "./components/productOptions";
import { ShoppingSection } from "./components/shoppingSection";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <ProductOptions />
      <hr className="section-division" />
      <ShoppingSection />
    </div>
  );
}

export default App;
