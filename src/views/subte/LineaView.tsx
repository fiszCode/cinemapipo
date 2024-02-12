import Link from "next/link";
import Linea, { LineaType } from "../components/Linea";

export default function LineaView({ nombre, estado, frecuencia }: LineaType) {
  return (
     <div>
     <Linea nombre={nombre} estado={estado} frecuencia={frecuencia} />
     <Link href="../subte"> ⬅️ Volver</Link>
     </div>
  );
}
