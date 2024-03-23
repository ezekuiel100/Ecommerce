import Card from "./Card";

function Products({ data }) {
  return (
    <div className="pl-12 ">
      {data.map((data) => {
        return (
          <Card
            key={data.title}
            img={data.img}
            title={data.title}
            price={data.newPrice}
            reviews={data.reviews}
          />
        );
      })}
    </div>
  );
}

export default Products;
