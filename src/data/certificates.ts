import type { CertificateEntry } from "../types/portfolio";
import cert0 from "../assets/certificates/duc-tuan/google-data-analytics.pdf";
import cert1 from "../assets/certificates/duc-tuan/data-visualization.png";
import cert2 from "../assets/certificates/duc-tuan/feature-engineering.png";
import cert3 from "../assets/certificates/duc-tuan/python.png";
import cert4 from "../assets/certificates/duc-tuan/pandas.png";
import cert5 from "../assets/certificates/duc-tuan/intro-to-machine-learning.png";
import cert6 from "../assets/certificates/duc-tuan/intro-to-programming.png";
import cert7 from "../assets/certificates/duc-tuan/google-job-search-ai.pdf";

import analyticsPreview from "../assets/certificates/duc-tuan/google-data-analytics-preview.png";
import jobSearchPreview from "../assets/certificates/duc-tuan/google-job-search-ai-preview.png";

export const certificates: CertificateEntry[] = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    kind: "Professional Certificate",
    description:
      "Completed the nine-course program covering preparation, cleaning, analysis, visualization, and communication.",
    file: cert0,
    preview: analyticsPreview,
    format: "pdf",
    logoKey: "coursera",
    logoLabel: "Google / Coursera",
    ariaLabel:
      "Open Google Data Analytics Professional Certificate certificate",
  },
  {
    title: "Data Visualization",
    issuer: "Kaggle",
    kind: "Coursework",
    description:
      "Communicating patterns through clear and effective visualizations.",
    file: cert1,
    format: "image",
    logoKey: "python",
    logoLabel: "Kaggle",
    ariaLabel: "Open Data Visualization certificate",
  },
  {
    title: "Feature Engineering",
    issuer: "Kaggle",
    kind: "Coursework",
    description: "Building useful representations for machine learning.",
    file: cert2,
    format: "image",
    logoKey: "python",
    logoLabel: "Kaggle",
    ariaLabel: "Open Feature Engineering certificate",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    kind: "Coursework",
    description: "Practical Python programming foundations.",
    file: cert3,
    format: "image",
    logoKey: "python",
    logoLabel: "Kaggle",
    ariaLabel: "Open Python certificate",
  },
  {
    title: "Pandas",
    issuer: "Kaggle",
    kind: "Coursework",
    description: "Working with tabular data in Python.",
    file: cert4,
    format: "image",
    logoKey: "python",
    logoLabel: "Kaggle",
    ariaLabel: "Open Pandas certificate",
  },
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    kind: "Coursework",
    description: "Model building, validation, and predictive foundations.",
    file: cert5,
    format: "image",
    logoKey: "python",
    logoLabel: "Kaggle",
    ariaLabel: "Open Intro to Machine Learning certificate",
  },
  {
    title: "Intro to Programming",
    issuer: "Kaggle",
    kind: "Coursework",
    description: "Foundations of computational problem solving.",
    file: cert6,
    format: "image",
    logoKey: "python",
    logoLabel: "Kaggle",
    ariaLabel: "Open Intro to Programming certificate",
  },
  {
    title: "Accelerate Your Job Search with AI",
    issuer: "Google / Coursera",
    kind: "Coursework",
    description:
      "An individual course on applying AI to the job-search process.",
    file: cert7,
    preview: jobSearchPreview,
    format: "pdf",
    logoKey: "coursera",
    logoLabel: "Google / Coursera",
    ariaLabel: "Open Accelerate Your Job Search with AI certificate",
  },
];
