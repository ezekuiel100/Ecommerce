import Category from "./Category";
import Price from "./Price";

function Sidebar() {
  return (
    <div className="w-64 h-screen border-r-2 border-gray-200">
      Sidebar
      <Category />
      <Price />
    </div>
  );
}

export default Sidebar;
