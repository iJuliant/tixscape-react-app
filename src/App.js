import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './redux/store'
// import PrivateRoute from './helpers/private-route'
import PublicRoute from './helpers/public-route'

// pages
import ForgotPassword from './pages/auth/forgot-password'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Home from './pages/home/home'
import Profile from './pages/app/profile/profile'

class App extends Component {
  render() {

    return(
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <Router>
            <Switch>

              <PublicRoute
                path='/'
                exact component={ Home }
              />
              
              <PublicRoute
                path='/register'
                exact component={ Register }
              />
              
              <PublicRoute
                path='/login'
                exact component={ Login }
              />

              <PublicRoute
                path='/forgot-password'
                exact component={ ForgotPassword }
              />
              
              <PublicRoute
                path='/profile'
                exact component={ Profile }
              />

            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
