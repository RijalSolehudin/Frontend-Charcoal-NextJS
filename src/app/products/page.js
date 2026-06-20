"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./products.module.css";
import shapesImg from "../../../public/charcoal_shapes.png";
import factoryImg from "../../../public/charcoal_factory.png";

export default function ProductsPage() {
  const { language, t } = useLanguage();

  const shishaSpecs = [
    { label: language === "en" ? "Fixed Carbon" : "Karbon Terikat", value: "Min 80%" },
    { label: language === "en" ? "Moisture Content" : "Kadar Air", value: "Max 5.5%" },
    { label: language === "en" ? "Ash Content" : "Kadar Abu", value: "2.0% - 2.4%" },
    { label: language === "en" ? "Ash Color" : "Warna Abu", value: language === "en" ? "White / Light Grey" : "Putih / Abu-abu Terang" },
    { label: language === "en" ? "Volatile Matter" : "Zat Terbang", value: "11.5% - 13.0%" },
    { label: language === "en" ? "Calorific Value" : "Nilai Kalori", value: "Min 7,300 kcal/kg" },
    { label: language === "en" ? "Burning Time" : "Waktu Bakar", value: language === "en" ? "2.0 - 2.5 Hours" : "2.0 - 2.5 Jam" }
  ];

  const bbqSpecs = [
    { label: language === "en" ? "Fixed Carbon" : "Karbon Terikat", value: "70% - 75%" },
    { label: language === "en" ? "Moisture Content" : "Kadar Air", value: "Max 7%" },
    { label: language === "en" ? "Ash Content" : "Kadar Abu", value: "4% - 6%" },
    { label: language === "en" ? "Ash Color" : "Warna Abu", value: language === "en" ? "Greyish White" : "Abu-abu Keputihan" },
    { label: language === "en" ? "Volatile Matter" : "Zat Terbang", value: "15% - 18%" },
    { label: language === "en" ? "Calorific Value" : "Nilai Kalori", value: "Min 6,800 kcal/kg" },
    { label: language === "en" ? "Burning Time" : "Waktu Bakar", value: language === "en" ? "3.5 - 4.5 Hours" : "3.5 - 4.5 Jam" }
  ];

  const shishaSizes = [
    { val: "25x25x25 mm", name: language === "en" ? "Standard Cube (72 pcs/kg)" : "Kubus Standar (72 pcs/kg)" },
    { val: "26x26x26 mm", name: language === "en" ? "Large Cube (64 pcs/kg)" : "Kubus Besar (64 pcs/kg)" },
    { val: "25x25x15 mm", name: language === "en" ? "Flat Cube (120 pcs/kg)" : "Flat / Kubus Pipih (120 pcs/kg)" }
  ];

  const bbqSizes = [
    { val: "Hexagonal", name: language === "en" ? "Outer Ø 5cm, L 10-20cm (with hole)" : "Ø Luar 5cm, P 10-20cm (berlubang)" },
    { val: "Pillow Shape", name: language === "en" ? "50x50x30 mm cushion style" : "Bentuk Bantal 50x50x30 mm" },
    { val: "Cylinder", name: language === "en" ? "Ø 4.5cm, customized length" : "Silinder Ø 4.5cm, panjang kustom" }
  ];

  const shippingConfigs = [
    { container: "20 FT FCL", loading: language === "en" ? "Loose / Hand Loaded" : "Curah / Pemuatan Manual", capacity: language === "en" ? "Approx. 18.0 Metric Tons" : "Sekitar 18.0 Metrik Ton", packing: "10kg master carton" },
    { container: "20 FT FCL", loading: language === "en" ? "Palletized (20 Pallets)" : "Dengan Palet (20 Palet)", capacity: language === "en" ? "Approx. 15.5 Metric Tons" : "Sekitar 15.5 Metrik Ton", packing: "10kg master carton" },
    { container: "40 FT FCL (HC)", loading: language === "en" ? "Loose / Hand Loaded" : "Curah / Pemuatan Manual", capacity: language === "en" ? "Approx. 26.5 Metric Tons" : "Sekitar 26.5 Metrik Ton", packing: "10kg master carton" },
    { container: "40 FT FCL (HC)", loading: language === "en" ? "Palletized (40 Pallets)" : "Dengan Palet (40 Palet)", capacity: language === "en" ? "Approx. 24.0 Metric Tons" : "Sekitar 24.0 Metrik Ton", packing: "10kg master carton" }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.badge} style={{ marginBottom: "16px" }}>{t("products.badge")}</span>
          <h1 className={styles.title}>{t("products.title")}</h1>
          <p className={styles.subtitle}>
            {t("products.subtitle")}
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.grid}>
            {/* Shisha Charcoal */}
            <div className={styles.productCard} id="shisha">
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={shapesImg} 
                  alt="Shisha Coconut Charcoal Briquettes"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h2 className={styles.cardTitle} style={{ margin: 0 }}>{t("products.shishaTitle")}</h2>
                  <span className={styles.badge}>{t("products.bestSeller")}</span>
                </div>
                <p className={styles.cardDesc}>
                  {t("products.shishaDesc")}
                </p>
                
                <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>{t("products.labParams")}</h3>
                <div className={styles.specsList}>
                  {shishaSpecs.map((spec, i) => (
                    <div key={i} className={styles.specItem}>
                      <span className={styles.specLabel}>{spec.label}</span>
                      <span className={styles.specValue}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>{t("products.sizesFormats")}</h3>
                <div className={styles.sizesGrid}>
                  {shishaSizes.map((size, i) => (
                    <div key={i} className={styles.sizeBox}>
                      <div className={styles.sizeVal}>{size.val}</div>
                      <div className={styles.sizeName}>{size.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* BBQ Charcoal */}
            <div className={styles.productCard} id="barbecue">
              <div className={styles.cardImageWrapper}>
                <Image 
                  src={factoryImg} 
                  alt="BBQ Coconut Charcoal Briquettes"
                  fill
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <h2 className={styles.cardTitle} style={{ margin: 0 }}>{t("products.bbqTitle")}</h2>
                  <span className={styles.badge} style={{ background: "rgba(229, 169, 59, 0.1)", borderColor: "rgba(229, 169, 59, 0.2)", color: "var(--accent-gold)" }}>{t("products.highHeat")}</span>
                </div>
                <p className={styles.cardDesc}>
                  {t("products.bbqDesc")}
                </p>
                
                <h3 style={{ fontSize: "1.1rem", marginBottom: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>{t("products.labParams")}</h3>
                <div className={styles.specsList}>
                  {bbqSpecs.map((spec, i) => (
                    <div key={i} className={styles.specItem}>
                      <span className={styles.specLabel}>{spec.label}</span>
                      <span className={styles.specValue}>{spec.value}</span>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.1rem", marginBottom: "12px" }}>{t("products.sizesFormats")}</h3>
                <div className={styles.sizesGrid}>
                  {bbqSizes.map((size, i) => (
                    <div key={i} className={styles.sizeBox}>
                      <div className={styles.sizeVal}>{size.val}</div>
                      <div className={styles.sizeName}>{size.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Container Shipping Configurations */}
      <section className={styles.shippingSection} id="shipping">
        <div className="container">
          <h2 className="section-title">{t("products.shippingTitle")} <span className="text-gradient">{t("products.shippingTitlePart2")}</span></h2>
          <p className="section-subtitle">
            {t("products.shippingSubtitle")}
          </p>

          <div className={styles.tableWrapper}>
            <table className={styles.shipTable}>
              <thead>
                <tr>
                  <th>{t("products.tableHeaders.type")}</th>
                  <th>{t("products.tableHeaders.loading")}</th>
                  <th>{t("products.tableHeaders.weight")}</th>
                  <th>{t("products.tableHeaders.packing")}</th>
                </tr>
              </thead>
              <tbody>
                {shippingConfigs.map((config, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: "700" }}>{config.container}</td>
                    <td style={{ color: "var(--text-secondary)" }}>{config.loading}</td>
                    <td style={{ color: "var(--accent-orange)", fontWeight: "600" }}>{config.capacity}</td>
                    <td style={{ color: "var(--text-secondary)" }}>{config.packing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: "40px", padding: "24px", borderRadius: "16px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)", fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
            <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "8px" }}>📦 {t("products.packagingOpts")}</strong>
            - {t("products.packDetail1")}<br />
            - {t("products.packDetail2")}
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1.1rem" }}>
              {t("products.btnQuote")}
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
