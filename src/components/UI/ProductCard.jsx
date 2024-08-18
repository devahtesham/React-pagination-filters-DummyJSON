/* eslint-disable react/prop-types */

const ProductCard = ({product}) => {
    return (
        <>
            <div className="card">
                <img src={product.thumbnail} className="card-img-top w-100" alt="..." style={{height:'300px'}} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="text-end">{product.price}</p>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard