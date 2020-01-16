import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import ProfileHeader from "components/profile/ProfileHeader";
import SkillsList from "components/profile/SkillsList";
import Resume from "components/profile/Resume";
import Introduce from "components/profile/introduce";
import ProfileContact from "components/profile/contact";

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
