import { ComboSelect } from "@/components/combo";
import useGetCategories from "../../hooks/useGetCategories";
import { Label } from "@/components/ui/label";

const ChooseCategory = () => {
  const { isLoading, data } = useGetCategories("");

  const options = data
    ? data.map((each) => ({ value: each.id, label: each.name }))
    : [];

  return (
    <>
      <Label>Choose category</Label>
      <ComboSelect
        options={options}
        placeholder="Select category"
        buttonProps={{
          className: "w-full justify-between mt-2",
        }}
        contentProps={{
          className: "w-[20rem] mx-auto",
        }}
      />
    </>
  );
};

export default ChooseCategory;

/**
 * CHOOOSE CATEGORY
 * Select from list or create new
 */
