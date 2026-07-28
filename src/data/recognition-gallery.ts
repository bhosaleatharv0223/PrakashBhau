import urls from "./trophy-urls.json";

export interface RecognitionGalleryItem {
  src: string;
  title?: string;
}

const fromFilename = (src: string) => {
  const filename = src.split("/").pop() || src;
  const title = filename.replace(/\.(jpe?g|png|webp)$/i, "").replace(/[_-]+/g, " ").trim();
  return title || undefined;
};

export const recognitionGalleryItems: RecognitionGalleryItem[] = (urls as string[]).map((src) => ({
  src,
  title: fromFilename(src),
}));

export const recognitionGalleryPreviewItems = recognitionGalleryItems.slice(0, 6);
