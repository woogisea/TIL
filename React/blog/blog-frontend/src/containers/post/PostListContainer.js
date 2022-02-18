import React, { useEffect } from 'react';
import PostList from '../../components/post/PostList';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { listPosts } from '../../modules/posts';

function PostListContainer() {
  const { username } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { posts, error, loading, user } = useSelector(
    ({ posts, user, loading }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['posts/LIST_POSTS'],
      user: user.user,
    }),
  );

  useEffect(() => {
    const tag = searchParams.get('tag');
    const page = parseInt(searchParams.get('page'), 10) || 1;
    dispatch(listPosts({ tag, page, username }));
  }, [dispatch, searchParams, username]);
  return (
    <PostList
      posts={posts}
      error={error}
      showWriteButton={user}
      loading={loading}
    ></PostList>
  );
}

export default PostListContainer;
