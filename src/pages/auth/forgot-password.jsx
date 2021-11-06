import React, { Component } from 'react'
import Styles from './auth.module.css'
import {
  Button,
  Col,
  Container,
  Form,
  // InputGroup,
  Row
} from 'react-bootstrap'
import {
  // Eye,
  // EyeClosed,
  // FacebookLogo,
  // GoogleLogo,
} from 'phosphor-react'

class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blindPassword: true,
    }
  }

  render() {
    // const { blindPassword } = this.state
    
    return(
      <Container fluid className={ Styles.container }>
        <Row>
          <Col sm={ 8 } className={ Styles.left }>
            <div className={ Styles.brand }>
              txscp.
            </div>
            <div className={ Styles.tagL }>
              Let's Reset Your Password
            </div>
            <div className={ Styles.tagM}>
              We'll send you 4 digits unique code to verify
              it's really you, then we can change your password.
            </div>
          </Col>
          <Col className={ Styles.right }>
            <div className={ Styles.brandMobile }>
              <div className={ Styles.brand }>
                txscp.
              </div>
            </div>
            <div className={ Styles.header }>
              Fill your email correctly
            </div>
            <Form className={ Styles.form }>
              <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className={ Styles.formcontrol }
                  placeholder='write your email'
                />
              </Form.Group>

              {/* <Form.Group className='mb-3'>
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
              </Form.Group> */}

              <Button variant='primary' className={ Styles.buttonL }>
                Send verification email
              </Button>
              
              <div style={{
                textAlign: 'center',
                fontSize: 'smaller'
              }}>
                Already have an OTP ?
                <span
                  style={{
                    cursor: 'pointer',
                    marginLeft: '5px',
                    color: '#5f2eea'
                  }
                }>
                  Click here
                </span>
              </div>

            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default ForgotPassword
