import type { ProjectEntry } from "../types/portfolio";
import image0 from "../assets/analytics/spotify-features.svg";
import image1 from "../assets/analytics/kkbox-patterns.svg";
import image2 from "../assets/analytics/discount-analysis.svg";

export const projects: ProjectEntry[] = [
  {
    id: "spotify",
    title: "A different way to discover music",
    description:
      "Finding similar songs through their musical characteristics, then explaining why they belong together.",
    image: image0,
    imageAlt:
      "Illustration of audio features and a musical waveform; not a measured model result",
    logoKey: "python",
    logoLabel: "Music recommendation project",
    technologies: ["Python", "scikit-learn", "KNN", "PCA", "SHAP"],
    actions: [],
    caseStudy: [
      {
        label: "The question",
        text: "Can we recommend similar music without relying on a listener’s history?",
      },
      {
        label: "Data & method",
        text: "Used audio features from approximately 114,000 Spotify tracks, including energy, danceability, acousticness, and tempo. Compared nearest neighbors, feature-importance weighting, and principal component analysis.",
      },
      {
        label: "My contribution",
        text: "Built a content-based recommender and an interactive project application for song recommendations and feature comparisons, incorporating SHAP-based interpretation.",
      },
      {
        label: "What I learned",
        text: "Evaluated the approaches with Precision@10. In my project comparison, importance-weighted KNN performed best. Explaining a recommendation matters alongside finding a similar track.",
      },
    ],
  },
  {
    id: "kkbox",
    title: "Understanding what we replay",
    description:
      "Exploring listening patterns to predict whether a user will return to a song.",
    image: image1,
    imageAlt:
      "Illustration of user-song interactions, not a visualization of private listening records",
    logoKey: "scikitlearn",
    logoLabel: "Listening behavior project",
    technologies: [
      "Python",
      "LightGBM",
      "Feature engineering",
      "Collaborative filtering",
    ],
    actions: [],
    caseStudy: [
      {
        label: "The question",
        text: "What can user-song interactions tell us about repeat listening?",
      },
      {
        label: "Data & method",
        text: "Worked with the KKBox music recommendation dataset, with over seven million listening records, user profiles, song metadata, and interaction histories.",
      },
      {
        label: "My contribution",
        text: "Engineered behavioral features from user-song interactions, session statistics, and historical preferences; iteratively trained and tuned LightGBM models.",
      },
      {
        label: "What I learned",
        text: "The representation of listening behavior is central to the prediction task. This student project uses the historical WSDM KKBox challenge dataset; no competition placement is claimed here.",
      },
    ],
  },
  {
    id: "sim-lse",
    title: "When a discount costs too much",
    description:
      "Turning sales and profit analysis into a clearer conversation about pricing decisions.",
    image: image2,
    imageAlt:
      "Conceptual illustration of the relationship explored between discounts and profit; illustrative values",
    logoKey: "sql",
    logoLabel: "Business analytics project",
    technologies: [
      "Tableau",
      "Exploratory analysis",
      "Data storytelling",
      "Business intelligence",
    ],
    actions: [],
    caseStudy: [
      {
        label: "The question",
        text: "Where do discounts coincide with weak margins, and what could the business change?",
      },
      {
        label: "Data & method",
        text: "For the SIM-LSE Data Analytics Challenge, analyzed an e-commerce sales dataset by time, geography, customer segment, discount band, and product category using Tableau.",
      },
      {
        label: "Team contribution",
        text: "Worked in team Tuấn Khang with Nguyễn Thế Khang. Our twelve-slide presentation connected discount patterns with profitability and proposed actions for an executive audience.",
      },
      {
        label: "Finding & recommendation",
        text: "In the analyzed dataset, discount bands above 20% were associated with weaker profitability, particularly for Tables. The team proposed capping Tables discounts at 20% and shifting sales toward more profitable bands. These were recommendations, not measured business improvements.",
      },
    ],
  },
];
