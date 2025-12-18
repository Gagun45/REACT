import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IComment} from "../../../models/comment/IComment.ts";
import {getAllItems} from "../../../service/api.service.ts";

type CommentSliceType = {
    comments: IComment[] | null
}

const initialState:CommentSliceType = {
    comments: null,
}

const loadComments = createAsyncThunk('loadComments', async(_, thunkAPI)=>{
    try {
        const comments = await getAllItems<IComment[]>('/comments')
        return thunkAPI.fulfillWithValue(comments)
    } catch (e) {
        console.log(e);
        return thunkAPI.rejectWithValue('Server error, loading');
    }
})

export const commentSlice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(loadComments.fulfilled, (state, action:PayloadAction<IComment[]>)=>{
            state.comments=action.payload
        })
    }
})

export const commentSliceActions = {
    ...commentSlice.actions, loadComments
}