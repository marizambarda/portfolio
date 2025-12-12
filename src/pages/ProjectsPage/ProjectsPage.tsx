import { Container, Row, Col } from "react-bootstrap";
import tenisClubeImage from "../../images/tenis-clube.png";
import santaVeiculos from "../../images/santa-veiculos.png";
import pcVeiculos from "../../images/pc-veiculos.png";
import { useTranslation } from "react-i18next";

import "./ProjectsPage.scss";
import ShowcaseItem from "../../components/ShowcaseItem/ShowcaseItem.tsx";

function ProjectsPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="section-projects page-section" id="projects">
        <Container>
          <div className="projects-content">
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
