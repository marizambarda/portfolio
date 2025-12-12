import { useTranslation } from "react-i18next";
import { Col, Container } from "react-bootstrap";
import ShowcaseItem from "../../components/ShowcaseItem/ShowcaseItem";

function ExperiencePage() {
  const { t } = useTranslation("common");
  return (
    <div className="section-projects page-section" id="experience">
      <Container>
        <div className="projects-content">
          <Col md={{ span: 10, offset: 1 }}>
            <h2>
              <span>{t("home.experience")}</span>
            </h2>
          </Col>

          <ShowcaseItem
            title="Events.com"
            technologies={[
              "Typescript",
              "Capacitor",
              "NextJS",
              "React",
              "NestJS",
              "HTML",
              "SCSS Modules",
              "Tailwind",
              "Figma",
              "Material-UI",
              "Storybook",
            ]}
            description={t("experience.events.description")}
            period={t("experience.events.period")}
            url="http://www.events.com/"
          />
          <ShowcaseItem
            title="Citifyd"
            technologies={[
              "Typescript",
              "NextJS",
              "React",
              "HTML",
              "SCSS Modules",
              "Figma",
              "Storybook",
              "jQuery",
              "NodeJS",
            ]}
            description={t("experience.citifyd.description")}
            period={t("experience.citifyd.period")}
            url="https://www.citifyd.biz/"
          />

          <ShowcaseItem
            title="Suitable"
            technologies={[
              "React",
              "NextJS",
              "Javascript",
              "HTML",
              "CSS",
              "Storybook",
            ]}
            description={t("experience.suitable.description")}
            period={t("experience.suitable.period")}
            url="http://www.suitable.com.br/"
          />
        </div>
      </Container>
    </div>
  );
}

export default ExperiencePage;
