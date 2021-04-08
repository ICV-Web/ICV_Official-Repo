import React from 'react'
import { Modal } from 'react-bootstrap';

const ReadMoreText = ({ text, length = 80 }) => {
  //const [showLess, setShowLess] = React.useState(true);

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <div>
      <p style={{marginBottom:0}}
        dangerouslySetInnerHTML={{
          __html: `${text.slice(0, length)}...`,
        }}
      ></p>
      <a 
        onClick={() => setShow(true)}
      >
        &nbsp;View More
      </a>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>{text}</Modal.Body>
      </Modal>
    </div>
  );
};

  export default ReadMoreText