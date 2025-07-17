/*
  Warnings:

  - Added the required column `cost_price` to the `SaleItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `saleitem` ADD COLUMN `cost_price` DECIMAL(65, 30) NOT NULL;
