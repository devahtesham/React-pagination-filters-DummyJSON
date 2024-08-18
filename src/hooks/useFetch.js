import { useEffect, useState } from "react";


const useFetch = (url, options) => {
    const [posts, setPosts] = useState({});
    const [error, setError] = useState("")

    const fetchPosts = async (url,options) => {
        try {
            const response = await fetch(url, options ? options : {});
            const data = await response.json();
            setPosts(data)

        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        fetchPosts(url,options)
    }, [url])



    return {
        posts, error
    }

}

export default useFetch