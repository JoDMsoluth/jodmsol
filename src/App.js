import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import {
  IntroPage,
  ProjectPage,
  ProfilePage,
  BlogPage,
  NotFoundPage
} from "./pages";

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
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
