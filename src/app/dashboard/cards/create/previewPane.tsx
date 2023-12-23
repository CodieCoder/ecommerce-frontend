"use client";

import { memo } from "react";
import BackgroundImagePreview from "./components/preview/background.preview";

const PreviewCardPane = () => {
  return (
    <div className={"h-full"}>
      <BackgroundImagePreview />
    </div>
  );
};

export default memo(PreviewCardPane);
