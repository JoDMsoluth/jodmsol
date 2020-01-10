import React from 'react';
import styled from 'styled-components';

export default function ContactInfo() {
    return (
        <>
            <Wrap>
                <Title>
                    Contact Info
                </Title>
                <ContentWrap>
                    <Content>
                        <i className="fas fa-map-marker-alt">{`\tSeoul, South Korea`}</i>
                    </Content>
                    <Content>
                        <i className="fas fa-envelope">{`\tjodmsoluth@gamil.com`}</i>
                    </Content>
                    <Content>
                        <i className="fas fa-phone">{`\t (+82)010-4365-0214`}</i>
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