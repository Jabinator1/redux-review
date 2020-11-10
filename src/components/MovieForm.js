import React, { Component } from 'react'
import styles from './styles'
import {connect} from 'react-redux'
import {setMovieInfo} from '../redux/moviesReducer'

class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      rating: null,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {title, poster, rating} = this.state

    this.props.setMovieInfo({title, poster, rating})
    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.containerHeading}>INPUT DETAILS</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.formInput}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="poster"
            placeholder="Poster URL"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="rating"
            placeholder="Rating"
            onChange={this.handleChange}
            type="number"
            max={10}
            min={0}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}

//# connect takes in two arguments, a function and an object
//# if you need redux state on this component, you need the function mapStateToProps
//# If you want to change redux state on this component, you need the object mapDispatchToProps

export default connect(null, {setMovieInfo})(MovieForm)
