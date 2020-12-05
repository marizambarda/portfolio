import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './AboutPage.scss';

function AboutPage() {
	return (
		<div className="section-about page-section" id="about">
			<Container>
				<div className="about-content">
					<Row>
						<Col md={{ span: 6, offset: 1 }}>
							<h2>
								<span>Sobre</span>
							</h2>
							<p>
								Tenho 22 anos, sou desenvolvedora front-end júnior, atualmente cursando Análise e
								Desenvolvimento de Sistemas na Universidade Estácio de Sá.
							</p>
							<p>
								Estou a procura de uma oportunidade como desenvolvedora júnior para por meus
								conhecimentos em prática. Possuo nível de inglês intermediário para avançado. Atualmente
								moro em Santa Cruz do Sul-RS, porém pretendo mudar para Florianópolis-SC caso surja
								alguma oportunidade bacana na área de desenvolvimento.
							</p>
							<p>
								Sou uma pessoa que está disposta a aprender novas tecnologias e aceita desafios. Caso
								tenha interesse ou alguma vaga que acredite que meu perfil encaixa-se não deixe de{' '}
								<AnchorLink href="#contact">entrar em contato comigo</AnchorLink>!
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
