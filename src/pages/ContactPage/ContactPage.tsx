import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EMAIL_URL, LINKEDIN_URL, GITHUB_URL } from "../../constants.ts";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation("common");

  return (
    <div className="min-h-20 mt-14" id="contact">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <div>
              <h2 className="border-b-2 border-[#9f69a5] mb-2.5 font-light inline-block">
                {t("home.contact")}
              </h2>
              <div>
                <p>{t("contact")}</p>
              </div>
            </div>
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <ul>
                  <li>
                    <Button
                      href={EMAIL_URL}
                      target="_blank"
                      variant="outline-primary"
                      size="lg"
                    >
                      <FontAwesomeIcon icon={faEnvelopeOpenText} />
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
                      <FontAwesomeIcon icon={faLinkedinIn} />
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
                      <FontAwesomeIcon icon={faGithub} />
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
