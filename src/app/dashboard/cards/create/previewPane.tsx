"use client";

import { memo } from "react";
import BackgroundImagePreview from "./components/preview/background.preview";
import CreateCardActionButtons from "./components/actionButtons";

interface IProps {
  onSaveCard: () => void;
}

const PreviewCardPane: React.FC<IProps> = ({ onSaveCard }) => {
  return (
    <div className={"h-full"}>
      <BackgroundImagePreview />
      <CreateCardActionButtons onSaveCard={onSaveCard} />
    </div>
  );
};

export default memo(PreviewCardPane);
