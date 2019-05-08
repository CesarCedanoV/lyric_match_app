import gql from 'graphql-tag';

export default gql`
  query SongById($id: ID!){
    song(id:$id){
      id
      title
    }
  }
`;