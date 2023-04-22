import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/tiago.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         
          <Col style={{marginTop: "55px"}} size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/carlos-tiago-silva-costa-458b16224/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://www.facebook.com/tiago.silva.5015" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://www.instagram.com/carlos_tiago/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram" /></a>
            </div>
            <p>Obrigado por sua atenção</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
