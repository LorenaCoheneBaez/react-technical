import { useState, useEffect } from "react";
import axios from "axios";
import { useProductContext } from "../context/ProductContext";

const fetchAllProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5000/items");
    return response.data;
  } catch (err) {
    throw new Error("Hubo un error al obtener los productos.");
  }
};

const useFetch = () => {
  const { setAllProducts } = useProductContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const allProducts = await fetchAllProducts();
        setAllProducts(allProducts); 
        setLoading(false);
        console.log("allProducts: ",allProducts);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [setAllProducts]);

  return { loading, error };
};

export default useFetch;
