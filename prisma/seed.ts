import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

async function main() {
  await prisma.produto.createMany({
  data: [
    {
      image: "/img/produto1.png",
      title: "Fone Bluetooth Original",
      price: 129.90,
      location: "São Paulo"
    },
    {
      image: "/img/produto2.png",
      title: "Smartwatch Fitness",
      price: 249.99,
      location: "Belo Horizonte"
    },
    {
      image: "/img/produto3.png",
      title: "Notebook Gamer RTX",
      price: 5999.00,
      location: "Curitiba"
    },
    {
      image: "/img/produto4.png",
      title: "Mouse sem fio Logitech",
      price: 89.90,
      location: "Porto Alegre"
    }
  ]
})

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
