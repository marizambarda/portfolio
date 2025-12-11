import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import "./AboutPage.scss";
import { replace } from "../../translations/utils";

function AboutPage() {
  const { t } = useTranslation("common");

  return (
    <div className="section-about page-section" id="about">
      <Container>
        <div className="about-content">
          <Row>
            <Col md={{ span: 5, offset: 1 }}>
              <h2>
                <span>{t("home.aboutMe")}</span>
              </h2>
              <p>
                {replace(t("about.aboutMe"), {
                  Citifyd: (
                    <a
                      target="_blank"
                      href="https://www.citifyd.com/"
                      rel="noreferrer"
                    >
                      Citifyd
                    </a>
                  ),
                })}
              </p>
              <p>{t("about.citifydProjects")}</p>
              <p>
                {replace(t("about.contact"), {
                  "get in touch": (
                    <AnchorLink href="#contact">get in touch</AnchorLink>
                  ),
                  "entrar em contato comigo": (
                    <AnchorLink href="#contact">
                      entrar em contato comigo
                    </AnchorLink>
                  ),
                  "meus projetos": (
                    <AnchorLink href="#projects">meus projetos</AnchorLink>
                  ),
                })}
              </p>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <div className="information">
                <h3>{t("about.technologies")}</h3>
                <Row>
                  <Col>
                    <ul>
                      <li>› React</li>
                      <li>› JavaScript</li>
                      <li>› HTML</li>
                      <li>› Bootstrap</li>
                      <li>› Storybook</li>
                      <li>› Git </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      <li>› NextJS</li>
                      <li>› TypeScript</li>
                      <li>› CSS</li>
                      <li>› Material-UI</li>
                      <li>› jQuery</li>
                      <li>› {t("about.responsive")}</li>
                    </ul>
                  </Col>
                </Row>
              </div>
              <div className="information">
                <h3>{t("languages.languages")}</h3>
                <ul>
                  <li>
                    › {t("languages.portuguese")} - {t("languages.fluent")}
                  </li>
                  <li>
                    › {t("languages.english")} - {t("languages.intermediate")}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default AboutPage;
