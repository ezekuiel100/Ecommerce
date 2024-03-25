import Category from "./Category";
import Price from "./Price";

function Sidebar({
  setCategory,
  setPrice,
  price,
  category,
  setCompany,
  setSearch,
}) {
  return (
    <div className="w-72 h-screen border-r-2 border-gray-200  ">
      <div className="flex p-6 border-b-2 border-gray ">
        <span className="text-2xl block mx-auto">🛒</span>
      </div>
      <div className="flex flex-col items-center ">
        <Category
          setCategory={setCategory}
          category={category}
          setCompany={setCompany}
          setSearch={setSearch}
        />
        <Price
          setPrice={setPrice}
          price={price}
          setCompany={setCompany}
          setSearch={setSearch}
        />
      </div>
    </div>
  );
}

export default Sidebar;
