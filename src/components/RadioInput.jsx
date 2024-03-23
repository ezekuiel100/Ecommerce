function RadioInput({ text, name, id, handleClick, selected }) {
  return (
    <label className="flex gap-1 items-center mt-2">
      <input
        type="radio"
        name={name}
        id={id}
        onChange={handleClick}
        checked={selected === text}
      ></input>
      <span>{text}</span>
    </label>
  );
}

export default RadioInput;
