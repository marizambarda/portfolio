import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTranslation } from "react-i18next";
import {
  MENU_OFFSET,
  EMAIL_URL,
  LINKEDIN_URL,
  GITHUB_URL,
} from "../../constants.ts";
import "./Menu.scss";
import Select from "../Select/index.ts";

function Menu() {
  return (
    <div>
      <Header />
      <MenuDesktop />
      <MobileMenu />
    </div>
  );
}
function Header() {
  const { i18n } = useTranslation("common");

  return (
    <Container>
      <div className="desktop-header">
        <a href={EMAIL_URL} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
        </a>
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <Select
          onChange={(lang) => {
            if (lang) i18n.changeLanguage(lang);
          }}
          options={[
            {
              value: "en",
              label: "English",
            },
            {
              value: "pt-BR",
              label: "Português",
            },
          ]}
        />
      </div>
    </Container>
  );
}
function MenuDesktop() {
  const hidden = useHiddenScroll();
  const { t, i18n } = useTranslation("common");

  return (
    <div className={classNames("menu-desktop", { hidden: hidden })}>
      <Container>
        <div className="menu-desktop-inner">
          <AnchorLink offset={MENU_OFFSET} href="#home">
            <h1>Mariana Zambarda</h1>
          </AnchorLink>
          <div className="menu-links">
            <ul>
              <li>
                <AnchorLink offset={MENU_OFFSET} href="#about">
                  {t("home.aboutMe")}
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={MENU_OFFSET} href="#experience">
                  {t("home.experience")}
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={MENU_OFFSET} href="#projects">
                  {t("home.projects")}
                </AnchorLink>
              </li>
              <li>
                <AnchorLink offset={MENU_OFFSET} href="#contact">
                  {t("home.contact")}
                </AnchorLink>
              </li>
            </ul>
          </div>
          <div className="social-media">
            <a href={EMAIL_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <Select
              onChange={(lang) => {
                if (lang) i18n.changeLanguage(lang);
              }}
              options={[
                {
                  value: "en",
                  label: "English",
                },
                {
                  value: "pt-BR",
                  label: "Português",
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

function MobileMenu() {
  const hidden = useHiddenScroll();
  const { t } = useTranslation("common");
  const [menuOpen, setMenuOpen] = useState(false);

  async function toggleMenu(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  return (
    <div
      className={classNames("mobile-menu-header", {
        hidden: hidden && !menuOpen,
      })}
    >
      <div className="mobile-menu-header__background"></div>
      <a
        href="#"
        onClick={toggleMenu}
        className={menuOpen ? "mobile-menu-icon open" : "mobile-menu-icon"}
      >
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
              <AnchorLink
                offset={MENU_OFFSET}
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                {t("home.aboutMe")}
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={MENU_OFFSET}
                href="#experience"
                onClick={() => setMenuOpen(false)}
              >
                {t("home.experience")}
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={MENU_OFFSET}
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                {t("home.projects")}
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                offset={MENU_OFFSET}
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                {t("home.contact")}
              </AnchorLink>
            </li>
          </ul>
          <div className="social-media">
            <a href={EMAIL_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function useHiddenScroll() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setHidden(window.scrollY < window.innerHeight / 1.5);
    };

    document.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return hidden;
}

export default Menu;
