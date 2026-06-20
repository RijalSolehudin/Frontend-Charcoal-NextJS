"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./gallery.module.css";

export default function GalleryPage() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      src: "/charcoal_hero.png",
      category: "products",
      categoryLabel: t("gallery.items.0.label"),
      title: t("gallery.items.0.title")
    },
    {
      src: "/charcoal_shapes.png",
      category: "shapes",
      categoryLabel: t("gallery.items.1.label"),
      title: t("gallery.items.1.title")
    },
    {
      src: "/charcoal_factory.png",
      category: "factory",
      categoryLabel: t("gallery.items.2.label"),
      title: t("gallery.items.2.title")
    },
    {
      src: "/charcoal_hero.png",
      category: "factory",
      categoryLabel: t("gallery.items.3.label"),
      title: t("gallery.items.3.title")
    },
    {
      src: "/charcoal_shapes.png",
      category: "products",
      categoryLabel: t("gallery.items.4.label"),
      title: t("gallery.items.4.title")
    },
    {
      src: "/charcoal_factory.png",
      category: "shapes",
      categoryLabel: t("gallery.items.5.label"),
      title: t("gallery.items.5.title")
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const filters = [
    { key: "all", label: t("gallery.filters.all") },
    { key: "products", label: t("gallery.filters.products") },
    { key: "shapes", label: t("gallery.filters.shapes") },
    { key: "factory", label: t("gallery.filters.factory") }
  ];

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.badge} style={{ marginBottom: "16px" }}>{t("gallery.badge")}</span>
          <h1 className={styles.title}>{t("gallery.title")}</h1>
          <p className={styles.subtitle}>
            {t("gallery.subtitle")}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.contentSection}>
        <div className="container">
          {/* Tabs Filter */}
          <div className={styles.filterTabs}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`${styles.filterBtn} ${activeFilter === filter.key ? styles.activeTab : ""}`}
                onClick={() => {
                  setActiveFilter(filter.key);
                  setLightboxIndex(null);
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className={styles.galleryGrid}>
            {filteredItems.map((item, i) => (
              <div key={i} className={styles.galleryItem} onClick={() => setLightboxIndex(i)}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.galleryImage}
                />
                <div className={styles.galleryOverlay}>
                  <span className={styles.itemCategory}>{item.categoryLabel}</span>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* B2B Promo Box */}
          <div style={{ 
            marginTop: "80px", 
            padding: "40px", 
            borderRadius: "24px", 
            background: "rgba(255, 85, 0, 0.03)", 
            border: "1px solid rgba(255, 85, 0, 0.15)",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "12px" }}>{t("gallery.tourTitle")}</h3>
            <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 24px auto", lineHeight: "1.6" }}>
              {t("gallery.tourDesc")}
            </p>
            <Link href="/contact" className="btn-primary">
              {t("gallery.tourBtn")}
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className={styles.lightboxOverlay} onClick={() => setLightboxIndex(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={() => setLightboxIndex(null)} aria-label="Close Lightbox">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {filteredItems.length > 1 && (
              <>
                <button className={`${styles.lightboxNav} ${styles.lightboxPrev}`} onClick={handlePrevImage} aria-label="Previous Image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button className={`${styles.lightboxNav} ${styles.lightboxNext}`} onClick={handleNextImage} aria-label="Next Image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </>
            )}

            <div className={styles.lightboxImageWrapper}>
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className={styles.lightboxImage}
                priority
              />
            </div>

            <div className={styles.lightboxCaption}>
              <div className={styles.lightboxCat}>{filteredItems[lightboxIndex].categoryLabel}</div>
              <div className={styles.lightboxTitle}>{filteredItems[lightboxIndex].title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
