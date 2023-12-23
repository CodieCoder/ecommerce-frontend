import { ICardCategory } from "@/app/dashboard/cards/types";

const MockCategories = [
  {
    id: "323de5f3ew0",
    name: "Instagram Cards",
    description: "This is for my instagram followers",
    createdAt: "20/03/2023",
  },
  {
    id: "8hjds873hjw9",
    name: "Facebook Cards",
    description: "This is for my Facebook followers",
    createdAt: "20/03/2023",
  },
  {
    id: "3hj78yuhjd1",
    name: "Twitter Cards",
    description: "This is for my Twitter followers",
    createdAt: "20/03/2023",
  },
];

export const getCategories = async (): Promise<ICardCategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MockCategories), 3000);
  });
};
