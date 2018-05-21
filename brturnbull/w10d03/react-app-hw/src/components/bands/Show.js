import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

// creating a new classical component
class BandsShow extends React.Component {

  state = {
    band: null
  }

  componentDidMount () {
    console.log(this.props);
    axios.get(`/api/bands/${this.props.match.params.id}`)
      .then(res => this.setState({ band: res.data }));
  }

  handleDelete = () => {
    axios
      .delete(`/api/bands/${this.props.match.params.id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/bands'));
  }

  render() {
    const { band } = this.state;
    if(!this.state.band) return null;
    return (
      <div className="columns">
        <div className="column">
          <div className="hero-image" style={{ backgroundImage: `url(${band.image})` }} />
        </div>
        <div className="column">
          <h1 className="title is-1">{band.name}</h1>
          <h4 className="subtitle is-10">Formed {band.yearFormed}</h4>
          <h4 className="subtitle is-5">{band.genre}</h4>
          <Link to={`/bands/${band._id}/edit`}
            className="button"
          >Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete} >Delete</button>
        </div>
      </div>
    );
  }
}

export default BandsShow;
