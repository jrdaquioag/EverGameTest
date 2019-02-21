import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
import "../components/modal.css"


function SignUpModal({ onSubmit, onChange, errors, user, show, hide, clear }) {

  return (
    <Modal show={show} onHide={clear} id="signUpModal" animation={true}>
      <Modal.Header closeButton className="modal-header modalHeader">
        <div className="modalText">Register</div> 
      </Modal.Header>
      <Modal.Body className="modal-body">
        <Form onSubmit={onSubmit} >
          <Form.Group>
            <Form.Label><span className="glyphicon glyphicon-user"></span> Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" value={user.email} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label><span className="glyphicon glyphicon-eye-open"></span> Username</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter username" value={user.name} onChange={onChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label><span className="glyphicon glyphicon-eye-open"></span> Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Enter password" value={user.password} onChange={onChange} />
          </Form.Group>
          {errors.summary && <p className="error-message text-danger float-left">{errors.summary}</p>}
          <Button type="submit" className="btn btn-warning btn-block"><span className="glyphicon glyphicon-off"></span> Register</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer">
        <Button type="submit" className="btn btn-danger btn-default pull-left" onClick={clear}><span className="glyphicon glyphicon-remove"></span> Cancel</Button>
        <p className="float-right">Already have an account? <span>Log in</span></p>
      </Modal.Footer>
    </Modal>
  )
}

export default SignUpModal;