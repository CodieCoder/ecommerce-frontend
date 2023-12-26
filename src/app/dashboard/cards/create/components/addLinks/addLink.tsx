import { CustomButton } from "@/components/buttons";
import { ComboSelect } from "@/components/combo";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  SocialMediaEnum,
  SocialMediaLinksArray,
  getSocialMedia,
} from "@/constants/socialLinks";
import { ICardLinks } from "@/store/redux/features/card/reducers";
import { useEffect, useState } from "react";

const AddNewLink: React.FC<{
  onFinish: (value: ICardLinks) => void;
  selectedLink?: ICardLinks;
  onEditHandler: (link: ICardLinks) => void;
}> = ({ onFinish, selectedLink, onEditHandler }) => {
  const [socialLinkOption, setSocialLinkOption] = useState<string>();
  const [shoplink, setShopLink] = useState("");
  const [backgroundOpacity, setBackgroundOpacity] = useState(0.3);

  const options = SocialMediaLinksArray.map((sm) => ({
    label: (
      <div className="flex space-x-4">
        <div>{sm.icon}</div>
        <div>{sm.name}</div>
      </div>
    ),
    value: sm.name,
  }));

  const socialLink = getSocialMedia(socialLinkOption)?.baseLink || "https://";

  const onFinishHandler = () => {
    const link = getSocialMedia(socialLinkOption);

    if (selectedLink) {
      onEditHandler({
        id: selectedLink ? selectedLink.id : String(new Date().getTime()),
        backgroundOpacity,
        type: link?.name || SocialMediaEnum.Others,
        link: shoplink,
      });

      return;
    } else {
      onFinish({
        id: String(new Date().getTime()),
        backgroundOpacity,
        type: link?.name || SocialMediaEnum.Others,
        link: shoplink,
      });
    }
  };

  useEffect(() => {
    if (selectedLink) {
      setBackgroundOpacity(selectedLink.backgroundOpacity!);
      setSocialLinkOption(selectedLink.type);
      setShopLink(selectedLink.link!);
    }
  }, []);

  return (
    <div className="mt-4">
      <ComboSelect
        options={options}
        placeholder="Select one"
        buttonProps={{
          className: "w-full justify-between mt-2",
        }}
        contentProps={{
          className: "w-[20rem] mx-auto",
        }}
        value={getSocialMedia(socialLinkOption)?.name}
        onSelect={(value) => setSocialLinkOption(value as string)}
      />
      <div
        className={
          "flex mt-4 bg-white border items-center px-2 py-1 rounded-md"
        }
      >
        <div className={"font-bold text-gray-600"}>{socialLink}</div>
        <Input
          placeholder="myShopPage"
          prefix="thisisit"
          value={shoplink}
          onChange={(e) =>
            e.target.value?.length <= 250 && setShopLink(e.target.value)
          }
          minLength={5}
          maxLength={250}
          className=" caret-pink-500 border-0 focus-visible:ring-0"
        />
      </div>
      <div className="mt-5">
        <div className="font-bold pb-2">Background opacity</div>
        <Slider
          defaultValue={[backgroundOpacity || 0.3]}
          max={1}
          step={0.1}
          className={""}
          onValueChange={(value) => setBackgroundOpacity(value[0])}
        />
      </div>
      <div className="mt-4 text-right">
        <CustomButton label={"Done"} onClick={onFinishHandler} />
      </div>
    </div>
  );
};

export default AddNewLink;
