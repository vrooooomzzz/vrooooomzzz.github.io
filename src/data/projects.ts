import type { ProjectEntry } from "../types/portfolio";

import courseworkCertificatesImage from "../assets/projects/coursework_and_certificates.png";
import javaResumeApplicationImage from "../assets/projects/java_resume_application.png";
import programAnalyzerImage from "../assets/projects/program_analyzer.png";

export const projects = [
  {
    id: "coursework-certificates",
    title: "Coursework and Certificates",
    description:
      "A curated academic archive covering everything I have learnt over the years.",
    image: courseworkCertificatesImage,
    imageAlt:
      "Coursework and Certificates screenshot listing deep learning, machine learning, natural language processing, and reinforcement learning courses",
    logoKey: "jupyter",
    logoLabel: "Jupyter Notebook project logo",
    logoAccent: "#f37626",
    technologies: [
      "Jupyter Notebook",
      "Python",
      "PyTorch",
      "AWS",
      "Kubernetes",
    ],
    actions: [
      {
        label: "Repository",
        href: "https://github.com/nhamhung/Coursework-and-Certificates",
        ariaLabel: "Open Coursework and Certificates repository",
      },
      {
        label: "README",
        href: "https://github.com/nhamhung/Coursework-and-Certificates#readme",
        ariaLabel: "Read Coursework and Certificates repository README",
      },
    ],
  },
  {
    id: "program-analyzer",
    title: "Program Analyzer",
    description:
      "A C++ static program analyzer built to answer developers' queries about source-code relationships.",
    image: programAnalyzerImage,
    imageAlt:
      "Program Analyzer architecture diagram connecting the user, SPA, source processor, query processor, design extractor, and program knowledge base",
    logoKey: "cplusplus",
    logoLabel: "C++ project logo",
    logoAccent: "#659ad2",
    technologies: ["C++", "Static Analysis", "Query Engine", "Team Project"],
    actions: [
      {
        label: "Repository",
        href: "https://github.com/nhamhung/Program-Analyzer",
        ariaLabel: "Open Program Analyzer repository",
      },
      {
        label: "README",
        href: "https://github.com/nhamhung/Program-Analyzer#readme",
        ariaLabel: "Read Program Analyzer repository README",
      },
    ],
  },
  {
    id: "java-resume-application",
    title: "Java Resume Application",
    description:
      "A Java desktop application for managing, customizing, and exporting resume versions from a centralized command-line workflow.",
    image: javaResumeApplicationImage,
    imageAlt:
      "Java Resume Application screenshot showing a desktop interface for profile data, tasks, experience entries, and resume details",
    logoKey: "openjdk",
    logoLabel: "Java project logo",
    logoAccent: "#e76f00",
    technologies: ["Java", "JavaFX", "Gradle", "JUnit 5", "PDFBox"],
    actions: [
      {
        label: "Repository",
        href: "https://github.com/nhamhung/Java-Resume-Application",
        ariaLabel: "Open Java Resume Application repository",
      },
      {
        label: "README",
        href: "https://github.com/nhamhung/Java-Resume-Application/blob/master/README.adoc",
        ariaLabel: "Read Java Resume Application README",
      },
    ],
  },
] satisfies ProjectEntry[];
