import React, { useEffect } from 'react';
import PostList from '../../components/post/PostList';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { listPosts } from '../../modules/posts';


const PostListContainer = ({location, match}) => {
    const dispatch = useDispatch();
    const {posts, error, loading, user}  = useSelector(({posts, loading, user}) => (
        {
            posts : posts.posts,
            error : posts.error,
            loading : loading['posts/LIST_POST'],
            user : user.user
        }
    ));

    useEffect(() => {
        const { username }  = match.params;
        const { tag, page } = qs.parse(location.search, {
            ignoreQueryPrefix : true,
        });
        dispatch(listPosts({page, username, tag}));
    }, [dispatch,location.search ]);

    return (
        <PostList posts = {posts} error = {error} loading = {loading} showWriteButton = {user} />
    );
};

export default withRouter(PostListContainer);