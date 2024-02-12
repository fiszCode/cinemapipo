import Linea, { LineaType } from "@/views/components/Linea";
import LineaView from "@/views/subte/LineaView";

export async function getServerSideProps({ params }:any) {
  const { slug } = params;

  // Fetch data for the specific post using slug
	const URL = `https://buenosaires.gob.ar/subtes`
	const datosLineas = await fetch(URL).then(r => r.json())

  const linea = datosLineas.subtes.find((linea:LineaType) => linea.nombre.split('Línea ')[1] === slug[0]);

  return {
    props: { nombre: linea.nombre, estado: linea.estado, frecuencia: linea.frecuencia },
  };
}

export default function LineaSlug({ nombre, estado, frecuencia }: LineaType) {
  return (
    <LineaView nombre={nombre} estado={estado} frecuencia={frecuencia} />
  );
}