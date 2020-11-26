import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutPage.scss';

function AboutPage() {
	return (
		<div className="section-about" id="about">
			<Container>
				<div className="about-content">
					<Row>
						<Col md={{ span: 6, offset: 1 }}>
							<h2>
								<span>Sobre</span>
							</h2>
							<p>
								Tenho 22 anos, ou desenvolvedora front-end junior, atualmente cursando Análise e
								Desenvolvimento de Sistemas na Estácio.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam diam imperdiet
								odio dignissim pretium. Phasellus vulputate, purus rhoncus rhoncus euismod, enim lectus
								egestas lorem, in varius nisi turpis quis augue.
							</p>
							<p>
								Suspendisse aliquet diam id sollicitudin luctus. Curabitur ornare sagittis quam vitae
								porttitor. Duis vel congue odio. Nunc pretium vehicula congue. Quisque dictum id nisi ut
								varius. Cras eu iaculis velit. Donec et tincidunt purus.
							</p>
						</Col>
						<Col md={{ span: 3, offset: 1 }} className="technologies">
							<h3>Tecnologias</h3>
							<ul>
								<li>› HTML</li>
								<li>› CSS</li>
								<li>› Bootstrap</li>
								<li>› JavaScript</li>
								<li>› React</li>
								<li>› jQuery</li>
								<li>› Git </li>
								<li>› Responsivo</li>
							</ul>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default AboutPage;
