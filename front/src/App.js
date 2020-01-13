import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  IntroPage,
  ProjectPage,
  ProfilePage,
  BlogPage,
  WritePost,
  NotFoundPage,
  PostPage
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
          <Route path="/project" component={ProjectPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/print/resume" component={ResumeContent} />
          <Route path="/post/edit" component={WritePost} />
          <Route path="/post/load/:id" component={PostPage} />
          <Route component={IntroPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
