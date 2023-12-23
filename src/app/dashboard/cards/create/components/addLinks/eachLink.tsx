import { ButtonRolesEnum, CustomButton } from "@/components/buttons";
import { SocialMediaLinksArray, getSocialMedia } from "@/constants/socialLinks";
import { ICardLinks } from "@/store/redux/reducers/createCard.reducer";
import { truncateUrl } from "@/utils/utils";
import React from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

interface IEachLink {
  link: ICardLinks;
  onEdit: (link: ICardLinks) => void;
  onDelete: (link: string) => void;
  onDragStart: (linkId: string) => void;
  dragOveritem: (linkId: string) => void;
  onDrop: () => void;
}

const EachLink: React.FC<IEachLink> = ({
  link,
  onEdit,
  onDelete,
  onDragStart,
  dragOveritem,
  onDrop,
}) => {
  //   const baseLink = getSocialMedia(link.type)?.baseLink;

  return (
    <div
      onDragStart={(e) => {
        e.currentTarget.classList.remove("border-white");
        e.currentTarget.classList.add("border-sky-600");
        onDragStart(link.id!);
      }}
      onDragEnter={(e) => {
        e.currentTarget.classList.remove("border-sky-600");
        dragOveritem(link.id!);
      }}
      onDragOver={(e) => {
        e.currentTarget.classList.remove("border-white");
        e.currentTarget.classList.add("border-sky-600");
      }}
      onDragLeave={(e) => {
        e.currentTarget.classList.remove("border-sky-600");
        e.currentTarget.classList.add("border-white");
      }}
      onDragEnd={(e) => {
        e.currentTarget.classList.remove("border-sky-600");
        e.currentTarget.classList.add("border-white");
        onDrop();
      }}
      onDrop={(e) => {
        e.currentTarget.classList.remove("border-sky-600");
        e.currentTarget.classList.add("border-white");
      }}
      draggable={true}
      className="flex space-x-3 p-1 cursor-pointer items-center mx-auto my-4 min-w-[15rem] max-w-[95%] rounded-sm hover:bg-sky-100 border border-white"
    >
      <div>
        {getSocialMedia(link.type)?.icon ||
          SocialMediaLinksArray[SocialMediaLinksArray.length - 1].icon}
      </div>
      <div className={"w-[80%]"}>{truncateUrl(link.link, 35)}</div>
      <div className="flex space-x-2">
        <BiSolidEditAlt
          className={"text-sky-600 text-md cursor-pointer"}
          onClick={() => onEdit(link)}
        />
        <MdDelete
          className={"text-red-600 text-md cursor-pointer"}
          onClick={() => onDelete(link.id!)}
        />
      </div>
    </div>
  );
};

export default EachLink;
