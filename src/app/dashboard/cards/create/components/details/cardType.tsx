import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CardTypeEnum } from "../../../types";

const CardType = () => {
  const options = [
    {
      label: "Business Card",
      value: CardTypeEnum.BusinessCard,
    },
    {
      label: "Shopping Card",
      value: CardTypeEnum.ShoppingCard,
    },
    {
      label: "Payment Card",
      value: CardTypeEnum.PaymentCard,
    },
  ];

  return (
    <div>
      <div className="font-bold">Type</div>
      <Select>
        <SelectTrigger className="w-[20rem] bg-white">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option, index) => (
              <SelectItem value={option.value} key={`${option.value}-${index}`}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CardType;

/**
 * CHOOOSE CARD TYPE
 * Business card
 * Shopping card
 */
