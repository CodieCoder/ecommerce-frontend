"use client";

import React from "react";
import { PiSpinnerBold } from "react-icons/pi";

interface IProps {
  isLoading: boolean;
  children: React.ReactNode;
  loaderIcon?: React.ReactNode;
  loadingText?: React.ReactNode;
  showText?: boolean;
}

const Spinner: React.FC<IProps> = ({
  isLoading,
  children,
  loaderIcon,
  loadingText = "Loading",
  showText = true,
}) => {
  return (
    <div style={{ height: "100%", width: "100%", position: "relative" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            background: "rgba(250, 250, 250, 0.5)",
            textAlign: "center",
            height: "inherit",
            width: "inherit",
            zIndex: "10000",
            display: "flex",
            justifyContent: "center",
            justifyItems: "baseline",
          }}
        >
          <div className="z-10 absolute inset-0 w-12 h-12 mx-auto my-auto">
            <div>
              {loaderIcon ? (
                loaderIcon
              ) : (
                <PiSpinnerBold className="animate-spin w-12 h-12 text-sky-600" />
              )}
            </div>
            <div className="font-bold">
              {showText && <div>{loadingText}</div>}
            </div>
          </div>
        </div>
      )}
      <div className={`${isLoading ? "blur-sm" : ""}`}>{children}</div>
    </div>
  );
};

export default Spinner;
