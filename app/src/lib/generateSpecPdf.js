import { jsPDF } from "jspdf";
import { money } from "../data/models";

export function downloadModelSpecPdf(model) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 48;

  doc.setFillColor(0, 0, 0);
  doc.rect(0, 0, pageWidth, 90, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("JEEP", margin, 36);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(255, 186, 0);
  doc.text("2026 MODEL SPECIFICATION", margin, 56);

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text(model.name.toUpperCase(), margin, 130);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  const taglineLines = doc.splitTextToSize(model.tagline, pageWidth - margin * 2);
  doc.text(taglineLines, margin, 152);

  let y = 152 + taglineLines.length * 14 + 24;

  doc.setDrawColor(224, 224, 224);
  doc.line(margin, y, pageWidth - margin, y);
  y += 24;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(120, 120, 120);
  doc.text("BODY STYLE", margin, y);
  doc.text("STARTING FROM", pageWidth / 2, y);
  y += 16;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(model.bodyStyle, margin, y);
  doc.text(money(model.startingPrice), pageWidth / 2, y);
  y += 32;

  doc.setDrawColor(224, 224, 224);
  doc.line(margin, y, pageWidth - margin, y);
  y += 28;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(0, 0, 0);
  doc.text("Key specifications", margin, y);
  y += 20;

  doc.setFontSize(11);
  model.highlights.forEach((h, i) => {
    if (i % 2 === 0) {
      doc.setFillColor(245, 245, 245);
      doc.rect(margin, y - 14, pageWidth - margin * 2, 24, "F");
    }
    doc.setFont("helvetica", "normal");
    doc.setTextColor(99, 99, 99);
    doc.text(h.k, margin + 8, y + 2);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(0, 0, 0);
    const valueLines = doc.splitTextToSize(h.v, pageWidth - margin * 2 - 220);
    doc.text(valueLines, margin + 220, y + 2);
    y += Math.max(24, valueLines.length * 14 + 6);
  });

  y += 20;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(150, 150, 150);
  const disclaimer = "Figures shown are indicative and may vary by exact configuration. Contact your nearest Al-Futtaim Jeep showroom to confirm specifications and pricing before purchase.";
  doc.text(doc.splitTextToSize(disclaimer, pageWidth - margin * 2), margin, y);

  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFillColor(0, 0, 0);
  doc.rect(0, pageHeight - 36, pageWidth, 36, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.text("© Al-Futtaim 2026. All rights reserved.", margin, pageHeight - 15);

  doc.save(`jeep-${model.id}-specifications.pdf`);
}
