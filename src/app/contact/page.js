"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./contact.module.css";

export default function ContactPage() {
  const { language, t } = useLanguage();

  // Volume Estimator State
  const [productType, setProductType] = useState("shisha");
  const [tonnage, setTonnage] = useState(18);
  const [loadingMethod, setLoadingMethod] = useState("loose");
  
  // Calculation results
  const [totalBoxes, setTotalBoxes] = useState(1800);
  const [containerRecommend, setContainerRecommend] = useState("1 x 20 FT FCL");
  const [productionDays, setProductionDays] = useState(20);

  // Visualizer results
  const [fillPercent, setFillPercent] = useState(100);
  const [visualLabel, setVisualLabel] = useState("20 FT FCL");
  const [loadStatus, setLoadStatus] = useState("good"); // underload, good, overload

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "shisha",
    quantity: "18",
    port: "",
    message: ""
  });
  const [showModal, setShowModal] = useState(false);

  // Run calculation whenever estimator inputs change
  useEffect(() => {
    const tons = parseFloat(tonnage) || 0;
    if (tons <= 0) {
      setTotalBoxes(0);
      setContainerRecommend(t("contact.minFclWarning"));
      setProductionDays(0);
      setFillPercent(0);
      setVisualLabel("-");
      setLoadStatus("underload");
      return;
    }

    // 10kg master cartons
    setTotalBoxes(Math.ceil(tons * 1000 / 10));

    // Container calculation logic
    let limit20ft = loadingMethod === "loose" ? 18.0 : 15.5;
    let limit40ft = loadingMethod === "loose" ? 26.5 : 24.0;

    // Visual Capacity calculation
    let maxCap = limit20ft;
    let containerName = "20 FT FCL";

    if (tons < limit20ft * 0.8) {
      const lclText = t("contact.lclRecommend").replace("{limit}", limit20ft.toString());
      setContainerRecommend(lclText);
      setProductionDays(15);
      
      maxCap = limit20ft;
      containerName = "20 FT FCL";
      setFillPercent(Math.round((tons / maxCap) * 100));
      setVisualLabel("20 FT FCL");
      setLoadStatus("underload");
    } else if (tons <= limit20ft) {
      setContainerRecommend(t("contact.container20"));
      setProductionDays(20);

      maxCap = limit20ft;
      containerName = "20 FT FCL";
      setFillPercent(Math.round((tons / maxCap) * 100));
      setVisualLabel("20 FT FCL");
      setLoadStatus("good");
    } else if (tons <= limit40ft) {
      setContainerRecommend(t("contact.container40"));
      setProductionDays(30);

      maxCap = limit40ft;
      containerName = "40 FT HC";
      setFillPercent(Math.round((tons / maxCap) * 100));
      setVisualLabel("40 FT HC");
      setLoadStatus(tons < limit40ft * 0.85 ? "underload" : "good");
    } else {
      const num40ft = Math.floor(tons / limit40ft);
      const remainder = tons % limit40ft;
      
      let containerText = `${num40ft} x 40 FT HC`;
      maxCap = num40ft * limit40ft;

      if (remainder > 0) {
        if (remainder <= limit20ft) {
          containerText += ` + 1 x 20 FT FCL`;
          maxCap += limit20ft;
        } else {
          containerText += ` + 1 x 40 FT HC`;
          maxCap += limit40ft;
        }
      }
      setContainerRecommend(containerText);
      setProductionDays(Math.max(35, Math.ceil(num40ft * 25)));

      setFillPercent(Math.round((tons / maxCap) * 100));
      setVisualLabel(containerText);
      setLoadStatus("good");
    }
  }, [productType, tonnage, loadingMethod, language]);

  // Sync tonnage from estimator to form input
  useEffect(() => {
    setFormData((prev) => ({ ...prev, quantity: tonnage.toString(), product: productType }));
  }, [tonnage, productType]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "quantity") {
      setTonnage(Math.max(1, parseFloat(value) || 0));
    }
    if (name === "product") {
      setProductType(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp pre-filled message text
    const waPhone = "6281234567890"; // Indonesian formatting (62...)
    const isEn = language === "en";
    const text = isEn ? 
`*NEW COCOFIRE EXPORT INQUIRY*
----------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company}
*Email:* ${formData.email}
*Product Choice:* ${formData.product.toUpperCase()} Charcoal
*Volume Required:* ${formData.quantity} Tons
*Destination Port:* ${formData.port}
*Custom Details/Notes:* ${formData.message}` :
`*INQUIRY EKSPOR COCOFIRE BARU*
----------------------------------------
*Nama Lengkap:* ${formData.name}
*Perusahaan:* ${formData.company}
*Email Bisnis:* ${formData.email}
*Pilihan Produk:* ${formData.product.toUpperCase()} Charcoal
*Volume Kargo:* ${formData.quantity} Ton
*Pelabuhan Tujuan:* ${formData.port}
*Catatan Kustom/Kemasan:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://api.whatsapp.com/send?phone=${waPhone}&text=${encodedText}`;

    // Show custom success modal first, then open WhatsApp in a new tab
    setShowModal(true);
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1500);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.badge} style={{ marginBottom: "16px" }}>{t("contact.badge")}</span>
          <h1 className={styles.title}>{t("contact.title")}</h1>
          <p className={styles.subtitle}>
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.contentSection}>
        <div className={`${styles.layoutGrid} container`}>
          
          {/* Left Column: Estimator & Contacts */}
          <div className={styles.sidebar}>
            {/* Interactive Calculator */}
            <div className={styles.calculatorCard}>
              <h3 className={styles.calcTitle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <line x1="9" y1="9" x2="15" y2="9"></line>
                  <line x1="9" y1="13" x2="15" y2="13"></line>
                  <line x1="9" y1="17" x2="15" y2="17"></line>
                  <line x1="12" y1="9" x2="12" y2="17"></line>
                </svg>
                {t("contact.calcTitle")}
              </h3>
              
              <div className={styles.calcGroup}>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label className={styles.calcLabel}>{t("contact.labelGrade")}</label>
                  <select 
                    className={styles.calcInput} 
                    value={productType}
                    onChange={(e) => setProductType(e.target.value)}
                  >
                    <option value="shisha">{t("contact.gradeShisha")}</option>
                    <option value="bbq">{t("contact.gradeBbq")}</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label className={styles.calcLabel}>{t("contact.labelVolume")}</label>
                  <input 
                    type="number" 
                    className={styles.calcInput} 
                    value={tonnage}
                    onChange={(e) => setTonnage(Math.max(1, parseFloat(e.target.value) || 0))}
                    min="1"
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label className={styles.calcLabel}>{t("contact.labelLoad")}</label>
                  <select 
                    className={styles.calcInput} 
                    value={loadingMethod}
                    onChange={(e) => setLoadingMethod(e.target.value)}
                  >
                    <option value="loose">{t("contact.loadLoose")}</option>
                    <option value="palletized">{t("contact.loadPallet")}</option>
                  </select>
                </div>
              </div>

              {/* Live Calculations Display */}
              <div className={styles.calcResults}>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>{t("contact.totalWeight")}</span>
                  <span className={styles.resultVal}>{(tonnage * 1000).toLocaleString()} kg</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>{t("contact.masterBoxes")}</span>
                  <span className={styles.resultVal}>{totalBoxes.toLocaleString()} Boxes</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>{t("contact.containerReq")}</span>
                  <span className={styles.resultVal}>{containerRecommend}</span>
                </div>
                <div className={styles.resultRow}>
                  <span className={styles.resultLabel}>{t("contact.productionTime")}</span>
                  <span className={styles.resultVal}>~{productionDays} {t("contact.days")}</span>
                </div>
              </div>

              {/* Dynamic 2D Shipping Container Simulator */}
              <div className={styles.visualizerWrapper}>
                <div className={styles.visualizerTitle}>📦 {t("contact.visualizer.title")} ({visualLabel})</div>
                <div className={styles.containerOutline}>
                  <div 
                    className={styles.containerFill} 
                    style={{ width: `${fillPercent}%` }}
                  />
                  <span className={styles.containerLabel}>
                    {fillPercent}%
                  </span>
                </div>
                <div className={styles.visualizerMeta}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                    {tonnage} / {loadingMethod === "loose" ? "Max FCL" : "Pallet FCL"}
                  </span>
                  <span className={`${styles.visualizerStatus} ${
                    loadStatus === "underload" ? styles.statusUnderload : 
                    loadStatus === "good" ? styles.statusGood : styles.statusOverload
                  }`}>
                    {loadStatus === "underload" ? t("contact.visualizer.underload") : t("contact.visualizer.good")}
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Contact Info */}
            <div style={{ padding: "28px", borderRadius: "20px", background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border-color)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "16px" }}>{t("contact.directTitle")}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "12px" }}>
                {t("contact.directDesc")}
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=6281234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary" 
                style={{ width: "100%", justifyContent: "center", border: "1px solid var(--border-color-glow)", color: "var(--accent-orange)" }}
              >
                {t("contact.chatWa")}
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className={styles.formCard}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: "800", marginBottom: "8px" }}>{t("contact.formTitle")}</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "32px" }}>
              {t("contact.formDesc")}
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className={styles.formGrid}>
                {/* Name */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t("contact.formName")}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className={styles.formInput}
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Company */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t("contact.formCompany")}</label>
                  <input 
                    type="text" 
                    name="company"
                    required
                    className={styles.formInput}
                    placeholder="Acme Import Ltd."
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t("contact.formEmail")}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className={styles.formInput}
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Destination Port */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t("contact.formPort")}</label>
                  <input 
                    type="text" 
                    name="port"
                    required
                    className={styles.formInput}
                    placeholder={t("contact.formPortPlaceholder")}
                    value={formData.port}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Selection Type */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t("products.badge")}</label>
                  <select 
                    name="product"
                    className={styles.formSelect}
                    value={formData.product}
                    onChange={handleInputChange}
                  >
                    <option value="shisha">{t("contact.gradeShisha")}</option>
                    <option value="bbq">{t("contact.gradeBbq")}</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>{t("contact.labelVolume")}</label>
                  <input 
                    type="number" 
                    name="quantity"
                    required
                    min="1"
                    className={styles.formInput}
                    placeholder="18"
                    value={formData.quantity}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Message */}
                <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                  <label className={styles.formLabel}>{t("contact.formNotes")}</label>
                  <textarea 
                    name="message"
                    className={styles.formTextarea}
                    placeholder={t("contact.formNotesPlaceholder")}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem", padding: "16px" }}>
                {t("contact.btnSubmit")}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Success Notification Modal */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.successIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className={styles.modalTitle}>{t("contact.successTitle")}</h3>
            <p className={styles.modalText}>
              {t("contact.successDesc")}
            </p>
            <button className="btn-primary" onClick={() => setShowModal(false)} style={{ width: "100%", justifyContent: "center" }}>
              {t("contact.btnOk")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
