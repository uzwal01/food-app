import React from "react";
import { Card, Col } from "react-bootstrap"; // Ensure these are imported correctly
import { Link } from "react-router-dom";

const BlogList = ({ title, paragraph, image, URL }) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
                <Card.Img variant="top" src={image} />
              </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>
          <Link to={URL}>
            <div className="btn btn_red">Read More</div> {/* Add text to the button */}
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BlogList;
