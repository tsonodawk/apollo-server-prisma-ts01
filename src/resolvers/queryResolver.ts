import { books } from '../data/books'
import { companys } from '../data/companys'
import { stores } from '../data/stores'
import { Company, Store } from '../types/generated/graphql'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// console.log('IN QUERY')

export const queryResolver = {
  books: () => books,

  getCompanyById: async (_parent: any, args: { id: number }, _context: any) => {
    const company = await companys.find((item) => item.id === args.id)
    return company as Company
  },
  listCompanys: () => {
    return companys
  },
  getStoreByStoreCode: async (
    _parent: any,
    args: { storeCode: string },
    _context: any
  ) => {
    const store = await stores.find((item) => (item.storeCode = args.storeCode))
    return store as Store
  },
  listStores: () => {
    return stores
  },
  listStoresByCompanyId: async (
    _parent: any,
    args: { companyId: number },
    _context: any
  ) => {
    const listStore: any = await stores.find(
      (item) => (item.companyId = args.companyId)
    )
    return listStore
  },
  listDepartment: async () => {
    // const rsl = await prisma.department.findMany()
    // rsl.map((item: any) => {
    //   console.log(item.createdAt)
    // })

    return await prisma.department.findMany({
      include: {
        employees: true,
      },
    })
    // return (await prisma.department.findMany()).map((item) =>
    //   console.log(item.createdAt)
    // )
  },
  listEmployee: async () => {
    const employee = await prisma.employee.findMany({
      // where: {
      //   department: {
      //     departmentCode: code

      //   }
      // },
      include: {
        departments: true,
      },
    })

    return employee
  },
}
