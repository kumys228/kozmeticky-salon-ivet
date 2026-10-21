"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Brush,
  Droplet,
  Leaf,
  Scissors,
  Sparkles,
  Smile,
  X,
  Phone,
  ChevronRight,
} from "lucide-react";
import { services, site } from "@/data/site";
const icons = {
  leaf: Leaf,
  drop: Droplet,
  brush: Brush,
  face: Smile,
  scissors: Scissors,
  jar: Sparkles,
};
export function Services() {
  const [selected, setSelected] = useState<(typeof services)[number]>(
    services[0],
  );
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <div className="services-grid">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <button
              className="service-card"
              key={service.title}
              data-reveal
              onClick={() => {
                setSelected(service);
                dialog.current?.showModal();
              }}
              aria-haspopup="dialog"
            >
              <Image
                src={`/images/${service.image}`}
                alt=""
                fill
                sizes="(max-width: 600px) 92vw, (max-width: 1000px) 45vw, 30vw"
              />
              <span className="card-wash" />
              <span className="service-label">
                <span className="service-icon">
                  <Icon size={25} strokeWidth={1.2} />
                </span>
                <span className="service-title">{service.title}</span>
              </span>
              <span className="card-arrow">
                <ChevronRight size={18} />
              </span>
            </button>
          );
        })}
      </div>
      <dialog
        ref={dialog}
        className="service-dialog"
        aria-labelledby="service-dialog-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <button
            className="icon-button dialog-close"
            aria-label="Zavrieť detail služby"
            onClick={() => dialog.current?.close()}
          >
            <X />
          </button>
          <div className="dialog-image">
            <Image
              src={`/images/${selected.image}`}
              alt=""
              fill
              sizes="(max-width: 600px) 92vw, 600px"
            />
          </div>
          <div className="dialog-copy">
            <p className="eyebrow">Starostlivosť pre vás</p>
            <h2 id="service-dialog-title">{selected.title}</h2>
            <p>{selected.description}</p>
            <p className="service-note">
              Cenu a dĺžku ošetrenia vám rada upresním pri objednaní.
            </p>
            <a className="button primary" href={site.tel}>
              <Phone size={18} /> Objednať telefonicky
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
