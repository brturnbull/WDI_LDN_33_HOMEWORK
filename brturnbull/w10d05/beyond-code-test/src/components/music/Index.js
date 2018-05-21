import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class MusicIndex extends React.Component {
  state = {
    videos: ''
  }
  componentDidMount(){
    axios
      .get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
      .then(res => {
        const filteredData = res.data.items.filter(item => {
          return item.snippet.thumbnails;
        });
        this.setState({ videos: filteredData }, () => console.log(this.state.videos));
      });
  }

  render(){

    return(
      <div className="index-wrapper">
        <div className="section">
          <div className="container">
            <div className="index columns is-multiline is-mobile">
              {this.state.videos && this.state.videos.map(item =>
                <div className="column is-4-desktop is-4-tablet is-6-mobile" key={item.contentDetails.videoId}>
                  <div className="image-title">
                    <Link to={{
                      pathname: `/music/${item.contentDetails.videoId}`,
                      state: item
                    }}>
                      <img
                        src={item.snippet.thumbnails.high.url} />
                      <div className="title">
                        <h1>{item.snippet.title}</h1>
                        <img src="/assets/play_button.svg" />
                      </div>
                    </Link>
                  </div>
                  <div className="text">
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MusicIndex;
