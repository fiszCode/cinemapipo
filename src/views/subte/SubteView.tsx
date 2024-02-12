// Importamos los recursos que vamos a utilizar
import React, { Fragment, useEffect, useState } from "react"; // React y sus recursos
import styles from "@/styles/Home.module.css"; // Estilo CSS principal
import Linea, { LineaType } from "@/views/components/Linea"; // Componente guardado en otro archivo
import {css} from "@emotion/react"; // Importamos la librería de Emotion CSS


// Componente que se exporta por default
export default function SubteView() {

     // Inicializamos todos los estados que vamos a utilizar
     const [loading, setLoading] = useState("loading");
     const [vista, setVista] = useState("A");
     const [datosLineas, setDatosLineas] = useState<LineaType[] | undefined>();

     // Con este useEffect hacemos el fetch luego de cargarse el site por default (que va a decir "Cargando...")
     useEffect(() => {
         fetch("api/subte")
         .then((data) => data.json())
         .then((data) => {
             setDatosLineas(data.subtes);
             setLoading("ready");
         })
         .catch((err) => {
             console.log(err);
             setLoading("error");
         });
     }, []);

     useEffect(() => {
         console.log("output del useEffect", datosLineas)
    }, [datosLineas]);

     // Esto es simpático. Este IF está fuera del useEffect pero, como el useEffect modifica estados que hacen que el site se vuelva a renderizar, si el sitio se renderiza antes del fetch, muestra el mensaje de carga. Pero, si se renderiza por la modificacion del estado realizada desde el fetch, muestra lo que debe mostrar (los datos obtenidos o el mensaje de error)
     if (loading === "ready") {
         return (
             
             <div css={cajaPadre} className="flex flex-col items-center justify-center m-4">
                 <h1 css={titulo(vista)} className="text-3xl">
                     SubteAhora
                 </h1>
                 <div css={monedaContainer}>
                {datosLineas?.map((linea) => 
                    <Linea
                         key={linea.nombre}
                         nombre={linea.nombre}
                         estado={linea.estado}
                         frecuencia={linea.frecuencia}
                    />
                )}       
                 </div>
             </div>
         );
     }
     if (loading === "error") {
         return <div>No se que paso papu 🤌</div>;
     }
     return <div>Cargando mierda</div>;
}

// CSS ---------------------
// Toda esta mierda podria etar en style.ts y ser reutilizable haciendo un export/import en cualquier otro archivito de mierda

const cajaPadre = css`
     font-family: "Arial" !important;
`;

const titulo = (vista: string) => css`
     margin: 1rem;
     color: ${vista === "dolar" ? "green" : vista === "euro" ? "blue" : "init"};
`;

const monedaContainer = css`
     margin: 1rem;
`;

const buttonCotizacion = css`
     margin: 1rem;
     padding: 1rem;
     border-radius: 0.5rem;
     background-color: #f1f1f1;
     cursor: pointer;
     border: none;
     font-size: 1.5rem;
     font-weight: bold;
     &:hover {
         background-color: #e1e1e1;
     }
`;
