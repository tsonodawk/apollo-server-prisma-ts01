import { PrismaClient } from '@prisma/client'
import { Department } from 'types/generated/graphql'

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
  creatEmployee: async (
    _parent: any,
    args: {
      employeeCode: string
      employeeName?: string | null | undefined
      deptcodes?: any
    },
    _context: any
  ) => {
    const departmentsList: Department[] = args.deptcodes?.map(
      (item: string) => {
        return { departmentCode: item }
      }
    )

    const employee = await prisma.employee.create({
      // data: employeeObj,
      data: {
        employeeCode: args.employeeCode,
        employeeName: args.employeeName ? args.employeeName : null,
        departments: {
          connect: departmentsList,
          // connect: [{ departmentCode: 'dept001' }],
        },
      },
    })

    return employee
  },
  updateEmployee: async (
    _parent: any,
    args: {
      employeeCode: string
      deptcodes?: any
    },
    _context: any
  ) => {
    const departmentsList: Department[] = args.deptcodes?.map(
      (item: string) => {
        return { departmentCode: item }
      }
    )

    const updateEmp = await prisma.employee.update({
      where: { employeeCode: args.employeeCode },
      data: {
        departments: {
          set: departmentsList,
        },
      },
    })
    return updateEmp
  },
  deleteEmployee: async (
    _parent: any,
    args: {
      employeeCode: string
    },
    _context: any
  ) => {
    const deleteEmp = await prisma.employee.delete({
      where: { employeeCode: args.employeeCode },
    })
    return deleteEmp
  },

  updateHubspotContact: async (
    _parent: any,
    args: {
      contactId: string
      phone: string
    },
    context: any
  ) => {
    const contact = await context.dataSources.hubspotAPI.updateHubspotContact(
      args.contactId,
      args.phone
    )
    return contact
  },
}
