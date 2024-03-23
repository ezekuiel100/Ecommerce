import { AiFillStar } from "react-icons/ai";
import { IoBagSharp } from "react-icons/io5";

function Card({ img, title, price, reviews }) {
  return (
    <div className="p-4 border border-2-gray inline-block m-4">
      <img src={img} className="w-64 h-56 mb-4"></img>
      <h3 className="font-bold text-xl mb-4">{title}</h3>
      <div className="flex gap-1 items-center mb-4">
        <AiFillStar className="text-yellow-500 text-xl" />
        <AiFillStar className="text-yellow-500 text-xl" />
        <AiFillStar className="text-yellow-500 text-xl" />
        <AiFillStar className="text-yellow-500 text-xl" />
        <span className=" text-xl  ">{reviews}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-xl ">${price}</span>
        <IoBagSharp className="text-gray-600 text-xl" />
      </div>
    </div>
  );
}

export default Card;
