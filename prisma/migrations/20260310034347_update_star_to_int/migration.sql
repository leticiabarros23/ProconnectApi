/*
  Warnings:

  - You are about to alter the column `star` on the `Avaliacao` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Avaliacao" ALTER COLUMN "star" SET DATA TYPE INTEGER;
