import React, { useRef, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';
import { useDispatch } from 'react-redux';
import { uploadImg, removeImg } from 'modules/stores/post';
import WritePostOps from './WritePostOps';
import { changeInput } from 'modules/stores/write';

export default function WriteOpsPanel({
  onSubmit,
  toggleOps,
  setToggleOps,
  coverImg,
  tags,
  desc,
}) {
  const imageInput = useRef();
  const dispatch = useDispatch();

  const onChangeInput = useCallback(
    (name, value) => dispatch(changeInput({ name, value })),
    [dispatch],
  );
  const onChangehandle = useCallback(e => {
    onChangeInput(e.target.name, e.target.value);
  });

  const onChangeImage = useCallback(
    e => {
      console.log(e.target.files);
      if (coverImg) {
        const imageFormData = new FormData();
        [].forEach.call(e.target.files, f => {
          imageFormData.append('image', f);
          // 'image'는 서버에서도 같은 네이밍을 씀 / 키-벨류 / ajax에서 사용
        });
        console.log(imageFormData.getAll('image'));
        dispatch(uploadImg({ imageFormData }));
      } else {
        dispatch(removeImg());
      }
    },
    [dispatch],
  );

  const onClickImageUpload = useCallback(e => {
    imageInput.current.click();
  }, []);

  return (
    <>
      <WriteOpsWrap encType="multipart/form-data" toggleOps={toggleOps}>
        <RadioWrap>
          <input
            id="post"
            type="radio"
            name="filter"
            value="post"
            checked="checked"
          />
          <label htmlFor="post">Post</label>
          <input id="series" type="radio" name="filter" value="series" />
          <label htmlFor="series">Series</label>
          <input id="project" type="radio" name="filter" value="project" />
          <label htmlFor="project">Project</label>
        </RadioWrap>
        <CommonDesc>
          <ImageWrap onClick={onClickImageUpload}>
            <input
              id="image"
              type="file"
              multiple
              hidden
              ref={imageInput}
              onChange={onChangeImage}
            />
            {coverImg ? (
              <>
                <img
                  src={`${process.env.REACT_APP_SERVER_URL}/${coverImg}`}
                  alt="coverImg"
                  width="100px"
                  height="100px"
                />
                <span>Remove</span>
              </>
            ) : (
              <span>Upload</span>
            )}
          </ImageWrap>
          <DescWrap>
            <textarea
              name="desc"
              value={desc}
              rows="5"
              onChange={onChangehandle}
            ></textarea>
          </DescWrap>
        </CommonDesc>
        <CloseButton className="far fa-times-circle" onClick={setToggleOps} />
        <div onClick={onSubmit}>post</div>
        <WritePostOps tags={tags} onChangeInput={onChangeInput} />
      </WriteOpsWrap>
    </>
  );
}

const WriteOpsWrap = styled.form`
  position: absolute;
  overflow:hidden
  top: 0;
  right: 0;
  background: ${palette.gray2};
  width: 20rem;
  height: 20rem;
  transition: all 1s ease-in;
  padding: 2rem 1rem;
    ${props =>
      props.toggleOps &&
      css`
        padding: 2rem 1rem;
        height: 20rem;
      `};
`;

const RadioWrap = styled.div`
  color: ${palette.gray7};
  margin-bottom: 1rem
  text-align: center;
  & > label {
    margin-right: 1rem;
  }
`;

const CommonDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ImageWrap = styled.div`
  border: 1px dashed ${palette.gray6};
  margin-right: 1rem;
  width: 50%;
  flex: 1;
  position: relative;
  overflow: hidden;
  & > span {
    position: absolute;
    top: 150%;
    right: 50%;
    transform: translateX(50%);
  }
  &:hover {
    border: 2px dashed ${palette.blue5};
    color: ${palette.blue5};
    cursor: pointer;
  }
  &:hover > span {
    top: 50%;
    right: 50%;
    transform: translate(50%, -52%);
    transition: all 0.3s ease-in;
  }
`;
const DescWrap = styled.div`
  flex: 1;
  width: 50%;
  & > textarea {
    width: 100%;
    height: 100%;
  }
`;

const CloseButton = styled.i`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
`;
