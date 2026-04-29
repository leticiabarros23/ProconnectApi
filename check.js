const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.pagamento.findMany().then(p => {
  console.log('Pagamentos:', p);
  prisma.$disconnect();
});
