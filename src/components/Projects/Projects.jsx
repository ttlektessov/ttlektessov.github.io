import ProjectsContainer from "./ProjectsContainer";
import Container from "../General/Container";
import SectionTag from "../General/SectionTag";
import { images } from "../../assets";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const MyProjects = [
    {
      name: t("projects_s.tessera_name"),
      description: t("projects_s.tessera_description"),
      url: t("projects_s.tessera_url"),
      urlLabel: t("projects_s.visit_site"),
      previewImage: images.TesseraPreview,
      technologies: t("projects_s.tessera_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.goszakup_name"),
      description: t("projects_s.goszakup_description"),
      url: t("projects_s.goszakup_url"),
      urlLabel: t("projects_s.live_demo"),
      repoUrl: t("projects_s.goszakup_repo"),
      previewImage: images.GoszakupPreview,
      technologies: t("projects_s.goszakup_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.cz_name"),
      description: t("projects_s.cz_description"),
      url: t("projects_s.cz_url"),
      urlLabel: t("projects_s.view_package"),
      repoUrl: t("projects_s.cz_repo"),
      previewImage: images.CzPreview,
      technologies: t("projects_s.cz_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.patron_name"),
      description: t("projects_s.patron_description"),
      url: t("projects_s.patron_url"),
      urlLabel: t("projects_s.watch_video"),
      previewImage: images.PatronWebsite,
      technologies: t("projects_s.patron_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.mindsight_name"),
      description: t("projects_s.mindsight_description"),
      url: t("projects_s.mindsight_url"),
      urlLabel: t("projects_s.watch_video"),
      previewImage: images.MindsightMobile,
      technologies: t("projects_s.mindsight_technologies", {
        returnObjects: true,
      }),
    },
    {
      name: t("projects_s.mindsight_admin_name"),
      description: t("projects_s.mindsight_admin_description"),
      url: t("projects_s.mindsight_admin_url"),
      urlLabel: t("projects_s.watch_video"),
      previewImage: images.MindsightDashboard,
      technologies: t("projects_s.mindsight_admin_technologies", {
        returnObjects: true,
      }),
    },
  ];

  return (
    <Container id="projects">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <SectionTag label={t("projects_s.title")} />
        </div>
        <p className="subtitle max-w-xl text-center">{t("projects_s.intro")}</p>
      </div>
      {MyProjects.map((project, index) => (
        <ProjectsContainer
          key={index}
          project={project}
          layout={index % 2 === 0 ? "default" : "reverse"}
        />
      ))}
    </Container>
  );
}
