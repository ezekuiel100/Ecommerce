import RadioInput from "../RadioInput";

function Price({ setPrice, price }) {
  function handlePrice(e) {
    setPrice(e.target.id);
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
        id={"$0-50"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
      <RadioInput
        text={"$100-150"}
        name={"price"}
        id={"$100-150"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
      <RadioInput
        text={"Mais de $150"}
        name={"price"}
        id={"Mais de $150"}
        setPrice={setPrice}
        handleClick={handlePrice}
        selected={price}
      />
    </div>
  );
}

export default Price;
