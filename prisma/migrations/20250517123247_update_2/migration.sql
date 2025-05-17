/*
  Warnings:

  - You are about to drop the column `type_id` on the `medicine` table. All the data in the column will be lost.
  - You are about to drop the `type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `titer` to the `Medicine` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `medicine` DROP FOREIGN KEY `Medicine_type_id_fkey`;

-- DropIndex
DROP INDEX `Medicine_type_id_fkey` ON `medicine`;

-- AlterTable
ALTER TABLE `medicine` DROP COLUMN `type_id`,
    ADD COLUMN `Type` VARCHAR(191) NULL,
    ADD COLUMN `titer` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `type`;
