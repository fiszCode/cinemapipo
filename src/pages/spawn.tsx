// Importamos dependencias
import React, { Fragment, useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";


// Componente SpawnView
export default function SpawnView() {
     // Array de presidentes
     const presidentes = ['Milei', 'Alberto', 'Cristina']
     
     // Creamos dos ESTADOS. La sintaxis es:
     // const [variableConValor, funcionUsadaParaSetear] = useState(valor inicial)
     // Cuando alguna de esas variables se modifique, se tiene que volver a renderizar el componente
     const [posicion, setPosicion] = useState(0)
     const [palabraMagica, setPalabraMagica] = useState('')

     // Este useEffect se utiliza simplemente porque sino el delay en la renderización de React haría que no se actualice a tiempo el valor de "posicion". Por lo tanto, todo lo que esté dentro de useEffect se ejecuta luego de la renderizacion del sitio
     useEffect(()=> {
         if (posicion === 2) {
             setPalabraMagica('Bingo!')
         } else {
             setPalabraMagica('')
         }    
     },[posicion])

     // Función encargada de avanzar en la lista de presidentes
     const sumar = () => {
        if (posicion > 1) {
            setPosicion(0)
        } else {
            setPosicion(posicion + 1)
        }
    }

     // Return con el pseudo-html
     return (<div style={{ margin: '1rem'}}>
         <h2>{presidentes[posicion]}</h2>
         <button onClick={sumar}>Spawnear presidente</button>
         <p>{palabraMagica}</p>
     </div>)

}


