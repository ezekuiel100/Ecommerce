import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Nav({ setSearch, search, setCompany, setCategory, setPrice }) {
  function handleChange(e) {
    setSearch(e.target.value);
    setCompany("Todos");
    setCategory("Todos");
    setPrice("Todos");
  }

  return (
    <nav className="flex justify-around items-center p-5 border-b-2 border-gray-200">
      <input
        type="text"
        placeholder="Escolha um tenis"
        className="bg-gray-200 py-2 px-5 outline-none rounded-md w-56"
        value={search}
        onChange={(e) => handleChange(e)}
      ></input>
      <div className="flex gap-8">
        <a href="#">
          <AiOutlineHeart className="w-6 h-6 " />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="w-6 h-6 " />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="w-6 h-6 " />
        </a>
      </div>
    </nav>
  );
}

export default Nav;
