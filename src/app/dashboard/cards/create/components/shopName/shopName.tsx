import { Input } from "@/components/ui/input";
import { useAppDispatcher } from "@/store/redux/hooks";
import { shopName } from "@/store/redux/features/card/reducers";

const ShopNameField = () => {
  const dispatch = useAppDispatcher();
  return (
    <div>
      <Input
        onChange={(e) =>
          e.target.value?.length <= 50 && dispatch(shopName(e.target.value))
        }
        placeholder="shop name"
        minLength={2}
        maxLength={50}
      />
    </div>
  );
};

export default ShopNameField;
