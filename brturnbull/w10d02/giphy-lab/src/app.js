import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/Search';

class App extends React.Component {

  state ={
    gifs: [],
    newSearch: ''
  }

  componentDidMount() {
    axios
      .get('https://api.giphy.com/v1/gifs/trending?q=&api_key=iVsmQPxoGpmdXL52lT1dOO66lKfom1Wp')
      .then(res => this.setState( { gifs: res.data.data } ));
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value }, () =>
      console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .get(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=iVsmQPxoGpmdXL52lT1dOO66lKfom1Wp&limit=5`)
      .then(res => this.setState({ gifs: res.data.data }));
  }

  render() {

    return (
      <main>
        <h1>Gif Me</h1>
        <Search
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.state.gifs.map(gif =>
          <img key={gif.id} src={gif.images.fixed_width.url}/>
        )}
      </main>
    );
  }

}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
