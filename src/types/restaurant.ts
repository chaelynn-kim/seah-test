export type Cuisine =
  | '한식'
  | '일식'
  | '중식'
  | '양식'
  | '카페'
  | '분식'
  | '기타'

export type PriceRange = 1 | 2 | 3 | 4

export interface Restaurant {
  id: string
  name: string
  cuisine: Cuisine
  rating: number
  reviewCount: number
  priceRange: PriceRange
  address: string
  district: string
  tags: string[]
  description: string
  image: string
  isOpen: boolean
}
