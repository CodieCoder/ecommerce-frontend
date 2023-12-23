export const getMediaUrl = (mediaFile: FileList | undefined): string => {
  return mediaFile && mediaFile?.[0] ? URL.createObjectURL(mediaFile[0]) : "";
};
