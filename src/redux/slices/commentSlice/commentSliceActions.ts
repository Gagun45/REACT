import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../../constants/urls.ts";
import type {IComment} from "../../../models/comment/IComment.ts";


export const loadComments = createAsyncThunk(
    'loadComments',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(BASE_URL+'/comments')
            const items = (await res.json()) as IComment[]
            return thunkAPI.fulfillWithValue(items)
        } catch (e) {
            console.log('loadComments error: ', e);
            return thunkAPI.rejectWithValue('Server error, smth went wrong')
        }

    })