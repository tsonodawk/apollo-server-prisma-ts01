import { books } from '../data/books'
import { companys } from '../data/companys'
import { stores } from '../data/stores'
import { Company, Store } from '../types/generated/graphql'

export const queryResolver = {
  books: () => books,

  getCompanyById: async (
    _parent: any,
    { id }: { id: number },
    _context: any
  ) => {
    const company = await companys.find((item) => item.id === id)
    return company as Company
  },
  listCompanys: () => {
    return companys
  },
  getStoreByStoreCode: async (
    _parent: any,
    { storeCode }: { storeCode: string },
    _context: any
  ) => {
    const store = await stores.find((item) => (item.storeCode = storeCode))
    return store as Store
  },
  listStores: () => {
    return stores
  },
  listStoresByCompanyId: async (_parent: any, args: any, _context: any) => {
    const listStore: any = await stores.find(
      (item) => (item.companyId = args.companyId)
    )
    return listStore
  },
}
