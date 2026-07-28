import fs from "fs";
import path from "path";
const root = process.cwd();
const srcDir = path.join(root, "public", "attachments (4)");
const destDir = path.join(root, "public", "divine-moments-all");
fs.mkdirSync(destDir, { recursive: true });
const files = fs.readdirSync(srcDir).filter(f => fs.statSync(path.join(srcDir, f)).isFile());
const copied = [];
files.forEach((file, index) => {
  const safeName = `divine-moment-${index + 1}-${file.replace(/\s+/g, "-")}`;
  fs.copyFileSync(path.join(srcDir, file), path.join(destDir, safeName));
  copied.push(safeName);
});
copied.sort();
const fromFilename = (src) => {
  const filename = src.split("/").pop() || src;
  const title = filename.replace(/\.(jpe?g|png|webp)$/i, "").replace(/^divine-moment-\d+-/, "").replace(/[-_]+/g, " ").trim();
  return title || undefined;
};
const lines = [
  "export interface DivineMomentItem {",
  "  src: string;",
  "  title?: string;",
  "}",
  "",
  "export const divineMomentsGalleryItems: DivineMomentItem[] = [",
];
copied.forEach((name) => {
  const title = fromFilename(name);
  lines.push(`  { src: \"/divine-moments-all/${name}\", title: \"${title || "Divine Moment"}\" },`);
});
lines.push("];", "", "export const divineMomentsGalleryPreviewItems = divineMomentsGalleryItems.slice(0, 6);");
fs.writeFileSync(path.join(root, "src", "data", "divine-moments-gallery.ts"), lines.join("\n"), "utf8");
console.log(`Created /public/divine-moments-all with ${copied.length} images and generated src/data/divine-moments-gallery.ts`);
