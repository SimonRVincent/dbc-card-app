import React, { useState, useEffect } from "react";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logoImage from './images/corp_logo.png';


function BusinessCard() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    name: "Name",
    position: "Position",
    email: "Email",
    phone: "Phone #",
    linkedIn: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    aboutTitle: "About Me",
    aboutBody:
      "This is some text about the person or additional details they wish to include on their digital business card.",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get("name");
    const position = queryParams.get("position");
    const email = queryParams.get("email");
    const phone = queryParams.get("phone");
    const linkedIn = queryParams.get("linkedIn");
    const github = queryParams.get("github");
    const twitter = queryParams.get("twitter");
    const aboutTitle = queryParams.get("aboutTitle");
    const aboutBody = queryParams.get("aboutBody");

    if (name || position || email || phone) {
      setUserData((prevData) => ({
        ...prevData,
        name: name || prevData.name,
        position: position || prevData.position,
        email: email || prevData.email,
        phone: phone || prevData.phone,
        linkedIn: linkedIn || prevData.linkedIn,
        github: github || prevData.github,
        twitter: twitter || prevData.twitter,
        aboutTitle: aboutTitle || prevData.aboutTitle,
        aboutBody: aboutBody || prevData.aboutBody,
      }));
    }
  }, []);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Determine the image path based on the name
  const profileImagePath = userData.name.includes("Simon")
    ? "path_to_simon_image.jpg"
    : userData.name.includes("Katie")
    ? "path_to_katie_image.jpg"
    : "default_profile_image.jpg"; // Default path

  return (
    <Container className="phone-container d-flex flex-column justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} className="d-flex justify-content-center">
          <Image src={profileImagePath} roundedCircle />
        </Col>
      </Row>

      <Row className="w-100 mt-3">
        <Col xs={12} className="text-center">
          <h3 id="name">{userData.name}</h3>
          <p id="position">{userData.position}</p>
          <p id="email">{`${userData.email}`}</p>
          <p id="phone">{`${userData.phone}`}</p>
        </Col>
      </Row>

      <Row className="w-100 mt-3">
        <Col xs={12} className="text-center">
          <Image
            className="logo-image"
            src={logoImage}
            alt="Company Logo"
          />
        </Col>
      </Row>

      <Row className="w-100 mt-3 mb-3">
        <Col xs={12} className="d-flex justify-content-center">
          <Button variant="primary" onClick={handleShow}>
            Social Links
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Social Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            id="linkedIn"
            variant="link"
            href="{userData.linkedIn}"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button
            id="github"
            variant="link"
            href="{userData.github}"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            id="twitter"
            variant="link"
            href="{userData.twitter}"
            target="_blank"
          >
            Twitter
          </Button>
          {/* Add more social links as needed */}
        </Modal.Body>
      </Modal>

      <Row className="w-100">
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title id="aboutTitle">{userData.aboutTitle}</Card.Title>
              <Card.Text id="aboutBody">{userData.aboutBody}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BusinessCard;
