import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends React.Component{

  onLike(id) {
    this.props.mutate({ variables: { id }});
  }

  renderLyrics() {
    return this.props.lyrics.map( ({id, content, likes}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="right">
            {likes > 0 ? `${likes} x ` : ''}
            <i 
              className="material-icons"
              onClick={ () => this.onLike(id)}
            >thumb_up</i>       
          </div>
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

const mutation = gql`
mutation LikeLyric($id: ID){
  likeLyric(id: $id){
    id
    content
    likes
  }
}
`;

export default graphql(mutation)(LyricList);