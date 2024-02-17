// Importamos las dependencias
import React, { Fragment, useState } from "react";
import styles from "@/styles/Home.module.css";

// Componente PochoView
export default function PochoView() {
     // Creamos un estado
     const [contador, setContador] = useState(0)

     // Funcion "sumar" trigereada cuando se aprueta un boton
     const sumar = () => {
         setContador(contador + 1)
         // Al cambiarse contador, se trigerea el useState y se vuelve a renderizar la pagina
     }

     // Return en pseudo-HTML
     return (<div style={{ margin: '1rem'}}>
         <h2>{contador}</h2>
         <button onClick={sumar}><h3>Sumar + 1</h3></button>
     </div>);
}


