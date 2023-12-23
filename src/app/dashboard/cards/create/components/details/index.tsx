import { Label } from "@/components/ui/label";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";
import ChooseCategory from "./category";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CardDetails: React.FC = () => {
  return (
    <SettingsCard cardTitle={<DefaultCardTitle>Category</DefaultCardTitle>}>
      <div className="mx-auto">
        <ChooseCategory />
        <div className="mt-4">
          <div className="font-bold">Title</div>
          <Input placeholder="Card title" type="text" />
        </div>
        <div className="mt-4">
          <div className="font-bold">Description</div>
          <Textarea placeholder="Card description" />
        </div>
      </div>
    </SettingsCard>
  );
};

export default CardDetails;
