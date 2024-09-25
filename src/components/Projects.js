import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ContactCard } from "./ContactCard";
import projImg1 from "../assets/img/projgstack.jpg";
import projImg2 from "../assets/img/projshoes.jpg";
import projImg3 from "../assets/img/projetosistemachamado.jpg";
import projImg4 from "../assets/img/projtecnorte.jpg";
import projImg5 from "../assets/img/projdpu.jpg";
import projImg6 from "../assets/img/projcovid.jpg";
import projImg7 from "../assets/img/projsaaf.png";
import projImg8 from "../assets/img/projMemorial.png";
import redegit from "../assets/img/github.png";
import redelinkedin from "../assets/img/linkedin.png";
import redegmail from "../assets/img/gmail.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import photo from "../assets/img/tiagofoto.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      
      description: "O gStack é uma plataforma de newsletter criada para produtores de conteúdo.",
      imgUrl: projImg1,
      url: 'https://gstack.news/',
      title: 'Projeto GsTack',
      
    },
    {
      description: "Plataforma de vendas de calçados online.",
      imgUrl: projImg2,
      url: 'https://github.com/CTiagoCosta/hook-carrinho-de-compras',
      title: 'Projeto RocketShoes'
    },
    {
      description: "Sistema de Chamados para atendimento técnico.",
      imgUrl: projImg3,
      url: 'https://github.com/CTiagoCosta/hook-carrinho-de-compras',
      title: 'Projeto Chamados'
    },
    {
      description: "Desenvolvimento de Site para a empresa.",
      imgUrl: projImg4,
      url: 'https://github.com/CTiagoCosta/projeto-interface-netflix',
      title: 'Site TecNorte'
    },
    {
      description: "Desenvolvimento de um sistema informal para o Defensor no MS.",
      imgUrl: projImg5,
      url: 'https://github.com/CTiagoCosta/projeto-DPU',
      title: 'Projeto DPU'
    },
    {
      description: "Projeto de mapeamento dos casos de Covid pelo mundo.",
      imgUrl: projImg6,
      url: 'https://github.com/CTiagoCosta/projeto-Covid',
      title: 'Projeto Covid'
    },
    {
      description: "Projeto de um sistema de afastamentos para servidores.",
      imgUrl: projImg7,
      url: 'https://github.com/CTiagoCosta/projeto-Covid',
      title: 'Projeto SAAF'
    },
    {
      description: "Projeto para homenagear seus familiares.",
      imgUrl: projImg8,
      url: 'https://israelandreo.netlify.app/',
      title: 'Projeto Memorial'
    },
  ];

  const contacts = [
    {
      
      description: "Perfil do GitHub.",
      imgUrl: redegit,
      url: 'https://github.com/CTiagoCosta',
      title: 'GitHub',
      
    },
    {
      
      description: "Perfil do LinkedIn",
      imgUrl: redelinkedin,
      url: 'https://www.linkedin.com/in/carlos-tiago-silva-costa-458b16224/',
      title: 'LinkedIn',
      
    },
    {
      
      description: "Contato do Gmail",
      imgUrl: redegmail,
      url: 'https://mail.google.com/mail/u/0/#inbox',
      title: 'Gmail',
      
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos | Sobre | Contatos Profissionais</h2>
                <p>Aqui um pouco dos projetos , sobre mim e alguns contatos.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos</Nav.Link>
                    </Nav.Item>
                     <Nav.Item>
                      <Nav.Link eventKey="second">Sobre o Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Profissional</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "20px"}}>
                           <img style={{maxHeight: "480px", maxWidth:"360px", borderRadius: "15px", margin: "0px 25px 20px 0px"}} src={photo} alt="Tiago Costa"/> <br></br>
                            
                              Formado em Técnico em informática pela Escola Técnica Estadual do Pará atuei na área por mais de 10 anos em várias empresas como técnico em informática e na minha última atuação fiz parte da equipe de suporte técnico da Secretaria de Estado de Educação do Pará, onde adquiri grande experiência em sistemas operacionais Windows e Linux, atuando de forma exemplar e sendo convidado pela Diretora do Departamento a compor a equipe de desenvolvimento.
                              Formado em Sistemas de Informação pelo Instituto de Estudos Superiores da Amazônia atuei como desenvolvedor Nível 1 e 2 pela empresa Montreal Informática na Secretaria de Estado de Educação no setor Ditec com desenvolvimento em Java, SQL, JavaScript e PHP (Zend2), atuei em vários projetos de desenvolvimento pela secretaria, adquiri habilidades em soluções para serviços públicos, participei de eventos pela instituição, como por exemplo: Oficineiro do Seminário Políticas e Estratégias de Educação Ambiental para Redução de Impactos na Produção de Resíduos Sólidos.
                              Atuo como desenvolvedor em projetos com JavaScript, React, Angular, PHP com ScriptCase e TypeScript como PJ e Líder técnico da Inovvati Tecnologia no projeto do Detran - MS.
                              <br></br>Gosto de novos desafios e estou sempre disposto a aprender e compartilhar conhecimento.</p>    
                            
                        <div style={{justifyContent: "center", display: "flex"}}>
                        <a href="https://drive.google.com/file/d/1x5C5NQF7LSfsyRh71R9TKo-XMPE_0qhi/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
                          <button style={
                                {
                                  color: "#FFF",
                                  background: "linear-gradient(90.21deg, rgba(1700, 54, 124, 0.5) -20.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                                  width: "350px",
                                  height: "50px",
                                  borderRadius: "25px"
                                }
                            }
                          >Currículo
                          </button> 
                        </a>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row  style={{justifyContent: "center"}}>
                        {
                          contacts.map((contact, index) => {
                            return (
                              <ContactCard
                                key={index}
                                {...contact}
                                />
                            )
                          })
                        }
                      </Row>
                     </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
