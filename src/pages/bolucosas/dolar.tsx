// Importamos los recursos que vamos a utilizar
import React, { Fragment, useEffect, useState } from "react"; // React y sus recursos
import styles from "@/styles/Home.module.css"; // Estilo CSS principal
import Moneda from "@/views/components/Moneda"; // Componente guardado en otro archivo
import {css} from "@emotion/react"; // Importamos la librería de Emotion CSS

// Componente que se exporta por default
export default function DolarView() {
     console.log("me renderice");

     // Inicializamos todos los estados que vamos a utilizar
     const [loading, setLoading] = useState("loading");
     const [vista, setVista] = useState("dolar");
     const [dolarOficial, setDolarOficial] = useState(0);
     const [dolarBlue, setDolarBlue] = useState(0);
     const [euroOficial, setEuroOficial] = useState(0);
     const [euroBlue, setEuroBlue] = useState(0);

     // Con este useEffect hacemos el fetch luego de cargarse el site por default (que va a decir "Cargando...")
     useEffect(() => {
         fetch("https://api.bluelytics.com.ar/v2/latest")
         .then((data) => data.json())
         .then((data) => {
             setLoading("ready");
             setDolarBlue(data.blue.value_sell);
             setDolarOficial(data.oficial.value_sell);
             setEuroBlue(data.blue_euro.value_sell);
             setEuroOficial(data.oficial_euro.value_sell);
         })
         .catch((err) => {
             console.log(err);
             setLoading("error");
         });
     }, []);

     // Esto es simpático. Este IF está fuera del useEffect pero, como el useEffect modifica estados que hacen que el site se vuelva a renderizar, si el sitio se renderiza antes del fetch, muestra el mensaje de carga. Pero, si se renderiza por la modificacion del estado realizada desde el fetch, muestra lo que debe mostrar (los datos obtenidos o el mensaje de error)
     if (loading === "ready") {
         return (
             <div css={cajaPadre} className="flex flex-col items-center justify-center m-4">
                 <h1 css={titulo(vista)} className="text-3xl">
                     COTIZACIONES
                 </h1>
                 <div css={monedaContainer}>
                     {vista === "dolar" ? (
                         <Moneda
                             nombre="Dolar"
                             simbolo="$"
                             letras="USD"
                             oficial={dolarOficial}
                             blue={dolarBlue}
                         />
                     ) : (
                         <Moneda
                             nombre="Euro"
                             simbolo="€"
                             letras="EUR"
                             oficial={euroOficial}
                             blue={euroBlue}
                         />
                     )}
                 </div>
                 <button css={buttonCotizacion} onClick={() => setVista("dolar")}>
                     Ver verdes
                 </button>
                 <button css={buttonCotizacion} onClick={() => setVista("euro")}>
                     Ver azules
                 </button>
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
