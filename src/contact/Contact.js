import React, { Component } from 'react'
import axios from 'axios'
import ContactView from './ContactView'
import config from "react-global-configuration";

export class Contact extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      auth: props.history.location.state.auth,
      contacts: [],
      totalContact: 170,
      user: {},
    };
  }
  
  componentDidMount() {
    let getPeopleListUrl = `${config.get('middleware.host')}${config.get('middleware.apiPath.getPeopleList')}`
    axios.get(getPeopleListUrl,
      {
        headers: { authorization: `Bearer ${this.state.auth.middlewareAccessToken}` }
      })
      .then((result) => {
        let contacts = result.data;
        let user = {
          image: this.state.auth.image,
          name: this.state.auth.name,
          email: this.state.auth.email
        }
        this.setState({contacts, user});
      });
  }
  
  render() {
    const props = Object.assign({}, this.props, {
      contacts: this.state.contacts,
      totalContact: this.state.totalContact,
      user: this.state.user
    });
    return (
      <div className="container">
          <ContactView {...props} />
      </div>
    )
  }
}

export default Contact
