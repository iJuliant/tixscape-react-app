import Avatar from '../../assets/avatar.png'
import React, { Component } from 'react'
import Styles from './side-profile.module.css'
import {
  Container,
  Image,
  ProgressBar,
} from 'react-bootstrap'

class SideProfile extends Component {
  render() {

    return(
      <Container fluid className={ Styles.container }>
        <div>
          <div style={{ textAlign: 'start' }}>
            Info
          </div>
          <div className={ Styles.frame }>
            <Image
              src={ Avatar }
              className={ Styles.avatar }
            />
          </div>
          <div id={ Styles.name }>
            Yeji Juliant
          </div>
          <div id={ Styles.level }>
            moviegoer
          </div>
          <hr />
          <div className={ Styles.sectionTitle }>
            Loyalty Points
          </div>
          <div id={ Styles.card }>
            <div>moviegoer</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div id={ Styles.point }>
                320
              </div>
              <div>points</div>
            </div>
          </div>
          <div id={ Styles.pointsRemaining }>
            100 points to become a master
          </div>
          <div>
            <ProgressBar 
              now={ 80 }
              className={ Styles.progress }
            />
          </div>
        </div>
      </Container>
    )
  }
}

export default SideProfile
