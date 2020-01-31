import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  IntroPage,
  ProjectPage,
  ProfilePage,
  BlogPage,
  WritePost,
  NotFoundPage,
  ViewPage
} from "./pages";
import ResumeContent from "./components/profile/Resume/ResumeContent";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
      />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route path="/project/:category?/:filter?" component={ProjectPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/blog/:category?/:filter?" component={BlogPage} />
          <Route path="/print/resume" component={ResumeContent} />

          <Route path="/add/:filter/:category/:id" component={WritePost} />
          <Route path="/:filter/:id" component={ViewPage} />

          <Route component={IntroPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
