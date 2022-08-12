import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import TopHeader from './Header'

import db from "./firebase"
import { addDoc, collection } from 'firebase/firestore'

import { Navigate } from 'react-router-dom';




class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      redirect: false
    };
  }

  registerNewUser  = async () => {
    const collectionRef = collection(db, 'users');
    const payload = {   firstName: this.state.first_name,
    lastName: this.state.last_name,
    email: this.state.email,
    password: this.state.password
  }


    await addDoc(collectionRef, payload);

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      redirect: true
    });
 
    console.log('Successfully Registered User');


  }


  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {

    if (this.state.redirect) {
      return <Navigate to='/login'/>;
    }

    return (
      <div>
        <TopHeader />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Sign up for an account
            </Header>
            <Form size='large'>
              <Segment stacked>
                <Form.Input placeholder='First Name' name="first_name" onChange={this.updateInput} value={this.state.first_name}/>
                <Form.Input placeholder='Last Name' name="last_name" onChange={this.updateInput} value={this.state.last_name}/>
                <Form.Input placeholder='E-mail address' name="email" onChange={this.updateInput} value={this.state.email}/>
                <Form.Input placeholder='Password' name="password" type='password' onChange={this.updateInput} value={this.state.password}/>


                <Button color='teal' fluid size='large' onClick={this.registerNewUser}>
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Message>
              Already got an account? <a href='/login'>Log in here</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}
export default Signup