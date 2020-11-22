import React, { Component } from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import config from 'react-global-configuration';

export class GoogleSiginIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
    
    this.processApiResponse = this.processApiResponse.bind(this);
  }
  
  processApiResponse(res) {
    
    const oAuthResponse = {
      name: res.profileObj ? res.profileObj.name : '',
      email: res.profileObj ? res.profileObj.email : '',
      token: res? res.googleId: '',
      image: res.profileObj ? res.profileObj.imageUrl: '',
      ProviderId: 'Google',
      accessToken: res.accessToken,
    };
    
    
    let getAccessTokenUrl = `${config.get('middleware.host')}${config.get('middleware.apiPath.getAccessToken')}`
    axios.post(getAccessTokenUrl, oAuthResponse)
      .then((result) => {
        oAuthResponse.middlewareAccessToken = result.data.accessToken;
        
        this.props.history.push({
          pathname:'/Contact',
          state: {auth: oAuthResponse}
        });
        
      }).catch((error) => {
        alert('Unable to get accessToken from social app');
    });
    
  };
  
  render() {
    const responseGoogle = (response) => {
      this.processApiResponse(response);
    }
    
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">
            Login With Google
          </div>
        </div>
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="704849833815-3kecti5up52htm2748npm7f9b92g0jhv.apps.googleusercontent.com"
                buttonText="Login with Google"
                accessType="offline"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              >
              </GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSiginIn
