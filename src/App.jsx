import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-screen ">
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;
