// Importamos los recursos que vamos a utilizar
import React, { Fragment } from "react";
import styles from "@/styles/Home.module.scss";
//import Head from "next/head";
//import Image from "next/image";

// Componente "Home"
// Configurado como "export default" para que React obtenga de acá lo primero que va a mostrar en la página
export default function Home() {
     // Arrays con informacion
     const primas = ["Iae", "Ornella", "Putina"];
     const presidentes = ["Albert", "Milei", "Cristina"];

     // El codigo pseudo-HTML de salida 
     return (
         <div className={styles.main}>
             <h1>Hola Jorge</h1>
             {/* <Persona nombre={primas[0]}/>
             <Persona nombre={primas[1]}/>
             <Persona nombre={primas[2]}/> */}

             <div style={{ margin: "1rem" }}>
                 {/* Mapeamos todo el array primas y mostramos cada valor dentro de un componente "Persona" -pasando el valor por parametro- */}
                 {primas.map((e, i) => (<Persona key={i} nombre={e} />))}
             </div>

             <div style={{ margin: "1rem" }}>
                 {/* Lo mismo con el array de Presidentes */}
                 {presidentes.map((e, i) => (<Persona key={i} nombre={e} />))}
             </div>
              {/* (<Persona nombre={primas.map(prima => <div>{prima}</div>)}/> */}
         </div>
     );
}

// Componente "Persona" que recibe un parametro (ni mas ni menos que una funcion tradicional de JS)
function Persona({ nombre }: { nombre: string }) 
{
     return <h2>{nombre}</h2>;
}