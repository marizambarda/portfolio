import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import tenisClubeImage from '../../images/tenis-clube.png';
import './ProjectsPage.scss';

function ProjectsPage() {
	return (
		<div className="section-projects page-section" id="projects">
			<Container>
				<div className="projects-content">
					<Row>
						<Col md={{ span: 10, offset: 1 }}>
							<h2>
								<span>Projetos</span>
							</h2>
							<Project
								title="Tênis Clube Santa Cruz"
								technologies={['WORDPRESS', 'HTML', 'CSS']}
								description="m Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
								industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
								type and scrambled it to make a type specimen book. It has survived not only five centuries.
								when an unknown printer took a galley of type and scrambled it to make."
								url="#"
								image={tenisClubeImage}
							/>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

function Project({ image, title, technologies, description, url, alternate }) {
	const imageColumn = (
		<Col md={5}>
			<Image className="project-image" src={image} />
		</Col>
	);

	const contentColumn = (
		<Col md={7}>
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
				<Button href={url} variant="outline-primary">
					Ver Site
				</Button>
			</div>
		</Col>
	);

	if (alternate) {
		return (
			<Row>
				{contentColumn}
				{imageColumn}
			</Row>
		);
	} else {
		return (
			<Row>
				{imageColumn}
				{contentColumn}
			</Row>
		);
	}
}

export default ProjectsPage;
