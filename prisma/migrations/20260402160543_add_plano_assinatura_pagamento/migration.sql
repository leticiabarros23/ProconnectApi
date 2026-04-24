-- CreateEnum
CREATE TYPE "PlanoTipo" AS ENUM ('free', 'premium');

-- CreateEnum
CREATE TYPE "AssinaturaTipo" AS ENUM ('mensal', 'anual');

-- CreateEnum
CREATE TYPE "AssinaturaStatus" AS ENUM ('pendente', 'ativa', 'cancelada', 'expirada');

-- CreateEnum
CREATE TYPE "PagamentoStatus" AS ENUM ('pendente', 'aprovado', 'recusado', 'reembolsado');

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "plano" "PlanoTipo" NOT NULL DEFAULT 'free';

-- CreateTable
CREATE TABLE "Assinatura" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "tipo" "AssinaturaTipo" NOT NULL,
    "status" "AssinaturaStatus" NOT NULL DEFAULT 'pendente',
    "mpPreferenceId" TEXT,
    "mpSubscriptionId" TEXT,
    "inicioEm" TIMESTAMP(3),
    "expiraEm" TIMESTAMP(3),
    "canceladoEm" TIMESTAMP(3),
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assinatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "assinaturaId" INTEGER,
    "mpPaymentId" TEXT,
    "valor" DOUBLE PRECISION NOT NULL,
    "status" "PagamentoStatus" NOT NULL DEFAULT 'pendente',
    "metodoPagamento" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "atualizadoEm" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pagamento_mpPaymentId_key" ON "Pagamento"("mpPaymentId");

-- AddForeignKey
ALTER TABLE "Assinatura" ADD CONSTRAINT "Assinatura_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_assinaturaId_fkey" FOREIGN KEY ("assinaturaId") REFERENCES "Assinatura"("id") ON DELETE SET NULL ON UPDATE CASCADE;
