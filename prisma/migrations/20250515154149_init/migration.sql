/*
  Warnings:

  - The primary key for the `category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_id` on the `category` table. All the data in the column will be lost.
  - The primary key for the `company` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `company_id` on the `company` table. All the data in the column will be lost.
  - The primary key for the `inventory` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `inventory_id` on the `inventory` table. All the data in the column will be lost.
  - The primary key for the `invoice` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `invoice_id` on the `invoice` table. All the data in the column will be lost.
  - The primary key for the `medicine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `brand` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `medicine_id` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the column `typeType_id` on the `medicine` table. All the data in the column will be lost.
  - The primary key for the `notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `notification_id` on the `notification` table. All the data in the column will be lost.
  - The primary key for the `pharmacy` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pharmacy_id` on the `pharmacy` table. All the data in the column will be lost.
  - The primary key for the `purchaseorder` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_id` on the `purchaseorder` table. All the data in the column will be lost.
  - The primary key for the `purchaseorderitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `order_item_id` on the `purchaseorderitem` table. All the data in the column will be lost.
  - The primary key for the `sale` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sale_id` on the `sale` table. All the data in the column will be lost.
  - The primary key for the `saleitem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sale_item_id` on the `saleitem` table. All the data in the column will be lost.
  - The primary key for the `supplier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `supplier_id` on the `supplier` table. All the data in the column will be lost.
  - The primary key for the `type` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type_id` on the `type` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `user` table. All the data in the column will be lost.
  - The primary key for the `warehouse` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `warehouse_id` on the `warehouse` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Medicine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Pharmacy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PurchaseOrder` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `PurchaseOrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `SaleItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Warehouse` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_medicine_id_fkey`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_pharmacy_fkey`;

-- DropForeignKey
ALTER TABLE `inventory` DROP FOREIGN KEY `Inventory_warehouse_fkey`;

-- DropForeignKey
ALTER TABLE `invoice` DROP FOREIGN KEY `Invoice_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `invoice` DROP FOREIGN KEY `Invoice_supplier_id_fkey`;

-- DropForeignKey
ALTER TABLE `medicine` DROP FOREIGN KEY `Medicine_category_id_fkey`;

-- DropForeignKey
ALTER TABLE `medicine` DROP FOREIGN KEY `Medicine_company_id_fkey`;

-- DropForeignKey
ALTER TABLE `medicine` DROP FOREIGN KEY `Medicine_supplier_id_fkey`;

-- DropForeignKey
ALTER TABLE `medicine` DROP FOREIGN KEY `Medicine_typeType_id_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `Notification_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchaseorder` DROP FOREIGN KEY `PurchaseOrder_pharmacy_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchaseorder` DROP FOREIGN KEY `PurchaseOrder_supplier_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchaseorderitem` DROP FOREIGN KEY `PurchaseOrderItem_medicine_id_fkey`;

-- DropForeignKey
ALTER TABLE `purchaseorderitem` DROP FOREIGN KEY `PurchaseOrderItem_order_id_fkey`;

-- DropForeignKey
ALTER TABLE `sale` DROP FOREIGN KEY `Sale_pharmacy_id_fkey`;

-- DropForeignKey
ALTER TABLE `saleitem` DROP FOREIGN KEY `SaleItem_medicine_id_fkey`;

-- DropForeignKey
ALTER TABLE `saleitem` DROP FOREIGN KEY `SaleItem_sale_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_pharmacy_id_fkey`;

-- DropIndex
DROP INDEX `Inventory_medicine_id_fkey` ON `inventory`;

-- DropIndex
DROP INDEX `Inventory_warehouse_fkey` ON `inventory`;

-- DropIndex
DROP INDEX `Invoice_supplier_id_fkey` ON `invoice`;

-- DropIndex
DROP INDEX `Medicine_category_id_fkey` ON `medicine`;

-- DropIndex
DROP INDEX `Medicine_company_id_fkey` ON `medicine`;

-- DropIndex
DROP INDEX `Medicine_supplier_id_fkey` ON `medicine`;

-- DropIndex
DROP INDEX `Medicine_typeType_id_fkey` ON `medicine`;

-- DropIndex
DROP INDEX `Notification_user_id_fkey` ON `notification`;

-- DropIndex
DROP INDEX `PurchaseOrder_pharmacy_id_fkey` ON `purchaseorder`;

-- DropIndex
DROP INDEX `PurchaseOrder_supplier_id_fkey` ON `purchaseorder`;

-- DropIndex
DROP INDEX `PurchaseOrderItem_medicine_id_fkey` ON `purchaseorderitem`;

-- DropIndex
DROP INDEX `PurchaseOrderItem_order_id_fkey` ON `purchaseorderitem`;

-- DropIndex
DROP INDEX `Sale_pharmacy_id_fkey` ON `sale`;

-- DropIndex
DROP INDEX `SaleItem_medicine_id_fkey` ON `saleitem`;

-- DropIndex
DROP INDEX `SaleItem_sale_id_fkey` ON `saleitem`;

-- DropIndex
DROP INDEX `User_pharmacy_id_fkey` ON `user`;

-- DropIndex
DROP INDEX `User_username_key` ON `user`;

-- AlterTable
ALTER TABLE `category` DROP PRIMARY KEY,
    DROP COLUMN `category_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `company` DROP PRIMARY KEY,
    DROP COLUMN `company_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `inventory` DROP PRIMARY KEY,
    DROP COLUMN `inventory_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `invoice` DROP PRIMARY KEY,
    DROP COLUMN `invoice_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `medicine` DROP PRIMARY KEY,
    DROP COLUMN `brand`,
    DROP COLUMN `medicine_id`,
    DROP COLUMN `typeType_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `type_id` INTEGER NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `notification` DROP PRIMARY KEY,
    DROP COLUMN `notification_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pharmacy` DROP PRIMARY KEY,
    DROP COLUMN `pharmacy_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `purchaseorder` DROP PRIMARY KEY,
    DROP COLUMN `order_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `purchaseorderitem` DROP PRIMARY KEY,
    DROP COLUMN `order_item_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sale` DROP PRIMARY KEY,
    DROP COLUMN `sale_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `saleitem` DROP PRIMARY KEY,
    DROP COLUMN `sale_item_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `supplier` DROP PRIMARY KEY,
    DROP COLUMN `supplier_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `type` DROP PRIMARY KEY,
    DROP COLUMN `type_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `user_id`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `warehouse` DROP PRIMARY KEY,
    DROP COLUMN `warehouse_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_pharmacy_id_fkey` FOREIGN KEY (`pharmacy_id`) REFERENCES `Pharmacy`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medicine` ADD CONSTRAINT `Medicine_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medicine` ADD CONSTRAINT `Medicine_company_id_fkey` FOREIGN KEY (`company_id`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medicine` ADD CONSTRAINT `Medicine_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medicine` ADD CONSTRAINT `Medicine_type_id_fkey` FOREIGN KEY (`type_id`) REFERENCES `Type`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_medicine_id_fkey` FOREIGN KEY (`medicine_id`) REFERENCES `Medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_pharmacy_fkey` FOREIGN KEY (`location_id`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Inventory` ADD CONSTRAINT `Inventory_warehouse_fkey` FOREIGN KEY (`location_id`) REFERENCES `Warehouse`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseOrder` ADD CONSTRAINT `PurchaseOrder_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseOrder` ADD CONSTRAINT `PurchaseOrder_pharmacy_id_fkey` FOREIGN KEY (`pharmacy_id`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseOrderItem` ADD CONSTRAINT `PurchaseOrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `PurchaseOrder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PurchaseOrderItem` ADD CONSTRAINT `PurchaseOrderItem_medicine_id_fkey` FOREIGN KEY (`medicine_id`) REFERENCES `Medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `PurchaseOrder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Invoice` ADD CONSTRAINT `Invoice_supplier_id_fkey` FOREIGN KEY (`supplier_id`) REFERENCES `Supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sale` ADD CONSTRAINT `Sale_pharmacy_id_fkey` FOREIGN KEY (`pharmacy_id`) REFERENCES `Pharmacy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleItem` ADD CONSTRAINT `SaleItem_sale_id_fkey` FOREIGN KEY (`sale_id`) REFERENCES `Sale`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SaleItem` ADD CONSTRAINT `SaleItem_medicine_id_fkey` FOREIGN KEY (`medicine_id`) REFERENCES `Medicine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Notification` ADD CONSTRAINT `Notification_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
