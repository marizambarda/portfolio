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
	return (
		<div>
			<MenuDesktop />
			<MobileMenu />
		</div>
	);
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
							<li>
								<AnchorLink offset={MENU_OFFSET} href="#about">
									Sobre
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={MENU_OFFSET} href="#projects">
									Projetos
								</AnchorLink>
							</li>
							<li>
								<AnchorLink offset={MENU_OFFSET} href="#contact">
									Contato
								</AnchorLink>
							</li>
						</ul>
					</div>
					<div className="social-media">
						<a href={EMAIL_URL} target="_blank">
							<FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
						</a>
						<a href={LINKEDIN_URL} target="_blank">
							<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
						</a>
						<a href={GITHUB_URL} target="_blank">
							<FontAwesomeIcon icon={faGithub} className="icon" />
						</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

function MobileMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

	async function toggleMenu(e) {
		e.preventDefault();
		setMenuOpen(!menuOpen);
	}

	return (
		<div className="mobile-menu-header">
			<div className="mobile-menu-header__background"></div>
			<a href="#" onClick={toggleMenu} className={menuOpen ? 'mobile-menu-icon open' : 'mobile-menu-icon'}>
				<div>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</a>
			{menuOpen && (
				<div className="mobile-menu">
					<ul>
						<li>
							<AnchorLink offset={MENU_OFFSET} href="#about" onClick={() => setMenuOpen(false)}>
								Sobre
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={MENU_OFFSET} href="#projects" onClick={() => setMenuOpen(false)}>
								Projetos
							</AnchorLink>
						</li>
						<li>
							<AnchorLink offset={MENU_OFFSET} href="#contact" onClick={() => setMenuOpen(false)}>
								Contato
							</AnchorLink>
						</li>
						<div className="social-media">
							<a href={EMAIL_URL} target="_blank">
								<FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
							</a>
							<a href={LINKEDIN_URL} target="_blank">
								<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
							</a>
							<a href={GITHUB_URL} target="_blank">
								<FontAwesomeIcon icon={faGithub} className="icon" />
							</a>
						</div>
					</ul>
				</div>
			)}
		</div>
	);
}

export default Menu;
