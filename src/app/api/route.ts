import { PrismaClient } from "../../../generated/prisma";


export  async function GET() {

  const prisma = new PrismaClient ();

  const produtos = await prisma.produto.findMany()

    return Response.json(produtos);
}