// Componente en un archivo individual. Utilizado para mostrar la informacion de las monedas solicitadas

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

         return (
             <div className="font-bold hover:text-orange-400" /*onClick={handleClick}*/>
                 <Link href={"../subte/" + nombre.split('Línea ')[1]}>
                 <h1>{nombre}</h1>

                     <h2>
                         Estado: {estado}
                     </h2>
                     <h2>
                         Frecuencia: {frecuencia}
                     </h2>
                </Link>
                 </div>
         );
     }
