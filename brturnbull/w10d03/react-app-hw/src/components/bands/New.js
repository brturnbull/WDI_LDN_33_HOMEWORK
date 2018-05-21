import React from 'react';
import BandForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class BandsNew extends React.Component {
  state = {
    errors: {}
  };

  handleChange = ({ target: { name, value }}) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/bands', this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/bands'))
      .catch(err => this.setState({ errors: err.response.data.errors }));

  }

  render(){
    return <BandForm
      data={this.state}
      handleChange={ this.handleChange }
      handleSubmit={ this.handleSubmit }
      errors={this.state.errors}
    />;
  }

}

export default BandsNew;
