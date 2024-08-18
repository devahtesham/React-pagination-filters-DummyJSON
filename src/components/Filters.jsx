import { useContext } from 'react';
import { ProductContext } from '../context/productContext';

const Filters = () => {
    const {getProducts} = useContext(ProductContext);
    const filtersHandler = (e)=>{
        const value = e.target.value
        getProducts("","",value)
    }
    return (
        <select className="form-select" aria-label="Default select example" onChange={filtersHandler}>
            <option value="title">title</option>
            <option value="price">price</option>
        </select>

    )
}

export default Filters