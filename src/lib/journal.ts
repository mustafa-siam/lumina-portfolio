import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";

export interface ArticleSection {
  heading?: string;
  body: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  tags: string[];
  sections: ArticleSection[];
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
    authorRole: "Founder & Principal Architect",
    image: journal1,
    tags: ["Process", "Methodology", "Studio"],
    sections: [
      {
        body: "Every project at Lumina begins not with a sketch, but with a conversation. Long, often meandering, occasionally uncomfortable conversations with our clients about how they actually live, what they avoid, what they crave. The drawings come later — much later.",
      },
      {
        heading: "Listening as a discipline",
        body: "Most studios treat the brief as a checklist. We treat it as a translation problem. A client says 'I want it to feel calm.' Calm is not a square footage. Calm is a ratio of light to shadow, the absence of right angles in your peripheral vision, the sound of your own footsteps on the right material.",
      },
      {
        heading: "From feeling to form",
        body: "Once we understand the feeling, we work backwards into geometry. We test material moodboards before we test floor plans. We model light at four times of day before we settle on window placement. Form is not the goal — form is the residue of a well-understood feeling.",
      },
      {
        heading: "The walkthrough",
        body: "The final reveal is always quiet. The best compliment a client has ever given us was silence — followed, ten minutes later, by 'I didn't know I wanted this until right now.' That sentence is the entire reason we do this work.",
      },
    ],
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
    authorRole: "Director of Sustainability",
    image: journal2,
    tags: ["Sustainability", "Materials", "Future"],
    sections: [
      {
        body: "For decades, sustainability was the polite afterthought of luxury design — a solar panel hidden behind the parapet, a recycled-content veneer no one would ever notice. That era is over. The most desirable buildings of the next decade will be the ones that wear their responsibility proudly.",
      },
      {
        heading: "Materials with a memory",
        body: "Reclaimed timber, low-carbon concrete, locally quarried stone — these are no longer compromises. Clients increasingly want to know where every element of their home was born. Provenance is the new luxury.",
      },
      {
        heading: "Performance as poetry",
        body: "A building that uses 70% less energy than its peers is not just ethical — it is elegant. There is a quiet confidence in a structure that does more with less.",
      },
      {
        heading: "Designing for the next century",
        body: "We design every project with disassembly in mind. Buildings should age, evolve, and eventually return their materials to circulation. Beauty that costs the earth is no longer beautiful.",
      },
    ],
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
    authorRole: "Head of Interior Design",
    image: journal3,
    tags: ["Materials", "Interiors", "Craft"],
    sections: [
      {
        body: "A material palette is not a moodboard. It is a thesis statement. Done well, it determines how a space feels in twenty years — long after the furniture has been changed, the art rotated, the family grown.",
      },
      {
        heading: "Three notes, not thirty",
        body: "We restrict ourselves to a small chord of materials per project — usually three primary, two secondary, one accent. Restraint is the difference between a curated home and a showroom.",
      },
      {
        heading: "Patina is a feature",
        body: "We choose materials that improve with use. Unlacquered brass that darkens. Limestone that softens at the threshold. Oiled oak that deepens with sunlight. A space should grow more itself with time, not less.",
      },
      {
        heading: "Touch before sight",
        body: "We always present samples to clients in a darkened room first, where they can only feel them. The hand knows things the eye negotiates.",
      },
    ],
  },
];

export const getRelatedArticles = (currentId: string, limit = 2) =>
  articles.filter((a) => a.id !== currentId).slice(0, limit);
