"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Constants_Api from "@/constants/api";
import Utils_Api from "@/utils/api";
import { signUp } from "@/api/auth";
import { IApiError } from "@/api/utils/types";
import { toast } from "sonner";

const useSignup = () => {
  const router = useRouter();
  const [isSubmitError, setIsSubmitError] = useState<IApiError>();

  const { mutate, isLoading } = useMutation(signUp, {
    onSuccess: (data) => {
      if (
        Utils_Api.GetStatusCode(data.status) ===
        Constants_Api.StatusCodeEnum.Success
      ) {
        toast.success(
          "You account has been created successfully. Log in to continue"
        );
        setIsSubmitError(undefined);
        router.push("signin");
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

export default useSignup;
