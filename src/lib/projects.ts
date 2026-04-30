import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import drawing1 from "@/assets/drawing-1.jpg";
import drawing2 from "@/assets/drawing-2.jpg";

export interface ProjectFact {
  label: string;
  value: string;
}

export interface ProjectPhase {
  title: string;
  desc: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  client: string;
  duration: string;
  status: string;
  budget: string;
  team: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  videoId: string; // YouTube video ID
  images: string[];
  drawings: { title: string; image: string }[];
  facilities: string[];
  materials: string[];
  awards: string[];
  deliverables: string[];
  timeline: ProjectPhase[];
  facts: ProjectFact[];
  testimonial?: { quote: string; author: string };
}

const galleryStock = [gallery1, gallery2, gallery3];
const baseDrawings = [
  { title: "Floor Plan — Ground Level", image: drawing1 },
  { title: "Section Elevation A-A", image: drawing2 },
];

const baseFacilities = [
  "Smart Home Automation",
  "Climate Control HVAC",
  "Custom Lighting Design",
  "Acoustic Engineering",
  "Sustainable Materials",
  "Integrated AV Systems",
];

const baseMaterials = ["Calacatta Marble", "European White Oak", "Brushed Brass", "Belgian Linen", "Travertine Stone"];
const baseAwards = ["AIA Award of Excellence 2024", "Architectural Digest Top 100", "Dezeen Award Finalist"];
const baseDeliverables = [
  "Concept & Schematic Design",
  "Construction Documents",
  "3D Visualizations & VR Walkthrough",
  "Material & FF&E Specifications",
  "Construction Administration",
  "Post-Occupancy Evaluation",
];

