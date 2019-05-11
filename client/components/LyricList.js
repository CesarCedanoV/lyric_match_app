import React from 'react';

class LyricList extends React.Component{

  renderLyrics() {
    return this.props.lyrics.map( ({id, content}) => {
      return (
        <li key={id} className="collection-item">
          {content}
        </li>
      );
    });
  }
  render(){
    return(
      <lu className="collection">
        {this.renderLyrics()}
      </lu>
    );
  }
}

export default LyricList;