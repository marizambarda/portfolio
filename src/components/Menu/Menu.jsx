import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MENU_OFFSET, EMAIL_URL, LINKEDIN_URL, GITHUB_URL } from '../../constants';
import './Menu.scss';

function Menu() {
	return <MenuDesktop />;
}

function MenuDesktop() {
	const [hidden, setHidden] = useState(true);

	useEffect(() => {
		function onScroll() {
			if (window.scrollY < window.innerHeight / 1.5) {
				setHidden(true);
			} else {
				setHidden(false);
			}
		}
		document.addEventListener('scroll', onScroll);
		onScroll();
	}, []);

	return (
		<div className={classNames('menu-desktop', { hidden: hidden })}>
			<Container>
				<div className="menu-desktop-inner">
					<AnchorLink offset={MENU_OFFSET} href="#home">
						<h1>Mariana Zambarda</h1>
					</AnchorLink>
					<div className="menu-links">
						<ul>
							<AnchorLink offset={MENU_OFFSET} href="#about">
								<li>Sobre</li>
							</AnchorLink>
							<AnchorLink offset={MENU_OFFSET} href="#projects">
								<li>Projetos</li>
							</AnchorLink>
							<AnchorLink offset={MENU_OFFSET} href="#contact">
								<li>Contato</li>
							</AnchorLink>
						</ul>
					</div>
					<div className="social-media">
						<a href={EMAIL_URL} target="blank">
							<FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
						</a>
						<a href={LINKEDIN_URL} target="blank">
							<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
						</a>
						<a href={GITHUB_URL} target="blank">
							<FontAwesomeIcon icon={faGithub} className="icon" />
						</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Menu;
