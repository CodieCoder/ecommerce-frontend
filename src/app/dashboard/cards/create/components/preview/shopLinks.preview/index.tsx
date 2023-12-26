import { useAppSelector } from "@/store/redux/hooks";
import EachLinksPreview from "./links.preview";
import { getCreateCardState } from "@/store/redux/features/card/reducers";

const ShopLinksPreview = () => {
  const { links } = useAppSelector(getCreateCardState);

  return (
    <div className="mx-auto">
      {links?.map((link, index) => (
        <EachLinksPreview link={link} key={index} />
      ))}
    </div>
  );
};

export default ShopLinksPreview;
