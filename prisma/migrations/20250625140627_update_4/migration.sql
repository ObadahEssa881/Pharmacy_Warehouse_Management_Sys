/*
  Warnings:

  - A unique constraint covering the columns `[owner_id]` on the table `Warehouse` will be added. If there are existing duplicate values, this will fail.
  - Made the column `pharmacy_id` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_pharmacy_id_fkey`;

-- AlterTable
ALTER TABLE `supplier` ADD COLUMN `warehouseId` INTEGER NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `pharmacy_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `warehouse` ADD COLUMN `owner_id` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Warehouse_owner_id_key` ON `Warehouse`(`owner_id`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_pharmacy_id_fkey` FOREIGN KEY (`pharmacy_id`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Supplier` ADD CONSTRAINT `Supplier_warehouseId_fkey` FOREIGN KEY (`warehouseId`) REFERENCES `Warehouse`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
