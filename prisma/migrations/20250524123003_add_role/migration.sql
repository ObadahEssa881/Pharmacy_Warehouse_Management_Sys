/*
  Warnings:

  - You are about to alter the column `location_type` on the `inventory` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - Added the required column `cost_price` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `selling_price` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password_hash` to the `Supplier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `inventory` ADD COLUMN `cost_price` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `selling_price` DECIMAL(65, 30) NOT NULL,
    MODIFY `location_type` ENUM('PHARMACY', 'WAREHOUSE') NOT NULL;

-- AlterTable
ALTER TABLE `supplier` ADD COLUMN `password_hash` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('SUPPLIER_ADMIN', 'SUPPLIER_EMPLOYEE') NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('PHARMACY_OWNER', 'PHARMACIST') NOT NULL;
