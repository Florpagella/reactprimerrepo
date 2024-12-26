const Items = ({ nombre, visto }) => {
  return (
    <li>
      {nombre} {visto ? "✅" : "❎"}
    </li>
  );
};

export const ListadoApp = () => {
  let listaDeNombres = [
    { nombre: "Emilia", visto: true },
    { nombre: "Florencia", visto: true },
    { nombre: "Josefina", visto: true },
    { nombre: "Martin", visto: false },
    { nombre: "Marcos", visto: false },
  ]

  const [arreglo, setArreglo] = useState(listaDeNombres)
  
  
  return (
    <>
      <h1>Lista de tareas</h1>
      <ol>
        {arreglo.map(Items => <item nombre={Items.nombre} visto= {Items.visto} />)}
      </ol>
    </>
  );
};
