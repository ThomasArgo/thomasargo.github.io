export const siteMeta = {
  name: "Thomas Argo",
  title: "Developer, CAD Designer, 3D Modeler, Technical Builder",
  description:
    "Thomas Argo portfolio featuring software projects, CAD models, websites, and technical design work.",
  intro:
    "I build digital tools and mechanical ideas with the same mindset: precise systems, clean execution, and visuals that prove the work.",
  about:
    "Freshman Computer Science major focused on programming, mechanical CAD design, video-game 3D modeling, and 3D printing.",
  location: "Clarksville, Tennessee",
  availability: "Available for internships, freelance builds, and technical collaboration.",
  footer: "Thomas J. Argo (c) 2026",
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/models", label: "Models" },
  { to: "/websites", label: "Websites" },
  { to: "/apps", label: "Apps" },
  { to: "/contact", label: "Contact" },
];

export const heroStats = [
  { value: "11+", label: "modeled systems" },
  { value: "3", label: "core disciplines" },
  { value: "1", label: "technical portfolio" },
];

export const capabilities = [
  {
    title: "Frontend Development",
    description:
      "Responsive interfaces, portfolio experiences, and browser-based tools built with a performance-first mindset.",
    tags: ["React", "Vite", "UI Systems"],
  },
  {
    title: "Mechanical CAD Design",
    description:
      "Assemblies, constrained parts, and structurally informed concepts designed with accuracy and presentation quality.",
    tags: ["Onshape", "SolidWorks", "Mechanical Detail"],
  },
  {
    title: "3D Modeling",
    description:
      "High-detail renders and modeled systems focused on believable geometry, clean proportions, and technical storytelling.",
    tags: ["Blender", "Rendering", "Showcase Assets"],
  },
];

export const featuredWork = [
  {
    title: "Zero Turn Lawn Mower",
    eyebrow: "Featured model",
    description:
      "A fully detailed mechanical assembly modeled with precise scaling, structural alignment, and strong presentation imagery.",
    route: "/models",
    image: "/portfolio/ZeroTurn1.png",
    tags: ["Blender", "Assembly", "Mechanical"],
  },
  {
    title: "WebCAD Viewer",
    eyebrow: "Featured website",
    description:
      "A browser-based 3D model viewer focused on file compatibility, real-time rendering, and interactive technical inspection.",
    route: "/websites",
    image: "/portfolio/webcad-logo2.png",
    tags: ["Three.js", "3D Viewer", "Web App"],
  },
  {
    title: "Planetary Gear",
    eyebrow: "Featured system",
    description:
      "A showcase study in symmetry, motion, and mechanical clarity, presented as a compact visual system.",
    route: "/models",
    image: "/portfolio/TopView.gif",
    tags: ["Motion", "Mechanics", "Showcase"],
  },
];

export const projectCategories = [
  {
    to: "/models",
    label: "3D Models",
    eyebrow: "Mechanical design",
    description:
      "Precision assemblies, CAD studies, and rendered mechanical systems built to showcase technical craft.",
    tags: ["Blender", "Onshape", "SolidWorks"],
  },
  {
    to: "/websites",
    label: "Websites",
    eyebrow: "Frontend + 3D",
    description:
      "Interactive web work built for the browser with technical polish, motion, and clear product thinking.",
    tags: ["React", "Three.js", "Frontend"],
  },
  {
    to: "/apps",
    label: "Apps",
    eyebrow: "Software pipeline",
    description:
      "A growing software category reserved for new tools, utilities, and application concepts under active development.",
    tags: ["Product Thinking", "Utility", "Roadmap"],
  },
];

