import {createSlice} from "@reduxjs/toolkit";
import type {IPost} from "../../../models/post/IPost.ts";
import {loadPosts} from "./postSliceActions.ts";

type PostSliceType = {
    posts: IPost[] | null;
}


const initialState: PostSliceType = {posts: null}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
    }
})

export const postSliceActions = {
    ...postSlice.actions,
}