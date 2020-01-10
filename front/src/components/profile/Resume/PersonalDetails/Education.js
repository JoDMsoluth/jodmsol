import React from 'react';
import styled from 'styled-components';


export default function Education () {
return(
<Wrap style={{position : "relative"}}>
                <Title>
                    Education
                </Title>
                <ContentWrap>
                    <div>
                        <div>(2016~currently)</div>
                        <EducationContent>
                            Seoul University of Science & Technology transfer
                        </EducationContent>
                        <EducationContent>
                            studied in B.S. degree in industrial engineering
                        </EducationContent>
                    </div>
                    <div>
                        <div>(2013~2016)</div>
                        <EducationContent>
                            Hoseo University entrance
                        </EducationContent>
                        <EducationContent>
                            B.S. degree in Infomation Security
                        </EducationContent>
                    </div>
                </ContentWrap>
            </Wrap>)
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
const EducationContent = styled.div`
font-size : 0.7rem;
`;