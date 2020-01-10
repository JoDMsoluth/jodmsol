import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import BlogHeader from "src/components/common/header";
import BlogContent from "src/components/blog/content";
import BlogNavigation from "src/components/blog/navigation";

const BlogPage = () => {
  return (
    <>
      <AppLayoutContainer>
        <BlogHeader desc="study" />
        <BlogNavigation />
        <BlogContent />
      </AppLayoutContainer>
    </>
  );
};

export default BlogPage;
