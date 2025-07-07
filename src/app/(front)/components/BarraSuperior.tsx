import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function BarraSuperior() {
  return (
    <>
      {/* Barra principal */}
      <div className="bg-yellow-400 p-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/">
          <img
            src="/img/logo.png"
            alt="Logo Mercado Livre"
            className="w-28 cursor-pointer"
          />
        </Link>

        {/* Barra de pesquisa */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center bg-white rounded-full overflow-hidden border focus-within:ring-2 focus-within:ring-blue-400">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="flex-grow px-4 py-2 text-sm text-gray-800 outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 p-3 text-white flex items-center justify-center">
              <FaSearch className="text-white text-sm" />
            </button>
          </div>
        </div>

        {/* Botão Assine Meli+ */}
        <button className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-5 py-2 text-sm font-medium">
          Assine Meli+
        </button>
      </div>

    </>
  );
}