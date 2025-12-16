import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../models/user/IUser.ts";

type UserSliceType = {
    users: IUser[];
}

const initialState:UserSliceType = {users:[]}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
})