import { Row, Col, Image, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type ShowcaseItemProps = {
  image: string;
  title: string;
  technologies: string[];
  description: string;
  url: string;
  gitHubURL?: string;
  period?: string;
};

function ShowcaseItem({
  image,
  title,
  technologies,
  description,
  url,
  gitHubURL,
  period,
}: ShowcaseItemProps) {
  const { t } = useTranslation("common");

  const imageColumn = (
    <Col lg={5}>
      <Image src={image} />
    </Col>
  );

  const contentColumn = (
    <Col lg={7}>
      <div>
        <h3 className="p-2">{title}</h3>
        <div>
          {technologies.map((technology) => (
            <div key={technology}>{technology}</div>
          ))}
        </div>
        <p>{period}</p>
        <p>{description}</p>
      </div>
      <div>
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

export default ShowcaseItem;
