import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import "../components/modal.css"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function LoginModal({onSubmit, onChange, errors, successMessage, user, show, hide, clear}) {


    
return(
    <Modal show = {show} onHide = {clear} id="loginModal" animation={true}>
    <Modal.Header closeButton className="modal-header modalHeader"> 
        <div className="modalText">Login</div>
        {/* <h4><span className="glyphicon glyphicon-lock"></span> Login</h4> */}
    </Modal.Header>
    <Modal.Body className = "modal-body">
        <Form onSubmit = {onSubmit}>
            <Form.Group>
                <Form.Label><span className="glyphicon glyphicon-user"></span> Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" value={user.email} onChange={onChange}/>
            </Form.Group>
            <Form.Group>
                <Form.Label><span className="glyphicon glyphicon-eye-open"></span> Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Enter password" value={user.password} onChange={onChange} />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
                <Form.Check type="checkbox" name="remember" label="Remember me" />
            </Form.Group>
            {errors.summary && <p className="error-message text-danger float-left">{errors.summary}</p>}
            {successMessage && <p className="success-message text-success float-left">{successMessage}</p>}

            <Button type="submit" className="btn btn-warning btn-block" onClick = {hide}><span className="glyphicon glyphicon-off"></span> Login</Button>

        </Form>
    </Modal.Body>
    <Modal.Footer className = "modal-footer">
        <Button type="submit" className="btn btn-danger btn-default pull-left" onClick = {clear}><span className="glyphicon glyphicon-remove"></span> Cancel</Button>
        <p className = "float-right">Not a member? <span>Sign Up</span></p>
        <p className = "float-right">Forgot <span>Password?</span></p>
    </Modal.Footer>
    </Modal>
    )
}

export default LoginModal;