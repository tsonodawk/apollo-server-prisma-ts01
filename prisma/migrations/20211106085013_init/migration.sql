-- CreateTable
CREATE TABLE `Department` (
    `departmentCode` VARCHAR(191) NOT NULL,
    `departmentName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Department_departmentCode_key`(`departmentCode`),
    PRIMARY KEY (`departmentCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Employee` (
    `employeeCode` VARCHAR(191) NOT NULL,
    `employeeName` VARCHAR(191) NOT NULL,
    `departmentCode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Employee_employeeCode_key`(`employeeCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Employee` ADD CONSTRAINT `Employee_departmentCode_fkey` FOREIGN KEY (`departmentCode`) REFERENCES `Department`(`departmentCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
