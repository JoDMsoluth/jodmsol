import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import ProfileHeader from "src/components/profile/ProfileHeader";
import SkillsList from "src/components/profile/SkillsList";
import Resume from "src/components/profile/Resume";
import Introduce from "src/components/profile/introduce";
import ProfileContact from "src/components/profile/contact";

const ProfilePage = () => {
  return (
    <>
      <AppLayoutContainer noPadding>
        <ProfileHeader />
        <Introduce />
        <SkillsList />
        <ProfileContact />
        <Resume />
      </AppLayoutContainer>
    </>
  );
};
// eslint-disable-next-line linebreak-style

export default ProfilePage;
