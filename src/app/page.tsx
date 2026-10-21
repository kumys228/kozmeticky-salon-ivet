import Image from "next/image";
import {
  CalendarDays,
  ChevronRight,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Flower2,
} from "lucide-react";
import { Services } from "@/components/Services";
import { Botanical } from "@/components/Brand";
import { site } from "@/data/site";
import { images } from "@/data/assets";
export default function Home() {
  return (
    <main id="domov">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-photo">
          <Image
            src={images.hero}
            alt="Pokojný interiér kozmetického salónu s mäkkým lehátkom a denným svetlom"
            fill
            preload
            sizes="(max-width: 700px) 100vw, 65vw"
          />
        </div>
        <div className="hero-wash" />
        <div className="container hero-inner">
          <p className="eyebrow hero-reveal">Kozmetický salón IVET</p>
          <h1 id="hero-title" className="hero-reveal">
            Starostlivosť o pleť
            <br />s osobným prístupom.
          </h1>
          <p className="hero-description hero-reveal">
            Kozmetické ošetrenia, líčenie a chvíľa pokoja pre vás — v Trnave.
          </p>
          <div className="hero-actions hero-reveal">
            <a className="button primary" href="#kontakt">
              Objednať termín <CalendarDays size={20} />
            </a>
            <a className="button outline" href="#sluzby">
              Pozrieť služby <ChevronRight size={20} />
            </a>
          </div>
        </div>
      </section>
      <div className="benefits" aria-label="Naša filozofia">
        <div className="container benefits-inner">
          <div>
            <Leaf />
            <span>Individuálny prístup</span>
          </div>
          <div>
            <Flower2 />
            <span>Kvalitná kozmetika</span>
          </div>
          <div>
            <Heart />
            <span>Príjemné prostredie</span>
          </div>
        </div>
      </div>
      <section
        className="services section"
        id="sluzby"
        aria-labelledby="services-title"
      >
        <Botanical className="botanical services-botanical" />
        <div className="container">
          <div className="section-heading" data-reveal>
            <h2 id="services-title">Naše služby</h2>
            <span />
          </div>
          <Services />
        </div>
      </section>
      <section
        className="about-contact section"
        aria-label="O salóne a kontakt"
      >
        <Botanical className="botanical about-botanical" />
        <div className="about-contact-inner">
          <div className="about-image" data-reveal>
            <Image
              src={images.about}
              alt="Útulný kút salónu so sviečkami, kozmetikou a kvetmi"
              fill
              sizes="(max-width: 700px) 100vw, 27vw"
            />
          </div>
          <div className="about-copy" id="o-mne" data-reveal>
            <p className="eyebrow eyebrow-line">O salóne</p>
            <h2>
              Som kozmetička
              <br />
              telom aj dušou.
            </h2>
            <p>
              V Kozmetickom salóne IVET verím, že skutočná krása vychádza z
              rovnováhy. Doprajte si odbornú starostlivosť, kvalitnú kozmetiku a
              pokojné prostredie, kde sa môžete na chvíľu zastaviť a venovať len
              sebe.
            </p>
          </div>
          <div className="contact" id="kontakt" data-reveal>
            <h2>Objednajte si chvíľu pre seba</h2>
            <div className="contact-body">
              <address className="contact-details">
                <a href={site.maps} target="_blank" rel="noopener noreferrer">
                  <span className="icon-disc">
                    <MapPin />
                  </span>
                  <span>
                    Kozmetický salón IVET<small>{site.address}</small>
                  </span>
                </a>
                <a href={site.tel}>
                  <span className="icon-disc">
                    <Phone />
                  </span>
                  <span>{site.phone}</span>
                </a>
                <a href={site.mailto}>
                  <span className="icon-disc">
                    <Mail />
                  </span>
                  <span>{site.email}</span>
                </a>
              </address>
              <div className="contact-actions">
                <a className="button primary" href={site.tel}>
                  <Phone size={22} /> Zavolať <ChevronRight size={18} />
                </a>
                <a className="button outline" href={site.mailto}>
                  <Mail size={22} /> Napísať e-mail <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
