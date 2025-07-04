import Image from "next/image";
import BarraSuperior from "./components/BarraSuperior";
import BarraNavegacao from "./components/BarraNavegacao";
import GaleriaProdutos from "./components/GaleriaProdutos";


export default function Home() {
  return (
    <div>
      <header className="bg-yellow-400">
        <BarraSuperior/>
        <BarraNavegacao/>
      </header>
      <main>
         <GaleriaProdutos />
      </main>
    </div>
  );
}