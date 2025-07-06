type Produto = {
  id: number;
  imagem: string;
  titulo: string;
  preco: string;
  localizacao: string;
};

const produtos: Produto[] = [
  {
    id: 1,
    imagem: "/img/produto1.png",
    titulo: "Fone Bluetooth Original",
    preco: "R$ 129,90",
    localizacao: "São Paulo",
  },
  {
    id: 2,
    imagem: "/img/produto2.png",
    titulo: "Smartwatch Fitness",
    preco: "R$ 249,99",
    localizacao: "Belo Horizonte",
  },
  {
    id: 3,
    imagem: "/img/produto3.png",
    titulo: "Notebook Gamer RTX",
    preco: "R$ 5.999,00",
    localizacao: "Curitiba",
  },
  {
    id: 4,
    imagem: "/img/produto4.png",
    titulo: "Mouse sem fio Logitech",
    preco: "R$ 89,90",
    localizacao: "Porto Alegre",
  },
  // Adicione mais se quiser
];

export default function GaleriaProdutos() {
  return (
    <section className="max-w-7x1 mx-auto p-6 width-min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <img
              src={produto.imagem}
              alt={produto.titulo}
              className="w-full h-65 object-cover "
            />
            <div className="p-4">
              <h2 className="text-sm font-medium text-gray-800 mb-1">{produto.titulo}</h2>
              <p className="text-lg font-bold text-green-600">{produto.preco}</p>
              <p className="text-xs text-gray-500 mt-1">{produto.localizacao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
