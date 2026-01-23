import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Product = {
  id: number
  nome: string
  preco: number
  foto: string
  quantidade: number
}

type CartState = {
  items: Product[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<Product, 'quantidade'>>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        item.quantidade++
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantidade > 1) {
        item.quantidade--
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    }
  }
})

export const { add, decrement, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer