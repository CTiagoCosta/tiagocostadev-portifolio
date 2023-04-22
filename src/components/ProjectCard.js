import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
   
   return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
        <a href={url} target="_blank" style={{textDecoration: "none", color: 'white'}} rel="noreferrer"><h4>{title}</h4></a>
        <a href={url} target="_blank" style={{textDecoration: "none", color: 'white'}} rel="noreferrer">{description}</a>
        </div>
      </div>
    </Col>
  )
}
