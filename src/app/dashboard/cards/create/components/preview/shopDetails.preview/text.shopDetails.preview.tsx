import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const ShopDetailsText = () => {
  const { shopDetails, shopNameConfig } = useAppSelector(getCreateCardState);
  return (
    <div className="" style={{ color: shopNameConfig.color }}>
      <div className="">About : </div>
      <div className="whitespace-pre-wrap">{shopDetails}</div>
    </div>
  );
};

export default ShopDetailsText;
