import {createSlice} from "@reduxjs/toolkit";
import type {IComment} from "../../../models/comment/IComment.ts";
import {loadComments} from "./commentSliceActions.ts";

type CommentSliceType = {
    comments: IComment[] | null
}

const initialState:CommentSliceType = {
    comments: null,
}

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadComments.fulfilled, (state, action)=>{
            state.comments=action.payload
        })
    }
})

export const commentSliceActions = {
    ...commentSlice.actions,
}