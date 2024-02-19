import axios from "axios";
import { useEffect, useState } from "react";
import config from "../config/config";

const useGetData = (apiUrl, searchTerm = "") => {
  const [datas, setDatas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(apiUrl, searchTerm);
  }, [apiUrl, searchTerm]);

  const fetchData = async () => {
    try {
      const response = await axios.get(config.domain + apiUrl, {
        params: {
          q: searchTerm,
        },
      });
      console.info(response.data.products);
      setDatas(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { datas, loading, error };
};

export default useGetData;
