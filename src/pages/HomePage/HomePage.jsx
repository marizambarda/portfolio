import React from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { MENU_OFFSET } from '../../constants'
import './HomePage.scss'
import Select from '../../components/Select'

import { useTranslation } from 'react-i18next'

function HomePage () {
  const { t, i18n } = useTranslation('common')

  return (
    <div className='section-home page-section' id='home'>
      <Container className='section-home__about'>
        <Row>
          <Col lg={{ span: 6, offset: 1 }}>
            <p className='salutation'>
              Olá! <span>👋</span> Meu nome é
            </p>
            <h1>Mariana Zambarda</h1>
            <p className='position-company'>Sou desenvolvedora front-end</p>
            <div className='section-home__menu'>
              <ul>
                <li>
                  <Button
                    as={AnchorLink}
                    href='#about'
                    offset={MENU_OFFSET}
                    variant='outline-primary'
                  >
                    Sobre mim
                  </Button>
                </li>
                <li>
                  <Button
                    as={AnchorLink}
                    href='#projects'
                    offset={MENU_OFFSET}
                    variant='outline-primary'
                  >
                    Projetos
                  </Button>
                </li>
                <li>
                  <Button
                    as={AnchorLink}
                    href='#contact'
                    offset={MENU_OFFSET}
                    variant='outline-primary'
                  >
                    Contato
                  </Button>
                </li>
                <li>
                  <div>
                    <h1>{t('welcome.title', { framework: 'React' })}</h1>
                    <button onClick={() => i18n.changeLanguage('ptBr')}>
                      Pt-br
                    </button>
                    <button onClick={() => i18n.changeLanguage('en')}>
                      en
                    </button>
                  </div>
                </li>
              </ul>

              <Select
                onChange={i18n.changeLanguage}
                options={[
                  { value: 'en', label: 'Inglex' },
                  { value: 'ptBr', label: 'Br' }
                ]}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