export const models = [
  {
    title: "Zero Turn Lawn Mower",
    platform: "Created in Blender",
    description:
      "Fully detailed zero-turn mechanical assembly modeled with precise scaling, structural alignment, and component relationships.",
    tags: ["Assembly", "Precision Modeling", "Mechanical Detail"],
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
    tags: ["Vehicle Geometry", "Fork System", "High Detail"],
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
    tags: ["Motion Study", "Mechanical Symmetry", "Rendered Loop"],
    media: ["/portfolio/TopView.gif", "/portfolio/BottomView.gif"],
  },
  {
    title: "Tensegrity Table",
    platform: "Created in Onshape",
    description:
      "Designed a structurally balanced model applying principles of tension and compression.",
    tags: ["Structure", "Concept Modeling", "Balance"],
    media: ["/portfolio/TensegrityTable.png"],
  },
  {
    title: "Butterfly Valve Body",
    platform: "Created in Onshape",
    description:
      "Modeled a functional butterfly valve body with precise dimensional constraints and component alignment.",
    tags: ["Valve Body", "Functional Geometry", "Mechanical CAD"],
    media: ["/portfolio/ButterflyValve.png"],
  },
  {
    title: "CO2 Powered Model Car",
    platform: "Created in SolidWorks",
    description:
      "Designed and optimized a lightweight race car and produced a functional 3D printed prototype.",
    tags: ["Prototype", "Lightweight Design", "3D Printing"],
    media: ["/portfolio/C02Car1.png", "/portfolio/C02Car2.png"],
  },
  {
    title: "Double Bearing Assembly",
    platform: "Created in Onshape",
    description:
      "Modeled a dual-bearing assembly to support rotational motion with improved load distribution and alignment accuracy, ensuring smooth operation and structural stability.",
    tags: ["Rotation", "Bearing System", "Load Support"],
    media: ["/portfolio/DoubleBearing1.png", "/portfolio/DoubleBearing2.png"],
  },
  {
    title: "Connecting Rod",
    platform: "Created in Onshape",
    description:
      "Designed and modeled a lightweight connecting rod using Aluminum 7075, optimized for strength and durability while maintaining a final weight of 219.013 grams.",
    tags: ["Material Focus", "Weight Optimization", "Part Design"],
    media: ["/portfolio/ConnectingRod.png"],
  },
  {
    title: "Flange Yoke",
    platform: "Created in Onshape",
    description:
      "Modeled a flange yoke with accurate geometric constraints, ensuring proper alignment, symmetry, and realistic mechanical proportions.",
    tags: ["Symmetry", "Constraint Modeling", "Part Geometry"],
    media: ["/portfolio/FlangeYoke.png"],
  },
  {
    title: "Double-Flanged Pipe Spool",
    platform: "Created in Onshape",
    description:
      "Created a double-flanged pipe segment featuring accurate flange spacing, symmetric hole placement, and clean mechanical detailing.",
    tags: ["Pipe Assembly", "Spacing Control", "Industrial Geometry"],
    media: ["/portfolio/DoubleFlangedPipeSpool.png"],
  },
  {
    title: "Shaft Support Bracket",
    platform: "Created in Onshape",
    description:
      "Modeled a shaft support bracket featuring a slotted mounting base and a precisely constrained cylindrical clamp.",
    tags: ["Bracket", "Mounting System", "Mechanical Support"],
    media: ["/portfolio/ShaftSupportBracket.png"],
  },
];

export const websiteProjects = [
  {
    title: "WebCAD Viewer",
    eyebrow: "Live build",
    description:
      "Browser-based 3D model viewer built with Three.js supporting OBJ, STL, and FBX files, featuring real-time rendering and interactive inspection tools.",
    image: "/portfolio/webcad-logo2.png",
    href: "https://thomasargo.github.io/webcad-viewer/",
    cta: "View Website",
    tags: ["Three.js", "OBJ / STL / FBX", "Realtime Rendering"],
  },
];

export const appProjects = [
  {
    title: "Apps Pipeline",
    eyebrow: "In development",
    description:
      "This space is reserved for future software tools and application builds. It stays visible as part of the portfolio roadmap rather than disappearing into a placeholder.",
    tags: ["Upcoming Utilities", "Product Ideas", "Software Builds"],
  },
];

export const contactDetails = [
  {
    label: "Personal Email",
    value: "thomasargo182@gmail.com",
    href: "mailto:thomasargo182@gmail.com",
  },
  {
    label: "School Email",
    value: "targo1@students.apsu.edu",
    href: "mailto:targo1@students.apsu.edu",
  },
  {
    label: "Phone",
    value: "270-709-5600",
    href: "tel:270-709-5600",
  },
];
