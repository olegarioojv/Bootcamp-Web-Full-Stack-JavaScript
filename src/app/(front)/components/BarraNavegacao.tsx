"use client";


export default function BarraNavegacao() {
  return (
    <>
      {/* Aba de categorias */}
      <nav className="bg-yellow-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center gap-6">
          {[
            "Ofertas do dia",
            "Celulares",
            "Moda",
            "Casa e Decoração",
            "Informática",
            "Games",
          ].map((categoria) => (
            <button
              key={categoria}
              className="text-gray-800 hover:text-blue-600 font-medium transition-colors"
            >
              {categoria}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}