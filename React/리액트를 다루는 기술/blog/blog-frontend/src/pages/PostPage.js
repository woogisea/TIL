import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
    return (
        <div>
            <HeaderContainer />
            <PostViewerContainer />
        </div>
    );
};

export default PostPage;