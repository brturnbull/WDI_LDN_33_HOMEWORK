import React from 'react';
import { Link } from 'react-router-dom';


const MusicShow = ({ location: { state } }) => {
  const date = new Date(state.snippet.publishedAt);
  console.log(date);
  return(
    <div className="show-wrapper">
      <div className="section">
        <div className="container">
          <div className="show columns is-mobile is-multiline">
            <iframe
              className="column is-8-desktop is-12-mobile"
              src={`https://www.youtube.com/embed/${state.contentDetails.videoId}`}
            />
            <div className="words column is-4-desktop is-12-mobile">
              <article>
                <h1>{state.snippet.title}</h1>
                <h2>Published on {date.toDateString()}</h2>
                <p>{state.snippet.description}</p>
                <Link to='/'>
                  <div className="back">
                    <img src='/assets/back_arrow.svg' />
                    <span>Back to list</span>
                  </div>
                </Link>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicShow;
