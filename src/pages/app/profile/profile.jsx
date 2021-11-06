import React, { Component } from 'react'
import Styles from './profile.module.css'
import SideProfile from '../../../components/side-profile/side-profile'
import Topnav from '../../../components/topnav/topnav'
import {
  Col,
  Container,
  Row
} from 'react-bootstrap'

class Profile extends Component {
  render() {

    return(
      <>
        <Topnav />
        <Container fluid className={ Styles.container }>
          <Row>
            <Col sm={ 3 } className={ Styles.sideProfile }>
              <SideProfile />
            </Col>
            <Col>2</Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Profile
