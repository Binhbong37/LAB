import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Jumbotron, NavItem, Nav, Collapse, NavbarToggler, Button, Modal,
    ModalBody, ModalHeader, FormGroup, Label, Input, Form } from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen:false
        }
    }
    // Cái này là để đóng mở MENU ở đầu mục
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    // DƯỚI NÀY DÙNG ĐỂ ĐÓNG MỞ MODAL
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    // Nut LOGIN
    handleSubmit = (e) => {
        e.preventDefault()
        this.toggleModal();
        alert("UserName: " + this.username.value + "Pass: " + this.password.value + "Check: " + this.remember.checked)
    }
  render() {
    return(
    <React.Fragment>
      <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href="/">
                <img src="assets/images/logo.png" height="30" width='41'
                alt="Ris..."/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav Navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg"></span> About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"></span> Menu
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address fa-lg"></span> Contact Us
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span> Login
                        </Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader>Login</ModalHeader>
           <ModalBody>
               <Form onSubmit={this.handleSubmit}>
                   <FormGroup row>
                       <Label htmlFor="username">User Name</Label>
                       <Input type="text" id="username" name='username'
                       innerRef={(input) => this.username = input}/>
                   </FormGroup>
                   <FormGroup row>
                       <Label htmlFor="password">User Name</Label>
                       <Input type="password" id="password" name='password'
                       innerRef={(input) => this.password = input}/>
                   </FormGroup>
                   <FormGroup check>
                       <Label check>
                           <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
                           Remember me
                       </Label>
                   </FormGroup>
                   <Button type="submit" value="submit" className="bg-primary">Login</Button>
               </Form>
           </ModalBody>
       </Modal>
    </React.Fragment>
    );
  }
}

export default Header;