import React from 'react';
import styled from 'styled-components';

export default function MoreInfo() {
    return (
        <>
            <Wrap>
                <Title>
                    More Info
                </Title>
                <ContentWrap>
                    <Content>
                        Industrial Engineer Information Processing (2017.6)
                    </Content>
                    <Content>
                        Served and discharged from ROKAF as Sergeant (2018.6)
                    </Content>
                    <Content>
                        Sign up github (2019.7)
                    </Content>
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
font-size:0.7rem

`;