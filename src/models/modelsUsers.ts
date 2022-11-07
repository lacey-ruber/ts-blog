export interface ServerResponseUsers {
  limit: number
  skip: number
  total: number
  users: IUserInfo[]
}

export interface ServerResponsePosts {
  limit: number
  skip: number
  total: number
  posts: IPost[]
}

export interface ServerResponseComments {
  limit: number
  skip: number
  total: number
  comments: IComment[]
}

export interface IUserInfo {
  id: number | null
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number | null
  weight: number | null
  eyeColor: string
  hair: IHair
  domain: string
  ip: string
  address: IAddress
  macAddress: string
  university: string
  bank: IBank
  company: ICompany
  ein: string
  ssn: string
  userAgent: string
}

export interface IHair {
  color: string
  type: string
}

export interface ICoordinates {
  lat: number | null
  lng: number | null
}

export interface IAddress {
  address: string
  city: string
  coordinates: ICoordinates
  postalCode: string
  state: string
}

export interface IBank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface ICoordinates2 {
  lat: number | null
  lng: number | null
}

export interface IAddress2 {
  address: string
  city: string
  coordinates: ICoordinates2
  postalCode: string
  state: string
}

export interface ICompany {
  address: IAddress2
  department: string
  name: string
  title: string
}

export interface IAuth {
  username: string
  password: string
}

export interface IRegister {
  firstName: string
  lastName: string
  maidenName: string
  age: number | null
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number | null
  weight: number | null
  eyeColor: string
  hair: IHair
  address: IAddress
  university: string
  bank: IBank
  company: ICompany
}

export interface IAuthResponse {
  id: number | null
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export interface IComment {
  id: number | null
  body: string
  postId: number | null | any
  user: {
    id: number | null
    username: string
  }
}

export interface IPost {
  id: number | null
  title: string
  body: string
  userId: number | null
  tags: string[]
  reactions: number | null
}
