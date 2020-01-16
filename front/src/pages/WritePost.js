import React from "react";
import AppLayoutContainer from "containers/common/AppLayoutContainer";
import EditTemplate from "components/write/EditorTemplate";
import EditorPaneContainer from "containers/write/EditorPaneContainer";
import PreviewPaneContainer from "containers/write/PreviewPaneContainer";
import EditHeaderContainer from "containers/write/EditHeaderContainer";

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
