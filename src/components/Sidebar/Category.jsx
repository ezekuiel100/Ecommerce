import RadioInput from "../RadioInput";

function Category({ setCategory }) {
  function handleCategory(e) {
    console.log(e.target.id);
    setCategory(e.target.id);
  }

  return (
    <div className="mr-6 my-8">
      <h2 className="text-xl">Categoria</h2>
      <RadioInput
        text={"Todos"}
        name={"category"}
        id={"todos"}
        handleClick={handleCategory}
      />
      <RadioInput
        text={"Tênis"}
        name={"category"}
        id={"Tenis"}
        handleClick={handleCategory}
      />
      <RadioInput
        text={"Sapatilhas"}
        name={"category"}
        id={"sapatilhas"}
        handleClick={handleCategory}
      />
      <RadioInput
        text={"Sandalhas"}
        name={"category"}
        id={"sandalhas"}
        handleClick={handleCategory}
      />
      <RadioInput
        text={"Salto"}
        name={"category"}
        id={"salto"}
        handleClick={handleCategory}
      />
    </div>
  );
}

export default Category;
