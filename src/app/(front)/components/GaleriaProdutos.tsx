"use client";

import { useEffect } from "react";
import { useState } from "react";



type Produto = {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
};

// Removed duplicate useState declaration

export default function GaleriaProdutos() {
  const [data, setData] = useState<Produto[] | null>(null);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados:", error);
      });
  }, []);

  return (
    <section className="max-w-7x1 mx-auto p-6 width-min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(data) && data.length > 0 && (
          (data as Produto[]).map((produto: Produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <img
                src={produto.image}
                alt={produto.title}
                className="w-full h-65 object-cover "
              />
              <div className="p-4">
                <h2 className="text-sm font-medium text-gray-800 mb-1">{produto.title}</h2>
                <p className="text-lg font-bold text-green-600">{produto.price}</p>
                <p className="text-xs text-gray-500 mt-1">{produto.location}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
// Removed incorrect custom useState function

