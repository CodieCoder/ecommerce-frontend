"use client";

const ErrorPage: React.FC<{ error: any }> = ({ error }) => {
  console.log("Testee Error :", error);
  return <div>Error. </div>;
};

export default ErrorPage;
