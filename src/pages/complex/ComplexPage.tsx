import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {loadUsers} from "../../redux/slices/userSlice/userSliceActions.ts";
import {loadPosts} from "../../redux/slices/postSlice/postSliceActions.ts";
import {loadComments} from "../../redux/slices/commentSlice/commentSliceActions.ts";

export const ComplexPage = () => {
    const {userSlice: {users}, commentSlice: {comments}, postSlice: {posts}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!users) dispatch(loadUsers());
        if (!posts) dispatch(loadPosts());
        if (!comments) dispatch(loadComments());
    }, [])

    const allDataFetched = users && posts && comments
    if (!allDataFetched) return null;
    return (
        <div>
            <h2>Complex page</h2>
            <p>{allDataFetched ? ("YES") : "NO"}</p>
            {
                users.map((user) => (
                    <div key={user.id}>
                        User {user.id}
                        <ul>

                            {posts.filter((post) => post.userId === user.id).map((post) => (
                                <li key={post.id}>
                                    Post {post.id} of user {post.userId}
                                    <ul>

                                        {comments.filter((comment) => comment.postId === post.id).map((comment) => (
                                            <li>Comment {comment.id} of post {comment.postId} of
                                                user {post.userId}</li>))}
                                    </ul>
                                </li>))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
};