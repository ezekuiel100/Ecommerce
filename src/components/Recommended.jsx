import Button from "./Button";

function Recommended({ company, setCompany, setCategory, setPrice }) {
  let active = company;

  function handleClick(e) {
    setCategory("Todos");
    setPrice("Todos");
    setCompany(e.target.textContent);
  }

  return (
    <div className="mb-12 px-8">
      <h3 className="font-bold text-2xl my-4">Recomendado</h3>
      <Button text={"Todos"} handleClick={handleClick} active={active} />
      <Button text={"Nike"} handleClick={handleClick} active={active} />
      <Button text={"Adidas"} handleClick={handleClick} active={active} />
      <Button text={"Puma"} handleClick={handleClick} active={active} />
      <Button text={"Vans"} handleClick={handleClick} active={active} />
    </div>
  );
}

export default Recommended;
