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
              {t('home.salutation')}
              <span>👋</span>
              {t('home.myName')}
            </p>
            <h1>Mariana Zambarda</h1>
            <p className='position-company'>{t('home.iAm')}</p>
            <div className='section-home__menu'>
              <ul>
                <li>
                  <Button
                    as={AnchorLink}
                    href='#about'
                    offset={MENU_OFFSET}
                    variant='outline-primary'
                  >
                    {t('home.aboutMe')}
                  </Button>
                </li>
                <li>
                  <Button
                    as={AnchorLink}
                    href='#projects'
                    offset={MENU_OFFSET}
                    variant='outline-primary'
                  >
                    {t('home.projects')}
                  </Button>
                </li>
                <li>
                  <Button
                    as={AnchorLink}
                    href='#contact'
                    offset={MENU_OFFSET}
                    variant='outline-primary'
                  >
                    {t('home.contact')}
                  </Button>
                </li>

                <li>
                  <Select
                    onChange={i18n.changeLanguage}
                    label={t('languages.language')}
                    options={[
                      {
                        value: 'en',
                        label: 'English'
                      },
                      {
                        value: 'ptBr',
                        label: 'Português'
                      }
                    ]}
                  />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
