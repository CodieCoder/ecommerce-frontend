"use client";

import { Metadata } from "next";
import CreateCardPane from "./createPane";
import PreviewCardPane from "./previewPane";
import useSaveCard from "./hooks/useSaveCard";
import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/features/card/reducers";
import Spinner from "@/components/spinner";

// export const metadata: Metadata = {
//   title: "Card : Create",
//   description: "Create card",
// };

const CreateCardPage = () => {
  const { mutate: saveCard, isLoading } = useSaveCard();
  const card = useAppSelector(getCreateCardState);

  const onSaveCard = () => {
    console.log("Testee data to save : ", card);
    saveCard(card);
  };

  return (
    <div className="w-full h-[52.5rem]">
      <Spinner isLoading={isLoading}>
        <div className="grid grid-cols-7 h-full">
          <div className="col-span-5 px-3 ">
            <div className="h-full m-auto">
              <CreateCardPane />
            </div>
          </div>
          <div className="col-span-2 p-3">
            <div className="h-[40rem] m-auto max-w-sm">
              <PreviewCardPane onSaveCard={onSaveCard} />
            </div>
          </div>
        </div>
      </Spinner>
    </div>
  );
};

export default CreateCardPage;
