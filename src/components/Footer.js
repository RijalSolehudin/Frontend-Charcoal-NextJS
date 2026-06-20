"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerGrid} container`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
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
          </div>
          <p className={styles.brandDesc}>
            {t("footer.desc")}
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className={styles.colTitle}>{t("footer.company")}</h3>
          <ul className={styles.linksList}>
            <li><Link href="/" className={styles.link}>{t("nav.home")}</Link></li>
            <li><Link href="/products" className={styles.link}>{t("nav.products")}</Link></li>
            <li><Link href="/process" className={styles.link}>{t("nav.process")}</Link></li>
            <li><Link href="/gallery" className={styles.link}>{t("nav.gallery")}</Link></li>
          </ul>
        </div>

        {/* Product Shapes */}
        <div>
          <h3 className={styles.colTitle}>{t("footer.specs")}</h3>
          <ul className={styles.linksList}>
            <li><Link href="/products#shisha" className={styles.link}>{t("footer.shisha")}</Link></li>
            <li><Link href="/products#barbecue" className={styles.link}>{t("footer.bbq")}</Link></li>
            <li><Link href="/products#flats" className={styles.link}>{t("footer.flats")}</Link></li>
            <li><Link href="/products#shipping" className={styles.link}>{t("footer.shipping")}</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className={styles.colTitle}>{t("footer.inquiry")}</h3>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{t("footer.address")}</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>+62 812-3456-7890</span>
            </li>
            <li className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>export@cocofirecharcoal.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`${styles.bottomBar} container`}>
          <p>© {currentYear} {t("footer.rights")}</p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>{t("footer.privacy")}</a>
            <a href="#" className={styles.bottomLink}>{t("footer.terms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
