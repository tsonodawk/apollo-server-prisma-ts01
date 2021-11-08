import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const mutationResolver = {
  addDepartment: async (
    _parent: any,
    args: { departmentCode: string; departmentName: string },
    // args: any,
    _context: any
  ) => {
    const department = {
      departmentCode: args.departmentCode,
      departmentName: args.departmentName,
    }
    const dept = await prisma.department.create({
      data: department,
    })

    return dept
  },
}
