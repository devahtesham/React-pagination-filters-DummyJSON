import { createContext, useState } from "react";
import { BASE_URL } from "../global";

export const ProductContext = createContext({});

// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    let [currentPage, setCurrentPage] = useState(1)  // Start at the first page
    let [pageInfoText, setPageInfoText] = useState("")

    // constants for applying pagination
    const TOTAL_PRODUCTS = 194;  // Total number of products
    const LIMIT = 20;  // Number of products per page




    const productsPerPage = (currentPage, limit = LIMIT, totalProducts = TOTAL_PRODUCTS) => {
        // console.log('[currentPage]', currentPage);
        const skip = (currentPage - 1) * limit;  // Calculate how many products to skip
        const end = skip + limit > totalProducts ? totalProducts : skip + limit;  // Calculate the end index

        // console.log(`Displaying products ${skip + 1} to ${end} out of ${totalProducts}`);
        setPageInfoText(`Displaying products ${skip + 1} to ${end} out of ${totalProducts}`)
        // Here you would fetch or retrieve products from the array or database using skip and limit

        return {
            skip,
            limit
        }

    }

    const nextPage = () => {

        if (currentPage * LIMIT < TOTAL_PRODUCTS) {
            // currentPage++;
            setCurrentPage((prev) => {
                const nextPage = prev + 1
                getProducts("", nextPage)
                return nextPage
            })
        } else {
            console.log('You are on the last page');
        }
    }

    // Function to go to the previous page
    const previousPage = () => {
        if (currentPage > 1) {
            // currentPage--;
            setCurrentPage((prev) => {
                const previousPage = prev - 1
                getProducts("", previousPage);
                return previousPage
            })
        } else {
            console.log('You are on the first page');
        }
    }




    // get all products
    const getProducts = async (search, currentPage, sortBy) => {
        // for pagination
        const { skip, limit } = productsPerPage(currentPage ? currentPage : 1, LIMIT, TOTAL_PRODUCTS)
        setIsLoading(true)
        const query = `${search ? `/search?q=${search}&` : "?"}limit=${limit}&skip=${skip}&sortBy=${sortBy ? sortBy : "title"}`
        const url = `${BASE_URL}/products${query}`
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProducts([...data.products]);
        } catch (error) {
            setError(error)
            console.log(error);
        } finally {
            setIsLoading(false)
        }


    }




    const objToSend = {
        products,
        error,
        getProducts,
        isLoading,
        nextPage,
        previousPage,
        pageInfoText
    }

    return (
        <ProductContext.Provider value={objToSend}>{children}</ProductContext.Provider>
    )
}

export default ProductContextProvider
