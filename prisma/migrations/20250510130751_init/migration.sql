-- AlterTable
ALTER TABLE `medicine` ADD COLUMN `typeType_id` INTEGER NULL;

-- CreateTable
CREATE TABLE `Type` (
    `type_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Type_name_key`(`name`),
    PRIMARY KEY (`type_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Medicine` ADD CONSTRAINT `Medicine_typeType_id_fkey` FOREIGN KEY (`typeType_id`) REFERENCES `Type`(`type_id`) ON DELETE SET NULL ON UPDATE CASCADE;
