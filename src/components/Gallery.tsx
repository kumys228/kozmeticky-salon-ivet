"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { photos } from "@/data/gallery";
export function Gallery() {
  const [current, setCurrent] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const move = (direction: number) =>
    setCurrent((value) => (value + direction + photos.length) % photos.length);
  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <button
            className="gallery-tile"
            data-reveal
            key={photo.image}
            aria-label={`Zväčšiť: ${photo.title}`}
            onClick={() => {
              setCurrent(index);
              dialog.current?.showModal();
            }}
          >
            <Image
              src={`/images/${photo.image}`}
              alt={photo.title}
              fill
              sizes="(max-width: 600px) 92vw, (max-width: 1000px) 45vw, 30vw"
            />
            <span>
              <span>{photo.title}</span>
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        className="lightbox"
        ref={dialog}
        aria-label="Fotogaléria"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") move(1);
          if (event.key === "ArrowLeft") move(-1);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="icon-button lightbox-close"
          aria-label="Zavrieť galériu"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <button
          className="icon-button lightbox-prev"
          aria-label="Predchádzajúca fotografia"
          onClick={() => move(-1)}
        >
          <ChevronLeft />
        </button>
        <div className="lightbox-image">
          <Image
            src={`/images/${photos[current].image}`}
            alt={photos[current].title}
            fill
            sizes="90vw"
          />
        </div>
        <p aria-live="polite">
          {photos[current].title} · {current + 1} / {photos.length}
        </p>
        <button
          className="icon-button lightbox-next"
          aria-label="Nasledujúca fotografia"
          onClick={() => move(1)}
        >
          <ChevronRight />
        </button>
      </dialog>
    </>
  );
}