export const projects: Project[] = [
  {
    id: "sunset-villa",
    title: "Sunset Villa",
    category: "Residential",
    location: "Malibu, California",
    year: "2024",
    area: "8,500 sq ft",
    client: "Private Family Residence",
    duration: "22 months",
    status: "Completed",
    budget: "$12M – $15M",
    team: "14 specialists",
    image: project1,
    videoId: "ScMzIvxBSi4",
    description:
      "A breathtaking coastal residence that dissolves the boundary between indoor luxury and the Pacific horizon. Every room frames the ocean as living art.",
    challenge:
      "The clients wanted a home that felt both monumental and intimate — a place to entertain 200 guests or enjoy a quiet sunset for two. The 47-degree slope and seismic codes made every structural decision a negotiation.",
    solution:
      "We designed a cascading floor plan that steps down the hillside, creating distinct zones of privacy while maintaining panoramic ocean views from every level. Floor-to-ceiling pivoting glass walls open the living spaces to a 60-foot infinity pool.",
    outcome:
      "Featured in Architectural Digest, the residence has become a benchmark for hillside coastal architecture in Southern California, achieving LEED Platinum certification and a 94% reduction in cooling energy demand.",
    images: [project1, gallery1, gallery2, gallery3, project5],
    drawings: baseDrawings,
    facilities: [
      "Infinity Pool & Spa",
      "Private Cinema",
      "Wine Cellar (1,800 bottles)",
      "Outdoor Kitchen",
      "Guest Pavilion",
      "Smart Home Automation",
      "EV Charging (4 bays)",
      "Yoga & Wellness Studio",
    ],
    materials: ["Travertine Stone", "European White Oak", "Brushed Brass", "Belgian Linen", "Smoked Glass"],
    awards: ["AIA California Honor Award 2024", "AD100 Featured Project", "LEED Platinum Certified"],
    deliverables: baseDeliverables,
    timeline: [
      { title: "Discovery & Site Analysis", desc: "Months 1–2 — geotechnical, climate and lifestyle research." },
      { title: "Concept & Schematic", desc: "Months 3–6 — three design directions explored, one refined." },
      { title: "Design Development", desc: "Months 7–10 — every detail specified, engineered and costed." },
      { title: "Construction", desc: "Months 11–22 — full-time on-site supervision by Lumina principals." },
    ],
    facts: [
      { label: "Bedrooms", value: "6" },
      { label: "Bathrooms", value: "8" },
      { label: "Stories", value: "3" },
      { label: "Glass Area", value: "4,200 sq ft" },
    ],
    testimonial: {
      quote:
        "Lumina didn't just design our home — they understood how we wanted to feel in it. Every room tells a story.",
      author: "Sarah & James Mitchell",
    },
  },
  {
    id: "marble-kitchen",
    title: "The Marble Edit",
    category: "Interior Design",
    location: "Manhattan, New York",
    year: "2024",
    area: "3,200 sq ft",
    client: "Park Avenue Penthouse",
    duration: "11 months",
    status: "Completed",
    budget: "$2.4M",
    team: "8 specialists",
    image: project2,
    videoId: "ScMzIvxBSi4",
    description:
      "A penthouse kitchen reimagined as a culinary atelier. Calacatta marble, brushed brass, and warm timber create a space where cooking becomes ceremony.",
    challenge:
      "Transforming a compartmentalized 1980s layout into an open, light-filled space without compromising the 1920s building's structural integrity or the co-op's strict renovation rules.",
    solution:
      "Strategic column integration and a 14-foot floating marble island became the centerpiece, while hidden appliance storage maintains the gallery-like aesthetic. Custom millwork conceals every utility.",
    outcome:
      "Published in Elle Decor and selected for the AD100 list, this kitchen has redefined what is possible within a heritage Manhattan building footprint.",
    images: [project2, gallery1, gallery3, project4],
    drawings: baseDrawings,
    facilities: [
      "Custom Calacatta Island (14 ft)",
      "Sub-Zero & Wolf Appliance Suite",
      "Wine Wall (320 bottles)",
      "Catering Pantry",
      "Integrated Espresso System",
      "Hidden Charging Stations",
    ],
    materials: ["Calacatta Borghini Marble", "American Walnut", "Unlacquered Brass", "Hand-Forged Iron"],
    awards: ["AD100 Selected Project 2024", "Elle Decor A-List Honoree"],
    deliverables: baseDeliverables,
    timeline: [
      { title: "Discovery", desc: "Month 1 — culinary lifestyle audit and entertaining patterns mapped." },
      { title: "Design", desc: "Months 2–4 — material sourcing across Italy and North America." },
      { title: "Build", desc: "Months 5–11 — millwork fabricated off-site, installed in 6 weeks." },
    ],
    facts: [
      { label: "Island Length", value: "14 ft" },
      { label: "Marble Slabs", value: "9" },
      { label: "Custom Cabinets", value: "42" },
      { label: "Lighting Scenes", value: "12" },
    ],
  },
  {
    id: "civic-center",
    title: "Civic Center Tower",
    category: "Commercial",
    location: "Chicago, Illinois",
    year: "2023",
    area: "120,000 sq ft",
    client: "Midwest Development Group",
    duration: "38 months",
    status: "Completed",
    budget: "$84M",
    team: "32 specialists",
    image: project3,
    videoId: "ScMzIvxBSi4",
    description:
      "A bold civic landmark that bridges brutalist heritage with contemporary transparency. The diagonal structural element became the building's signature.",
    challenge:
      "Creating a commercial building that serves as both functional workspace and cultural landmark for the community, while navigating Chicago's rigorous zoning and historic district requirements.",
    solution:
      "The dramatic diagonal brace doubles as a public viewing corridor, while the glass curtain wall maximizes daylight and reduces energy consumption by 40%. Ground-floor activated retail invites the city in.",
    outcome:
      "The tower attracted Fortune 500 anchor tenants within 8 months of completion and won the 2024 Chicago AIA Honor Award for Public Architecture.",
    images: [project3, gallery2, project5, gallery1],
    drawings: baseDrawings,
    facilities: [
      "12 Floors of Class A Office",
      "Ground-Floor Retail (8,000 sq ft)",
      "Sky Lobby & Conference Center",
      "Rooftop Garden Terrace",
      "EV Charging (40 bays)",
      "Bike Storage & Showers",
      "Tenant Wellness Center",
    ],
    materials: ["Structural Steel", "Low-E Glazing", "Architectural Concrete", "Reclaimed Cedar"],
    awards: ["Chicago AIA Honor Award 2024", "LEED Gold Certified", "ENR Project of the Year Finalist"],
    deliverables: baseDeliverables,
    timeline: [
      { title: "Master Planning", desc: "Months 1–6 — zoning, traffic and community engagement." },
      { title: "Design", desc: "Months 7–14 — structural engineering coordinated with façade design." },
      { title: "Construction", desc: "Months 15–38 — phased delivery preserved street access." },
    ],
    facts: [
      { label: "Floors", value: "12" },
      { label: "Occupancy", value: "1,400" },
      { label: "Energy Saving", value: "40%" },
      { label: "Public Plaza", value: "12,000 sq ft" },
    ],
  },
  {
    id: "garden-retreat",
    title: "Garden Retreat Spa",
    category: "Hospitality",
    location: "Bali, Indonesia",
    year: "2023",
    area: "5,800 sq ft",
    client: "Aman Wellness Group",
    duration: "16 months",
    status: "Completed",
    budget: "$4.2M",
    team: "11 specialists",
    image: project4,
    videoId: "ScMzIvxBSi4",
    description:
      "A wellness sanctuary where architecture becomes therapy. Natural stone, tropical gardens, and curated light create an environment of profound calm.",
    challenge:
      "Designing a luxury spa that feels organic to the Balinese landscape while meeting international hospitality standards and surviving monsoon-season humidity and rainfall.",
    solution:
      "We used locally sourced stone and timber, allowing the surrounding garden to become part of every treatment room through floor-to-ceiling openings and reflective water features.",
    outcome:
      "Awarded 'Best New Spa in Asia' by Condé Nast Traveler 2024, and now operates at 96% occupancy year-round.",
    images: [project4, gallery3, gallery2, project6],
    drawings: baseDrawings,
    facilities: [
      "8 Treatment Pavilions",
      "Hydrotherapy Pools",
      "Meditation Garden",
      "Yoga Pavilion",
      "Herbal Apothecary",
      "Vegetarian Café",
      "Outdoor Showers",
    ],
    materials: ["Volcanic Stone", "Bamboo", "Reclaimed Teak", "Natural Plaster"],
    awards: ["Condé Nast Traveler Best New Spa 2024", "World Architecture Festival Shortlist"],
    deliverables: baseDeliverables,
    timeline: [
      { title: "Cultural Research", desc: "Months 1–3 — collaboration with local Balinese craftspeople." },
      { title: "Design", desc: "Months 4–8 — climate-responsive passive cooling strategies." },
      { title: "Construction", desc: "Months 9–16 — 80% local labor and materials." },
    ],
    facts: [
      { label: "Treatment Rooms", value: "8" },
      { label: "Plant Species", value: "120+" },
      { label: "Local Materials", value: "82%" },
      { label: "Occupancy", value: "96%" },
    ],
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    category: "Residential",
    location: "Dubai, UAE",
    year: "2024",
    area: "12,000 sq ft",
    client: "Private Investor",
    duration: "19 months",
    status: "Completed",
    budget: "$18M",
    team: "16 specialists",
    image: project5,
    videoId: "ScMzIvxBSi4",
    description:
      "A penthouse that commands the skyline. Double-height windows frame the city as a living mural, while curated furnishings create intimate moments within the grandeur.",
    challenge:
      "Humanizing a vast 12,000 sq ft space at 80 stories without losing the drama of the panoramic views, while meeting strict desert climate performance criteria.",
    solution:
      "A series of 'rooms within rooms' — lowered ceilings, tactile materials, and strategic furniture groupings — create intimacy while preserving the spectacle. Triple glazing and external shading reduce solar gain by 60%.",
    outcome:
      "The penthouse sold at the highest price-per-square-foot recorded in Dubai's residential market for 2024.",
    images: [project5, gallery1, gallery2, project1],
    drawings: baseDrawings,
    facilities: [
      "Private Elevator Lobby",
      "Sky Pool (50 ft)",
      "Home Theatre",
      "Cigar Lounge",
      "Staff Quarters",
      "Two Kitchens",
      "Helipad Access",
    ],
    materials: ["Statuario Marble", "Walnut Veneer", "Polished Bronze", "Cashmere Wool"],
    awards: ["Middle East Architect Awards Winner 2024"],
    deliverables: baseDeliverables,
    timeline: [
      { title: "Concept", desc: "Months 1–4 — view-line studies driving every plan decision." },
      { title: "Design", desc: "Months 5–10 — bespoke furniture commissioned from 14 ateliers." },
      { title: "Build", desc: "Months 11–19 — logistics through one freight elevator." },
    ],
    facts: [
      { label: "Bedrooms", value: "5" },
      { label: "Ceiling Height", value: "21 ft" },
      { label: "Terraces", value: "3" },
      { label: "Floor Level", value: "80" },
    ],
  },
  {
    id: "boutique-hotel",
    title: "Atelier Hotel",
    category: "Hospitality",
    location: "Lisbon, Portugal",
    year: "2023",
    area: "28,000 sq ft",
    client: "Atelier Hospitality Group",
    duration: "26 months",
    status: "Completed",
    budget: "$22M",
    team: "20 specialists",
    image: project6,
    videoId: "ScMzIvxBSi4",
    description:
      "A boutique hotel that celebrates Lisbon's craft heritage. The sculptural staircase and cascading chandelier set the tone for an experience of curated luxury.",
    challenge:
      "Restoring a historic 1890s building while creating a hospitality experience that feels contemporary and distinctly Lisboan, all under EU heritage protection rules.",
    solution:
      "We preserved the original facade and structural bones, then introduced a dramatic double-height lobby with a commissioned chandelier by local artisans. Each of the 42 rooms tells a different story.",
    outcome:
      "Listed as #3 in Travel + Leisure's Top New Hotels 2024, with average daily rates 38% above the Lisbon luxury benchmark.",
    images: [project6, gallery3, project4, gallery2],
    drawings: baseDrawings,
    facilities: [
      "42 Bespoke Suites",
      "Rooftop RestLuminant & Bar",
      "Spa & Hammam",
      "Library Lounge",
      "Event Atelier",
      "Curated Boutique",
    ],
    materials: ["Portuguese Limestone", "Azulejo Tilework", "Cork", "Hand-Loomed Wool"],
    awards: ["Travel + Leisure Top New Hotels 2024", "Wallpaper* Design Awards Honoree"],
    deliverables: baseDeliverables,
    timeline: [
      { title: "Heritage Survey", desc: "Months 1–4 — documentation and protection coordination." },
      { title: "Design", desc: "Months 5–12 — collaboration with 22 Portuguese artisans." },
      { title: "Construction", desc: "Months 13–26 — phased to keep adjacent businesses operating." },
    ],
    facts: [
      { label: "Suites", value: "42" },
      { label: "Restoration Age", value: "133 yrs" },
      { label: "Artisans", value: "22" },
      { label: "ADR Premium", value: "+38%" },
    ],
  },
];

export const categories = ["All", "Residential", "Interior Design", "Commercial", "Hospitality"];

export const getRelatedProjects = (id: string, limit = 3) =>
  projects.filter((p) => p.id !== id).slice(0, limit);
