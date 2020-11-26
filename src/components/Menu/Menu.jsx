import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
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
					<div>
						<h1>Mariana Zambarda</h1>
					</div>
					<div className="menu-links">
						<ul>
							<a href="#">
								<li>Sobre</li>
							</a>
							<a href="#">
								<li>Projetos</li>
							</a>
							<a href="#">
								<li>Contato</li>
							</a>
						</ul>
					</div>
					<div className="social-media">
						<a>
							<FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
						</a>
						<a>
							<FontAwesomeIcon icon={faLinkedinIn} className="icon" />
						</a>
						<a>
							<FontAwesomeIcon icon={faGithub} className="icon" />
						</a>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Menu;
