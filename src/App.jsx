import { useContext, useEffect } from "react"
import ProductCard from "./components/UI/ProductCard"
import { ProductContext } from "./context/productContext"
import ToolBar from "./components/ToolBar";


function App() {
  const { products, getProducts, isLoading } = useContext(ProductContext);

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <section className="container">
        <section className="my-5">
          <ToolBar />
        </section>
        <div className="row">
          {
            isLoading ? <h1 className="text-center my-4">Loading ....</h1> : (
              products.map((product) => (

                <div className="col-3 mb-3" key={product.id}>
                  <ProductCard product={product} />
                </div>

              ))
            )
          }
        </div>
      </section>
    </div>

  )


}

export default App
