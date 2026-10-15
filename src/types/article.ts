export interface Article {
  id: number
  title: string
  star: number
  modify_time: Date
  owner: {
    name: string
    avatar: string
  }
}
