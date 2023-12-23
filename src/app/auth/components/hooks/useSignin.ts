"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Constants_Api from "@/constants/api";
import Utils_Api from "@/utils/api";
import makeToast from "@/components/toast";
import { signIn } from "@/api/auth";
import { IApiError } from "@/api/utils/types";

const useSignIn = () => {
  const router = useRouter();
  const [isSubmitError, setIsSubmitError] = useState<IApiError>();

  const { mutate, isLoading } = useMutation(signIn, {
    onSuccess: (data) => {
      if (
        Utils_Api.GetStatusCode(data.status) ===
        Constants_Api.StatusCodeEnum.Success
      ) {
        makeToast({
          description: "Logged in successfully",
        });
        setIsSubmitError(undefined);
        router.push("/dashboard");
      } else {
        setIsSubmitError(data.data);
      }
    },
    onError: (error: any) => setIsSubmitError(error),
  });

  React.useEffect(() => {
    isLoading && setIsSubmitError(undefined);
  }, [isLoading]);

  return { submit: mutate, isLoading, response: isSubmitError };
};

export default useSignIn;
