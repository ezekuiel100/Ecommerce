import Category from "./Category";
import Price from "./Price";

function Sidebar({ setCategory, setPrice }) {
  return (
    <div className="w-72 h-screen border-r-2 border-gray-200  ">
      <div className="flex p-6 border-b-2 border-gray ">
        <span className="text-2xl block mx-auto">🛒</span>
      </div>
      <div className="flex flex-col items-center ">
        <Category setCategory={setCategory} />
        <Price setPrice={setPrice} />
      </div>
    </div>
  );
}

export default Sidebar;
