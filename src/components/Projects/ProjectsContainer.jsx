import Card from "../General/Card";
import SectionTag from "../General/SectionTag";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsContainer({ project, layout }) {
  const {
    name,
    description,
    url,
    urlLabel,
    repoUrl,
    previewImage,
    technologies,
  } = project;
  return (
    <Card className="mx-auto flex max-w-6xl flex-col md:w-[85%] md:flex-row">
      {/* Image container */}
      <div
        className={
          layout === "default"
            ? "flex items-center justify-center border-gray-100 bg-gray-50 p-8 max-md:rounded-t-xl md:w-1/2 md:rounded-l-xl md:border-r lg:p-12 dark:bg-gray-200"
            : "flex items-center justify-center border-gray-100 bg-gray-50 p-8 max-md:rounded-t-xl md:order-last md:w-1/2 md:rounded-r-xl md:border-l lg:p-12 dark:bg-gray-200"
        }
      >
        <a href={url} target="_blank" rel="noreferrer">
          <img
            src={previewImage}
            alt={name}
            className="rounded-xl object-cover shadow-lg transition-transform duration-500 md:hover:scale-105"
          />
        </a>
      </div>
      {/* Content Container  */}
      <div
        className={
          layout === "default"
            ? "flex flex-col gap-6 p-8 md:w-1/2 lg:p-12"
            : "flex flex-col gap-6 p-8 md:order-first md:w-1/2 lg:p-12"
        }
      >
        <p className="h3 font-semibold text-gray-900">{name}</p>
        <p className="body2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies?.map((technology, index) => (
            <SectionTag key={index} label={technology} />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-300 dark:text-gray-700"
          >
            {urlLabel || "Visit"}
            <ExternalLink className="h-4 w-4 stroke-gray-500" />
          </a>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} on GitHub`}
              className="inline-flex items-center gap-2 rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
