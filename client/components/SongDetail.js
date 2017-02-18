import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import fetchSong from '../queries/fetchSong'
import LyricCreate from './LyricCreate'

class SongDetail extends Component {

  componentDidMount() {
    const id = this.props.params.id;

  }


  render () {
    if (this.props.data.loading) {
      return <div>Loading</div>
    }
    const { id, title } = this.props.data.song
    return (
      <div>
      <Link to='/'>Back</Link>
        <h3>SongDetail</h3>
        {title}
        <LyricCreate/>
      </div>
    )
  }
}



export default graphql(fetchSong, {
  options: (props)=> { return { variables: { id: props.params.id} }}}
)(SongDetail)