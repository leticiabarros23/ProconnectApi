/*
  Warnings:

  - A unique constraint covering the columns `[clienteId,profissionalId]` on the table `Conversa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Conversa_clienteId_profissionalId_key" ON "Conversa"("clienteId", "profissionalId");
