-- CreateTable
CREATE TABLE "ServicoRealizado" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,
    "confirmado" BOOLEAN,
    "respondidoEm" TIMESTAMP(3),
    "realizadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ServicoRealizado_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContatoWhatsapp" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "servicoId" INTEGER NOT NULL,
    "clicadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "perguntado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ContatoWhatsapp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ServicoRealizado_usuarioId_servicoId_key" ON "ServicoRealizado"("usuarioId", "servicoId");

-- CreateIndex
CREATE UNIQUE INDEX "ContatoWhatsapp_usuarioId_servicoId_key" ON "ContatoWhatsapp"("usuarioId", "servicoId");

-- AddForeignKey
ALTER TABLE "ServicoRealizado" ADD CONSTRAINT "ServicoRealizado_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServicoRealizado" ADD CONSTRAINT "ServicoRealizado_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContatoWhatsapp" ADD CONSTRAINT "ContatoWhatsapp_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContatoWhatsapp" ADD CONSTRAINT "ContatoWhatsapp_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
