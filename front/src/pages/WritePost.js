import React from "react";
import AppLayoutContainer from "src/containers/common/AppLayoutContainer";
import EditTemplate from "src/components/write/EditorTemplate";
import EditorPaneContainer from "src/containers/write/EditorPaneContainer";
import PreviewPaneContainer from "src/containers/write/PreviewPaneContainer";
import EditHeaderContainer from "src/containers/write/EditHeaderContainer";

export default function WritePost() {
  return (
    <>
      <AppLayoutContainer>
        <EditTemplate
          header={<EditHeaderContainer />}
          editor={<EditorPaneContainer />}
          preview={<PreviewPaneContainer />}
        />
      </AppLayoutContainer>
    </>
  );
}
