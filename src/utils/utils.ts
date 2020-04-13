export const scrollToView = (event: React.MouseEvent, anchorId: string) => {
  const anchor = (
    (event.target as HTMLDivElement).ownerDocument || document
  ).querySelector(anchorId);

  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth", block: "end" });
  }
};

export const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
