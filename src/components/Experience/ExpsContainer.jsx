import ExperienceCard from "./ExperienceCard";
import { useTranslation } from "react-i18next";

export default function ExperienceContainer() {
  const { t } = useTranslation();

  const experiences = [
    {
      organization: t("org.forte_title"),
      position: t("org.forte_position"),
      startDate: new Date(2025, 4),
      endDate: t("present"),
      summary: t("org.forte_summary", {returnObjects: true})
    },
    {
      organization: t("org.nodamen_title"),
      position: t("org.nodamen_position"),
      startDate: new Date(2023, 4),
      endDate: new Date(2024, 8),
      summary: t("org.nodamen_summary", { returnObjects: true }),
    },
    {
      organization: t("org.embassy_title"),
      position: t("org.embassy_position"),
      startDate: new Date(2020, 6),
      endDate: new Date(2021, 11),
      summary: t("org.embassy_summary", { returnObjects: true }),
    },
    {
      organization: t("org.sejong_title"),
      position: t("org.sejong_position"),
      startDate: new Date(2020, 8),
      endDate: new Date(2020, 11),
      summary: t("org.sejong_summary", { returnObjects: true }),
    },
  ];

  return (
    <>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </>
  );
}
