import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ContactCard } from "./ContactCard";
import projImg1 from "../assets/img/projgstack.jpg";
import projImg2 from "../assets/img/projshoes.jpg";
import projImg3 from "../assets/img/projetosistemachamado.jpg";
import projImg4 from "../assets/img/projtecnorte.jpg";
import projImg5 from "../assets/img/projdpu.jpg";
import projImg6 from "../assets/img/projcovid.jpg";
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
                      <Nav.Link eventKey="third">Contatos Profissionais</Nav.Link>
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
                        <p style={{display: "flex", textAlign: "justify"}}>
                           <img style={{maxHeight: "280px", margin: "0px 25px 0px 0px"}} src={photo} alt="MySQL"/>
                             Meu nome é Carlos Tiago Silva Cotsa, tenho 36 anos e sou um desenvolvedor web front-end. Posso tornar o site mais interativo com animação na webe com muitos recursos.
                            Formado no Instituto de Ensinos Superiores da Amazônia. Trabalhei com várias linguagens de programação desde o início da carreira como Delphi 3, JAVA, JavaScript, ReactJS, PHP dentre outras.
                            Agora atuo como Desenvolvedor Pleno na Empresa PSG Tecnologia, onde trabalho na equipe de Front-End e desenvolvo em ReactJS, PHP com ScriptCase, Java, com alguns banco de dados como MySql e SQL Server, já atuei como
                            PJ em vários projetos em diversas áreas.</p>  
                      <div style={{justifyContent: "center", display: "flex"}}>
                        <a href="https://drive.google.com/file/d/1rr2jF8VfAQ6NEUgQznPK9Yr-Ef0CeXFo/view?usp=share_link" target="_blank" rel="noopener noreferrer" download>
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
