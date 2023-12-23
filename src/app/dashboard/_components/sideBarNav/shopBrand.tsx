import { FiSettings } from "react-icons/fi";
import { GoShare } from "react-icons/go";

const ShopBrand = () => {
  return (
    <div className="h-full">
      <div className="h-[7rem] flex items-center justify-center">
        <div
          className="self-center rounded-full bg-white
        w-[5rem] h-[5rem] overflow-hidden flex items-center justify-center border-gray-200 text-center
        text-2xl font-bold
        "
        >
          CN
        </div>
      </div>
      <div className="flex justify-center mt-2  text-base font-bold text-white gap-6">
        <div className=" ">
          <FiSettings />
        </div>
        <div className="">
          <GoShare />
        </div>
      </div>
    </div>
  );
};

export default ShopBrand;
