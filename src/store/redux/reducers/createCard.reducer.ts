import { CardTypeEnum } from "@/app/dashboard/cards/types";
import { SocialMediaEnum } from "@/constants/socialLinks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxRootStateType } from "../store";

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

export interface shopNameConfig {
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
  shopNameConfig: shopNameConfig;
  shopLogo: FileList | undefined;
  shopLogoConfig: IShopLogo;
  shopDetails: string;
  shopDetailsBackground: IShopAddressBackground;
  shopAddress: string | undefined;
  shopAddressBackground: IShopAddressBackground;
  shopLinks: ICardLinks[];
}

const initialState = {
  category: "",
  type: CardTypeEnum.BusinessCard,
  background: {
    colour: "rgb(2, 132, 199)",
    image: undefined,
  },
  shopName: "your shop name",
  shopNameConfig: {
    fontWeight: false,
    color: "rgb(255, 255, 255)",
  },
  shopLogo: undefined,
  shopLogoConfig: {
    rounded: 100,
    size: 6,
    opacity: 1,
    borderType: "solid",
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  shopAddress: "Shop 13B Aproko Plaze, Wuse Abuja",
  shopAddressBackground: {
    colour: "rgb(255, 255, 255)",
    opacity: 0.25,
    borderWidth: 0,
    hide: true,
  },
  shopDetails: "Sales of everything great, uniques, and amazingly wonderful",
  shopDetailsBackground: {
    colour: "rgb(255, 255, 255)",
    opacity: 0.25,
    borderWidth: 0,
  },
  shopLinks: [],
} as ICreateCardReducer;

export const createCardSlice = createSlice({
  name: "createCard",
  initialState,
  reducers: {
    reset: () => initialState,
    addCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setBackgroundColour: (state, action: PayloadAction<string>) => {
      state.background.colour = action.payload;
    },
    setBackgroundImage: (
      state,
      action: PayloadAction<FileList | undefined>
    ) => {
      state.background.image = action.payload;
    },
    shopName: (state, action: PayloadAction<string>) => {
      state.shopName = action.payload;
    },
    shopNameConfig: (state, action: PayloadAction<shopNameConfig>) => {
      state.shopNameConfig = { ...state.shopNameConfig, ...action.payload };
    },
    setShopLogo: (state, action: PayloadAction<FileList | undefined>) => {
      state.shopLogo = action.payload;
    },
    shopLogoConfig: (state, action: PayloadAction<IShopLogo>) => {
      state.shopLogoConfig = { ...state.shopLogoConfig, ...action.payload };
    },
    shopDetails: (state, action: PayloadAction<string>) => {
      state.shopDetails = action.payload;
    },
    shopDetailsBackground: (
      state,
      action: PayloadAction<IShopAddressBackground>
    ) => {
      state.shopDetailsBackground = {
        ...state.shopDetailsBackground,
        ...action.payload,
      };
    },
    shopAddress: (state, action: PayloadAction<string | undefined>) => {
      state.shopAddress = action.payload;
    },
    shopAddressBackground: (
      state,
      action: PayloadAction<IShopAddressBackground>
    ) => {
      state.shopAddressBackground = {
        ...state.shopAddressBackground,
        ...action.payload,
      };
    },
    shopLinks: (state, action: PayloadAction<ICardLinks>) => {
      state.shopLinks = [...state.shopLinks, action.payload];
    },
    shopLinksEdit: (state, action: PayloadAction<ICardLinks>) => {
      const newLinks = state.shopLinks.map((link) =>
        link.id === action.payload.id ? action.payload : link
      );
      state.shopLinks = newLinks;
    },
    shopLinksOverwrite: (state, action: PayloadAction<ICardLinks[]>) => {
      state.shopLinks = action.payload;
    },
    shopLinksDelete: (state, action: PayloadAction<string>) => {
      const newLinks = state.shopLinks.filter(
        (link) => link.id !== action.payload
      );
      state.shopLinks = newLinks;
    },
  },
});

export const {
  reset,
  addCategory,
  setBackgroundColour,
  setBackgroundImage,
  shopName,
  shopNameConfig,
  setShopLogo,
  shopLogoConfig,
  shopDetails,
  shopDetailsBackground,
  shopAddress,
  shopAddressBackground,
  shopLinks,
  shopLinksEdit,
  shopLinksOverwrite,
  shopLinksDelete,
} = createCardSlice.actions;

export const getCreateCardState = (state: ReduxRootStateType) =>
  state.createCard;
const createCardReducer = createCardSlice.reducer;
export default createCardReducer;
