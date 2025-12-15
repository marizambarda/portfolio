import { Container, Row, Col } from "react-bootstrap";
import tenisClubeImage from "../../images/tenis-clube.png";
import santaVeiculos from "../../images/santa-veiculos.png";
import pcVeiculos from "../../images/pc-veiculos.png";
import mundoEscape from "../../images/mundo-escape.png";
import siteCarro from "../../images/site-carro.png";
import { useTranslation } from "react-i18next";

import "./ProjectsPage.scss";
import ShowcaseItem from "../../components/ShowcaseItem/ShowcaseItem";

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
                  title="Site Carro"
                  technologies={["Remix", "React", "HTML", "CSS", "Typescript"]}
                  description={t("projects.siteCarro")}
                  url="https://www.sitecarro.com.br/"
                  image={siteCarro}
                />
                <ShowcaseItem
                  title="Mundo Escape"
                  technologies={["RubyOnRails", "HTML", "CSS", "Javascript"]}
                  description={t("projects.mundoEscape")}
                  url="http://www.mundoescape.com.br/"
                  image={mundoEscape}
                />
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
