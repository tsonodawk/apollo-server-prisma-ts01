-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_departmentCode_fkey`;

-- DropIndex
DROP INDEX `Department_departmentCode_key` ON `Department`;

-- CreateTable
CREATE TABLE `_DepartmentToEmployee` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_DepartmentToEmployee_AB_unique`(`A`, `B`),
    INDEX `_DepartmentToEmployee_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_DepartmentToEmployee` ADD FOREIGN KEY (`A`) REFERENCES `Department`(`departmentCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_DepartmentToEmployee` ADD FOREIGN KEY (`B`) REFERENCES `Employee`(`employeeCode`) ON DELETE CASCADE ON UPDATE CASCADE;
