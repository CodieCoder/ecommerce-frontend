import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/reducers/createCard.reducer";

const LogoTextPreview = () => {
  const { shopName, shopNameConfig } = useAppSelector(getCreateCardState);
  return (
    <div className="mt-2">
      <div
        className={`mx-auto
                text-2xl max-w-full w-auto h-auto rounded overflow-x-hidden overflow-y-auto`}
        style={{
          color: `${shopNameConfig.color}`,
          fontWeight: shopNameConfig.fontWeight ? 600 : 200,
        }}
      >
        {shopName || "write your text here"}
      </div>
      <div
        className="text-xs"
        style={{
          color: `${shopNameConfig.color}`,
        }}
      >
        app-creator.com/myshopname
      </div>
    </div>
  );
};

export default LogoTextPreview;
