import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criação de um novo usuário
  const novoUsuario = await prisma.usuario.create({
    data: {
      nome: 'João da Silva',
      email: 'joao@example.com',
      telefone: '11999999999',
      senha: 'senha123'
    }
  })

  console.log('Usuário criado:', novoUsuario)

  // Consulta de todos os usuários
  const usuarios = await prisma.usuario.findMany()
  console.log('Todos os usuários:', usuarios)
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
