import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './HomePage.scss';

function HomePage() {
	return (
		<div className="section-home">
			<Container className="section-home__about">
				<Row>
					<Col md={{ span: 6, offset: 1 }}>
						<p className="salutation">
							Olá! <span>👋</span> Meu nome é
						</p>
						<h1>Mariana Zambarda</h1>
						<p className="position-company">Sou desenvolvedora front-end</p>
						<div className="section-home__menu">
							<ul>
								<li>
									<Button href="#" variant="outline-primary">
										Sobre mim
									</Button>
								</li>
								<li>
									<Button href="#" variant="outline-primary">
										Projetos
									</Button>
								</li>
								<li>
									<Button href="#" variant="outline-primary">
										Contato
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
