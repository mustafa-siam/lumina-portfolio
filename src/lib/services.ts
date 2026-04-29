export interface Service {
  id: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  details: string[];
  process: { title: string; desc: string }[];
  deliverables: string[];
  faq: { q: string; a: string }[];
  startingPrice: string;
  timeline: string;
}

export const services: Service[] = [
  {
    id: "architectural-design",
    num: "01",
    title: "Architectural Design",
    tagline: "Buildings that define their context",
    desc: "From residential masterpieces to commercial landmarks, we design buildings that define their context and inspire their occupants.",
    details: ["Concept Development", "Schematic Design", "Design Development", "Construction Documents", "Construction Administration"],
    process: [
      { title: "Site Study", desc: "Deep analysis of climate, context, regulation, and program." },
      { title: "Concept Design", desc: "Multiple architectural directions tested and refined." },
      { title: "Documentation", desc: "Full technical drawings and engineering coordination." },
      { title: "Construction", desc: "On-site oversight from foundation to final reveal." },
    ],
    deliverables: ["3D Massing Models", "Floor Plans & Elevations", "Material Specifications", "Permit Documentation", "Site Supervision"],
    faq: [
      { q: "How long does a typical residential project take?", a: "From concept to occupancy, expect 18–30 months depending on scale and jurisdiction." },
      { q: "Do you work outside the US?", a: "Yes. We have active projects across 8 countries with offices in NYC, Dubai, and Bali." },
    ],
    startingPrice: "From $250K",
    timeline: "12–30 months",
  },
  {
    id: "interior-design",
    num: "02",
    title: "Interior Design",
    tagline: "Spaces that serve the human experience",
    desc: "We craft interiors that are as intentional as they are beautiful — spaces where every texture, color, and light source serves the human experience.",
    details: ["Space Planning", "Material Selection", "Custom Furniture Design", "Lighting Design", "Art Curation"],
    process: [
      { title: "Discovery", desc: "Lifestyle interviews and spatial diagnostics." },
      { title: "Concept", desc: "Material palettes, mood, and spatial narrative." },
      { title: "Specification", desc: "Furniture, finishes, fixtures, and lighting curated." },
      { title: "Install", desc: "White-glove delivery and final styling." },
    ],
    deliverables: ["Furniture Plans", "Material Boards", "Custom Joinery Drawings", "Procurement Management", "Final Styling"],
    faq: [
      { q: "Do you source vintage pieces?", a: "Yes. We have a global network of dealers and often blend vintage with bespoke commissions." },
      { q: "Can you work with our existing architecture?", a: "Absolutely. Many of our most loved projects are interior-only." },
    ],
    startingPrice: "From $120K",
    timeline: "6–14 months",
  },
  {
    id: "master-planning",
    num: "03",
    title: "Master Planning",
    tagline: "Density with delight",
    desc: "For large-scale developments, we create master plans that balance density with delight, infrastructure with intimacy.",
    details: ["Site Analysis", "Zoning Strategy", "Phasing Plans", "Community Engagement", "Sustainability Integration"],
    process: [
      { title: "Context Mapping", desc: "Cultural, ecological, and economic study of the site." },
      { title: "Vision Framework", desc: "A long-horizon strategy for the development." },
      { title: "Phasing", desc: "Build sequences that de-risk capital deployment." },
      { title: "Stewardship", desc: "Ongoing design guidelines for future phases." },
    ],
    deliverables: ["Master Plan Document", "Phasing Roadmap", "Design Guidelines", "Stakeholder Reports", "3D Visualizations"],
    faq: [
      { q: "What's the minimum site size?", a: "We typically engage on sites of 5 acres or larger." },
      { q: "Do you handle entitlements?", a: "We coordinate with local counsel and have led successful entitlement campaigns globally." },
    ],
    startingPrice: "From $500K",
    timeline: "9–24 months",
  },
  {
    id: "renovation-restoration",
    num: "04",
    title: "Renovation & Restoration",
    tagline: "Honoring heritage, redefining future",
    desc: "We breathe new life into existing structures, honoring their heritage while redefining their future.",
    details: ["Historic Preservation", "Adaptive Reuse", "Structural Assessment", "Modern Integration", "Permit Navigation"],
    process: [
      { title: "Assessment", desc: "Structural, historic, and program audit." },
      { title: "Strategy", desc: "What to preserve, what to transform, what to remove." },
      { title: "Design", desc: "Sensitive intervention that respects the original." },
      { title: "Execution", desc: "Specialized contractors and conservation craft." },
    ],
    deliverables: ["Conditions Survey", "Heritage Reports", "Preservation Drawings", "Modern Systems Integration", "Conservation Specifications"],
    faq: [
      { q: "Do you work on listed buildings?", a: "Yes. We've completed several Grade II and landmark restorations." },
      { q: "Can renovation be more expensive than new build?", a: "Sometimes. We provide transparent feasibility before committing." },
    ],
    startingPrice: "From $180K",
    timeline: "10–24 months",
  },
  {
    id: "consultation",
    num: "05",
    title: "Consultation",
    tagline: "Expert guidance, any stage",
    desc: "Not every project needs full-service design. Our expert consultation helps you make informed decisions at any stage.",
    details: ["Design Review", "Feasibility Studies", "Budget Planning", "Vendor Selection", "Project Strategy"],
    process: [
      { title: "Brief", desc: "Understand your question and constraints." },
      { title: "Audit", desc: "Review documents, sites, or proposals." },
      { title: "Recommendation", desc: "Clear, written guidance with options." },
      { title: "Follow-up", desc: "Ongoing advisory as your project evolves." },
    ],
    deliverables: ["Written Reports", "Strategy Sessions", "Vendor Shortlists", "Budget Analysis", "Risk Assessment"],
    faq: [
      { q: "Do you offer hourly engagements?", a: "Yes. Consultation is billed hourly or as fixed-scope packages." },
      { q: "Can consultation lead to full design work?", a: "Often, yes — but there's no obligation either way." },
    ],
    startingPrice: "From $5K",
    timeline: "2–8 weeks",
  },
];

export const getServiceById = (id: string) => services.find((s) => s.id === id);
