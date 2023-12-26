import { Constants_Api_Endpoint } from "@/constants/api/endpoints";
import ApiService from "@/lib/axios";
import { ICreateCardReducer } from "@/store/redux/features/card/types";

export const saveCard = async (card: ICreateCardReducer) => {
  return ApiService.post(Constants_Api_Endpoint.Card.save, card);
};
