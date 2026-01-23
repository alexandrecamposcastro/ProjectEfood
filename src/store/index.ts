import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types'

type CartItem = Product & {
  quantidade: number
}

type CartState = {
  items: CartItem[]
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
    add: (state, action: PayloadAction<Product>) => {
      const itemNoCarrinho = state.items.find((item) => item.id === action.payload.id)
      if (itemNoCarrinho) {
        itemNoCarrinho.quantidade++
      } else {
        state.items.push({ ...action.payload, quantidade: 1 })
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    incrementar: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item) item.quantidade++
    },
    decrementar: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload)
      if (item && item.quantidade > 1) {
        item.quantidade--
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload)
      }
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close, incrementar, decrementar } = cartSlice.actions

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>