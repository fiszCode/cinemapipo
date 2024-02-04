import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { Fragment, useState } from "react";


export default function PochoView() {

  const [ contador, setContador ] = useState(0)

  const sumar = () => {
    setContador(contador + 1)
  }

  return (<div style={{ margin: '1rem'}}>
    <h2>{contador}</h2>
    <button onClick={sumar}><h3>Sumar + 1</h3></button>
  </div>);
}


