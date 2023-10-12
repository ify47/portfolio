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
    location: "/src/assets/icons/html.svg",
    alt: "HTML Logo",
  },
  { name: "CSS", location: "../../src/assets/icons/css.svg", alt: "CSS Logo" },
  {
    name: "JavaScript",
    location: "../../src/assets/icons/javascript.svg",
    alt: "Javascript Logo",
  },
  {
    name: "TypeScript",
    location: "../../src/assets/icons/typescript.svg",
    alt: "Typescript Logo",
  },
  {
    name: "React",
    location: "../../src/assets/icons/react.svg",
    alt: "React Logo",
  },
  {
    name: "Vue",
    location: "../../src/assets/icons/vueicon.svg",
    alt: "Vue Logo",
  },
  {
    name: "Sass/Scss",
    location: "../../src/assets/icons/tailwind.svg",
    alt: "Sass/Scss Logo",
  },
  {
    name: "Tailwindcss",
    location: "../../src/assets/icons/typescript.svg",
    alt: "Tailwind Logo",
  },
  {
    name: "Chakra-Ui",
    location: "../../src/assets/icons/chakraui.svg",
    alt: "Chakra-Ui Logo",
  },
  {
    name: "Redux",
    location: "../../src/assets/icons/redux.svg",
    alt: "Redux Logo",
  },
  {
    name: "SQL Basics",
    location: "../../src/assets/icons/mysql.svg",
    alt: "SQL Logo",
  },
  { name: "PHP", location: "../../src/assets/icons/php.svg", alt: "PHP Logo" },
  {
    name: "NodeJs",
    location: "../../src/assets/icons/nodejs.svg",
    alt: "PHP Logo",
  },
];

export const projectLists: ProjectListTypes[] = [
  {
    image: "../../src/assets/projects/TodoApp.png",
    alt: "TodoApp",
    name: "Todo App",
    description: `A coding challenge from Frontend Mentor to build a todo app,it
     allows users to create and manage a list of todos. It has features such as a light 
     and dark mode, drag and drop functionality, the ability to filter todos by status and 
     Local storage integration to save your todos and preferences.`,
    tools: [
      "React",
      "SCSS",
      "vite",
      "Firebase",
      "UseReducer",
      "UseState",
      "Github",
    ],
    site: "https://ify47.github.io/todo-app/",
    github: "https://github.com/ify47/todo-app",
    style: false,
  },
  {
    image: "../../src/assets/projects/multiForm.png",
    alt: "Multi-Step Form",
    name: "Multi-Step Form",
    description: `A coding challenge from Frontend Mentor to build a multi-step form that allows users to fill in 
    their details, make changes, and submit the form. Features include the ability to create
     multi-step forms easily, customizable and flexible forms, validation and error handling, and responsive design`,
    tools: [
      "React",
      "Typescript",
      "Chakra-Ui",
      "Vite",
      "Formik",
      "React Router",
      "Github",
    ],
    site: "https://ify47.github.io/multi-step-form/",
    github: "https://github.com/ify47/multi-step-form",
    style: true,
  },
  {
    image: "../../src/assets/projects/calculator.jpg",
    alt: "Calculator",
    name: "Calculator App",
    description: `A responsive calculator app that can perform basic arithmetic operations,
       including addition, subtraction, multiplication, and division. The app has
        a clear and concise user interface, with dynamic input and output displays.`,
    tools: ["React", "Styled Components", "UseState", "Github"],
    site: "https://ify47.github.io/calculator-app/",
    github: "https://github.com/ify47/calculator-app",
    style: false,
  },
];
