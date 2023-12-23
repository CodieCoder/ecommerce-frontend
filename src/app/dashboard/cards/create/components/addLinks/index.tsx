import { CustomButton } from "@/components/buttons";
import { useAppDispatcher, useAppSelector } from "@/store/redux/hooks";
import {
  ICardLinks,
  shopLinks,
  shopLinksEdit,
  shopLinksDelete,
  shopLinksOverwrite,
  getCreateCardState,
} from "@/store/redux/reducers/createCard.reducer";
import { useRef, useState } from "react";
import SettingsCard, { DefaultCardTitle } from "../settingsContainer";
import AddNewLink from "./addLink";
import Modal from "@/components/modal";
import EachLink from "./eachLink";

const AddLinks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<ICardLinks>();

  const dispatch = useAppDispatcher();
  const { shopLinks: allLinks } = useAppSelector(getCreateCardState);

  const toggleModal = () => {
    setSelectedLink(undefined);
    setIsModalOpen((prev) => !prev);
  };

  const onEdit = (link: ICardLinks) => {
    setSelectedLink(link);
    setIsModalOpen(true);
  };
  const onDelete = (linkId: string) => {
    dispatch(shopLinksDelete(linkId));
  };

  const onEditHandler = (value: ICardLinks) => {
    setSelectedLink(undefined);
    setIsModalOpen(false);
    dispatch(shopLinksEdit(value));
  };

  const onFinish = (value: ICardLinks) => {
    dispatch(shopLinks(value));
    toggleModal();
  };

  const draggedLink = useRef<any>(null);
  const draggedOverLink = useRef<any>(null);

  const onDragStart = (linkId: string) => {
    draggedLink.current = linkId;
  };

  const dragOveritem = (linkId: string) => {
    draggedOverLink.current = linkId;
  };

  const onDrop = () => {
    if (
      allLinks &&
      draggedLink.current !== null &&
      draggedOverLink.current !== null
    ) {
      const copyLinks = [...allLinks];
      const draggedLinkObject = copyLinks.find(
        (link) => link.id === draggedLink.current
      );
      if (draggedLinkObject) {
        const draggedLinkIndex = copyLinks.findIndex(
          (link) => link.id === draggedLink.current
        );
        const draggedOverLinkIndex = copyLinks.findIndex(
          (link) => link.id === draggedOverLink.current
        );
        if (draggedLinkIndex >= 0 && draggedOverLinkIndex >= 0) {
          copyLinks.splice(draggedLinkIndex, 1);
          copyLinks.splice(draggedOverLinkIndex, 0, draggedLinkObject);
          draggedLink.current = null;
          draggedOverLink.current = null;

          dispatch(shopLinksOverwrite(copyLinks));
        }
      }
    }
  };

  return (
    <div>
      <SettingsCard cardTitle={<DefaultCardTitle>Add links</DefaultCardTitle>}>
        <div className="text-end">
          <CustomButton label={"Add new"} onClick={toggleModal} />
        </div>
        <div className="h-[15.2rem] overflow-y-auto">
          {allLinks.map((link) => (
            <EachLink
              link={link}
              key={link.id}
              onEdit={onEdit}
              onDelete={onDelete}
              dragOveritem={dragOveritem}
              onDragStart={onDragStart}
              onDrop={onDrop}
            />
          ))}
        </div>
      </SettingsCard>
      <Modal open={isModalOpen} onOpenChange={toggleModal}>
        <AddNewLink
          onFinish={(value: ICardLinks) => onFinish(value)}
          selectedLink={selectedLink}
          onEditHandler={onEditHandler}
        />
      </Modal>
    </div>
  );
};
export default AddLinks;
