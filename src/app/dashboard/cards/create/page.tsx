import { Metadata } from "next";
import CreateCardPane from "./createPane";
import PreviewCardPane from "./previewPane";

export const metadata: Metadata = {
  title: "Card : Create",
  description: "Create card",
};

const CreateCardPage = () => {
  return (
    <div className="w-full h-[52.5rem]">
      <div className="grid grid-cols-5 h-full">
        <div className="col-span-3 px-3">
          <div className="h-full m-auto">
            <CreateCardPane />
          </div>
        </div>
        <div className="col-span-2 p-3">
          <div className="h-[40rem] w-[70%] m-auto">
            <PreviewCardPane />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCardPage;
