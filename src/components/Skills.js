import skill1 from "../assets/img/react2.png";
import skill2 from "../assets/img/php2.png";
import skill3 from "../assets/img/react2.png";
import skill4 from "../assets/img/nodejs2.png";
import skill5 from "../assets/img/javascript.png";
import skill6 from "../assets/img/mysql.png";
import skill7 from "../assets/img/mongodb.png";
import skill8 from "../assets/img/ts2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Sobre as Skills</h2>
                        <p>Eu aprendi diferentes linguagens de programação até agora e no que diz respeito às minhas habilidades.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={skill1} alt="React" />
                                <h5>Desenvolvedor ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={skill8} alt="TS" />
                                <h5>Desenvolvedor TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="NodeJS" />
                                <h5>Desenvolvedor NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="React Native" />
                                <h5>Desenvolvedor React Native</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="JS" />
                                <h5>Desenvolvedor JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="PHP" />
                                <h5>Desenvolvedor PHP</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="MongoDB" />
                                <h5>Desenvolvedor MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="MySQL" />
                                <h5>Desenvolvedor MySQL</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
