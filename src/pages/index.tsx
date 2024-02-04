import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import React, { Fragment } from "react";


export default function Home() {

  const primas = ['Iae', 'Ornella', 'Putina']
  const presidentes = ['Albert', 'Milei', 'Cristina']
  

  return (<div className={styles.main}>
     <h1>Hola Jorge</h1>
     {/* <Persona nombre={primas[0]}/>
     <Persona nombre={primas[1]}/>
     <Persona nombre={primas[2]}/> */}

     <div style={{ margin: '1rem'}}>
         {primas.map(e => <Persona nombre={e}/>)}
     </div>
    
     <div style={{ margin: '1rem'}}>
         {presidentes.map(e => <Persona nombre={e}/>)}
     </div>

    {/* (<Persona nombre={primas.map(prima => <div>{prima}</div>)}/> */}

  </div>);
}





function Persona({ nombre }: { nombre: string}) {

  return <h2>{nombre}</h2>
}