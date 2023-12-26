import { useAppSelector } from "@/store/redux/hooks";
import { getCreateCardState } from "@/store/redux/features/card/reducers";

const LogoTextPreview = () => {
  const { shopName, nameConfig } = useAppSelector(getCreateCardState);
  return (
    <div className="mt-2">
      <div
        className={`mx-auto
                text-2xl max-w-full w-auto h-auto rounded overflow-x-hidden overflow-y-auto`}
        style={{
          color: `${nameConfig.color}`,
          fontWeight: nameConfig.fontWeight ? 600 : 200,
        }}
      >
        {shopName || "write your text here"}
      </div>
      <div
        className="text-xs"
        style={{
          color: `${nameConfig.color}`,
        }}
      >
        app-creator.com/myshopname
      </div>
    </div>
  );
};

export default LogoTextPreview;
