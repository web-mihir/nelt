import { useEffect, useState } from "react"

export const useApi = (url) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetch(url)
         .then(response => response.json())
         .then(responseData => setData(responseData));
   }, []);

   return [data, setData];
}