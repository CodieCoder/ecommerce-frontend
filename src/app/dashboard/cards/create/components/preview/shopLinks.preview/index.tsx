import { useAppSelector } from "@/store/redux/hooks";
import EachLinksPreview from "./links.preview";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const ShopLinksPreview = () => {
  const { shopLinks } = useAppSelector(getCreateCardState);
  console.log("Testee shoplink preview : ", shopLinks);

  const backgroundColor = `rgba(255, 255, 255, ${shopLinks})`;
  return (
    <div className="mx-auto">
      {shopLinks?.map((shopLink, index) => (
        <EachLinksPreview link={shopLink} key={index} />
      ))}
    </div>
  );
};

export default ShopLinksPreview;
