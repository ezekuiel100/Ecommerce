import { createContext, useState } from "react";

import Nav from "./components/Nav";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import data from "./db/data";

export const Context = createContext({});

function App() {
  const [category, setCategory] = useState("Todos");
  const [price, setPrice] = useState("Todos");
  const [search, setSearch] = useState("");
  const [company, setCompany] = useState("Todos");

  let filtered = data;

  if (category !== "Todos") {
    filtered = data.filter((product) => product.category === category);
  }
  if (category !== "Todos") {
    filtered = data.filter((product) => product.category === category);
  }

  filtered = filtered.filter((product) => {
    if (price == "Todos") {
      return true;
    }
    if (price === "50") {
      return product.newPrice <= 50;
    } else if (price === "100") {
      return product.newPrice >= 100 && product.newPrice <= 150;
    } else if (price === "150") {
      return product.newPrice >= 150;
    }
  });

  if (search) {
    filtered = data.filter((data) => data.title.toLowerCase().includes(search));
  }

  if (company != "Todos") {
    filtered = data.filter((data) => data.company === company);
  }

  return (
    <>
      <Context.Provider
        value={{
          price,
          category,
          setPrice,
          setCategory,
          search,
          setSearch,
          setCompany,
          company,
        }}
      >
        <div className="flex">
          <Sidebar />
          <div className="w-full h-screen ">
            <Nav />
            <div>
              <Recommended />
              <Products data={filtered} />
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
