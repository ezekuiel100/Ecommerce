import { AiFillStar } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";

function Card() {
  return (
    <div className="p-4 border border-2-gray inline-block m-4">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        className="w-64 mb-4"
      ></img>
      <h3 className="font-bold text-xl mb-4">Nike Air Monarch IV</h3>
      <div className="flex gap-1 items-center mb-4">
        <AiFillStar className="text-yellow-500 text-xl" />
        <AiFillStar className="text-yellow-500 text-xl" />
        <AiFillStar className="text-yellow-500 text-xl" />
        <AiFillStar className="text-yellow-500 text-xl" />
        <span className=" text-xl  ">(123 reviews)</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl ">$200</span>
        <IoBagSharp className="text-gray-600 text-xl" />
      </div>
    </div>
  );
}

export default Card;
