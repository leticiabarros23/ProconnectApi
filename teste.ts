import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.categoria.createMany({
    data: [
      { nomeServico: "Beleza" },
      { nomeServico: "Informática" },
      { nomeServico: "Saúde" },
    ],
    skipDuplicates: true,
  });

  console.log("Categorias criadas com sucesso!");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
