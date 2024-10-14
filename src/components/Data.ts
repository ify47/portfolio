import {
  NavigationType,
  SkillsType,
  ProjectListTypes,
} from "../types/DataTypes";

export const navigation: NavigationType[] = [
  { name: "Home", scroll: "one" },
  { name: "About", scroll: "two" },
  { name: "Projects", scroll: "three" },
  { name: "Contact", scroll: "four" },
];

export const mySkills: SkillsType[] = [
  {
    name: "HTML",
    location: "html.svg",
    alt: "HTML Logo",
  },
  { name: "CSS", location: "css.svg", alt: "CSS Logo" },
  {
    name: "JavaScript",
    location: "javascript.svg",
    alt: "Javascript Logo",
  },
  {
    name: "TypeScript",
    location: "typescript.svg",
    alt: "Typescript Logo",
  },
  {
    name: "React",
    location: "react.svg",
    alt: "React Logo",
  },
  {
    name: "Vue",
    location: "vueicon.svg",
    alt: "Vue Logo",
  },
  {
    name: "Sass/Scss",
    location: "tailwind.svg",
    alt: "Sass/Scss Logo",
  },
  {
    name: "Tailwindcss",
    location: "typescript.svg",
    alt: "Tailwind Logo",
  },
  {
    name: "Chakra-Ui",
    location: "chakraui.svg",
    alt: "Chakra-Ui Logo",
  },
  {
    name: "Redux",
    location: "redux.svg",
    alt: "Redux Logo",
  },
  {
    name: "SQL Basics",
    location: "mysql.svg",
    alt: "SQL Logo",
  },
  { name: "PHP", location: "php.svg", alt: "PHP Logo" },
  { name: "Jest + RTL", location: "jest.svg", alt: "Jest Logo" },
  { name: "Vitest", location: "vitest.svg", alt: "Vitest Logo" },
  {
    name: "NodeJs",
    location: "nodejs.svg",
    alt: "PHP Logo",
  },
];

export const projectLists: ProjectListTypes[] = [
  {
    image: "securefile.png",
    alt: "Secure file",
    name: "Secure File Transfer Using Hybrid Cryptographic Algorithm",
    description: `Built a secure file transfer system using RSA, ECC, and AES encryption, 
    with Google Cloud Storage and KMS for key management. Integrated Hanko.io for secure user 
    authentication, ensuring encryption keys were never stored server-side.`,
    tools: ["Next.js", "TypeScript", "MongoDB", "Google Cloud", "Hanko.io"],
    site: "https://secure-file-transfer.vercel.app/",
    github:
      "https://github.com/ify47/secure-file-transfer-using-hybrid-cryptographic-algorithm",
    style: true,
  },
  {
    image: "ipAddress.jpg",
    alt: "IpAddress Tracker",
    name: "Ipaddress Tracker",
    description: `A coding challenge from Frontend Mentor to build an Address Tracker,it
     allows users to search for any IP addresses or domains and see the key information and location using a RESTful API.`,
    tools: [
      "React",
      "TypeScript",
      "SCSS",
      "Vite",
      "Redux Toolkit",
      "React leaflet",
      "Axios",
      "Vitest",
      "Github",
    ],
    site: "https://ify47.github.io/ip-address-tracker/",
    github: "https://github.com/ify47/ip-address-tracker",
    style: false,
  },
  {
    image: "TodoApp.png",
    alt: "TodoApp",
    name: "Todo App",
    description: `A coding challenge from Frontend Mentor to build a todo app,it
     allows users to create and manage a list of todos. It has features such as a light 
     and dark mode, drag and drop functionality, the ability to filter todos by status and 
     Local storage integration to save your todos and preferences.`,
    tools: ["React", "SCSS", "Vite", "UseReducer", "UseState", "Github"],
    site: "https://ify47.github.io/todo-app/",
    github: "https://github.com/ify47/todo-app",
    style: true,
  },
];

export const emailKey = {
  service: import.meta.env.VITE_SERVICE,
  template: import.meta.env.VITE_TEMPLATE,
  value: import.meta.env.VITE_VALUE,
};
