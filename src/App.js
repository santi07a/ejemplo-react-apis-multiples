import { useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const { datos: facturas, pedirDatos: pedirFacturas } = useFetch();
  const { datos: factura, pedirDatos: pedirFactura } = useFetch();
  useEffect(() => {
    pedirFacturas("http://localhost:3001/facturas/");
  }, [pedirFacturas]);
  useEffect(() => {
    if (facturas) {
      pedirFactura(`http://localhost:3001/facturas/${facturas[0].id}`);
    }
  }, [facturas, pedirFactura]);
  return (
    <>
      <h1>Factura {factura?.numero}</h1>
      {
        factura && <p>{factura.concepto}</p>
      }
    </>
  );
}

export default App;
