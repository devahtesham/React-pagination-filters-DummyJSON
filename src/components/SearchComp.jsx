import { useContext, useRef } from "react";
import { ProductContext } from "../context/productContext";

const SearchComp = () => {
    const { getProducts } = useContext(ProductContext)
    const inputref = useRef("");

    const searchHandler = (e) => {
        e.preventDefault();

        const search = inputref.current.value
        // api Call 

        getProducts(search)
        inputref.current.value = ""
    }
    return (
        <form
            onSubmit={searchHandler}
            className='input-group shadow-lg border-5'
        >
            <input type="text" placeholder='Search ...' className="form-control" ref={inputref} />
        </form>
    )
}

export default SearchComp