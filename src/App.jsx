import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./db/data";

function App() {
  const [category, setCategory] = useState("Todos");
  const [price, setPrice] = useState("Todos");

  const [search, setSearch] = useState("");

  function filteredProducts() {
    let filtered;

    if (category === "Todos") {
      filtered = data;
    } else {
      filtered = data.filter((product) => product.category === category);
    }

    if (price == 50) {
      filtered = filtered.filter((product) => product.newPrice <= 50);
    } else if (price == 100) {
      filtered = filtered.filter(
        (product) => product.newPrice >= 100 && product.newPrice <= 150
      );
    } else if (price == 150) {
      filtered = filtered.filter((product) => product.newPrice >= 150);
    }

    return filtered;
  }

  return (
    <>
      <div className="flex">
        <Sidebar
          setCategory={setCategory}
          setPrice={setPrice}
          price={price}
          category={category}
        />
        <div className="w-full h-screen ">
          <Nav setSearch={setSearch} search={search} />
          <div>
            <Recommended />
            <Products data={filteredProducts()} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
