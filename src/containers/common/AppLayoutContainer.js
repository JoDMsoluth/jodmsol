import React from "react";
import AppFooter from "src/components/common/AppFooter";
import AppHeader from "src/components/common/AppHeader";
import { StyledPageLayout } from "src/lib/styles/StyledPageLayout";

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
