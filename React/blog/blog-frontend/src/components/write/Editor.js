import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import Responsive from '../common/Responsive';

const EditorBox = styled(Responsive)`
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-bottom: 1px solid ${palette.gray[4]};
`;
const TitleInput = styled.input`
    border: none;
    font-size: 3rem;
    outline: none;
    width: 100%;
    border-bottom: 1px solid ${palette.gray[4]};
    padding-bottom: 0.5rem;
`;
const QuilWrapper = styled.div`
    .ql-editor {
        padding : 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }

    .ql-editor, ql-blank::before {
        left: 0px;
    }
`;
const Editor = ({ title, body, onChangeField }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);

    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme : 'bubble',
            placeholder : '내용을 작성하세요...',
            modules : {
                toolbar : [
                    [{header : '1'}, {header : '2'}],
                    ['bold' , 'italic', 'underline', 'strike'],
                    [{list : 'ordered'}, {list : 'bullet'}],
                    ['blockquote', 'code-block', 'link', 'image'],
                ]
            },
        });

        const quill = quillInstance.current;
        quill.on('text-change', (delta, oldDelta, source) => {
            if(source === 'user') {
                onChangeField({ key : 'body', value : quill.root.innerHTML});
            }
        });
    }, [onChangeField])

    const onChangeTitle = e => {
        onChangeField({key : 'title', value : e.target.value})
    };

    return (
        <EditorBox>
            <TitleInput placeholder = "제목을 입력하세요" value = {title} onChange = {onChangeTitle} />
            <QuilWrapper>
                <div ref = {quillElement} />
            </QuilWrapper>
        </EditorBox>
    );
};

export default Editor;