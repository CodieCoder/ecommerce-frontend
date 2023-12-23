import { Input } from "@/components/ui/input";
import { MdDelete } from "react-icons/md";

interface ISingleFileUpload {
  dispatch: (file: FileList | undefined) => void;
}

const SingleFileUpload: React.FC<ISingleFileUpload> = ({ dispatch }) => {
  return (
    <div className="flex space-x-3">
      <Input
        placeholder="Add media"
        type="file"
        accept="image/*"
        onChange={(e) => e.target.files && dispatch(e.target.files)}
      />
      <MdDelete
        className={"text-red-600 text-lg cursor-pointer mt-3"}
        onClick={() => dispatch(undefined)}
      />
    </div>
  );
};

export default SingleFileUpload;
