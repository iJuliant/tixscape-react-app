import React, { Component } from 'react'
import Styles from './auth.module.css'
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap'
import {
  FacebookLogo,
  GoogleLogo,
} from 'phosphor-react'

class Login extends Component {
  render() {

    return(
      <Container fluid className={ Styles.container }>
        <Row>
          <Col sm={ 8 } className={ Styles.left }>
            <div className={ Styles.brandLogin }>
              txscp
            </div>
            <div className={ Styles.tagline }>
              wait, watch, wow
            </div>
          </Col>
          <Col className={ Styles.right }>
            <div className={ Styles.brandMobile }>
              <div className={ Styles.brand }>
                txscp.
              </div>
            </div>
            <div className={ Styles.headerLogin }>
              Login
            </div>
            <div className={ Styles.textDisabled }>
              Login using your data that you entered during
              your registration.
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  className={ Styles.formcontrol }
                  placeholder='write your password'
                />
              </Form.Group>

              <Button variant='primary' className={ Styles.buttonL }>
                Login
              </Button>
              
              <div style={{
                textAlign: 'center',
                fontSize: 'smaller'
              }}>
                Forget your password ?
                <span style={{
                  cursor: 'pointer',
                  marginLeft: '5px',
                  color: '#5f2eea'
                }}>
                  Reset now
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

export default Login
