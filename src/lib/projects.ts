import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "sunset-villa",
    title: "Sunset Villa",
    category: "Residential",
    location: "Malibu, California",
    year: "2024",
    area: "8,500 sq ft",
    image: project1,
    description: "A breathtaking coastal residence that dissolves the boundary between indoor luxury and the Pacific horizon. Every room frames the ocean as living art.",
    challenge: "The clients wanted a home that felt both monumental and intimate — a place to entertain 200 guests or enjoy a quiet sunset for two.",
    solution: "We designed a cascading floor plan that steps down the hillside, creating distinct zones of privacy while maintaining panoramic ocean views from every level.",
    images: [project1],
  },
  {
    id: "marble-kitchen",
    title: "The Marble Edit",
    category: "Interior Design",
    location: "Manhattan, New York",
    year: "2024",
    area: "3,200 sq ft",
    image: project2,
    description: "A penthouse kitchen reimagined as a culinary atelier. Calacatta marble, brushed brass, and warm timber create a space where cooking becomes ceremony.",
    challenge: "Transforming a compartmentalized 1980s layout into an open, light-filled space without compromising the building's structural integrity.",
    solution: "Strategic column integration and a floating marble island became the centerpiece, while hidden appliance storage maintains the gallery-like aesthetic.",
    images: [project2],
  },
  {
    id: "civic-center",
    title: "Civic Center Tower",
    category: "Commercial",
    location: "Chicago, Illinois",
    year: "2023",
    area: "120,000 sq ft",
    image: project3,
    description: "A bold civic landmark that bridges brutalist heritage with contemporary transparency. The diagonal structural element became the building's signature.",
    challenge: "Creating a commercial building that serves as both functional workspace and cultural landmark for the community.",
    solution: "The dramatic diagonal brace doubles as a public viewing corridor, while the glass curtain wall maximizes daylight and reduces energy consumption by 40%.",
    images: [project3],
  },
  {
    id: "garden-retreat",
    title: "Garden Retreat Spa",
    category: "Hospitality",
    location: "Bali, Indonesia",
    year: "2023",
    area: "5,800 sq ft",
    image: project4,
    description: "A wellness sanctuary where architecture becomes therapy. Natural stone, tropical gardens, and curated light create an environment of profound calm.",
    challenge: "Designing a luxury spa that feels organic to the Balinese landscape while meeting international hospitality standards.",
    solution: "We used locally sourced stone and timber, allowing the surrounding garden to become part of every treatment room through floor-to-ceiling openings.",
    images: [project4],
  },
  {
    id: "skyline-penthouse",
    title: "Skyline Penthouse",
    category: "Residential",
    location: "Dubai, UAE",
    year: "2024",
    area: "12,000 sq ft",
    image: project5,
    description: "A penthouse that commands the skyline. Double-height windows frame the city as a living mural, while curated furnishings create intimate moments within the grandeur.",
    challenge: "Humanizing a vast 12,000 sq ft space at 80 stories without losing the drama of the panoramic views.",
    solution: "A series of 'rooms within rooms' — lowered ceilings, tactile materials, and strategic furniture groupings — create intimacy while preserving the spectacle.",
    images: [project5],
  },
  {
    id: "boutique-hotel",
    title: "Atelier Hotel",
    category: "Hospitality",
    location: "Lisbon, Portugal",
    year: "2023",
    area: "28,000 sq ft",
    image: project6,
    description: "A boutique hotel that celebrates Lisbon's craft heritage. The sculptural staircase and cascading chandelier set the tone for an experience of curated luxury.",
    challenge: "Restoring a historic building while creating a hospitality experience that feels contemporary and distinctly Lisboan.",
    solution: "We preserved the original facade and structural bones, then introduced a dramatic double-height lobby with a commissioned chandelier by local artisans.",
    images: [project6],
  },
];

export const categories = ["All", "Residential", "Interior Design", "Commercial", "Hospitality"];
