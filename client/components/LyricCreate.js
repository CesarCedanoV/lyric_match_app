import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends React.Component{
  constructor(props) {
    super(props)
    this.state = { content: ''};
  }

  onSubmit(event){
    event.preventDefault();

    this.props.mutate({
      variables: {
        content: this.state.content,
        songId: this.props.songId
      }
    }).then(() => this.setState({ content: '' }));
  }

  render(){
    return(
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input 
          value={this.state.content}
          onChange={event => this.setState({content:event.target.value})}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($songId: ID, $content: String){
    addLyricToSong(songId:$songId, content: $content){
      title
      lyrics{
        content
      }
    }
  }
`


export default graphql(mutation)(LyricCreate);