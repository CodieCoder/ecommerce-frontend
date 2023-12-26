import { saveCard } from "@/api/cards";
import { getCreateCardState } from "@/store/redux/features/card/reducers";
import { useAppSelector } from "@/store/redux/hooks";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const useSaveCard = () => {
  const router = useRouter();

  const card = useAppSelector(getCreateCardState);
  return useMutation(saveCard, {
    onSuccess: () => {
      toast.success("Card added successfully");
      router.push("/dashboard/cards");
    },
    onError: (error) =>
      toast.error("Unable to save card. Check your connection and try again."),
  });
};

export default useSaveCard;
