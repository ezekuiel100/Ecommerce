import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav() {
  return (
    <nav className="flex justify-around items-center p-5 border-b-2 border-gray-200">
      <input
        type="text"
        placeholder="Escolha um tenis"
        className="bg-gray-200 py-3 px-5 outline-none rounded-md w-56"
      ></input>
      <div className="flex">
        <a href="#">
          <AiOutlineHeart className="w-6 h-6 ml-8" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-6 h-6 ml-8" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-6 h-6 ml-8" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;