import React from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <footer>
      <Card className="sticky-bottom text-center" bg="custom-color-700-lght">
        <Card.Body>
          <Card.Text>
            Built by <a href='https://github.com/RosemaryJF' target='blank'>RosemaryJF</a>
          </Card.Text>
        </Card.Body>
      </Card>
    </footer>
  );
}

export default Footer;