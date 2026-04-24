-- CreateTable
CREATE TABLE "WebhookEvento" (
    "id" SERIAL NOT NULL,
    "externalId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WebhookEvento_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebhookEvento_externalId_key" ON "WebhookEvento"("externalId");

-- CreateIndex
CREATE INDEX "Assinatura_usuarioId_status_idx" ON "Assinatura"("usuarioId", "status");

-- CreateIndex
CREATE INDEX "Servico_usuarioId_idx" ON "Servico"("usuarioId");
