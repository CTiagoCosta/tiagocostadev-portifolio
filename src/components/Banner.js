import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/developer-dark.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Desenvolvedor Web", "Desenvolvedor Full Stalk", "Desenvolvedor Mobile" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bem-vindo ao meu Portfólio</span>
                <h1>{`Olá! Eu sou Tiago Costa`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Desenvolvedor Web", "Desenvolvedor Full Stalk", "Desenvolvedor Mobile" ]'><span className="wrap">{text}</span></span></h1>
                <p>Meu nome é Carlos Tiago Silva Cotsa, tenho 36 anos e sou um desenvolvedor web front-end. Posso tornar o site mais interativo com animação na webe com muitos recursos.
                Formado no Instituto de Ensinos Superiores da Amazônia. Trabalhei com várias linguagens de programação desde o início da carreira como Delphi 3, JAVA, JavaScript, ReactJS, PHP dentre outras.
                Agora atuo como Desenvolvedor Pleno na Empresa PSG Tecnologia, onde trabalho na equipe de Front-End e desenvolvo em ReactJS, PHP com ScriptCase, Java, com alguns banco de dados como MySql e SQL Server, já atuei como
                PJ em vários projetos em diversas áreas.
        </p>
                  <button onClick={() => console.log('connect')}>Vamos nos conectar<ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
