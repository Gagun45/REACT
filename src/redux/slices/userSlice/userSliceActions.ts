import {createAsyncThunk} from "@reduxjs/toolkit";
import type {IUser} from "../../../models/user/IUser.ts";
import {BASE_URL} from "../../../constants/urls.ts";


export const loadUsers = createAsyncThunk(
    'loadUsers',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(BASE_URL+'/users')
            const items = (await res.json()) as IUser[]
            return thunkAPI.fulfillWithValue(items)
        } catch (e) {
            console.log('loadUsers error: ', e);
            return thunkAPI.rejectWithValue('Server error, smth went wrong')
        }

    })