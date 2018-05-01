import React, { Component } from 'react';
import makeToken from './jwt';

const domains = [
  'localhost',
  'yourdomain.com',
  'www.yourdomain.com',
  'dev',
  'local',
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      roles: '["role1", "role2", "role3"]',
      domain: domains[0],
      jwt: '',
      decoded: {},
      impUserId: '',
      impRoles: '["role1", "role2", "role3"]'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      jwt: ''
    });
  }

  handleSubmit(event) {
    const { jwt, decoded } = makeToken(this.state);///`token... UserID: ${this.state.userId}\n Roles: ${this.state.roles}`;
    this.setState({ jwt, decoded });
    this.setCookie(jwt);
    event.preventDefault();
  }

  setCookie(jwt) {
    const url = this.state.domain.indexOf('.') === 0
      ? `https://${this.state.domain.substr(1)}`
      : `https://${this.state.domain}`
    const details = {
      url,
      name: 'jwt',
      value: jwt,
      domain: this.state.domain,
      path: '/',
    };
    console.log('Setting cookie: ', details);
    try {
      window.chrome.cookies.set(details);
    } catch (ex) {
      console.error('Error setting cookie: ', ex.message);
    }
  };

  renderDomains() {
    const options = [];
    for(let d=0; d < domains.length; d++) {
      options.push(<option value={domains[d]} key={d}>{domains[d]}</option>);
    }
    return <select
      style={{marginLeft: '10px', width: '287px' }}
      name="domain" onChange={this.handleInputChange}
    >{ options }</select>;
  }

  render() {
    const output = this.state.jwt === ''
      ? null
      : <div>
        <h2>JWT</h2>
        <textarea disabled style={{height: '100px', width: '280px' }} value={ this.state.jwt }/>
        <div>Cookie set on {this.state.domain}</div>
        <h2>Decoded</h2>
        <textarea disabled style={{height: '100px', width: '280px' }} value={ JSON.stringify(this.state.decoded) }/>
      </div>;
    return (
      <div>
        <form style={{ textAlign: 'right', marginRight: '10px' }} onSubmit={this.handleSubmit}>
          <div style={{ marginTop: '10px' }}>
            <label>
              UserID:
              <input
                style={{marginLeft: '10px', width: '280px' }} type="text" name="userId"
                value={this.state.userId} onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>
              Roles:
              <input
                style={{marginLeft: '10px', width: '280px' }} type="text" name="roles"
                value={this.state.roles} onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>
              Save Cookie to Domain:
              { this.renderDomains() }
            </label>
          </div>
          <input style={{ marginTop: '10px' }} type="submit" value="Create Token" />
        </form>

        {output}
      </div>
    );
  }
}

export default Form;
