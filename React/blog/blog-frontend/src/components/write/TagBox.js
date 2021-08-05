import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div`
    padding-top: 2rem;
    span {
        font-weight: bold;
    }
`;
const TagInputBlock = styled.form`
    margin-top: 0.5rem;
    display: flex;

    input[type="text"] {
        padding: 0.5rem;
        border: none;
        border: 1px solid ${palette.gray[8]};
        outline: none;
    }

    button[type = "submit"] {
        border: 1px solid ${palette.gray[8]};
        padding: 0 0.8rem;
        background-color: ${palette.gray[8]};
        color: white;
        cursor: pointer;

        &:hover {
            background-color: ${palette.gray[6]};
        }
    }
`;
const Tag = styled.div`
    color: ${palette.gray[5]};
    padding-right: 0.5rem;
    cursor: pointer;

    &:hover {
        color: ${palette.gray[7]};
    }
`;
const TagListWrapper = styled.div`
    display: flex;
    margin-top: 0.5rem;
`;
const TagItem = React.memo(({tag, onRemove}) => <Tag onClick = {() => onRemove(tag)}>#{tag}</Tag>);
const TagList = React.memo(({tages, onRemove}) => (
    <TagListWrapper>
        {tages.map(tag => (
            <TagItem key = {tag} tag = {tag} onRemove = {onRemove}/>
        ))}
    </TagListWrapper>
));


const TagBox = ({ tags, onChangeTags }) => {
    const [input, setInput] = useState('');
    const [localTags, setLocalTags] = useState([]);

    const insertTag = useCallback(
        tag => {
            if(!tag) return;
            if(localTags.includes(tag)) return;

            const nextTags = [...localTags, tag];
            setLocalTags(nextTags);
            onChangeTags(nextTags);
            
        },
        [localTags, onChangeTags],
    );

    const onChange = useCallback(
        e => {
            setInput(e.target.value)
        },
        [],
    );

    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            insertTag(input.trim());
            setInput('');
        },
        [input, insertTag],
    );

    const onRemove = useCallback(
        tag => {
            const nextTags = localTags.filter(t => t!==tag);
            setLocalTags(nextTags);
            onChangeTags(nextTags);
        },
        [localTags, onChangeTags],
    );
    
    useEffect(() => {
        setLocalTags(tags);
    }, [tags]);


    return (
        <TagBoxBlock>
            <span>태그</span>
            <TagInputBlock onSubmit = {onSubmit}>
                <input type="text" placeholder = "태그를 입력하세요" value = {input} onChange = {onChange}/>
                <button type="submit">추가</button>
            </TagInputBlock>
            <TagList tages = {localTags} onRemove = {onRemove}/>
        </TagBoxBlock>
    );
};

export default TagBox;