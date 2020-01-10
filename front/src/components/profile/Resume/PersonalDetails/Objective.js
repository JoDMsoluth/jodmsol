import React from 'react';
import styled from 'styled-components';

export default function Objective() {
    return (
        <>
            <Wrap>
                <Title>
                    OBJECTIVE
                </Title>
                <ContentWrap>
                <Content>
                    To get a growth oriented position in a required organisation
                     where my skills can be utilised for improvement 
                     and success of the organisation.
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

`;