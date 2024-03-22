import RadioInput from "../RadioInput";

function Category() {
  return (
    <div className="mr-6 my-8">
      <h2 className="text-xl">Categoria</h2>
      <RadioInput text={"Todos"} name={"category"} />
      <RadioInput text={"Tênis"} name={"category"} />
      <RadioInput text={"Sapatilhas"} name={"category"} />
      <RadioInput text={"Sandalhas"} name={"category"} />
      <RadioInput text={"Salto"} name={"category"} />
    </div>
  );
}

export default Category;
