import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import IUser from '../../model/IUser'

interface IUserIdState {
    userId: string|null,

}

const initialState: IUserIdState = {
    userId:""
 
}

export const userIdSlice = createSlice({
    name: 'userIdReducer',
    initialState,
    reducers: {
        setUserId: (state, action: PayloadAction<string>) => {
            state.userId = action.payload;
        },
    },
})

export const { setUserId } = userIdSlice.actions
export default userIdSlice.reducer;