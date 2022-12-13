import { useState } from "react";

export const API_BASE = process.env.REACT_APP_API_BASE;

export const useFetchApi = (resource = "", method = "GET", options = {}) => {
    const [isFetching, setIsFetching] = useState(false);
    const [data, setData] = useState(null);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const defaultHeaders = {
        "Content-Type": "application/json",
    };

    const startFetch = async (body) => {
        setIsFetching(true);
        setError(null);
        setData(null);
        setResponse(null);

        try {
            const url = `${API_BASE}${resource}`;

            const response = await fetch(url, {
                headers: {
                    ...defaultHeaders,
                },
                ...options,
                body,
                method,
            });

            const res = await response.json();

            setResponse(res);

            if (!response.ok) {
                throw res;
            }

            setData(res);
        } catch (err) {
            setError(err);
        } finally {
            setIsFetching(false);
        }
    };

    return {
        isFetching,
        data,
        response,
        error,
        startFetch,
    };
};
