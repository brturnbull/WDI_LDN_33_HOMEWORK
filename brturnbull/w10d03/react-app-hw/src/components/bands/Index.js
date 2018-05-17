import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

class BandsIndex extends React.Component {

  state = {
    bands: []
  }

  componentDidMount() {
    axios.get('/api/bands')
      .then(res => this.setState({ bands: res.data }));
  }

  render() {
    return (

      <div>
        <h1>Bands Index</h1>
        <ul>
          {this.state.bands.map(band =>
            <li key={band._id}>
              <Link to={`/bands/${band._id}`}>{band.name}</Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default BandsIndex;
