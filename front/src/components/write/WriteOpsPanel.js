import React, { useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';
import { useDispatch } from 'react-redux';
import { uploadImg } from 'modules/stores/post';

export default function WriteOpsPanel({
  onSubmit,
  toggleOps,
  setToggleOps,
  coverImg,
}) {
  const imageInput = useRef();
  const dispatch = useDispatch();

  const onChangeImage = useCallback(
    e => {
      console.log(e.target.files);
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append('image', f);
        // 'image'는 서버에서도 같은 네이밍을 씀 / 키-벨류 / ajax에서 사용
      });
      console.log(imageFormData.getAll('image'));
      dispatch(uploadImg({ imageFormData }));
    },
    [dispatch],
  );
  const onClickImageUpload = useCallback(e => {
    imageInput.current.click();
  }, []);

  return (
    <>
      <WriteOpsWrap encType="multipart/form-data" toggleOps={toggleOps}>
        <input id="post" type="radio" name="post" value="post" />
        <label for="post">Post</label>
        <input id="series" type="radio" name="series" value="series" />
        <label for="series">Series</label>
        <input id="project" type="radio" name="project" value="project" />
        <label for="project">Project</label>
        <input
          id="image"
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImage}
        />
        <div onClick={onClickImageUpload}>Upload</div>
        <img src={coverImg} alt="coverImg" width="100px" height="100px" />
        <i className="far fa-times-circle" onClick={setToggleOps} />
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
  height: 0rem;
  transition: height 1s ease-in
    ${props =>
      props.toggleOps &&
      css`
        display: inline-block;
        height: 20rem;
      `};
`;
