interface MonedaType {
  nombre: string;
  simbolo: string;
  letras: string;
  oficial: number;
  blue: number;
}

export default function Moneda({
  nombre,
  simbolo,
  letras,
  oficial,
  blue,
}: MonedaType) {
  return (
    <div className="font-bold hover:text-orange-400">
      <h1>{nombre}:</h1>
      <div>
        <h2>
          Oficial: {simbolo}
          {oficial} {letras}
        </h2>
        <h2>
          Blue: {simbolo}
          {blue} {letras}
        </h2>
      </div>
    </div>
  );
}
