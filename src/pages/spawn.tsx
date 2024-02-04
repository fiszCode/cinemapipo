import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { Fragment, useEffect, useState } from "react";


export default function SpawnView() {


  const [ posicion, setPosicion ] = useState(0)
  const [palabraMagica, setPalabraMagica] = useState('')

  const presidentes = ['Milei', 'Alberto', 'Cristina']

  const sumar = () => {
      if (posicion > 1) {
        setPosicion(0)
      } else {
        setPosicion(posicion + 1)
      }
  }

  useEffect(()=> {
    if (posicion === 2) {
      setPalabraMagica('Bingo!')
    } else {
        setPalabraMagica('')
    }
  },[posicion])

  return (<div style={{ margin: '1rem'}}>
    <h2>{presidentes[posicion]}</h2>
    <button onClick={sumar}>Spawnear presidente</button>
    <p>{palabraMagica}</p>
  </div>);
}


