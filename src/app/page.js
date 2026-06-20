"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";
import shapesImg from "../../public/charcoal_shapes.png";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { number: "150T", label: t("home.statCapacity") },
    { number: "25+", label: t("home.statCountries") },
    { number: "80%+", label: t("home.statCarbon") },
    { number: "100%", label: t("home.statNatural") }
  ];

  const features = [
    {
      title: t("home.features.0.title"),
      desc: t("home.features.0.desc"),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M7.5 12h9"></path>
          <path d="M12 7.5v9"></path>
        </svg>
      )
    },
    {
      title: t("home.features.1.title"),
      desc: t("home.features.1.desc"),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
        </svg>
      )
    },
    {
      title: t("home.features.2.title"),
      desc: t("home.features.2.desc"),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      )
    }
  ];

  const specsComparison = [
    { param: t("home.comparison.params.0.name"), premium: t("home.comparison.params.0.premium"), standard: t("home.comparison.params.0.standard") },
    { param: t("home.comparison.params.1.name"), premium: t("home.comparison.params.1.premium"), standard: t("home.comparison.params.1.standard") },
    { param: t("home.comparison.params.2.name"), premium: t("home.comparison.params.2.premium"), standard: t("home.comparison.params.2.standard") },
    { param: t("home.comparison.params.3.name"), premium: t("home.comparison.params.3.premium"), standard: t("home.comparison.params.3.standard") },
    { param: t("home.comparison.params.4.name"), premium: t("home.comparison.params.4.premium"), standard: t("home.comparison.params.4.standard") },
    { param: t("home.comparison.params.5.name"), premium: t("home.comparison.params.5.premium"), standard: t("home.comparison.params.5.standard") }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={`${styles.heroContent} container`}>
          <div className={styles.heroTagline}>
            <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--accent-orange)", marginRight: "8px" }}></span>
            {t("home.tagline")}
          </div>
          <h1 className={styles.heroTitle}>
            {t("home.heroTitlePart1")} <span className="text-gradient">{t("home.heroTitlePart2")}</span> {t("home.heroTitlePart3")}
          </h1>
          <p className={styles.heroDescription}>
            {t("home.heroDesc")}
          </p>
          <div className={styles.heroButtons}>
            <Link href="/contact" className="btn-primary">
              {t("home.btnSamples")}
            </Link>
            <Link href="/products" className="btn-secondary">
              {t("home.btnSpecs")}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className={styles.statsSection}>
        <div className={`${styles.statsGrid} container`}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Features Section */}
      <section className={styles.featuresSection}>
        <div className="bg-glow-orb" style={{ top: "10%", left: "5%" }}></div>
        <div className="container">
          <h2 className="section-title">{t("home.whyTitle")} <span className="text-gradient">COCOFIRE</span>?</h2>
          <p className="section-subtitle">
            {t("home.whySubtitle")}
          </p>
          <div className={styles.featuresGrid}>
            {features.map((feat, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feat.icon}</div>
                <h3 className={styles.featureTitle}>{feat.title}</h3>
                <p className={styles.featureDesc}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specifications Showcase Section */}
      <section className={styles.specsSection}>
        <div className="bg-glow-orb" style={{ bottom: "10%", right: "5%" }}></div>
        <div className={`${styles.specsLayout} container`}>
          <div>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
              {t("home.specsTitle")} <span className="text-gradient">{t("home.specsTitlePart2")}</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: "left", margin: "0 0 32px 0", maxWidth: "100%" }}>
              {t("home.specsSubtitle")}
            </p>
            
            <div className={styles.comparisonBox}>
              <div className={`${styles.comparisonRow} ${styles.comparisonHeader}`}>
                <span>{t("home.comparison.spec")}</span>
                <span className={styles.compPremium}>{t("home.comparison.premium")}</span>
                <span className={styles.compStandard}>{t("home.comparison.standard")}</span>
              </div>
              
              {specsComparison.map((spec, i) => (
                <div key={i} className={styles.comparisonRow}>
                  <span className={styles.compLabel}>{spec.param}</span>
                  <span className={styles.compPremium}>{spec.premium}</span>
                  <span className={styles.compStandard}>{spec.standard}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.specsVisual}>
            <Image 
              src={shapesImg} 
              alt="Premium Coconut Charcoal Briquettes Shapes"
              width={600}
              height={600}
              className={styles.specsImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* 5. Call To Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>{t("home.ctaTitle")}</h2>
            <p className={styles.ctaDesc}>
              {t("home.ctaDesc")}
            </p>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1.1rem", padding: "16px 36px" }}>
              {t("home.ctaBtn")}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
