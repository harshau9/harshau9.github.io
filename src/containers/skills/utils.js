import {
  SiJavascript,
  SiMongodb,
  SiVercel,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiChakraui,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiKoa,
  SiSocketdotio,
  SiDocker,
} from "react-icons/si";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
export const skillsData = [
  {
    label: "FRONT END",
    data: [
      {
        skillName: "Javascript",
        percentage: "90",
        sym: (
          <SiJavascript size={25} color="var(--selected-theme-main-color)" />
        ),
      },
      {
        skillName: "Typescript",
        percentage: "70",
        sym: (
          <SiTypescript size={25} color="var(--selected-theme-main-color)" />
        ),
      },
      {
        skillName: "React.js",
        percentage: "90",
        sym: <DiReact size={30} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "Next.js",
        percentage: "70",
        sym: <SiNextdotjs size={30} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "React Native / Expo",
        percentage: "80",
        sym: (
          <MdOutlinePhoneAndroid
            size={25}
            color="var(--selected-theme-main-color)"
          />
        ),
      },
      {
        skillName: "Tailwind, SASS",
        percentage: "80",
        sym: <SiTailwindcss size={25} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "Shadcn/ui, Chakra UI",
        percentage: "90",
        sym: <SiChakraui size={30} color="var(--selected-theme-main-color)" />,
      },
    ],
  },
  {
    label: "BACK END",
    data: [
      {
        skillName: "Node JS",
        percentage: "80",
        sym: (
          <DiNodejsSmall size={30} color="var(--selected-theme-main-color)" />
        ),
      },
      {
        skillName: "Express",
        percentage: "80",
        sym: <SiExpress size={30} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "Koa JS",
        percentage: "80",
        sym: (
          <SiKoa size={30} color="var(--selected-theme-main-color)" />
        ),
      },
    ],
  },
  {
    label: "DBMS & Others",
    data: [
      {
        skillName: "Mongo DB",
        percentage: "70",
        sym: <SiMongodb size={30} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "PostgreSQL",
        percentage: "90",
        sym: <SiPostgresql size={30} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "Docker",
        percentage: "80",
        sym: (
          <SiDocker size={30} color="var(--selected-theme-main-color)" />
        ),
      },
      {
        skillName: "AWS, GCP",
        percentage: "70",
        sym: <FaAws size={30} color="var(--selected-theme-main-color)" />,
      },
      {
        skillName: "Socket.io",
        percentage: "80",
        sym: (
          <SiSocketdotio size={30} color="var(--selected-theme-main-color)" />
        ),
      },
      {
        skillName: "Vercel, Netlify",
        percentage: "100",
        sym: <SiVercel size={25} color="var(--selected-theme-main-color)" />,
      },
    ],
  },
];
