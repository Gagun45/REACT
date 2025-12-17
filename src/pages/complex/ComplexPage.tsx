import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {loadUsers} from "../../redux/slices/userSlice/userSliceActions.ts";
import {loadPosts} from "../../redux/slices/postSlice/postSliceActions.ts";

export const ComplexPage = () => {
    const state = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!state.userSlice.users) dispatch(loadUsers());
        if (!state.postSlice.posts) dispatch(loadPosts());
    },[])

    const allDataFetched = state.userSlice.users&&state.postSlice.posts
    return (
        <div>
            <h2>Complex page</h2>
            <p>{allDataFetched ? ("YES"): "NO"}</p>

        </div>
    );
};