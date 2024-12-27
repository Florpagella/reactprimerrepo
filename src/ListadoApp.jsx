import { useState } from "react";
import { Items } from "./listado";

export const ListadoApp = () => {
  let listaDeSuper = [
    { nombre: "Aceite", visto: true },
    { nombre: "Azucar", visto: true },
    { nombre: "Helado", visto: true },
    { nombre: "Manzana", visto: false },
    { nombre: "limon", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listaDeSuper);

  return (
    <>
      <h1>Lista de Super</h1>
      <ol>
        {arreglo.map(panchoConPapitas => <item nombre={Items.nombre} visto={Items.visto}></item>)}
      </ol>
    </>
  );
};
