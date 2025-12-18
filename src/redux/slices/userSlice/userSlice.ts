import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/user/IUser.ts";
import {getAllItems} from "../../../service/api.service.ts";

type UserSliceType = {
    users: IUser[] | null;
}

const initialState: UserSliceType = {users: null}

const loadUsers = createAsyncThunk('loadUsers', async (_, thunkAPI) => {
    try {
        const users = await getAllItems<IUser[]>('/users')
        return thunkAPI.fulfillWithValue(users)
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Something went wrong')
    }
})

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
    }
})

export const userSliceActions = {
    ...userSlice.actions, loadUsers,
}