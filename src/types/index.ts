export interface Product {
  id: string
  name: string
  price: number
  image: string
  description?: string
  variants?: ProductVariant[]
}

export interface ProductVariant {
  id: string
  name: string
  price: number
  available: boolean
}

export interface CartItem {
  id: string
  product: Product
  variant?: ProductVariant
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}
