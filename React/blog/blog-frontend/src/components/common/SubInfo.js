import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const SubInfoBlock = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span + span::before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }

  ${(props) =>
    props.hasMarginTop &&
    css`
      margin-top: 1rem;
    `}
`;

function SubInfo({ username, publishedDate, hasMarginTop }) {
  return (
    <SubInfoBlock>
      <span>
        <b>
          <Link to={`/@${username}`}>{username}</Link>
        </b>
      </span>
      <span>{new Date(publishedDate).toLocaleDateString()}</span>
    </SubInfoBlock>
  );
}

export default SubInfo;
