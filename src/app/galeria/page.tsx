import type { Metadata } from "next";
import { Gallery } from "@/components/Gallery";
export const metadata: Metadata = {
  title: "Galéria",
  description:
    "Nahliadnite do atmosféry Kozmetického salónu IVET a sveta našej starostlivosti.",
};
export default function GalleryPage() {
  return (
    <main className="gallery-page container">
      <p className="eyebrow" data-reveal>
        Kozmetický salón IVET
      </p>
      <div className="section-heading" data-reveal>
        <h1>Chvíľa pokoja v obrazoch</h1>
        <span />
      </div>
      <p className="gallery-intro" data-reveal>
        Malé detaily, príjemná atmosféra a starostlivosť, ktorá patrí len vám.
      </p>
      <Gallery />
      <p className="gallery-note">
        Ilustračné vizualizácie atmosféry salónu a ošetrení.
      </p>
      <a className="button outline" href="/#kontakt">
        Doprajte si chvíľu pre seba
      </a>
    </main>
  );
}
