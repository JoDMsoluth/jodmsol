import React from 'react';
import styled from 'styled-components';
import kickVillage from 'statics/images/kickVillage.png';
import blogLogo from 'statics/images/logo.png';


export default function Project() {
    return (
    <>
        <Wrap>
            <Title>
                PROJECT
            </Title>
            <ContentWrap>
                <div>
                    <div>(2019.10~currently)</div>
                        <Content>
                            Kickvillage
                            <ContentImg src={kickVillage} width ="100px" height="40px"/>
                        </Content>
                    </div>
                    <div>
                        <div>(2019.12~currently)</div>
                        <Content>
                            Blog
                            <ContentImg src={blogLogo} width ="100px" height="40px"/>
                        </Content>
                    </div>
            </ContentWrap>
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
    position:relative;
    margin:1rem;
`;
const ContentImg = styled.img`
    position:absolute;
    top: -0.5rem;
    left: 6rem;
`;