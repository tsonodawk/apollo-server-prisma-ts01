export type Context = {
  user?: {
    name: string
    email: string
    token: string
  }
  apiToken?: {
    token: string
  }
}
