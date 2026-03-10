-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "segmentoId" INTEGER;

-- CreateTable
CREATE TABLE "Segmento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "icone" TEXT,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Segmento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Segmento_nome_key" ON "Segmento"("nome");

-- AddForeignKey
ALTER TABLE "Categoria" ADD CONSTRAINT "Categoria_segmentoId_fkey" FOREIGN KEY ("segmentoId") REFERENCES "Segmento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
