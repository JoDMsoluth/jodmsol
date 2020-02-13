import React, { useCallback } from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import { useDispatch } from 'react-redux';
import { changeInput } from 'modules/stores/write';

export default function WritePostOps({ tags }) {
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (name, value) => dispatch(changeInput({ name, value })),
    [dispatch],
  );
  const onChangehandle = useCallback(e => {
    onChangeInput(e.target.name, e.target.value);
  });

  return (
    <>
      <PostOpsWrap>
        <TagsWrap>
          <div>태그</div>
          <input
            name="tags"
            value={tags}
            placeholder="태그를 입력하세요"
            onChange={onChangehandle}
          />
        </TagsWrap>
      </PostOpsWrap>
    </>
  );
}

const PostOpsWrap = styled.div`
  height: 7rem;
  background: green;
`;

// tag, category, series
// category
const TagsWrap = styled.div`
  padding: 0 1rem;
  height: 2rem;
  display: flex;
  align-items: center;
  background: ${palette.gray8};
  & > div {
    font-size: 1rem;
    color: white;
    font-weight: 600;
    margin-right: 1rem;
    padding-bottom: 0.2rem;
  }
  & > input {
    flex: 1;
  }
`;
