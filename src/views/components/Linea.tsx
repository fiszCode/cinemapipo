// Componente en un archivo individual. Utilizado para mostrar la informacion de las monedas solicitadas

import { css } from "@emotion/react";
import Link from "next/link";
import { useRouter } from "next/router";

// Definimos el tipo de variables que vamos a utilizar por parámetros en la funcion/componente en si
export interface LineaType 
{
     nombre: string;
     estado: string;
     frecuencia: string;
}

// El componente/funcion en si misma
export default function Linea({nombre, estado, frecuencia}: LineaType)
     {

        /*const router = useRouter()

        const handleClick = () => {
            router.push(`../subte/${nombre}`)
        }
         <div className="font-bold hover:text-orange-400" onClick={handleClick}>
        */
         const letraLinea = nombre.split('Línea ')[1]
         return (
             <div className="font-bold hover:text-orange-400" /*onClick={handleClick}*/>
                 <Link href={"../subte/" + letraLinea}>
                 <LogoLinea letra={letraLinea} />
                     <h2>
                         {estado.length === 0 ?  'Normal': estado}
                     </h2>
                     <h2>
                         Frecuencia: {frecuencia}
                     </h2>
                </Link>
            </div>
         );
     }

function LogoLinea({letra }:{letra: string }) {
 
     //Forma de nerd de hacerlo
    //  const colores = {
    //     A: 'red',
    //     B: 'blue',
    //     C: 'green'
    //  }

    let colorLetra = "black"
    let colorTexto = letra ==="H" ? "black": "white"
    
    switch(letra) {
         case "A": colorLetra = "steelblue"; break;
         case "B": colorLetra = "red"; break;
         case "C": colorLetra = "blue"; break;
         case "D": colorLetra = "green"; break;
         case "E": colorLetra = "purple"; break;
         case "H": colorLetra = "yellow"; break;
         case "P": colorLetra = "orange"; break;
    }

     const redondelFalopa = css`
         font-family: Arial;
         font-size: 3rem;
         color: ${colorTexto};
         background-color: ${colorLetra};
         width: 4rem;
         height: 4rem;
         align-items: center;
         display: flex;
         justify-content: center;
         border-radius: 50%;
         border: 2.5px solid white;
     `;

     return (<div>
        <div css={redondelFalopa}>{letra}</div>
     </div>)

     
}