import { useAppSelector } from "@/store/redux/hooks";
import ShopDetailsText from "./text.shopDetails.preview";
import { getCreateCardState } from "@/store/redux/features/card/reducers";

const ShopDetailsPreview = () => {
  const { colour, opacity, borderWidth } =
    useAppSelector(getCreateCardState).detailsConfig;

  const backgroundColor = colour?.replace(")", `, ${opacity})`);

  return (
    <div
      className="m-5 p-3 max-w-[80%] mx-auto rounded-sm"
      style={{
        backgroundColor,
        borderWidth,
      }}
    >
      <ShopDetailsText />
    </div>
  );
};

export default ShopDetailsPreview;
