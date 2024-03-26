import { useContext } from "react";
import RadioInput from "../RadioInput";
import { Context } from "../../App";

function Price() {
  const { setPrice, price, setCompany, setSearch } = useContext(Context);

  function handlePrice(e) {
    setPrice(e.target.id);
    setCompany("Todos");
    setSearch("");
  }

  return (
    <div>
      <h2 className="text-xl">Preço</h2>
      <RadioInput
        text={"Todos"}
        name={"price"}
        id={"Todos"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
      <RadioInput
        text={"$0-50"}
        name={"price"}
        id={"50"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
      <RadioInput
        text={"$100-150"}
        name={"price"}
        id={"100"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
      <RadioInput
        text={"Mais de $150"}
        name={"price"}
        id={"150"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
    </div>
  );
}

export default Price;
