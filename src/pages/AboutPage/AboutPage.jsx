import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useTranslation } from 'react-i18next'
import './AboutPage.scss'
import { replace } from '../../translations/utils'

function AboutPage () {
  const { t } = useTranslation('common')

  return (
    <div className='section-about page-section' id='about'>
      <Container>
        <div className='about-content'>
          <Row>
            <Col md={{ span: 5, offset: 1 }}>
              <h2>
                <span>{t('home.aboutMe')}</span>
              </h2>
              <p>
                {replace(t('about.aboutMe'), {
                  Citifyd: <AnchorLink href='#contact'>Citifyd</AnchorLink>,
                  'Estácio de Sá': 'BBB'
                })}
              </p>
              <p>{t('about.citifydProjects')}</p>
              <p>
                {replace(t('about.contact'), {
                  'contact me': (
                    <AnchorLink href='#contact'>contact me</AnchorLink>
                  ),
                  'my projects': (
                    <AnchorLink href='#projects'>my projects</AnchorLink>
                  ),
                  'entrar em contato comigo': (
                    <AnchorLink href='#contact'>
                      entrar em contato comigo
                    </AnchorLink>
                  ),
                  'meus projetos': (
                    <AnchorLink href='#projects'>meus projetos</AnchorLink>
                  )
                })}
              </p>
            </Col>
            <Col md={{ span: 3, offset: 1 }}>
              <div className='technologies'>
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
              </div>
              <div className='technologies'>
                <h3>Idiomas</h3>
                <ul>
                  <li>› Português - Fluente</li>
                  <li>› Inglês - Intermediário</li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default AboutPage
