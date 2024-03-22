// eslint-disable-next-line react/prop-types
function RadioInput({ text, name }) {
  return (
    <label className="flex gap-1 items-center mt-2">
      <input type="radio" name={name}></input>
      <span>{text}</span>
    </label>
  );
}

export default RadioInput;
