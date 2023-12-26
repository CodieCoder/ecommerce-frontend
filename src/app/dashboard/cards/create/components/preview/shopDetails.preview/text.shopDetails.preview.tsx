import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/features/card/reducers";

const ShopDetailsText = () => {
  const { details, nameConfig } = useAppSelector(getCreateCardState);
  return (
    <div className="" style={{ color: nameConfig.color }}>
      <div className="">About : </div>
      <div className="whitespace-pre-wrap">{details}</div>
    </div>
  );
};

export default ShopDetailsText;
