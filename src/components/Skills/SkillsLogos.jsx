import LogoJavascript from "../../assets/images/logos/icon-javascript.svg";
import LogoTypescript from "../../assets/images/logos/icon-typescript.svg";
import LogoReact from "../../assets/images/logos/icon-react.svg";
import LogoNodejs from "../../assets/images/logos/icon-nodejs.svg";
import LogoSupabase from "../../assets/images/logos/icon-supabase.svg";
import LogoPostgreSQL from "../../assets/images/logos/icon-postgresql.svg";
import LogoTailwindcss from "../../assets/images/logos/icon-tailwindcss.svg";
import LogoSass from "../../assets/images/logos/icon-sass.svg";
import LogoVite from "../../assets/images/logos/icon-vite.svg";
import LogoVitest from "../../assets/images/logos/icon-vitest.svg";
import LogoStorybook from "../../assets/images/logos/icon-storybook.svg";
import LogoFlutter from "../../assets/images/logos/icon-flutter.svg";
import LogoSwift from "../../assets/images/logos/icon-swift.svg";
import LogoGit from "../../assets/images/logos/icon-git.svg";
import { useDarkMode } from "../context/DarkModeContext";
const skills = [
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "TypeScript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "JavaScript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Vite",
    logo: LogoVite,
    url: "https://vite.dev/",
  },
  {
    label: "Vitest",
    logo: LogoVitest,
    url: "https://vitest.dev/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Supabase",
    logo: LogoSupabase,
    url: "https://supabase.com/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Flutter",
    logo: LogoFlutter,
    url: "https://flutter.dev/",
  },
  {
    label: "Swift",
    logo: LogoSwift,
    url: "https://www.swift.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];
export default function SkillsLogos() {
  const { darkMode } = useDarkMode();
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <a
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-gray-600 transition-all hover:text-gray-900 active:text-gray-600"
          >
            <img
              src={
                darkMode === "dark" && skill.darkModeLogo
                  ? skill.darkModeLogo
                  : skill.logo
              }
              alt={skill.label}
              className="h-16 transition-transform duration-300 md:hover:scale-110"
            />
          </a>
          <p className="body1">{skill.label}</p>
        </div>
      ))}
    </>
  );
}
