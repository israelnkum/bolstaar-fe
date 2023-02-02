import React from 'react'
import './App.css'
import { PublicRoutes } from './components/routes/public-routes'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function App ({ authenticated }) {
  return (
        <div>
            <PublicRoutes/>
        </div>
  )
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.loginReducer.authenticated,
    authUser: state.loginReducer.authUser
  }
}

export default connect(mapStateToProps)(App)
