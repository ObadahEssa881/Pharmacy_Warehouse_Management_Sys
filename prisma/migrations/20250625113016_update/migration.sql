/*
  Warnings:

  - You are about to drop the column `location_id` on the `inventory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_pharmacy_fkey`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_warehouse_fkey`;

-- AlterTable
ALTER TABLE `inventory` DROP COLUMN `location_id`,
    ADD COLUMN `pharmacy_id` INTEGER NULL,
    ADD COLUMN `warehouse_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_pharmacy_id_fkey` FOREIGN KEY (`pharmacy_id`) REFERENCES `Pharmacy`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_warehouse_id_fkey` FOREIGN KEY (`warehouse_id`) REFERENCES `Warehouse`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
