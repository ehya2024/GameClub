import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export default function useFetchData(url, axiosRequestConfig, deps) {
  
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        apiClient.get(url, {...axiosRequestConfig})
        .then(res => {
            setLoading(false);
            setData(res.data.results);
            setError(null)
        })
        .catch(err => {
            setLoading(false);
            setError(err.message);
        })
    }, deps ? [...deps] : []);

    return {error, loading, data}

}
