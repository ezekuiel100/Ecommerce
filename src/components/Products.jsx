import { AiFillStar } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";

function Products() {
  return (
    <div className="p-4 border border-2-gray w-64">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        className="w-56"
      ></img>
      <h3 className="font-bold text-lg">Nike Air Monarch IV</h3>
      <div className="flex gap-1 items-center my-1">
        <AiFillStar className="text-yellow-500" />
        <AiFillStar className="text-yellow-500" />
        <AiFillStar className="text-yellow-500" />
        <AiFillStar className="text-yellow-500" />
        <span className="ml-2">(123 reviews)</span>
      </div>

      <div className="flex justify-between items-center">
        <span>$200</span>
        <IoBagSharp className="text-gray-600" />
      </div>
    </div>
  );
}

export default Products;
