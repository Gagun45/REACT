import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/user/IUser.ts";
import {loadUsers} from "./userSliceActions.ts";

type UserSliceType = {
    users: IUser[] | null;
}



const initialState: UserSliceType = {users: null}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export const userSliceActions = {
    ...userSlice.actions,
}