import React from 'react';
import introduceImg from 'statics/images/introduceImg.jpg';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import CustomButton from 'lib/CustomButton';
import IntroObjective from './IntroObjective';
import IntroCoreValue from './IntroCoreValue';
import IntroBasicInfo from './IntroBasicInfo';
import ProfileComponentLayout from '../common/ProfileComponentLayout';
import smoothScrollTo from 'lib/scrollTo';
import { useHistory } from 'react-router-dom';

const Introduce = () => {
  const history = useHistory();
  return (
    <>
      <ProfileComponentLayout title="Introduce" id="introduce">
        <IntroObjective />
        <IntroduceWrap>
          <IntroduceContentWrap>
            <IntroduceImgWrap onClick={() => smoothScrollTo('contactMe', 150)}>
              <IntroduceImg
                src={introduceImg}
                alt="introduceImg"
              ></IntroduceImg>
              <IntroduceImgText>Contact Me</IntroduceImgText>
            </IntroduceImgWrap>
            <IntroduceTextWrap>
              <IntroBasicInfo />
              <IntroCoreValue />
              <ButtonWrap>
                <CustomButton
                  color="darkGray"
                  size="medium"
                  onClick={() => smoothScrollTo('skillsList', 100)}
                >
                  Show Skills List
                </CustomButton>
                <CustomButton
                  color="darkGray"
                  size="medium"
                  onClick={() => history.push('/project')}
                >
                  Show Project List
                </CustomButton>
              </ButtonWrap>
            </IntroduceTextWrap>
          </IntroduceContentWrap>
        </IntroduceWrap>
      </ProfileComponentLayout>
    </>
  );
};

export default Introduce;

const IntroduceWrap = styled.span`
  display: grid;
  grid-template-columns: 1fr 60rem 1fr;
  grid-template-rows: 18rem;
`;
// height 30 - padding 3
const IntroduceContentWrap = styled.div`
  padding: 1.5rem 0;
  grid-column-start: 2;
  display: grid;
  grid-template-columns: 20rem 40rem;
  grid-template-rows: 15rem;
  border: 1px solid black;
  box-shadow: 3px 4px 15px 0px rgba(0, 0, 0, 0.6);
`;
const IntroduceImgWrap = styled.div`
  grid-column-start: 1;
  margin: 0 2rem;
  display: inline-block;
  position: relative;
  overflow: hidden;
  &:last-child {
    margin-right: 0;
  }
  &:hover > img {
    transform: scale(1.4);
    transition: all 0.5s;
    filter: blur(4px) brightness(80%);
  }
  &:hover > div {
    opacity: 1;
    transition: all 0.5s;
    transform: translate(-50%, -50%);
  }
`;
const IntroduceImg = styled.img`
  width: 16rem;
  height: 15rem;
`;

const IntroduceImgText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  color: ${palette.gray2};
  font-size: 2rem;
  text-align: center;
  opacity: 0;
  transition: all 0.5s;
`;

const IntroduceTextWrap = styled.div`
  grid-column-start: 2;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  position: relative;
`;

const ButtonWrap = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 1rem;
  & button {
    width: 13rem;
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }
  & button:first-child {
    margin: 0 7rem 0 2rem;
  }
`;
