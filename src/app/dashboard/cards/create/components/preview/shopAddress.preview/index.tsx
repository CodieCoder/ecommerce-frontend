import { useAppSelector } from "@/store/redux/hooks";
import ShopAddressText from "./text.shopAdress.preview";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const ShopAddressPreview = () => {
  const { colour, opacity, borderWidth, hide } =
    useAppSelector(getCreateCardState).shopAddressBackground;

  const backgroundColor = colour?.replace(")", `, ${opacity})`);

  return (
    <>
      {hide ? (
        <div
          className="m-5 p-3 max-w-[80%] mx-auto rounded-sm"
          style={{
            backgroundColor,
            borderWidth,
          }}
        >
          <ShopAddressText />
        </div>
      ) : null}
    </>
  );
};

export default ShopAddressPreview;
