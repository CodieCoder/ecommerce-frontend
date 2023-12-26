import { CardTypeEnum } from "@/app/dashboard/cards/types";
import { SocialMediaEnum } from "@/constants/socialLinks";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxRootStateType } from "../../store";
import {
  ICardLinks,
  ICreateCardReducer,
  IShopAddressBackground,
  IShopLogo,
  IShopNameConfig,
} from "./types";

const initialState = {
  category: "",
  type: CardTypeEnum.BusinessCard,
  background: {
    colour: "rgb(2, 132, 199)",
    image: undefined,
  },
  shopName: "your shop name",
  nameConfig: {
    fontWeight: false,
    color: "rgb(255, 255, 255)",
  },
  logo: undefined,
  logoConfig: {
    rounded: 100,
    size: 6,
    opacity: 1,
    borderType: "solid",
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  address: "Shop 13B Aproko Plaze, Wuse Abuja",
  addressConfig: {
    colour: "rgb(255, 255, 255)",
    opacity: 0.25,
    borderWidth: 0,
    hide: true,
  },
  details: "Sales of everything great, uniques, and amazingly wonderful",
  detailsConfig: {
    colour: "rgb(255, 255, 255)",
    opacity: 0.25,
    borderWidth: 0,
  },
  links: [],
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
    shopNameConfig: (state, action: PayloadAction<IShopNameConfig>) => {
      state.nameConfig = { ...state.nameConfig, ...action.payload };
    },
    setShopLogo: (state, action: PayloadAction<FileList | undefined>) => {
      state.logo = action.payload;
    },
    shopLogoConfig: (state, action: PayloadAction<IShopLogo>) => {
      state.logoConfig = { ...state.logoConfig, ...action.payload };
    },
    shopDetails: (state, action: PayloadAction<string>) => {
      state.details = action.payload;
    },
    shopDetailsBackground: (
      state,
      action: PayloadAction<IShopAddressBackground>
    ) => {
      state.detailsConfig = {
        ...state.detailsConfig,
        ...action.payload,
      };
    },
    shopAddress: (state, action: PayloadAction<string | undefined>) => {
      state.address = action.payload;
    },
    shopAddressBackground: (
      state,
      action: PayloadAction<IShopAddressBackground>
    ) => {
      state.addressConfig = {
        ...state.addressConfig,
        ...action.payload,
      };
    },
    shopLinks: (state, action: PayloadAction<ICardLinks>) => {
      state.links = [...state.links, action.payload];
    },
    shopLinksEdit: (state, action: PayloadAction<ICardLinks>) => {
      const newLinks = state.links.map((link) =>
        link.id === action.payload.id ? action.payload : link
      );
      state.links = newLinks;
    },
    shopLinksOverwrite: (state, action: PayloadAction<ICardLinks[]>) => {
      state.links = action.payload;
    },
    shopLinksDelete: (state, action: PayloadAction<string>) => {
      const newLinks = state.links.filter((link) => link.id !== action.payload);
      state.links = newLinks;
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
