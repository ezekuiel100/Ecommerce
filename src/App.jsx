import Nav from "./components/Nav";
import Products from "./components/Products";
import Recommended from "./components/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-screen ">
          <Nav />
          <div className=" p-4">
            <Recommended />
            <Products />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
