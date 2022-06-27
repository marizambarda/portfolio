import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import tenisClubeImage from '../../images/tenis-clube.png'
import santaVeiculos from '../../images/santa-veiculos.png'
import numaLaudos from '../../images/numa-laudos.png'
import pcVeiculos from '../../images/pc-veiculos.png'
import dragoniter from '../../images/dragoniter.png'
import jogoDaVelha from '../../images/jogo-da-velha.png'
import { useTranslation } from 'react-i18next'

import './ProjectsPage.scss'

function ProjectsPage () {
  const { t } = useTranslation('common')

  return (
    <div className='section-projects page-section' id='projects'>
      <Container>
        <div className='projects-content'>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <h2>
                <span> {t('home.projects')}</span>
              </h2>
              <Project
                title='Dragoniter (Clone do Twitter)'
                technologies={[
                  'React.js',
                  'Bootstrap',
                  'Sass',
                  'node.js',
                  'MySQL'
                ]}
                description='Clone do Twitter, desenvolvido para aprimorar conhecimentos em Frontend e Backend.
								Possui funcionalidades de upload de imagens, recuperação de senha, validação de nome e email de usuários, seguir usuários, timeline, menções, hashtags e horário de publicação. No frontend foi utilizada a biblioteca React.js, o framework Bootstrap, HTML e Sass.
								No backend, node.js e MySQL.'
                url='http://dragoniter.marianazambarda.com'
                image={dragoniter}
                gitHubURL='https://github.com/marizambarda/dragoniter'
              />

              <Project
                title='Santa Veículos'
                technologies={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                description='Web site desenvolvido para revenda de veículos de Santa Cruz do Sul. Como freelancer, trabalhei com a GHS Web no desenvolvimento do layout responsivo utilizando HTML, CSS e JavaScript.'
                url='https://www.santaveiculos.com.br/'
                image={santaVeiculos}
              />

              <Project
                title='Tênis Clube Santa Cruz'
                technologies={['WordPress', 'HTML', 'CSS']}
                description='Portal desenvolvido com Wordpress para clube de Santa Cruz do Sul, auxiliei no desenvolvimento do tema personalizado utilizando Bootstrap e jQuery, e também no desenvolvimento de tipos de páginas e tipos de posts customizados.'
                url='http://www.tenisclubesantacruz.com/'
                image={tenisClubeImage}
              />

              <Project
                title='PC Veículos'
                technologies={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                description='Web site desenvolvido para uma revenda de veículos de Santa Cruz do Sul em parceria com a GHS Web. Nesse projeto foram aplicados conhecimentos em HTML, CSS e JavaScript, além de conexão com o banco de dados utilizando PHP e MySQL.'
                url='http://www.pcveiculosrs.com.br/'
                image={pcVeiculos}
              />

              <Project
                title='NUMA Laudos'
                technologies={['JavaScript', 'HTML', 'CSS', 'Bootstrap']}
                description='Web site desenvolvido em parceria com a GHS Web. Trabalhei no frontend aplicando conhecimentos em HTML, CSS e JavaScript, com layout responsivo.'
                url='https://www.numalaudos.com.br/'
                image={numaLaudos}
              />

              <Project
                title='Jogo da Velha'
                technologies={['React.js', 'HTML', 'Sass']}
                description='Jogo da velha, desenvolvido em React.js, HTML e Sass, para aprimorar conhecimentos em lógica, grid e responsivo. Foi utilizado o framework Bootstrap. Possui verificação de ganhador, e somatória de pontos e empates.
								'
                url='https://jogodavelha.marianazambarda.com/'
                image={jogoDaVelha}
                gitHubURL='https://github.com/marizambarda/jogo-da-velha'
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

function Project ({ image, title, technologies, description, url, gitHubURL }) {
  const imageColumn = (
    <Col lg={5}>
      <Image className='project-image' src={image} />
    </Col>
  )

  const contentColumn = (
    <Col lg={7}>
      <div>
        <h3>{title}</h3>
        <div>
          {technologies.map(technology => (
            <div key={technology} className='badge-technologies'>
              {technology}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
      <div className='buttons'>
        <Button href={url} variant='outline-primary' target='_blank'>
          Ver Site
        </Button>{' '}
        {gitHubURL && (
          <Button href={gitHubURL} variant='outline-primary' target='_blank'>
            Ver no GitHub
          </Button>
        )}
      </div>
    </Col>
  )

  return (
    <Row>
      {imageColumn}
      {contentColumn}
    </Row>
  )
}

export default ProjectsPage
