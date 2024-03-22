import RadioInput from "../RadioInput";

function Price() {
  return (
    <div>
      <h2 className="text-xl">Preço</h2>
      <RadioInput text={"Todos"} name={"price"} />
      <RadioInput text={"$0-50"} name={"price"} />
      <RadioInput text={"$100-150"} name={"price"} />
      <RadioInput text={"Mais de $150"} name={"price"} />
    </div>
  );
}

export default Price;
