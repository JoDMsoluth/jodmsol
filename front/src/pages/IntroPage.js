import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import IntroBackground from "components/intro/IntroBackground";
import ContactMeButton from "components/intro/ContactMeButton";
import AutoText from "components/intro/AutoText";
import ContactIconList from "components/intro/ContactIconList";

const IntroPage = () => {
  return (
    <>
      <AppLayoutContainer noPadding>
        <IntroBackground />
        <AutoText
          strings={[
            "I make much of <strong>passion and communication</strong>",
            "I <strong>design and build</strong> user interfaces in love",
            "I'm addicted to <i>Javascript and Typescript</i>",
            "I'm hooked on <i>React and Redux</i>",
            "I'm into <i>Node and Deno</i>",
            "I'll be always looking forward to working with you.",
            "<strong>Please contact me</strong>\nif you are interested in getting to know me"
          ]}
        />
        <ContactIconList />
        <ContactMeButton />
      </AppLayoutContainer>
    </>
  );
};

export default IntroPage;
