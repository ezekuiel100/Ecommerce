import Category from "./Category";
import Price from "./Price";

function Sidebar() {
  return (
    <div className="w-64  h-screen">
      Sidebar
      <Category />
      <Price />
    </div>
  );
}

export default Sidebar;
