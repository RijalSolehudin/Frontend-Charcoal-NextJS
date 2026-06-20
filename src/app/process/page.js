"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./process.module.css";

export default function ProcessPage() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("process.steps.0.title"),
      desc: t("process.steps.0.desc")
    },
    {
      title: t("process.steps.1.title"),
      desc: t("process.steps.1.desc")
    },
    {
      title: t("process.steps.2.title"),
      desc: t("process.steps.2.desc")
    },
    {
      title: t("process.steps.3.title"),
      desc: t("process.steps.3.desc")
    },
    {
      title: t("process.steps.4.title"),
      desc: t("process.steps.4.desc")
    },
    {
      title: t("process.steps.5.title"),
      desc: t("process.steps.5.desc")
    },
    {
      title: t("process.steps.6.title"),
      desc: t("process.steps.6.desc")
    }
  ];

  const physicalList = [
    { title: t("process.physicalList.0.title"), text: t("process.physicalList.0.text") },
    { title: t("process.physicalList.1.title"), text: t("process.physicalList.1.text") },
    { title: t("process.physicalList.2.title"), text: t("process.physicalList.2.text") }
  ];

  const combustionList = [
    { title: t("process.combustionList.0.title"), text: t("process.combustionList.0.text") },
    { title: t("process.combustionList.1.title"), text: t("process.combustionList.1.text") },
    { title: t("process.combustionList.2.title"), text: t("process.combustionList.2.text") }
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className={styles.badge} style={{ marginBottom: "16px" }}>{t("process.badge")}</span>
          <h1 className={styles.title}>{t("process.title")}</h1>
          <p className={styles.subtitle}>
            {t("process.subtitle")}
          </p>
        </div>
      </section>

      {/* Production Timeline Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.timeline}>
            {steps.map((step, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepCard}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Standards */}
      <section className={styles.qcSection}>
        <div className="container">
          <h2 className="section-title">{t("process.qcTitle")} <span className="text-gradient">{t("process.qcTitlePart2")}</span> {t("process.qcTitlePart3")}</h2>
          <p className="section-subtitle" style={{ marginBottom: "60px" }}>
            {t("process.qcSubtitle")}
          </p>

          <div className={styles.qcGrid}>
            {/* QA Parameters */}
            <div className={styles.qcCard}>
              <h3 className={styles.qcCardTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                {t("process.physicalTests")}
              </h3>
              <ul className={styles.checkList}>
                {physicalList.map((item, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div className={styles.checkText}>
                      <strong>{item.title}:</strong> {item.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Combustion Parameters */}
            <div className={styles.qcCard}>
              <h3 className={styles.qcCardTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                {t("process.combustionTests")}
              </h3>
              <ul className={styles.checkList}>
                {combustionList.map((item, idx) => (
                  <li key={idx} className={styles.checkItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <div className={styles.checkText}>
                      <strong>{item.title}:</strong> {item.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1.1rem" }}>
              {t("process.btnReport")}
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
