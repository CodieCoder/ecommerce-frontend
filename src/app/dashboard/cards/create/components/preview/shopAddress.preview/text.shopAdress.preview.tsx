import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/features/card/reducers";

const ShopAddressText = () => {
  const { address, nameConfig } = useAppSelector(getCreateCardState);
  return (
    <div className="" style={{ color: nameConfig.color }}>
      <div className="">Address : </div>
      <div className="whitespace-pre-wrap">{address}</div>
    </div>
  );
};

export default ShopAddressText;
