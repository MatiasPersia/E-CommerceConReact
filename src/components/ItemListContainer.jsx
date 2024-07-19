import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function ItemListContainer({ greeting }) {
  const location = useLocation();

  useEffect(() => {
    console.log('La ruta ha cambiado:', location.pathname);
  }, [location]);
  return (undefined)
}

export default ItemListContainer;