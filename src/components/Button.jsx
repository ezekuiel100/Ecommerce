function Button({ text, handleClick, active }) {
  return (
    <button
      className={`py-2 px-6 border border-gray-2 mr-2 rounded-md ${
        active === text ? "bg-blue-200" : ""
      }`}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </button>
  );
}

export default Button;
