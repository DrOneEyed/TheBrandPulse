import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Privacy Policy", herf: "#" },
  { label: "Terms of Service", herf: "#" },
  { label: "Contact", herf: "#" },
  { label: "Blog", herf: "#" },
];

export const servicesData: {
  title: string;
  description: string;
  icon: string;
  background: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "Brand Strategy",
    description: "Comprehensive brand positioning and strategy development",
    icon: "/images/icons/icon-consulting.svg",
    background: "bg-primary bg-opacity-20",
    width: 40,
    height: 40,
    padding: "px-4 py-4",
  },
  {
    title: "Digital Marketing",
    description: "Multi-channel digital marketing campaigns",
    icon: "/images/icons/icon-Services.svg",
    background: "bg-light_grey",
    width: 40,
    height: 40,
    padding: "px-4 py-4",
  },
  {
    title: "Content Creation",
    description: "Engaging content that resonates with your audience",
    icon: "/images/icons/icon-blockchain.svg",
    background: "bg-primary bg-opacity-20",
    width: 40,
    height: 40,
    padding: "px-4 py-4",
  },
  {
    title: "Social Media",
    description: "Strategic social media management and growth",
    icon: "/images/icons/icon-bag.svg",
    background: "bg-light_grey",
    width: 40,
    height: 40,
    padding: "px-4 py-4",
  },
];

export const portfolioData: { image: string; title: string; description: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Brand Identity Design",
    description: "Complete visual identity systems that make your brand memorable",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Digital Campaigns",
    description: "Data-driven campaigns that deliver measurable results",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Content Strategy",
    description: "Strategic content that engages and converts your audience",
  },
];

export const whyChooseUsData: { title: string }[] = [
  { title: "Proven Results" },
  { title: "Creative Excellence" },
  { title: "Strategic Approach" },
  { title: "Client-Focused" },
];

export const teamData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "Expert Team",
    text: "Our experienced professionals bring years of industry expertise.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Collaborative Approach",
    text: "We work closely with you to understand your unique needs.",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Continuous Learning",
    text: "We stay ahead of trends to keep your brand competitive.",
    space: "lg:mt-4",
  },
];

export const processData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Discovery",
    text: "We dive deep into your brand, audience, and market landscape",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Strategy",
    text: "Develop a comprehensive strategy tailored to your goals",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Creation",
    text: "Bring your brand to life with compelling creative execution",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Launch & Optimize",
    text: "Launch your brand and continuously optimize for better results",
    position: "md:bottom-0 md:right-0",
  },
];

export const clientsData: { name: string; industry: string }[] = [
  { name: "TechStart Inc.", industry: "Technology" },
  { name: "Green Earth Co.", industry: "Sustainability" },
  { name: "Fashion Forward", industry: "Fashion" },
  { name: "Health Plus", industry: "Healthcare" },
];
