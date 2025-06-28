/*
  Warnings:

  - You are about to drop the column `supplier_id` on the `warehouse` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `FK_Inventory_Pharmacy`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `FK_Inventory_Warehouse`;

-- DropForeignKey
ALTER TABLE `pharmacy` DROP FOREIGN KEY `Pharmacy_owner_id_fkey`;

-- DropForeignKey
ALTER TABLE `warehouse` DROP FOREIGN KEY `Warehouse_supplier_id_fkey`;

-- AlterTable
ALTER TABLE `pharmacy` MODIFY `owner_id` INTEGER NULL;

-- AlterTable
ALTER TABLE `warehouse` DROP COLUMN `supplier_id`;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_pharmacy_fkey` FOREIGN KEY (`location_id`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_warehouse_fkey` FOREIGN KEY (`location_id`) REFERENCES `Warehouse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
