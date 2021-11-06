import { companys } from '../data/companys'
import { Company, Store } from '../types/generated/graphql'

export const storeResolver = {
  // store内のcompnayリレーション定義
  company: (parent: Store, _args: any, _context: any) => {
    return companys.find((item) => item.id === parent.companyId) as Company
  },
}
