import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import tenisClubeImage from "../../images/tenis-clube.png";
import santaVeiculos from "../../images/santa-veiculos.png";
import numaLaudos from "../../images/numa-laudos.png";
import pcVeiculos from "../../images/pc-veiculos.png";
import dragoniter from "../../images/dragoniter.png";
import jogoDaVelha from "../../images/jogo-da-velha.png";
import { useTranslation } from "react-i18next";

import "./ProjectsPage.scss";

type ProjectProps = {
  image: string;
  title: string;
  technologies: string[];
  description: string;
  url: string;
  gitHubURL?: string;
};

function ProjectsPage() {
  const { t } = useTranslation("common");

  return (
    <div className="section-projects page-section" id="projects">
      <Container>
        <div className="projects-content">
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h2>
                <span>{t("home.projects")}</span>
              </h2>
              <Project
                title={`Dragoniter (${t("projects.twitterClone.title")})`}
                technologies={[
                  "React.js",
                  "Bootstrap",
                  "Sass",
                  "node.js",
                  "MySQL",
                ]}
                description={t("projects.twitterClone.description")}
                url="http://dragoniter.marianazambarda.com"
                image={dragoniter}
                gitHubURL="https://github.com/marizambarda/dragoniter"
              />

              <Project
                title={t("projects.jogoDaVelha.title")}
                technologies={["React.js", "HTML", "Sass"]}
                description={t("projects.jogoDaVelha.description")}
                url="https://jogodavelha.marianazambarda.com/"
                image={jogoDaVelha}
                gitHubURL="https://github.com/marizambarda/jogo-da-velha"
              />

              <Project
                title="Santa Veículos"
                technologies={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                description={t("projects.santaVeiculos")}
                url="https://www.santaveiculos.com.br/"
                image={santaVeiculos}
              />

              <Project
                title="Tênis Clube Santa Cruz"
                technologies={["WordPress", "HTML", "CSS"]}
                description={t("projects.tenisClub")}
                url="http://www.tenisclubesantacruz.com/"
                image={tenisClubeImage}
              />

              <Project
                title="PC Veículos"
                technologies={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                description={t("projects.pcVeiculos")}
                url="http://www.pcveiculosrs.com.br/"
                image={pcVeiculos}
              />

              <Project
                title="NUMA Laudos"
                technologies={["JavaScript", "HTML", "CSS", "Bootstrap"]}
                description={t("projects.numa")}
                url="https://www.numalaudos.com.br/"
                image={numaLaudos}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

function Project({
  image,
  title,
  technologies,
  description,
  url,
  gitHubURL,
}: ProjectProps) {
  const { t } = useTranslation("common");

  const imageColumn = (
    <Col lg={5}>
      <Image className="project-image" src={image} />
    </Col>
  );

  const contentColumn = (
    <Col lg={7}>
      <div>
        <h3>{title}</h3>
        <div>
          {technologies.map((technology) => (
            <div key={technology} className="badge-technologies">
              {technology}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className="buttons">
        <Button href={url} variant="outline-primary" target="_blank">
          {t("projects.visitWebsite")}
        </Button>{" "}
        {gitHubURL && (
          <Button href={gitHubURL} variant="outline-primary" target="_blank">
            {t("projects.seeOnGithub")}
          </Button>
        )}
      </div>
    </Col>
  );

  return (
    <Row>
      {imageColumn}
      {contentColumn}
    </Row>
  );
}

export default ProjectsPage;
