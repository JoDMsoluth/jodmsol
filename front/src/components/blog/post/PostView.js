import React from "react";
import styled from "styled-components";
import MarkdownRender from "src/components/common/markdown/MarkdownRender";

export default function PostView({ post, postError, loading }) {
  if (postError) {
    console.log("post is not exist");
  }
  if (loading || !post) {
    return null;
  }

  const { title, markdown, tags } = post;
  return <MarkdownRender markdown={markdown} />;
}
