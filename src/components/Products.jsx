import Card from "./Card";

function Products({ data }) {
  return (
    <div className="pl-12 00">
      {data.length > 0 ? (
        data.map((data) => {
          return (
            <Card
              key={data.title}
              img={data.img}
              title={data.title}
              price={data.newPrice}
              reviews={data.reviews}
              star={data.star}
            />
          );
        })
      ) : (
        <p>Nenhum item encontrado</p>
      )}
    </div>
  );
}

export default Products;
