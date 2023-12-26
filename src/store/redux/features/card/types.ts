import { CardTypeEnum } from "@/app/dashboard/cards/types";
import { SocialMediaEnum } from "@/constants/socialLinks";

export type IMediaFiles = {
  [index: string]: FileList | undefined;
};

export interface IBackground {
  colour: string | undefined;
  image: FileList | undefined;
}

export type IShopLogo = {
  rounded?: number;
  size?: number;
  opacity?: number;
  borderType?: "dotted" | "solid";
  borderWidth?: number;
  borderColor?: string;
};

export interface IShopNameConfig {
  fontWeight?: boolean;
  color?: string;
}

export interface IShopAddressBackground {
  colour?: string | undefined;
  opacity?: number;
  borderWidth?: number;
  hide?: boolean;
}

export interface ICardLinks {
  id?: string;
  type?: string | SocialMediaEnum;
  link?: string;
  backgroundOpacity?: number;
}

export interface ICreateCardReducer {
  category: string;
  type: CardTypeEnum;
  background: IBackground;
  shopName: string | undefined;
  nameConfig: IShopNameConfig;
  logo: FileList | undefined;
  logoConfig: IShopLogo;
  details: string;
  detailsConfig: IShopAddressBackground;
  address: string | undefined;
  addressConfig: IShopAddressBackground;
  links: ICardLinks[];
}
