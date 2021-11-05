import React, { useState, useContext } from 'react';
import './Toolbar.css';
import { AddSquare } from 'iconsax-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { FriendContext } from '../../contexts/FriendContext';
import Popup from 'react-popup';

const Toolbar = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const { original, createFriend } = useContext(FriendContext);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            if(original.find(friend => friend.name.toLowerCase() === event.target[0].value.toLowerCase())){
                setShow(false);
                Popup.alert('Friend already exist');
            } else {
                createFriend(event.target[0].value);
                setShow(false);
            }
        }
        setValidated(true);
    };

    return <React.Fragment>
            <div className="header">
                <span className="header-text">Friends List</span>
                <div className="flex-grow"></div>
                <div className="header-logo">
                    <AddSquare color="#eee" variant="Linear" size={28} onClick={() => setShow(true)}/>
                </div>
            </div>
            <Modal show={show} onHide={() => setShow(false)}>
                <ModalHeader closeButton>
                    <ModalTitle>Create Friend</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form id="create-user" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-1">
                            <Form.Group controlId="fullName">
                                <Form.Control
                                    required
                                    type="text"
                                    defaultValue="Akash Singh"
                                    placeholder="Enter Full Name"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Friend Name
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button form="create-user" type="submit" variant="dark" size="sm">Create</Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
}

Toolbar.propTypes = {};

export default Toolbar;