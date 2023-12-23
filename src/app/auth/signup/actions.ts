import { Constants_Api_Endpoint } from "@/constants/api/endpoints";
import ApiService from "@/lib/axios";
import { NextApiRequest, NextApiResponse } from "next";

const Action_SubmitSignupForm = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const response = await ApiService.post(
      Constants_Api_Endpoint.User,
      req.body
    );
    console.log("Testee signup Actions : ", res.status);
    res.status(200).json(response.data);
  } catch (error: any) {
    /**
     * TODO : Add error notification here
     */
    res.status(500).json({ message: "Error fetching data from API" });
  }
};

export default Action_SubmitSignupForm;
