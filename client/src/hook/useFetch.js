import { useEffect, useState } from "react";
import axios from "axios";
import http from "../services/httpServices";


export function useFetch(endpoint) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await http.get(endpoint);
        setData(data);
      } catch (error) {
        setData([]);
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return { isLoading, data };
}
