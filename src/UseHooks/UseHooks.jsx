/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const UseHooks = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost:5000/menu");
        const data = await response.json();
        setMenu(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  return [menu, loading];
};

export default UseHooks;
