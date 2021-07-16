import React from 'react';
import styled from 'styled-components';

const NewsItemBlocks = styled.div`
    display: flex;

    .thumbnail {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height : 100px;
            //이미지나 비디오 요소의 콘텐츠 크기 조절
            object-fit: cover;
        }
    }

    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }

        p {
            margin: 0;
            line-height : 1.5;
            margin-top: 0.5rem;
            //공백 문자 처리
            white-space: normal;
        }
    }

    & + & 
    {
        margin-top: 3rem;
    }
`;

const NewsItem = ({ article }) => {
    const { title, description, url, urlToPage} = article;
    return (
        <NewsItemBlocks>
            {urlToPage && (
                <div className="thumbnail">
                    <a href={url} target = "_blank" rel = "noopener noreferrer">
                        <img src={urlToPage} alt="thumbnail"/>
                    </a>
                </div>
            )}
            <div className="contents">
                <h2>
                    <a href={url} target = "_blank" rel = "noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlocks>
    );
};

export default NewsItem;