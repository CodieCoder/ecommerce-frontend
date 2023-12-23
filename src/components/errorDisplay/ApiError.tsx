import React from "react";
import CustomAlert from "../alerts";
import { IApiError } from "@/api/utils/types";

interface IError_APi {
  showError?: boolean;
  error?: IApiError;
}

const Error_Api: React.FC<IError_APi> = ({ showError, error }) => {
  return (
    <CustomAlert
      type={"error"}
      show={showError}
      title={<span className="font-bold">Error</span>}
      key={error?.error ?? Math.random()}
    >
      {error?.message ? (
        Array.isArray(error.message) ? (
          <ul className="list-disc">
            {error.message.map((msg, index) => (
              <li key={`${index}-message`}>{msg}</li>
            ))}
          </ul>
        ) : (
          error.message
        )
      ) : (
        "An error occured."
      )}
    </CustomAlert>
  );
};

export default Error_Api;
