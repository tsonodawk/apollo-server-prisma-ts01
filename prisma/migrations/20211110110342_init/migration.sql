/*
  Warnings:

  - You are about to drop the column `departmentCode` on the `Employee` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Employee_departmentCode_fkey` ON `Employee`;

-- AlterTable
ALTER TABLE `Department` MODIFY `departmentName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Employee` DROP COLUMN `departmentCode`,
    MODIFY `employeeName` VARCHAR(191) NULL;
