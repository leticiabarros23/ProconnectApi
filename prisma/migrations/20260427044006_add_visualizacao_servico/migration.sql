-- CreateTable
CREATE TABLE "VisualizacaoServico" (
    "id" SERIAL NOT NULL,
    "servicoId" INTEGER NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "VisualizacaoServico_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VisualizacaoServico" ADD CONSTRAINT "VisualizacaoServico_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
