import { getCategories } from "@/api/mock/categories";
import { useEffect, useState } from "react";
import { ICardCategory } from "../../types";

const useGetCategories = (userId: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ICardCategory[]>();

  getCategories()
    .then((data) => {
      setData(data);
    })
    .finally(() => setIsLoading(false));
  useEffect(() => {
    data && setIsLoading(false);
  }, [data]);

  return { isLoading, data };
};
export default useGetCategories;
