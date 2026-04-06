export const siteMeta = {
  name: "Thomas Argo",
  title: "Computer Science Major | CAD Designer | Developer",
  description:
    "Thomas Argo portfolio featuring software projects, CAD models, websites, and contact information.",
  about:
    "Freshman Computer Science major focused on programming, mechanical CAD design, video-game 3D modeling, and 3D printing.",
  footer: "Thomas J. Argo (c) 2026",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export const projectCategories = [
  {
    to: "/models",
    label: "3D Models",
    eyebrow: "Mechanical design",
    description: "Precision assemblies, CAD studies, and Blender showcase pieces.",
  },
  {
    to: "/websites",
    label: "Websites",
    eyebrow: "Frontend + 3D",
    description: "Interactive web work built for the browser and ready to demo.",
  },
  {
    to: "/apps",
    label: "Apps",
    eyebrow: "In progress",
    description: "Application concepts and software work as this portfolio grows.",
  },
];

export const models = [
  {
    title: "Zero Turn Lawn Mower",
    platform: "Created in Blender",
    description:
      "Fully detailed zero-turn mechanical assembly modeled with precise scaling, structural alignment, and component relationships.",
    media: [
      "/portfolio/ZeroTurn1.png",
      "/portfolio/ZeroTurn2.png",
      "/portfolio/ZeroTurn3.png",
      "/portfolio/ZeroTurn4.png",
    ],
  },
  {
    title: "Motorcycle Front-End Assembly (Indian Challenger 2024)",
    platform: "Created in Blender",
    description:
      "Modeled a high-detail front-end assembly of a 2024 Indian Challenger, featuring accurate wheel geometry, dual-disc braking components, and fully constrained fork structures.",
    media: [
      "/portfolio/FrontEnd1.png",
      "/portfolio/FrontEnd2.png",
      "/portfolio/FrontEnd3.png",
      "/portfolio/FrontEnd4.png",
    ],
  },
  {
    title: "Planetary Gear",
    platform: "Created in Blender",
    description:
      "Created a planetary gear system emphasizing proportional symmetry, smooth gear engagement, and structural balance.",
    media: ["/portfolio/TopView.gif", "/portfolio/BottomView.gif"],
  },
  {
    title: "Tensegrity Table",
    platform: "Created in Onshape",
    description:
      "Designed a structurally balanced model applying principles of tension and compression.",
    media: ["/portfolio/TensegrityTable.png"],
  },
  {
    title: "Butterfly Valve Body",
    platform: "Created in Onshape",
    description:
      "Modeled a functional butterfly valve body with precise dimensional constraints and component alignment.",
    media: ["/portfolio/ButterflyValve.png"],
  },
  {
    title: "CO2 Powered Model Car",
    platform: "Created in SolidWorks",
    description:
      "Designed and optimized a lightweight race car and produced a functional 3D printed prototype.",
    media: ["/portfolio/C02Car1.png", "/portfolio/C02Car2.png"],
  },
  {
    title: "Double Bearing Assembly",
    platform: "Created in Onshape",
    description:
      "Modeled a dual-bearing assembly to support rotational motion with improved load distribution and alignment accuracy, ensuring smooth operation and structural stability.",
    media: ["/portfolio/DoubleBearing1.png", "/portfolio/DoubleBearing2.png"],
  },
  {
    title: "Connecting Rod",
    platform: "Created in Onshape",
    description:
      "Designed and modeled a lightweight connecting rod using Aluminum 7075, optimized for strength and durability while maintaining a final weight of 219.013 grams.",
    media: ["/portfolio/ConnectingRod.png"],
  },
  {
    title: "Flange Yoke",
    platform: "Created in Onshape",
    description:
      "Modeled a flange yoke with accurate geometric constraints, ensuring proper alignment, symmetry, and realistic mechanical proportions.",
    media: ["/portfolio/FlangeYoke.png"],
  },
  {
    title: "Double-Flanged Pipe Spool",
    platform: "Created in Onshape",
    description:
      "Created a double-flanged pipe segment featuring accurate flange spacing, symmetric hole placement, and clean mechanical detailing.",
    media: ["/portfolio/DoubleFlangedPipeSpool.png"],
  },
  {
    title: "Shaft Support Bracket",
    platform: "Created in Onshape",
    description:
      "Modeled a shaft support bracket featuring a slotted mounting base and a precisely constrained cylindrical clamp.",
    media: ["/portfolio/ShaftSupportBracket.png"],
  },
];

export const websiteProjects = [
  {
    title: "WebCAD Viewer",
    description:
      "Browser-based 3D model viewer built with Three.js supporting OBJ, STL, and FBX files, featuring real-time rendering and interactive inspection tools.",
    image: "/portfolio/webcad-logo2.png",
    href: "https://thomasargo.github.io/webcad-viewer/",
    cta: "View Website",
  },
];

export const appProjects = [
  {
    title: "Nothing has been added yet.",
    description: "Coming soon!",
  },
];

export const contactDetails = [
  { label: "Email", value: "thomasargo182@gmail.com", href: "mailto:thomasargo182@gmail.com" },
  { label: "School", value: "targo1@students.apsu.edu", href: "mailto:targo1@students.apsu.edu" },
  { label: "Phone", value: "270-709-5600", href: "tel:270-709-5600" },
];
