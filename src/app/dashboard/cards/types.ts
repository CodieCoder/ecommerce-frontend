export type Payment = {
  id: string;
  category: string;
  title: string;
  description: string;
  popularity: number;
  status: "draft" | "published" | "archived" | "suspended" | "rejected";
  createdAt: string;
  updatedAt: string;
};
export interface ICardCategory {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
}

export enum CardTypeEnum {
  BusinessCard = "businessCard",
  ShoppingCard = "shoppingCard",
  PaymentCard = "paymentCard",
}

export enum MediaFilesTypeEnum {
  Background = "Background",
  Logo = "Logo",
}
