"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MapPin, Menu, X, Phone, Mail } from "lucide-react";
import { Brand } from "./Brand";
import { navigation, site } from "@/data/site";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
  }, [open]);
  const close = () => {
    setOpen(false);
    toggle.current?.focus();
  };
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="Kozmetický salón IVET — domov">
          <Brand />
        </Link>
        <nav className="desktop-nav" aria-label="Hlavná navigácia">
          {navigation.map((item) => (
            <Link
              className={
                (item.href === "/" && pathname === "/") ||
                (item.href === "/galeria" && pathname === "/galeria")
                  ? "active"
                  : ""
              }
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-contact">
          <a
            className="header-address"
            href={site.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={20} />
            {site.address}
          </a>
          <Link className="button primary header-book" href="/#kontakt">
            Objednať termín
          </Link>
        </div>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label="Otvoriť menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
        <dialog
          id="mobile-menu"
          ref={dialog}
          className="mobile-menu"
          onCancel={close}
          onClose={() => setOpen(false)}
        >
          <div className="mobile-menu-top">
            <Brand />
            <button
              className="icon-button"
              onClick={close}
              aria-label="Zavrieť menu"
            >
              <X />
            </button>
          </div>
          <nav aria-label="Mobilná navigácia">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="button primary" href={site.tel}>
            <Phone size={18} />
            {site.phone}
          </a>
          <p>{site.address}</p>
        </dialog>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Link href="/" aria-label="IVET — domov">
          <Brand />
        </Link>
        <nav aria-label="Navigácia v pätičke">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="footer-contacts">
          <a
            className="footer-address"
            href={site.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={20} />
            {site.address}
          </a>
          {Object.entries(site.social)
            .filter(([, url]) => !!url)
            .map(([name, url]) => (
              <a
                className="icon-disc"
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name === "instagram" ? "Instagram" : "Facebook"}
              >
                <span className="social-glyph">
                  {name === "instagram" ? "◎" : "f"}
                </span>
              </a>
            ))}
          <a
            className="icon-disc"
            href={site.tel}
            aria-label="Zavolať do salónu"
          >
            <Phone size={18} />
          </a>
          <a
            className="icon-disc"
            href={site.mailto}
            aria-label="Napísať do salónu"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
