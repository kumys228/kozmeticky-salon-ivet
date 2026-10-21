export const images = {
  hero: "/images/hero.png",
  about: "/images/salon-about.png",
};
export function imagePath(filename: string) {
  return `/images/${filename}`;
}
