import { Container, Row, Col } from "react-bootstrap";
import tenisClubeImage from "../../images/tenis-clube.png";
import santaVeiculos from "../../images/santa-veiculos.png";
import pcVeiculos from "../../images/pc-veiculos.png";
import eventsImage from "../../images/events.png";
import suitableImage from "../../images/suitable.png";
import { useTranslation } from "react-i18next";

import ShowcaseItem from "../../components/ShowcaseItem/ShowcaseItem.tsx";

function ProjectsPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <div id="experience">
        <Container>
          <div>
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <h2 className="border-b-2 border-[#9f69a5] mb-2.5 font-light inline-block">
                  {t("home.experience")}
                </h2>
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
                  ]}
                  description={t("experience.events.description")}
                  period={t("experience.events.period")}
                  url="http://www.events.com/"
                  image={eventsImage}
                />

                <ShowcaseItem
                  title="Suitable"
                  technologies={["WordPress", "HTML", "CSS"]}
                  description={t("experience.suitable.description")}
                  period={t("experience.suitable.period")}
                  url="http://www.suitble.com.br/"
                  image={suitableImage}
                />
                <ShowcaseItem
                  title="Santa Veículos"
                  technologies={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                  description={t("projects.santaVeiculos")}
                  url="https://www.santaveiculos.com.br/"
                  image={santaVeiculos}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div id="projects">
        <Container>
          <div className="text-black">
            <Row>
              <Col md={{ span: 10, offset: 1 }}>
                <h2>
                  <span>{t("home.projects")}</span>
                </h2>
                <ShowcaseItem
                  title="PC Veículos"
                  technologies={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                  description={t("projects.pcVeiculos")}
                  url="http://www.pcveiculosrs.com.br/"
                  image={pcVeiculos}
                />

                <ShowcaseItem
                  title="Tênis Clube Santa Cruz"
                  technologies={["WordPress", "HTML", "CSS"]}
                  description={t("projects.tenisClub")}
                  url="http://www.tenisclubesantacruz.com/"
                  image={tenisClubeImage}
                />
                <ShowcaseItem
                  title="Santa Veículos"
                  technologies={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                  description={t("projects.santaVeiculos")}
                  url="https://www.santaveiculos.com.br/"
                  image={santaVeiculos}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectsPage;
