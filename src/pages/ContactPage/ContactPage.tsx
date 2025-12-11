import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EMAIL_URL, LINKEDIN_URL, GITHUB_URL } from "../../constants.ts";
import { useTranslation } from "react-i18next";
import "./ContactPage.scss";

function ContactPage() {
  const { t } = useTranslation("common");

  return (
    <div className="sections-contact page-section" id="contact">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <div className="contact-content ">
              <h2>
                <span> {t("home.contact")}</span>
              </h2>
              <div>
                <p>{t("contact")}</p>
              </div>
            </div>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <ul className="social-media">
                  <li>
                    <Button
                      href={EMAIL_URL}
                      target="_blank"
                      variant="outline-primary"
                      size="lg"
                    >
                      <FontAwesomeIcon
                        icon={faEnvelopeOpenText}
                        className="icon"
                      />
                      <span>Email</span>
                    </Button>
                  </li>
                  <li>
                    <Button
                      href={LINKEDIN_URL}
                      target="_blank"
                      variant="outline-primary linkedin"
                      size="lg"
                    >
                      <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                      <span>LinkedIn</span>
                    </Button>
                  </li>
                  <li>
                    <Button
                      href={GITHUB_URL}
                      target="_blank"
                      variant="outline-primary github"
                      size="lg"
                    >
                      <FontAwesomeIcon icon={faGithub} className="icon" />
                      <span>GitHub</span>
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPage;
