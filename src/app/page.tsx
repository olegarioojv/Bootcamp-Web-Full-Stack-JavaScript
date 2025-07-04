import Image from "next/image";
import BarraSuperior from "./components/BarraSuperior";
import BarraNavegacao from "./components/BarraNavegacao";

export default function Home() {
  return (
    <div>
      <header className="bg-yellow-400">
        <BarraSuperior/>
        <BarraNavegacao/>
      </header>
    </div>
  );
}