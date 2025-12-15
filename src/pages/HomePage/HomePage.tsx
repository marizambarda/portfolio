import { Button, Container, Row, Col } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MENU_OFFSET } from "../../constants";
import "./HomePage.scss";

import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation("common");

  return (
    <div className="section-home page-section" id="home">
      <Container className="section-home__about">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <p className="salutation">
              {t("home.salutation")}
              <span>👋</span>
              {t("home.myName")}
            </p>
            <h1>Mariana Zambarda</h1>
            <p className="position-company">{t("home.iAm")}</p>
            <div className="section-home__menu">
              <ul>
                <li>
                  <Button variant="outline-primary">
                    <AnchorLink href="#about" offset={MENU_OFFSET}>
                      {t("home.aboutMe")}
                    </AnchorLink>
                  </Button>
                </li>
                <li>
                  <Button variant="outline-primary">
                    <AnchorLink href="#experience" offset={MENU_OFFSET}>
                      {t("home.experience")}
                    </AnchorLink>
                  </Button>
                </li>
                <li>
                  <Button variant="outline-primary">
                    <AnchorLink href="#projects" offset={MENU_OFFSET}>
                      {t("home.projects")}
                    </AnchorLink>
                  </Button>
                </li>

                <li>
                  <Button variant="outline-primary">
                    <AnchorLink href="#contact" offset={MENU_OFFSET}>
                      {t("home.contact")}
                    </AnchorLink>
                  </Button>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
