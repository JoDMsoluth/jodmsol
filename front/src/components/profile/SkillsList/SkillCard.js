import React from "react";
import palette from "lib/styles/palette";
import styled from "styled-components";
import arrange from "lib/styles/arrage";
import CustomIcon from "lib/CustomIcon";
import cardHead from "statics/images/cardHead.PNG";

const SkillCard = ({ cardContent }) => {
  return (
    <>
      <FlipCard>
        <FrontCard>
          <CustomIcon size="large" font>
            <img
              src={cardContent.frontImg}
              alt="frontImg"
              width="50px"
              height="50px"
            ></img>
            <div>{cardContent.frontContent}</div>
          </CustomIcon>
        </FrontCard>
        <BackCard numberOfContent={cardContent.backContent.length}>
          <>
            <img src={cardHead} alt="cardHead" width="100%" height="90px" />
            <StyledCustomIcon size="medium">
              <img
                src={cardContent.frontImg}
                alt="backImg"
                width="40px"
                height="40px"
              ></img>
            </StyledCustomIcon>
            {cardContent.backContent.map((content, i) => (
              <BackCardContent key={i}>{content}</BackCardContent>
            ))}
          </>
        </BackCard>
      </FlipCard>
    </>
  );
};

export default SkillCard;

const FlipCard = styled.div`
perspective: 150rem;
position: relative;
width: 13rem;
height: 17rem;
  text-align: center;
  & > div {
    width:100%;
    height:100%;
    position:absolute;
    top: 0;
    left : 0;
    color : black;
    font-size: 1.4rem;
    backface-visibility:hidden;
  }
  & > div:last-child {
    background : ${palette.gray1}
    transform : rotateY(180deg);
  }
  & > div:first-child{
    ${arrange.center}
    background : ${palette.gray7}
  }
  &:hover {
    & > div:last-child {
      transition : all .8s
      transform : rotateY(0deg);
    } 
    & > div:first-child {
      transition : all .8s
      transform : rotateY(180deg);
    } 
  }
`;

const FrontCard = styled.div``;
const BackCard = styled.div`
  & > img {
    border-bottom: 1px solid ${palette.gray5};
  }
`;
const StyledCustomIcon = styled(CustomIcon)`
  transform: translateY(-55%);
  background: ${palette.gray0};
  border: 1px solid ${palette.gray5};
`;
const BackCardContent = styled.div`
  width: 55%;
  height: 2rem;
  color: ${palette.gray7};
  font-weight: 700;
  font-size: 0.9rem;
  border-radius: 5px;
  margin: 0.5rem auto;
  transform: translateY(-100%);
  border-bottom: 1px solid ${palette.gray5};
`;
