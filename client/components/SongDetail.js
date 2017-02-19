import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {

  componentDidMount() {
    const id = this.props.params.id;

  }


  render () {
    const { song } = this.props.data
    if (!song) {
      return <div>Loading</div>
    }
    const { id, title, lyrics } = song
    console.log('lyrics', lyrics)
    return (
      <div>
      <Link to='/'>Back</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics}/>
        <LyricCreate songId={this.props.params.id}/>
      </div>
    )
  }
}



export default graphql(fetchSong, {
  options: (props)=> { return { variables: { id: props.params.id} }}}
)(SongDetail)