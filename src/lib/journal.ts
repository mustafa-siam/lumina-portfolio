import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "design-process",
    title: "Inside Our Design Process: From Whisper to Walls",
    excerpt:
      "How we translate a single sentence from a client into a fully realized architectural space — and why listening matters more than drawing.",
    category: "Process",
    date: "March 12, 2026",
    readTime: "6 min",
    author: "Elena Cortez",
    image: journal1,
  },
  {
    id: "sustainable-luxury",
    title: "Sustainable Luxury: The New Definition of Beautiful",
    excerpt:
      "Why responsible design is no longer a constraint but the most important driver of meaningful, lasting architecture.",
    category: "Sustainability",
    date: "February 28, 2026",
    readTime: "8 min",
    author: "Marcus Reyes",
    image: journal2,
  },
  {
    id: "material-palettes",
    title: "Curating Material Palettes That Stand the Test of Time",
    excerpt:
      "A behind-the-scenes look at how we select stone, wood, metal and fabric to create interiors that age with grace.",
    category: "Materials",
    date: "January 18, 2026",
    readTime: "5 min",
    author: "Priya Anand",
    image: journal3,
  },
];
