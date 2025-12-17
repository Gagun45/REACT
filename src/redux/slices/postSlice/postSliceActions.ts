import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../constants/urls.ts";
import type {IPost} from "../../../models/post/IPost.ts";


export const loadPosts = createAsyncThunk(
    'loadPosts',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(BASE_URL+'/posts')
            const items = (await res.json()) as IPost[]
            return thunkAPI.fulfillWithValue(items)
        } catch (e) {
            console.log('loadPosts error: ', e);
            return thunkAPI.rejectWithValue('Server error, smth went wrong')
        }

    })