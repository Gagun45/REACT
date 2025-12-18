import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../../models/post/IPost.ts";
import {getAllItems} from "../../../service/api.service.ts";

type PostSliceType = {
    posts: IPost[] | null;
}

const initialState: PostSliceType = {posts: null}

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkApi)=>{
    try {
        const posts = await getAllItems<IPost[]>('/posts')
        return thunkApi.fulfillWithValue(posts)
    } catch (e) {
        console.log(e);
        return thunkApi.rejectWithValue('Something went wrong')
    }
})

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadPosts.fulfilled, (state, action:PayloadAction<IPost[]>) => {
            state.posts = action.payload
        })
    }
})

export const postSliceActions = {
    ...postSlice.actions, loadPosts,
}