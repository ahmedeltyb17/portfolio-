import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, documentation, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.description} loading="lazy" />
                <div className="content">
                  <h5>{data.description}</h5>
                </div>
              </div>
            );
          })}
        </div>
        <Row className="mb-4 mt-2 pt-md-2">
          <Col lg="8">
            <h2 className="section_title mb-3">Certificates</h2>
            <hr className="t_border my-3 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 cert_items">
          {documentation.map((item, i) => {
            return (
              <div key={i} className="cert_item">
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="cert_content">
                  <h5>{item.title}</h5>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
