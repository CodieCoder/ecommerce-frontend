import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoTelegram,
  BiLogoYoutube,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLinkAlt,
} from "react-icons/bi";

export enum SocialMediaEnum {
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "LinkedIn",
  Telegram = "Telegram",
  TikTok = "TikTok",
  Twiter = "Twitter",
  WhatsApp = "WhatsApp",
  Youtube = "Youtube",
  Others = "Others",
}

export const SocialMediaLinksArray = [
  {
    name: SocialMediaEnum.Facebook,
    baseLink: "https://fb.com/",
    icon: <BiLogoFacebook className={"text-sky-600 text-lg"} />,
  },
  {
    name: SocialMediaEnum.Telegram,
    baseLink: "https://telegram.com/",
    icon: <BiLogoTelegram className={"text-gray-700 text-lg"} />,
  },
  {
    name: SocialMediaEnum.Youtube,
    baseLink: "https://youtube.com/",
    icon: <BiLogoYoutube r className={"text-red-600 text-lg"} />,
  },
  {
    name: SocialMediaEnum.Twiter,
    baseLink: "https://twitter.com/",
    icon: <BiLogoTwitter className={"text-sky-600 text-lg"} />,
  },
  {
    name: SocialMediaEnum.LinkedIn,
    baseLink: "https://linkedin.com/n/",
    icon: <BiLogoLinkedinSquare className={"text-sky-600 text-lg"} />,
  },
  {
    name: SocialMediaEnum.Instagram,
    baseLink: "https://instagram.com/",
    icon: (
      <BiLogoInstagram
        className={
          "text-white p-0 border-0 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg"
        }
      />
    ),
  },
  {
    name: SocialMediaEnum.Others,
    baseLink: "https://",
    icon: <BiLinkAlt className={"text-sky-600 text-lg"} />,
  },
];

export const getSocialMedia = (option?: string | SocialMediaEnum) => {
  const result = SocialMediaLinksArray.find(
    (sm) => sm.name.toLocaleLowerCase() === option?.toLowerCase()
  );
  return result || SocialMediaLinksArray[SocialMediaLinksArray.length - 1];
};
