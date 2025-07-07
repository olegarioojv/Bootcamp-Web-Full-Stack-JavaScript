interface Produto {
  id: number;
  image: string;
  title: string;
  price: string;
  location: string;
};

export function GET() {
    const produtos: Produto[] = [
      {
        id: 1,
        image: "/img/produto1.png",
        title: "Fone Bluetooth Original",
        price: "R$ 129,90",
        location: "São Paulo",
      },
      {
        id: 2,
        image: "/img/produto2.png",
        title: "Smartwatch Fitness",
        price: "R$ 249,99",
        location: "Belo Horizonte",
      },
      {
        id: 3,
        image: "/img/produto3.png",
        title: "Notebook Gamer RTX",
        price: "R$ 5.999,00",
        location: "Curitiba",
      },
      {
        id: 4,
        image: "/img/produto4.png",
        title: "Mouse sem fio Logitech",
        price: "R$ 89,90",
        location: "Porto Alegre",
      },
      // Adicione mais se quiser
    ];

    return Response.json(produtos);
}