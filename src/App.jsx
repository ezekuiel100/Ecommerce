import { useEffect, useState } from "react";

import Nav from "./components/Nav";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./db/data";

function App() {
  const [category, setCategory] = useState("Todos");
  const [price, setPrice] = useState("Todos");
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [searchedProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 50));

      let filteredData = [...data];

      if (category !== "Todos") {
        let filtered = filteredData.filter(
          (product) => product.category === category
        );
        filteredData = [...filtered];
        setProducts(filtered);
      } else {
        setProducts(filteredData);
      }

      if (price === "$0-50") {
        let filtered = filteredData.filter((product) => product.newPrice <= 50);
        setProducts(filtered);
      }
      if (price === "$100-150") {
        let filtered = filteredData.filter(
          (product) => product.newPrice >= 100 && product.newPrice <= 150
        );

        setProducts(filtered);
      }
      if (price === "Mais de $150") {
        let filtered = filteredData.filter((product) => product.newPrice > 150);
        setProducts(filtered);
      }
    }
    fetchData();
  }, [category, price]);

  useEffect(() => {
    let query = products.filter((product) => {
      return product.title.toLowerCase().includes(search);
    });

    setSearchProducts(query);
  }, [search]);

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
            <Products
              data={searchedProducts.length > 0 ? searchedProducts : products}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
