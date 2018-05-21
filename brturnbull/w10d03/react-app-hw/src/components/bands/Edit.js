import React from 'react';
import BandForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class BandsEdit extends React.Component {

  state = {
    errors: {}
  }

  // when the component has mounted, make a request to get the info from the band
  // it needs this to pre fill the form
  componentDidMount(){
    axios.get(`/api/bands/${this.props.match.params.id}`)
      .then(res => this.setState(res.data, () => console.log(this.state)));
  }

  handleChange = ({ target: { name, value } }) => {
    const errors = {...this.state.errors, [name]: ''};
    this.setState({ errors, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;

    axios
      .put(`/api/bands/${id}`, this.state, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push(`/bands/${id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return <BandForm
      data={ this.state }
      handleChange={ this.handleChange }
      handleSubmit={ this.handleSubmit }
      errors={ this.state.errors }
    />;
  }

}

export default BandsEdit;
