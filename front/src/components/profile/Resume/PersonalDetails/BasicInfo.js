import React from 'react';
import styled from 'styled-components';
import resumeAvatar from 'statics/images/resumeAvatar.jpg'

export default function BasicInfo() {
    return (
        <>
            <Wrap style={{position : "relative"}}>
                <Title>
                    Basic Info
                </Title>
                <ContentWrap>
                    <Content>
                        NAME : Hyehyeong Jo
                    </Content>
                    <Content>
                        DOB : 17/03/1994
                    </Content>
                    <Content>
                        GENDER : Male
                    </Content>
                </ContentWrap>
                <ImgContent src={resumeAvatar} alt="resumeAvatar" width="80px" height="80px"></ImgContent>
            </Wrap>
        </>
    )
}
const Wrap = styled.div`
    margin-bottom: 1.5rem;  
`
const Title = styled.div`
    font-weight: 900;
    font-size: 1rem;
    margin-bottom: 0.6rem;
`;
const ContentWrap = styled.div`
`;
const Content = styled.div`

`;
const ImgContent = styled.img`
    border-radius : 70px;
    position : absolute;
    top:1.9rem;
    left : 2rem;
`;