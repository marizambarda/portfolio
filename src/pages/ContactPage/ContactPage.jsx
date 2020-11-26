import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import './ContactPage.scss';

function ContactPage() {
	return (
		<div className="sections-contact">
			<Container>
				<Row>
					<Col md={{ span: 10, offset: 1 }}>
						<div className="contact-content ">
							<h2>
								<span>Contato</span>
							</h2>
							<div>
								<p>Você pode usar os canais abaixo para entrar em contato:</p>
							</div>
						</div>
						<Row>
							<Col md={{ span: 6, offset: 3 }}>
								<ul className="social-media">
									<li>
										<Button href="#" variant="outline-primary" size="lg" block>
											<FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
											<span>Email</span>
										</Button>
									</li>
									<li>
										<Button href="#" variant="outline-primary linkedin" size="lg" block>
											<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
											<span>LinkedIn</span>
										</Button>
									</li>
									<li>
										<Button href="#" variant="outline-primary github" size="lg" block>
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
