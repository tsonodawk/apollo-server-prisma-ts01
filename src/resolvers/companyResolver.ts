import { stores } from '../data/stores'
import { Company, Store } from '../types/generated/graphql'

export const companyResolver = {
  stores: (parent: Company, _args: any, _context: any) => {
    const listStore: any = stores.filter(
      (item) => item.companyId === parent.id
    ) as Store

    return listStore
  },
}
