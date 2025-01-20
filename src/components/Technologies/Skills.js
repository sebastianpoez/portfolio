import { DiNodejsSmall, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "node.js",
    Component: DiNodejsSmall,
    title: "Node.js",
    Description: () => <>Express.js and Nest.js</>,
  },

  {
    slug: "express.js",
    Component: RiFlutterFill,
    title: "Express.js",
    Description: () => <>Backend framework</>,
  },

  {
    slug: "nest.js",
    Component: TbBrandKotlin,
    title: "Nest.js",
    Description: () => <>Backend framework</>,
  },

  {
    slug: "restful api",
    Component: TbBrandKotlin,
    title: "Restful API",
    Description: () => <>Backend framework</>,
  }, 
  
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  
  {
    slug: "postgresql",
    Component: SiDart,
    title: "PostgreSQL",
    Description: () => <>Database</>,
  },

  {
    slug: "mongdb",
    Component: DiJava,
    title: "MongoDB",
    Description: () => <>Database</>,
  },

  {
    slug: "mysql",
    Component: SiDart,
    title: "MySQL",
    Description: () => <>Database</>,
  },

  {
    slug: "react",
    Component: DiTerminal,
    title: "React",
    Description: () => <>React library</>,
  },

  {
    slug: "next.js",
    Component: DiHtml5,
    title: "Next.js",
    Description: () => <>React framework</>,
  },


  {
    slug: "typescript",
    Component: SiCss3,
    title: "TypeScript",
    Description: () => <>superset of JavaScript that adds static typing to the language</>,
  },
  {
    slug: "stripe",
    Component: SiAmazonaws,
    title: "Stripe",
    Description: () => <>Payment gateway</>,
  },
  {
    slug: "tailwindcss",
    Component: DiTerminal,
    title: "TailwindCSS",
    Description: () => <>Css framework</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
