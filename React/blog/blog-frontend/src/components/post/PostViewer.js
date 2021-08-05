import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostViewerBox = styled.div`
    margin-top: 4rem;
`;
const PostHead = styled.div`
    margin-left: 1.5rem;
    border-bottom: 1px solid ${palette.gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;

    h1 {
        margin: 0;
    }
`;
const SubInfo = styled.div`
    margin-top: 1rem;
    .user {
        margin-right: 1rem;
        color : ${palette.gray[6]};
    }

    .nowDate {
        color : ${palette.gray[5]};
    }
`;
const Tags = styled.div`
    display: flex;
    margin-top: 0.5rem;
    color: ${palette.cyan[5]};
    
    .tag {
        margin-right: 0.5rem;

        &:hover {
            color: ${palette.cyan[3]};
        }
    }
`;
const PostContent = styled.div`
    font-size: 1.3125rem;
    color: ${palette.gray[8]};
`;
const PostViewer = () => {
    return (
        <PostViewerBox>
            <PostHead>
                <h1>제목</h1>
                <SubInfo>
                    <span className = "user">tester</span>
                    <span className = "nowDate">{new Date().toLocaleDateString()}</span>
                </SubInfo>
                <Tags>
                    <div className="tag">#태그1</div>
                    <div className="tag">#태그2</div>
                    <div className="tag">#태그3</div>
                </Tags>
            </PostHead>
            <PostContent>
                dangerouslySetInnerHTML= {{__html : `<p>HTML <b>내용</b> 입니다 </p>`}}
            </PostContent>
        </PostViewerBox>
    );
};

export default PostViewer;