import React, { Component } from 'react'
import Styles from './auth.module.css'
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row
} from 'react-bootstrap'
import {
  Eye,
  EyeClosed,
  FacebookLogo,
  GoogleLogo,
} from 'phosphor-react'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blindPassword: true,
    }
  }

  render() {
    const { blindPassword } = this.state
    
    return(
      <Container fluid className={ Styles.container }>
        <Row>
          <Col sm={ 8 } className={ Styles.left }>
            <div className={ Styles.brand }>
              txscp.
            </div>
            <div className={ Styles.tagL }>
              Let's Build Your Account
            </div>
            <div className={ Styles.tagM}>
              To be a loyal moviegoer and access all of our features,
              your details are required.
            </div>
          </Col>
          <Col className={ Styles.right }>
            <div className={ Styles.brandMobile }>
              <div className={ Styles.brand }>
                txscp.
              </div>
            </div>
            <div className={ Styles.header }>
              Fill your additional details
            </div>
            <Form className={ Styles.form }>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className={ Styles.formcontrol }
                  placeholder='write your email'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  className={ Styles.formcontrol }
                  placeholder='write your name'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  className={ Styles.formcontrol }
                  placeholder='write your phone number'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type='password'
                    className={ Styles.formcontrol }
                    placeholder='write your password'
                    style={{ borderRight: 'none' }}
                  />                  
                <InputGroup.Text
                  style={{ cursor: 'pointer' }}
                  className={ Styles.formcontrol }>
                  { blindPassword 
                    ? <Eye size={ 20 } />
                    : <EyeClosed size={ 20 } />
                  }
                </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Form.Check 
                type='checkbox' 
                label='I agree to terms and conditions' 
                required
              />

              <Button variant='primary' className={ Styles.buttonL }>
                Join for free now
              </Button>
              
              <div style={{
                textAlign: 'center',
                fontSize: 'smaller'
              }}>
                Already have an account ?
                <span
                  style={{
                    cursor: 'pointer',
                    marginLeft: '5px',
                    color: '#5f2eea'
                  }
                }>
                  Login now
                </span>
              </div>

              <Row className={ Styles.divider }>
                <Col className={ Styles.line }><hr /></Col>
                <Col sm={ 1 } style={{
                  paddingTop: '5px',
                  fontSize: 'smaller',
                  letterSpacing: '4px'
                }}>or</Col>
                <Col className={ Styles.line }><hr /></Col>
              </Row>

              <Row>
                <Col>
                  <div className={ Styles.socialButton }>
                    <GoogleLogo size={ 20 } style={{ marginRight: '10px' }} />
                    Google
                  </div>
                </Col>
                <Col sm={ 1 } style={{ margin: '10px' }}>{' '}</Col>
                <Col>
                  <div className={ Styles.socialButton }>
                    <FacebookLogo size={ 20 } style={{ marginRight: '10px' }} />
                    Facebook
                  </div>
                </Col>
              </Row>

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Register
