// import products from "./helpers/products";
// import Product from "./components/Product/Product";
import RoutesApp from "./Routes/RoutesApp";

function App() {
  return (
    <div className="App">
      <RoutesApp />

      {/* {products.map((product, id) => {
        return (
          <Product
            key={id}
            shortDesc={product.shortDesc}
            description={product.description}
            imgUrl={product.imgUrl}
            category={product.category}
            productName={product.productName}
            price={product.price}
            code={product.code}
            id={id}
          ></Product>
        );
      })} */}
    </div>
  );
}

export default App;
