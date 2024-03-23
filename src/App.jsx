import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./db/data";

function App() {
  const [category, setCategory] = useState("todos");
  const [price, setPrice] = useState("todos");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
    console.log(data);
  }, []);

  return (
    <>
      <div className="flex">
        <Sidebar setCategory={setCategory} setPrice={setPrice} />
        <div className="w-full h-screen ">
          <Nav />
          <div>
            <Recommended />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
