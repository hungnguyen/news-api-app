import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

// Define a type for the slice state
interface FavoriteState {
  data: any[]
}

// Define the initial state using that type
const initialState: FavoriteState = {
  data: []
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<any>) => {
      state.data = state.data.concat(action.payload)
    },
    deleteFavorite: (state, action: PayloadAction<any>) => {
      state.data = state.data.filter((item: any) => item.url !== action.payload.url)
    },
    
  },
})

export const { addFavorite, deleteFavorite } = favoriteSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const favoriteSelector = (state: RootState) => state.favorites

export default favoriteSlice.reducer