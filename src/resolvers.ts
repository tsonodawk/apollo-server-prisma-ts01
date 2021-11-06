import { books } from './data/books'
import { chatUsers } from './data/chatUsers'
import { rooms } from './data/rooms'
import { messages } from './data/messages'
import { companys } from './data/companys'
import { stores } from './data/stores'
import {
  ChatUser,
  Company,
  Store,
  Message,
  Resolvers,
  Room,
} from './types/generated/graphql'
import { storeResolver } from './resolvers/storeResolver'
import { companyResolver } from './resolvers/companyResolver'
import { queryResolver } from './resolvers/queryResolver'

export const resolvers: Resolvers = {
  Query: queryResolver,
  // Query: {
  //   books: () => books,

  //   getCompanyById: async (
  //     _parent: any,
  //     { id }: { id: number },
  //     _context: any
  //   ) => {
  //     const company = await companys.find((item) => item.id === id)
  //     return company as Company
  //   },
  //   listCompanys: () => {
  //     return companys
  //   },
  //   getStoreByStoreCode: async (
  //     _parent: any,
  //     { storeCode }: { storeCode: string },
  //     _context: any
  //   ) => {
  //     const store = await stores.find((item) => (item.storeCode = storeCode))
  //     return store as Store
  //   },
  //   listStores: () => {
  //     return stores
  //   },
  //   listStoresByCompanyId: async (_parent: any, args: any, _context: any) => {
  //     const listStore: any = await stores.find(
  //       (item) => (item.companyId = args.companyId)
  //     )
  //     return listStore
  //   },
  // },
  Store: storeResolver,
  // Store: {
  //   company: (parent, args, context) => {
  //     return companys.find((item) => item.id === parent.companyId) as Company
  //   },
  // },
  Company: companyResolver,
  // Company: {
  //   stores: (parent: Company, _args, _context) => {
  //     const listStore: any = stores.filter(
  //       (item) => item.companyId === parent.id
  //     ) as Store

  //     return listStore
  //   },
  // },
}
