import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import EditTemplate from "src/components/write/EditorTemplate";
import EditHeader from "src/components/write/EditorHeader";
import EditorPaneContainer from "src/containers/write/EditorPaneContainer";
import PreviewPaneContainer from "src/containers/write/PreviewPaneContainer";

export default function WritePost() {
  return (
    <>
      <AppLayoutContainer>
        <EditTemplate
          header={<EditHeader />}
          editor={<EditorPaneContainer />}
          preview={<PreviewPaneContainer />}
        />
      </AppLayoutContainer>
    </>
  );
}
