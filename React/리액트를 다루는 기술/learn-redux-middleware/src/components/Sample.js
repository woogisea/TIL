import React from 'react';

const Sample = (loadingPost, loadingUser, post, users) => {
    return (
        <div>
            <section>
                <h1>포스트</h1>
                {loadingPost && '로딩중'}
                {!loadingPost && post && (
                    <div>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                    </div>
                )}
            </section>
            <section>
                <h1>사용자 목록</h1>
                {loadingUser && '로딩중'}
                {!loadingUser && users && (
                    <div>
                        <h3>{users.username}</h3>
                        <h3>{users.email}</h3>
                    </div>
                )}
            </section>
        </div>
    );
};

export default Sample;