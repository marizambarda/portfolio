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
						<Col md={{ span: 5, offset: 1 }}>
							<h2>
								<span>Sobre</span>
							</h2>
							<p>
								Tenho 22 anos, sou desenvolvedora front-end júnior, atualmente trabalhando na{' '}
								<a href="https://www.suitable.com.br/">
									Suitable (sistema de gerenciamento de restaurante e aplicativo de delivery)
								</a>{' '}
								e desenvolvendo de sites freelancer no meu tempo livre. Curso Análise e Desenvolvimento
								de Sistemas na Universidade Estácio de Sá e possuo inglês intermediário
							</p>
							<p>
								Sou uma pessoa disposta a aprender novas tecnologias e procuro sempre aprimorar meus
								conhecimentos. Hoje na Suitable trabalho com o desenvolvendo de novas funcionalidades
								dentro do sistema utilizando React. Caso tenha interesse em conhecer meus trabalhos ou
								trocar alguma ideia, não deixe de{' '}
								<AnchorLink href="#contact">entrar em contato comigo</AnchorLink> ou conhecer mais sobre
								os meus <AnchorLink href="#projects">projetos</AnchorLink>!
							</p>
						</Col>
						<Col md={{ span: 2, offset: 1 }} className="technologies">
							<h3>Tecnologias</h3>
							<ul>
								<li>› HTML</li>
								<li>› CSS</li>
								<li>› Bootstrap</li>
								<li>› Material-UI</li>
								<li>› JavaScript</li>
								<li>› React</li>
								<li>› jQuery</li>
								<li>› Git </li>
								<li>› Responsivo</li>
							</ul>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 3, offset: 7 }} className="technologies">
							<h3>Idiomas</h3>
							<ul>
								<li>› Português - Fluente</li>
								<li>› Inglês - Intermediário</li>
							</ul>
						</Col>
					</Row>
				</div>
			</Container>
		</div>
	);
}

export default AboutPage;
