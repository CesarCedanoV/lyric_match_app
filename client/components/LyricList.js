import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricList extends React.Component{

  onLike(id, likes) {
    this.props.mutate({ 
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric:{
          id: id,
          __typename:'LyricType',
          likes: likes + 1
        }
      }
    });
  }

  renderLyrics() {
    return this.props.lyrics.map( ({id, content, likes}) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            {likes > 0 ? `${likes} x ` : ''}
            <i 
              className="material-icons"
              onClick={ () => this.onLike(id, likes)}
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