"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

// Web Animations keep visual transforms out of React's streamed HTML attributes.
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        autoRaf: true,
        duration: 0.85,
        anchors: { offset: -85 },
        prevent: (node) => !!node.closest("dialog"),
      });
      lenis.on("scroll", ScrollTrigger.update);
      const animations: Animation[] = [];
      const triggers: ScrollTrigger[] = [];
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((element, index) => {
          const isImage = element.classList.contains("about-image");
          const animation = element.animate(
            isImage
              ? [
                  { opacity: 0, clipPath: "inset(0 0 12% 0)" },
                  { opacity: 1, clipPath: "inset(0 0 0% 0)" },
                ]
              : [
                  { opacity: 0, transform: "translateY(24px)" },
                  { opacity: 1, transform: "translateY(0px)" },
                ],
            {
              duration: isImage ? 1000 : 750,
              easing: "cubic-bezier(.2,.7,.3,1)",
              fill: "both",
              delay: element.classList.contains("service-card")
                ? (index % 3) * 80
                : 0,
            },
          );
          animation.pause();
          animations.push(animation);
          triggers.push(
            ScrollTrigger.create({
              trigger: element,
              start: "top 97%",
              once: true,
              onEnter: () => animation.play(),
            }),
          );
        });
      const photo = document.querySelector(".hero-photo");
      if (photo)
        animations.push(
          photo.animate(
            [
              { clipPath: "inset(0 0 0 12%)", transform: "scale(1.035)" },
              { clipPath: "inset(0)", transform: "scale(1)" },
            ],
            { duration: 1200, easing: "cubic-bezier(.2,.7,.3,1)" },
          ),
        );
      return () => {
        lenis.destroy();
        triggers.forEach((trigger) => trigger.kill());
        animations.forEach((animation) => animation.cancel());
      };
    });
    return () => media.revert();
  }, [pathname]);
  return null;
}
