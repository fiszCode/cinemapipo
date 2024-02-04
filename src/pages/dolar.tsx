import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React, { Fragment, useEffect, useState } from "react";
import Moneda from "@/componentes/Moneda";
import { css } from "@emotion/react";

export default function DolarView() {
  console.log("me renderice");

  const [loading, setLoading] = useState("loading");

  const [vista, setVista] = useState("dolar");

  const [dolarOficial, setDolarOficial] = useState(0);
  const [dolarBlue, setDolarBlue] = useState(0);
  const [euroOficial, setEuroOficial] = useState(0);
  const [euroBlue, setEuroBlue] = useState(0);

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

  if (loading === "ready") {
    return (
      <div
        css={cajaPadre}
        className="flex flex-col items-center justify-center m-4"
      >
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
