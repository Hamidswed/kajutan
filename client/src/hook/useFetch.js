import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/menu";

export function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(BASE_URL);
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
