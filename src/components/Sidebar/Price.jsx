import RadioInput from "../RadioInput";

function Price({ setPrice }) {
  function handlePrice(e) {
    console.log(e.target.id);
    setPrice(e.target.id);
  }
  return (
    <div>
      <h2 className="text-xl">Preço</h2>
      <RadioInput
        text={"Todos"}
        name={"price"}
        id={"todos"}
        setPrice={setPrice}
        handleClick={handlePrice}
      />
      <RadioInput
        text={"$0-50"}
        name={"price"}
        id={"0-50"}
        setPrice={setPrice}
        handleClick={handlePrice}
      />
      <RadioInput
        text={"$100-150"}
        name={"price"}
        id={"100-150"}
        setPrice={setPrice}
        handleClick={handlePrice}
      />
      <RadioInput
        text={"Mais de $150"}
        name={"price"}
        id={"150"}
        setPrice={setPrice}
        handleClick={handlePrice}
      />
    </div>
  );
}

export default Price;
