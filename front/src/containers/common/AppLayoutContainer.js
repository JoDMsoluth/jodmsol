import React from 'react';
import styled from 'styled-components';
import AppFooter from 'components/common/AppFooter';
import AppHeader from 'components/common/AppHeader';

const AppLayoutContainer = ({ children }) => {
  return (
    <>
      <AppHeader />
      <StyledPageLayout>{children}</StyledPageLayout>
      <AppFooter />
    </>
  );
};

export default AppLayoutContainer;

const StyledPageLayout = styled.div`
  width: 100%;
  min-height: calc(100vh - 13rem - 10vh);
`;
