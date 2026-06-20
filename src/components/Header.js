"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.process"), path: "/process" },
    { name: t("nav.gallery"), path: "/gallery" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.navContainer} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <svg
            className={styles.logoIcon}
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
          </svg>
          <span className="text-gradient-gold">COCOFIRE</span>
        </Link>

        {/* Desktop & Mobile Nav */}
        <nav>
          <ul className={`${styles.navList} ${isOpen ? styles.navListOpen : ""}`}>
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            
            {/* Mobile Actions */}
            {isOpen && (
              <>
                <li style={{ width: "100%", marginTop: "8px" }}>
                  <button onClick={toggleLanguage} className={styles.langBtn} style={{ width: "100%", justifyContent: "center" }} aria-label="Toggle Language">
                    <span>🌐</span>
                    <span>{language === "en" ? "English" : "Bahasa Indonesia"}</span>
                  </button>
                </li>
                <li className={styles.mobileActions}>
                  <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    {t("nav.quote")}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* CTA & Language Toggle */}
        <div className={styles.headerActions}>
          <button onClick={toggleLanguage} className={styles.langBtn} aria-label="Toggle Language">
            <span>🌐</span>
            <span>{language === "en" ? "EN" : "ID"}</span>
          </button>
          <Link href="/contact" className="btn-primary">
            {t("nav.quote")}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}
