import React, {Component} from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: ''}
  }

  onSubmit(event) {
    event.preventDefault();

  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label htmlFor=''>Add a Lyric</label>
        <input type='text' 
          onChange={event=> this.setState({ content: event.target.value})}
          value= {this.state.content}
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($songId: ID!, $content: String){
    addLyricToSong(songId: $songId, content: $content) {
      title
      lyrics {
        content
      }
    }
  }
`

export default LyricCreate