import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import CustomButton from 'lib/CustomButton';
import palette from 'lib/styles/palette';
import WirteOpsPanel from './WriteOpsPanel';

export default function EditHeader({
  onGoBack,
  onSubmit,
  coverImg,
  tags,
  desc,
}) {
  const [toggleOps, setToggleOps] = useState(false);

  const onClickHandle = useCallback(() => {
    setToggleOps(!toggleOps);
  }, [toggleOps]);

  return (
    <>
      <Header>
        <CustomButton inline color="darkGray" onClick={onGoBack}>
          Back
        </CustomButton>
        <CustomButton
          color="lightGray"
          onClick={onClickHandle}
          style={{ marginLeft: 'auto' }}
        >
          Post
        </CustomButton>
        <WirteOpsPanel
          onSubmit={onSubmit}
          toggleOps={toggleOps}
          setToggleOps={onClickHandle}
          coverImg={coverImg}
          tags={tags}
          desc={desc}
        />
      </Header>
    </>
  );
}

const Header = styled.div`
  z-index: 10;
  position: relative;
  background: ${palette.gray7};
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
`;
