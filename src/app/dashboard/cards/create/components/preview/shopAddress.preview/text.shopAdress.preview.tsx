import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const ShopAddressText = () => {
  const { shopAddress, shopNameConfig } = useAppSelector(getCreateCardState);
  return (
    <div className="" style={{ color: shopNameConfig.color }}>
      <div className="">Address : </div>
      <div className="whitespace-pre-wrap">{shopAddress}</div>
    </div>
  );
};

export default ShopAddressText;
