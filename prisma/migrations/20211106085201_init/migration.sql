-- DropIndex
DROP INDEX `Employee_employeeCode_key` ON `Employee`;

-- AlterTable
ALTER TABLE `Employee` ADD PRIMARY KEY (`employeeCode`);
