import { type ClassValue, clsx } from "clsx";
import { version } from "../../package.json";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const combinedClassNames = (
  defaultClassName: string,
  className?: string
) => {
  const newClass = className || "";
  return `${defaultClassName} ${newClass}`;
};

interface ITruncateText {
  text: string | null | undefined;
  textMax?: number;
  wordsMax?: number;
  hideDots?: boolean;
}
/**
 *
 * @param values ({text: string | null | undefined,  textMax?: number, wordsMax?: number, hideDots?: boolean})
 * @param values.text (string | null | undefined) => The text to truncate
 * @param values.textMax (number) => The maximum number of allowed text length
 * @param values.wordMax (number) => The maximum number of allowed words (words are text separated by space)
 * @param values.hideDots (number) => If you want to hide the 3 dots (...). Default is false. If true, it will not show the 3 dots and the given text will truncate to textMax/wordMax
 * @returns (string | null | undefined)
 */

export const truncateText = (values: ITruncateText) => {
  if (!values.text) return values.text;
  const totalLetters = values.text.split("").length;
  const totalWords = values.text.split(" ").length;
  if (values.wordsMax && totalWords > values.wordsMax) {
    return (
      values.text.split(" ").slice(0, values.textMax).join(" ") +
      (values.hideDots ? "" : "...")
    );
  }
  if (values.textMax && totalLetters > values.textMax) {
    const dots = values.hideDots ? 0 : 3;
    return `${values.text.slice(0, values.textMax - dots)}${
      values.hideDots ? "" : "..."
    }`;
  }
  return values.text;
};

/**
 *
 * @param url (string) => The url to truncate
 * @param max (numer) => The maximum number of text to display
 * @returns ( string | null | undefined)
 */
export const truncateUrl = (url: string | undefined | null, max: number) => {
  if (!url) return url;
  else if (url.length <= max) {
    return url;
  } else {
    const values = url.split(".");
    if (values.length < 2) {
      return truncateText({ text: url, textMax: max, wordsMax: 1 });
    } else {
      const tld = values[values.length - 1];
      if (tld.length + 2 >= max) {
        return url;
      } else {
        const maxWithDots = max - 3; //minus 3 dots (...)
        const sld = truncateText({
          text: url,
          textMax: maxWithDots - tld.length,
          wordsMax: 1,
        });
        if (!sld) {
          return "";
        }
        return `${sld}${tld}`;
      }
    }
  }
};

/**
 * @description capitalize the first letter of a given string.
 * @param string accepts only string. If it is undefined or empty it immediately returns the value passed
 * @returns a string and capitalize first letter if the value passed is a valid string.
 */
export const uppercaseFirstLetter = (value: string | undefined) => {
  if (!value) return value;
  return value.charAt(0).toLocaleUpperCase() + value.slice(1);
};

export const getAppVersion = () => {
  // return version;
  return "0.10";
};
